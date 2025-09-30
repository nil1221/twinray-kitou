"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Torii } from "@/components/torii-icon"
import { Sparkles, Heart, Shield, TrendingUp } from 'lucide-react'
import { SiteFooter } from "@/components/site-footer"

export default function PrayerResultPage() {
  const [prayerResult, setPrayerResult] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrayerResult = async () => {
      const urlParams = new URLSearchParams(window.location.search)
      const sessionId = urlParams.get("session_id")

      if (!sessionId) {
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/prayer-result?session_id=${sessionId}`)
        const data = await response.json()

        if (data.success) {
          setPrayerResult(data.result)
        }
      } catch (error) {
        console.error("御祈祷結果の取得に失敗しました:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPrayerResult()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-amber-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <div className="animate-spin rounded-full h-16 w-16 md:h-20 md:w-20 border-b-2 border-amber-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl">御祈祷結果を取得中...</p>
        </div>
      </div>
    )
  }

  if (!prayerResult) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-amber-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">御祈祷結果が見つかりません</h1>
          <Button onClick={() => (window.location.href = "/")} className="shrine-gold-gradient">
            ホームに戻る
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-amber-900">
      {/* ヘッダー */}
      <header className="shrine-gradient text-white py-6 md:py-8 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
              <Torii className="w-6 h-6 md:w-8 md:h-8" />
              <h1 className="text-3xl md:text-5xl font-bold luxury-text text-balance">御祈祷完了</h1>
              <Torii className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <p className="text-amber-100 text-lg md:text-2xl text-pretty">心を込めた御祈祷が完了いたしました</p>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* 鑑定書 */}
          <Card className="saisen-shadow wa-border bg-gradient-to-b from-red-50 via-amber-50 to-yellow-50 mb-8 md:mb-12">
            <CardHeader className="shrine-gradient text-white text-center pb-6 md:pb-8">
              <CardTitle className="text-2xl md:text-4xl luxury-text mb-2 md:mb-3 text-balance">御祈祷鑑定書</CardTitle>
              <p className="text-amber-100 text-sm md:text-base">
                {new Date().toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </CardHeader>

            <CardContent className="p-6 md:p-8 space-y-6 md:space-y-8">
              {/* 御祈祷文 */}
              <div className="border-b-2 border-red-200 pb-6 md:pb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-red-900 text-balance">御祈祷文</h3>
                </div>
                <div className="bg-white/50 rounded-lg p-4 md:p-6 border-2 border-red-200">
                  <div className="text-red-800 leading-relaxed whitespace-pre-line text-center text-base md:text-lg text-pretty">
                    {prayerResult.prayerText}
                  </div>
                </div>
              </div>

              {/* 守護霊からのメッセージ */}
              <div className="border-b-2 border-red-200 pb-6 md:pb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-rose-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-red-900 text-balance">守護霊からのメッセージ</h3>
                </div>
                <div className="bg-white/50 rounded-lg p-4 md:p-6 border-2 border-red-200">
                  <div className="text-red-800 leading-relaxed whitespace-pre-line text-center text-base md:text-lg text-pretty">
                    {prayerResult.guardianMessage}
                  </div>
                </div>
              </div>

              {/* 今後の行動指針 */}
              <div className="border-b-2 border-red-200 pb-6 md:pb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-red-900 text-balance">今後の行動指針</h3>
                </div>
                <div className="bg-white/50 rounded-lg p-4 md:p-6 border-2 border-red-200">
                  <div className="text-red-800 leading-relaxed whitespace-pre-line text-center text-base md:text-lg text-pretty">
                    {prayerResult.actionGuidance}
                  </div>
                </div>
              </div>

              {/* 特別な守護 */}
              <div>
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-red-900 text-balance">特別な守護</h3>
                </div>
                <div className="bg-white/50 rounded-lg p-4 md:p-6 border-2 border-red-200">
                  <div className="text-red-800 leading-relaxed whitespace-pre-line text-center text-base md:text-lg text-pretty">
                    {prayerResult.specialProtection}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* アクションボタン */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 md:mb-12">
            <Button
              onClick={() => (window.location.href = "/prayer-types")}
              size="lg"
              className="w-full sm:w-auto shrine-gold-gradient hover:scale-110 transition-all duration-500 text-red-900 px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl font-bold shadow-2xl border-4 border-red-700 rounded-xl divine-glow"
            >
              新しい御祈祷を受ける
            </Button>

            <Button
              onClick={() => window.open("https://lin.ee/FsxTvpY", "_blank")}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/90 hover:bg-white text-red-900 border-4 border-red-700 hover:scale-110 transition-all duration-500 px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl font-bold shadow-2xl rounded-xl"
            >
              公式LINEで詳しく相談する
            </Button>
          </div>

          {/* 注意事項 */}
          <div className="text-center">
            <div className="wood-texture backdrop-blur-sm rounded-lg p-6 md:p-8 saisen-shadow wa-border">
              <h3 className="text-lg md:text-2xl font-bold text-red-900 mb-3 md:mb-4">
                (御祈祷・御祈願・御祈念)占いで掲載している情報について
              </h3>
              <p className="text-sm md:text-base text-red-800 leading-relaxed text-pretty">
                (御祈祷・御祈願・御祈念)占いサービスは娯楽を目的としたものであり、占いの結果および占いに伴う施術行為について、その効果、信頼性、正確性、完全性、有効性、特定の目的への適合性、実現性等を当社が保証するものではありません。
                サービスの結果をどのように利用するかは、お客様ご自身の自己責任において判断をお願いいたします。
                占いの結果およびその内容を踏まえておこなったお客様の行動により生ずる一切の損害について、当社および情報の提供者は一切責任を負いかねます。
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}