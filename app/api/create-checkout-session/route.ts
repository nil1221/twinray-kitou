import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { amount, prayerType } = await request.json()

    if (!amount || typeof amount !== "number") {
      return NextResponse.json({ error: "無効な金額です" }, { status: 400 })
    }

    // 環境変数チェック
    if (!process.env.STRIPE_SECRET_KEY) {
      console.log("[v0] STRIPE_SECRET_KEY not found, using demo mode")
      // デモ環境では即座に成功として扱う
      const demoSessionId = `demo_session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      // 修正: デモモードでもamountとtypeパラメータを追加
      const successUrl = `/prayer-result?session_id=${demoSessionId}&amount=${amount}&type=${encodeURIComponent(prayerType)}`

      return NextResponse.json({
        url: successUrl,
        demo: true,
        message: "デモモードで動作中です",
      })
    }

    // 実際のStripe処理
    const Stripe = require("stripe")
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-06-20",
    })

    // 御祈祷タイプの日本語名を取得
    const prayerNames: { [key: string]: string } = {
      twinray: "ツインレイ統合成就",
      reunion: "復縁成就",
      "unrequited-love": "片思い成就",
      "forbidden-love": "浮気・不倫成就",
      "long-distance": "遠距離恋愛成就",
      "age-gap": "年の差恋愛成就",
      "good-match": "良縁結び祈願",
      marriage: "結婚成就祈願",
      "love-general": "恋愛成就総合祈願",
      "love-obstacles": "恋愛障害突破祈願",
      "family-harmony": "家庭円満祈願",
      "work-success": "仕事成就祈願",
      "wish-fulfillment": "心願成就祈願",
      purification: "厄除け・浄化祈願",
      "self-love": "自己愛・魅力開花祈願",
      relationships: "人間関係円満祈願",
      "money-luck": "金運上昇祈願",
      health: "健康長寿祈願",
      study: "学業成就祈願",
      "general-luck": "開運総合祈願",
    }

    const prayerName = prayerNames[prayerType] || "御祈祷"

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "jpy",
            product_data: {
              name: `${prayerName} 御祈祷`,
              description: `初穂料 ¥${amount.toLocaleString()}`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      // 修正: success_urlにamountとtypeパラメータを追加
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/prayer-result?session_id={CHECKOUT_SESSION_ID}&amount=${amount}&type=${encodeURIComponent(prayerType)}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/prayer-detail/${prayerType}`,
      metadata: {
        amount: amount.toString(),
        prayerType: prayerType,
      },
    })

    return NextResponse.json({
      url: session.url,
      sessionId: session.id,
    })
  } catch (error) {
    console.error("Stripe session creation error:", error)
    return NextResponse.json({ error: "決済セッションの作成に失敗しました" }, { status: 500 })
  }
}