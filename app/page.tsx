"use client"

import { Button } from "@/components/ui/button"
import { Torii } from "@/components/torii-icon"
import { PrayerQA } from "@/components/prayer-qa"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  const handlePrayerStart = () => {
    window.location.href = "/prayer-types"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-amber-900 flex flex-col">
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 blur-3xl divine-glow"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-red-600 to-red-800 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 blur-3xl opacity-30 divine-glow"></div>
          <div className="absolute top-10 right-1/3 w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 to-red-600 blur-2xl"></div>
          <div className="absolute bottom-10 left-1/3 w-36 h-36 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 blur-2xl divine-glow"></div>
        </div>

        <div className="text-center z-10 px-4 md:px-8 max-w-4xl mx-auto">
          {/* 神社のタイトル */}
          <div className="mb-8 md:mb-16">
            <div className="flex items-center justify-center gap-3 md:gap-6 mb-6 md:mb-8">
              <Torii className="w-10 h-10 md:w-16 md:h-16 text-amber-400 divine-glow" />
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-balance divine-glow">
                ツインレイ
                <br />
                御祈祷
              </h1>
              <Torii className="w-10 h-10 md:w-16 md:h-16 text-amber-400 divine-glow" />
            </div>
            <p className="text-xl md:text-3xl lg:text-4xl text-amber-100 font-light text-pretty mb-3 md:mb-4">
              心を込めた御祈祷で、あなたの願いを天に届けます
            </p>
            <p className="text-base md:text-xl text-amber-200 text-pretty max-w-2xl mx-auto">
              古来より受け継がれる神聖な御祈祷により、守護霊からの特別なメッセージをお授けいたします
            </p>
          </div>

          <div className="relative mb-8 md:mb-16">
            <div className="wood-texture saisen-shadow rounded-2xl p-8 md:p-16 lg:p-20 max-w-2xl mx-auto wa-border">
              <div className="text-center">
                <div className="mb-8 md:mb-12">
                  <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-red-900 mb-4 md:mb-6 text-balance">御祈祷受付</div>
                  <p className="text-base md:text-xl text-red-800 text-pretty leading-relaxed">
                    お気持ちをお納めいただき
                    <br />
                    心を込めて御祈祷いたします
                    <br />
                    <span className="text-amber-800 font-semibold">様々な願いに対応した御祈祷をご用意しております</span>
                  </p>
                </div>

                <Button
                  onClick={handlePrayerStart}
                  size="lg"
                  className="shrine-gold-gradient hover:scale-110 transition-all duration-500 text-red-900 px-8 py-4 md:px-16 md:py-8 text-xl md:text-3xl font-bold shadow-2xl border-4 border-red-700 rounded-xl divine-glow hover:divine-glow w-full sm:w-auto"
                >
                  御祈祷する
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="wood-texture saisen-shadow rounded-xl p-6 md:p-10 wa-border hover:scale-105 transition-all duration-300">
              <h3 className="text-xl md:text-3xl font-bold text-red-900 mb-4 md:mb-6 text-center">20種類の御祈祷</h3>
              <p className="text-base md:text-lg text-red-800 leading-6 md:leading-7 text-pretty text-center">
                恋愛成就から仕事運向上まで、様々な願いに対応した専門的な御祈祷をご用意
              </p>
            </div>

            <div className="wood-texture saisen-shadow rounded-xl p-6 md:p-10 wa-border hover:scale-105 transition-all duration-300">
              <h3 className="text-xl md:text-3xl font-bold text-red-900 mb-4 md:mb-6 text-center leading-tight">
                あなた専用の特別なメッセージをお届け
              </h3>
              <p className="text-base md:text-lg text-red-800 leading-6 md:leading-7 text-pretty text-center">
                御祈祷完了後、あなただけの特別なメッセージをお届けいたします
              </p>
            </div>

            <div className="wood-texture saisen-shadow rounded-xl p-6 md:p-10 wa-border hover:scale-105 transition-all duration-300">
              <h3 className="text-xl md:text-3xl font-bold text-red-900 mb-4 md:mb-6 text-center">選べる初穂料</h3>
              <p className="text-base md:text-lg text-red-800 leading-6 md:leading-7 text-pretty text-center">
                100円からお気持ちに応じた初穂料をお選びいただけます
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-16 text-center">
            <div className="wood-texture backdrop-blur-sm rounded-lg p-6 md:p-8 max-w-4xl mx-auto saisen-shadow wa-border">
              <h3 className="text-lg md:text-2xl font-bold text-red-900 mb-3 md:mb-4">
                （御祈祷・御祈願・御祈念）占いで掲載している情報について
              </h3>
              <p className="text-sm md:text-base text-red-800 leading-relaxed text-pretty">
                （御祈祷・御祈願・御祈念）占いサービスは娯楽を目的としたものであり、占いの結果および占いに伴う施術行為について、その効果、信頼性、正確性、完全性、有効性、特定の目的への適合性、実現性等を当社が保証するものではありません。
                サービスの結果をどのように利用するかは、お客様ご自身の自己責任において判断をお願いいたします。
                占いの結果およびその内容を踏まえておこなったお客様の行動により生ずる一切の損害について、当社および情報の提供者は一切責任を負いかねます。
              </p>
            </div>
          </div>

          <PrayerQA />
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}