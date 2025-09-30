import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get("session_id")
    const amount = searchParams.get("amount")
    const type = searchParams.get("type")

    // デバッグログ追加
    console.log("[v0] Verify payment params:", { sessionId, amount, type })

    if (!sessionId) {
      console.log("[v0] No session ID provided")
      return NextResponse.json({ error: "セッションIDが見つかりません" }, { status: 400 })
    }

    // デモモードの場合（セッションIDがdemo_で始まる場合）
    if (sessionId.startsWith("demo_")) {
      console.log("[v0] Demo mode: Payment verification bypassed")
      // URLパラメータから情報を取得
      const demoAmount = amount || "100"
      const demoPrayerType = type || "basic"

      console.log("[v0] Demo mode response:", { demoAmount, demoPrayerType })

      return NextResponse.json({
        success: true,
        amount: demoAmount,
        prayerType: demoPrayerType,
        demo: true,
      })
    }

    // 実際のStripe処理
    if (!process.env.STRIPE_SECRET_KEY) {
      console.log("[v0] STRIPE_SECRET_KEY not found")
      return NextResponse.json({ error: "Stripe設定が見つかりません" }, { status: 500 })
    }

    console.log("[v0] Retrieving Stripe session:", sessionId)

    const Stripe = require("stripe")
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-06-20",
    })

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    console.log("[v0] Stripe session retrieved:", {
      payment_status: session.payment_status,
      metadata: session.metadata,
    })

    if (session.payment_status === "paid") {
      const responseData = {
        success: true,
        amount: session.metadata?.amount || amount,
        prayerType: session.metadata?.prayerType || type,
        sessionId: sessionId,
      }

      console.log("[v0] Payment verified successfully:", responseData)

      return NextResponse.json(responseData)
    } else {
      console.log("[v0] Payment not completed:", session.payment_status)
      return NextResponse.json({ error: "決済が完了していません" }, { status: 400 })
    }
  } catch (error) {
    console.error("[v0] Payment verification error:", error)
    return NextResponse.json({ error: "決済の確認に失敗しました" }, { status: 500 })
  }
}