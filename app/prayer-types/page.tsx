"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Torii } from "@/components/torii-icon"
import {
  ArrowLeft,
  Heart,
  Briefcase,
  Home,
  Sparkles,
  Shield,
  Users,
  DollarSign,
  GraduationCap,
  TrendingUp,
} from "lucide-react"

import { PrayerQA } from "@/components/prayer-qa"
import { SiteFooter } from "@/components/site-footer"

const prayerTypes = [
  {
    id: "twinray",
    title: "ツインレイ統合成就",
    description:
      "魂の片割れであるツインレイとの統合を後押しするご祈祷です。サイレント期間の試練を乗り越え、魂の絆を深め、統合の道へと導きます。",
    category: "恋愛系",
    icon: Heart,
    color: "from-pink-600 to-rose-700",
  },
  {
    id: "reunion",
    title: "復縁成就",
    description:
      "大切な人とのご縁を再び結び直すご祈祷です。誤解やすれ違いを癒し、再び心が寄り添えるよう導いていきます。",
    category: "恋愛系",
    icon: Heart,
    color: "from-red-600 to-pink-600",
  },
  {
    id: "unrequited-love",
    title: "片思い成就",
    description:
      "想い続ける人とのご縁を近づけるためのご祈祷です。相手の心にあなたの存在が温かく響き、自然と距離が縮まるようお力添えいたします。",
    category: "恋愛系",
    icon: Heart,
    color: "from-rose-600 to-red-600",
  },
  {
    id: "forbidden-love",
    title: "浮気・不倫成就",
    description:
      "禁断の愛や複雑なご縁を成就へと導くご祈祷です。障害を乗り越える勇気と、真実の愛を貫く強さをサポートいたします。",
    category: "恋愛系",
    icon: Heart,
    color: "from-purple-600 to-pink-600",
  },
  {
    id: "long-distance",
    title: "遠距離恋愛成就",
    description:
      "離れていても心は一つ。距離による不安を癒し、絆を強めるためのご祈祷です。再会のタイミングやご縁を整え、愛を深めるサポートをいたします。",
    category: "恋愛系",
    icon: Heart,
    color: "from-blue-600 to-purple-600",
  },
  {
    id: "age-gap",
    title: "年の差恋愛成就",
    description:
      "年齢差による不安や周囲の目を和らげ、安心して愛を育むご祈祷です。お互いの心が対等に結ばれ、自然体でいられるご縁をお守りいたします。",
    category: "恋愛系",
    icon: Heart,
    color: "from-indigo-600 to-blue-600",
  },
  {
    id: "good-match",
    title: "良縁結び祈願",
    description:
      "まだ出会っていない運命の相手とのご縁を引き寄せるご祈祷です。理想の出会いや、心から安心できるご縁を結ぶサポートをいたします。",
    category: "恋愛系",
    icon: Heart,
    color: "from-emerald-600 to-teal-600",
  },
  {
    id: "marriage",
    title: "結婚成就祈願",
    description:
      "愛する人との結婚を現実へと進めるためのご祈祷です。縁談やタイミングを整え、家庭を築く流れへと導きます。",
    category: "恋愛系",
    icon: Heart,
    color: "from-amber-600 to-orange-600",
  },
  {
    id: "love-general",
    title: "恋愛成就総合祈願",
    description:
      "片思い・両想い・復縁・結婚など、恋愛全般の願いを後押しする万能祈願です。恋愛の流れをスムーズに整えていきます。",
    category: "恋愛系",
    icon: Heart,
    color: "from-red-600 to-rose-600",
  },
  {
    id: "love-obstacles",
    title: "恋愛障害突破祈願",
    description:
      "立場や環境の壁を乗り越えるためのご祈祷です。周囲の障害や不安を和らげ、二人が自然に結ばれるよう導きます。",
    category: "恋愛系",
    icon: Heart,
    color: "from-violet-600 to-purple-600",
  },
  {
    id: "family-harmony",
    title: "家庭円満祈願",
    description:
      "夫婦関係や家族との絆を深め、安心できる家庭を築くためのご祈祷です。心のすれ違いや不和を癒し、温かい関係へと導きます。",
    category: "その他",
    icon: Home,
    color: "from-green-600 to-emerald-600",
  },
  {
    id: "work-success",
    title: "仕事成就祈願",
    description:
      "転職・昇進・人間関係など、仕事にまつわる不安を和らげ、チャンスを引き寄せるご祈祷です。努力が実りやすくなるように導きます。",
    category: "その他",
    icon: Briefcase,
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: "wish-fulfillment",
    title: "心願成就祈願",
    description:
      "叶えたい夢や願いを全般的に後押しする万能祈願です。強く願う心を浄化し、現実へと引き寄せる力を高めます。",
    category: "その他",
    icon: Sparkles,
    color: "from-purple-600 to-violet-600",
  },
  {
    id: "purification",
    title: "厄除け・浄化祈願",
    description:
      "心身にまとわりつく不安や人間関係の悪縁を払い、穏やかなエネルギーを取り戻すご祈祷です。運気の流れを整えたいときにおすすめです。",
    category: "その他",
    icon: Shield,
    color: "from-slate-600 to-gray-600",
  },
  {
    id: "self-love",
    title: "自己愛・魅力開花祈願",
    description:
      "自分をもっと大切にし、内面・外見の魅力を輝かせるご祈祷です。恋愛・人間関係・仕事にも良い影響をもたらします。",
    category: "その他",
    icon: Sparkles,
    color: "from-pink-600 to-rose-600",
  },
  {
    id: "relationships",
    title: "人間関係円満祈願",
    description: "友人・同僚・ご近所など、人付き合いでの摩擦や誤解を解き、自然に笑顔で過ごせるように整えるご祈祷です。",
    category: "その他",
    icon: Users,
    color: "from-teal-600 to-cyan-600",
  },
  {
    id: "money-luck",
    title: "金運上昇祈願",
    description: "収入の安定や仕事での実りを引き寄せるご祈祷です。臨時収入や経済的な安心を得たいときにおすすめです。",
    category: "その他",
    icon: DollarSign,
    color: "from-yellow-600 to-amber-600",
  },
  {
    id: "health",
    title: "健康長寿祈願",
    description:
      "心身の健康を守り、健やかな日々を過ごせるように整えるご祈祷です。病気平癒や体調回復のサポートにもつながります。",
    category: "その他",
    icon: Shield,
    color: "from-green-600 to-teal-600",
  },
  {
    id: "study",
    title: "学業成就祈願",
    description: "試験や資格取得などに向けて集中力や努力を高めるご祈祷です。学びのご縁を整え、合格へと導きます。",
    category: "その他",
    icon: GraduationCap,
    color: "from-indigo-600 to-blue-600",
  },
  {
    id: "general-luck",
    title: "開運総合祈願",
    description:
      "運気全般を底上げする万能のご祈祷です。恋愛・仕事・健康・人間関係など、あらゆる分野での流れを良い方向へと整えます。",
    category: "その他",
    icon: TrendingUp,
    color: "from-orange-600 to-red-600",
  },
]

export default function PrayerTypesPage() {
  const handlePrayerSelect = (prayerId: string) => {
    window.location.href = `/prayer-detail/${prayerId}`
  }

  const handleBackToHome = () => {
    window.location.href = "/"
  }

  const loveTypes = prayerTypes.filter((type) => type.category === "恋愛系")
  const otherTypes = prayerTypes.filter((type) => type.category === "その他")

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-amber-900">
      {/* ヘッダー */}
      <header className="shrine-gradient text-white py-8 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={handleBackToHome}
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-red-800 transition-all duration-300 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              戻る
            </Button>

            <div className="flex items-center gap-3">
              <Torii className="w-8 h-8" />
              <h1 className="text-4xl font-bold text-balance">ツインレイ御祈祷</h1>
              <Torii className="w-8 h-8" />
            </div>

            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-amber-300 mb-6 text-balance">御祈祷の種類をお選びください</h2>
          <p className="text-xl text-amber-100 max-w-4xl mx-auto text-pretty leading-relaxed">
            あなたの願いに最も適した御祈祷をお選びください。
            それぞれの御祈祷には、専門的な祈願文と守護霊からの特別なメッセージが込められています。
          </p>
        </div>

        {/* 恋愛系御祈祷 */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-rose-300 mb-4 flex items-center justify-center gap-3">
              <Heart className="w-8 h-8" />
              恋愛系御祈祷
              <Heart className="w-8 h-8" />
            </h3>
            <p className="text-amber-200 text-lg">愛と縁結びに関する専門的な御祈祷</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {loveTypes.map((prayer) => {
              const IconComponent = prayer.icon
              return (
                <Card
                  key={prayer.id}
                  className="relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer border-3 saisen-shadow border-rose-600 hover:border-rose-400 bg-gradient-to-b from-rose-50 to-pink-100"
                  onClick={() => handlePrayerSelect(prayer.id)}
                >
                  <CardHeader className={`bg-gradient-to-br ${prayer.color} text-white pb-4`}>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="w-6 h-6" />
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {prayer.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-balance">{prayer.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="pt-6 bg-gradient-to-b from-rose-50 to-pink-100">
                    <CardDescription className="text-stone-700 text-pretty leading-relaxed">
                      {prayer.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* その他の御祈祷 */}
        <section>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-amber-300 mb-4 flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8" />
              その他の御祈祷
              <Sparkles className="w-8 h-8" />
            </h3>
            <p className="text-amber-200 text-lg">人生全般の願いを叶える多様な御祈祷</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {otherTypes.map((prayer) => {
              const IconComponent = prayer.icon
              return (
                <Card
                  key={prayer.id}
                  className="relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer border-3 saisen-shadow border-amber-600 hover:border-amber-400 bg-gradient-to-b from-amber-50 to-yellow-100"
                  onClick={() => handlePrayerSelect(prayer.id)}
                >
                  <CardHeader className={`bg-gradient-to-br ${prayer.color} text-white pb-4`}>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="w-6 h-6" />
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {prayer.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-balance">{prayer.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="pt-6 bg-gradient-to-b from-amber-50 to-yellow-100">
                    <CardDescription className="text-stone-700 text-pretty leading-relaxed">
                      {prayer.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* フッター情報 */}
        <div className="mt-16 text-center">
          <div className="wood-texture backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto saisen-shadow wa-border">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              (御祈祷・御祈願・御祈念)占いで掲載している情報について
            </h3>
            <p className="text-red-800 leading-relaxed text-pretty">
              (御祈祷・御祈願・御祈念)占いサービスは娯楽を目的としたものであり、占いの結果および占いに伴う施術行為について、その効果、信頼性、正確性、完全性、有効性、特定の目的への適合性、実現性等を当社が保証するものではありません。
              サービスの結果をどのように利用するかは、お客様ご自身の自己責任において判断をお願いいたします。
              占いの結果およびその内容を踏まえておこなったお客様の行動により生ずる一切の損害について、当社および情報の提供者は一切責任を負いかねます。
            </p>
          </div>
        </div>

        <PrayerQA />
      </main>

      <SiteFooter />
    </div>
  )
}
