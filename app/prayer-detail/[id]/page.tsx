"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Torii } from "@/components/torii-icon"
import { ArrowLeft, Heart, Star, Crown, Gem, Briefcase, Home, Sparkles, Shield, Users, DollarSign, GraduationCap, TrendingUp } from 'lucide-react'

import { PrayerQA } from "@/components/prayer-qa"
import { SiteFooter } from "@/components/site-footer"

const prayerTypes = {
  twinray: {
    title: "ツインレイ統合成就",
    description:
      "魂の片割れであるツインレイとの統合を後押しするご祈祷です。サイレント期間の試練を乗り越え、魂の絆を深め、統合の道へと導きます。",
    category: "恋愛系",
    icon: Heart,
    color: "from-pink-600 to-rose-700",
    detailedDescription:
      "ツインレイとの出会いは魂の成長において最も重要な体験の一つです。このご祈祷では、サイレント期間の辛さを乗り越え、お互いの魂が真に統合されるよう、宇宙の愛のエネルギーを通じて導きます。ランナーとチェイサーの役割を超越し、無条件の愛で結ばれる道筋を整えます。",
  },
  reunion: {
    title: "復縁成就",
    description:
      "大切な人とのご縁を再び結び直すご祈祷です。誤解やすれ違いを癒し、再び心が寄り添えるよう導いていきます。",
    category: "恋愛系",
    icon: Heart,
    color: "from-red-600 to-pink-600",
    detailedDescription:
      "別れてしまった大切な人との絆を再び結び直すための特別な御祈祷です。過去の誤解や傷を癒し、お互いの心に愛と理解を取り戻します。時間が経過した関係でも、真実の愛があれば必ず道は開かれます。",
  },
  "unrequited-love": {
    title: "片思い成就",
    description:
      "想い続ける人とのご縁を近づけるためのご祈祷です。相手の心にあなたの存在が温かく響き、自然と距離が縮まるようお力添えいたします。",
    category: "恋愛系",
    icon: Heart,
    color: "from-rose-600 to-red-600",
    detailedDescription:
      "一方的な想いを抱く相手との距離を縮め、相手の心にあなたの存在を印象づけるための御祈祷です。無理に関係を進展させるのではなく、自然な流れで相手があなたに興味を持つよう、運命の糸を調整いたします。",
  },
  "forbidden-love": {
    title: "浮気・不倫成就",
    description:
      "禁断の愛や複雑なご縁を成就へと導くご祈祷です。障害を乗り越える勇気と、真実の愛を貫く強さをサポートいたします。",
    category: "恋愛系",
    icon: Heart,
    color: "from-purple-600 to-pink-600",
    detailedDescription:
      "社会的な制約や複雑な状況にある恋愛関係を、最善の形で成就させるための御祈祷です。関係者全員の幸せを考慮しながら、真実の愛が実を結ぶよう、慎重に運命を導いていきます。",
  },
  "long-distance": {
    title: "遠距離恋愛成就",
    description:
      "離れていても心は一つ。距離による不安を癒し、絆を強めるためのご祈祷です。再会のタイミングやご縁を整え、愛を深めるサポートをいたします。",
    category: "恋愛系",
    icon: Heart,
    color: "from-blue-600 to-purple-600",
    detailedDescription:
      "物理的な距離に負けない強い絆を築くための御祈祷です。お互いの心を繋ぎ、離れている時間も愛を育む貴重な期間となるよう導きます。再会の機会や将来への道筋も整えてまいります。",
  },
  "age-gap": {
    title: "年の差恋愛成就",
    description:
      "年齢差による不安や周囲の目を和らげ、安心して愛を育むご祈祷です。お互いの心が対等に結ばれ、自然体でいられるご縁をお守りいたします。",
    category: "恋愛系",
    icon: Heart,
    color: "from-indigo-600 to-blue-600",
    detailedDescription:
      "年齢の違いを超えた真実の愛を育むための御祈祷です。世代の違いから生まれる価値観の相違を調和させ、お互いを尊重し合える関係を築けるよう導きます。周囲の理解も得られるよう環境を整えます。",
  },
  "good-match": {
    title: "良縁結び祈願",
    description:
      "まだ出会っていない運命の相手とのご縁を引き寄せるご祈祷です。理想の出会いや、心から安心できるご縁を結ぶサポートをいたします。",
    category: "恋愛系",
    icon: Heart,
    color: "from-emerald-600 to-teal-600",
    detailedDescription:
      "あなたにとって最適なパートナーとの出会いを引き寄せる御祈祷です。表面的な条件だけでなく、魂のレベルで調和する相手との縁を結び、長く幸せな関係を築けるよう導きます。",
  },
  marriage: {
    title: "結婚成就祈願",
    description:
      "愛する人との結婚を現実へと進めるためのご祈祷です。縁談やタイミングを整え、家庭を築く流れへと導きます。",
    category: "恋愛系",
    icon: Heart,
    color: "from-amber-600 to-orange-600",
    detailedDescription:
      "交際中の相手との結婚を実現させるための御祈祷です。お互いの家族の理解を得て、結婚に向けた具体的な準備が順調に進むよう、あらゆる障害を取り除き、幸せな結婚生活への道筋を整えます。",
  },
  "love-general": {
    title: "恋愛成就総合祈願",
    description:
      "片思い・両想い・復縁・結婚など、恋愛全般の願いを後押しする万能祈願です。恋愛の流れをスムーズに整えていきます。",
    category: "恋愛系",
    icon: Heart,
    color: "from-red-600 to-rose-600",
    detailedDescription:
      "恋愛に関するあらゆる願いを包括的にサポートする御祈祷です。現在の恋愛状況を問わず、最も適切な形で愛が実を結ぶよう、運命の流れを調整し、恋愛運全体を向上させます。",
  },
  "love-obstacles": {
    title: "恋愛障害突破祈願",
    description:
      "立場や環境の壁を乗り越えるためのご祈祷です。周囲の障害や不安を和らげ、二人が自然に結ばれるよう導きます。",
    category: "恋愛系",
    icon: Heart,
    color: "from-violet-600 to-purple-600",
    detailedDescription:
      "恋愛を阻む様々な障害を取り除くための御祈祷です。家族の反対、職場の規則、社会的な制約など、愛を妨げる要因を和らげ、二人の愛が自然に受け入れられる環境を整えます。",
  },
  "family-harmony": {
    title: "家庭円満祈願",
    description:
      "夫婦関係や家族との絆を深め、安心できる家庭を築くためのご祈祷です。心のすれ違いや不和を癒し、温かい関係へと導きます。",
    category: "その他",
    icon: Home,
    color: "from-green-600 to-emerald-600",
    detailedDescription:
      "家族間の調和と理解を深めるための御祈祷です。夫婦間のコミュニケーション改善、親子関係の修復、家族全体の絆を強化し、愛に満ちた温かい家庭環境を築けるよう導きます。",
  },
  "work-success": {
    title: "仕事成就祈願",
    description:
      "転職・昇進・人間関係など、仕事にまつわる不安を和らげ、チャンスを引き寄せるご祈祷です。努力が実りやすくなるように導きます。",
    category: "その他",
    icon: Briefcase,
    color: "from-blue-600 to-indigo-600",
    detailedDescription:
      "職業生活における成功と満足を実現するための御祈祷です。適職との出会い、職場での人間関係改善、昇進や昇給の機会創出など、仕事に関するあらゆる願いを叶えるよう導きます。",
  },
  "wish-fulfillment": {
    title: "心願成就祈願",
    description:
      "叶えたい夢や願いを全般的に後押しする万能祈願です。強く願う心を浄化し、現実へと引き寄せる力を高めます。",
    category: "その他",
    icon: Sparkles,
    color: "from-purple-600 to-violet-600",
    detailedDescription:
      "あなたの心からの願いを現実化するための包括的な御祈祷です。願望実現に必要な内面的な準備を整え、宇宙の法則に従って願いが自然に叶う流れを作り出します。",
  },
  purification: {
    title: "厄除け・浄化祈願",
    description:
      "心身にまとわりつく不安や人間関係の悪縁を払い、穏やかなエネルギーを取り戻すご祈祷です。運気の流れを整えたいときにおすすめです。",
    category: "その他",
    icon: Shield,
    color: "from-slate-600 to-gray-600",
    detailedDescription:
      "ネガティブなエネルギーや悪い運気を浄化し、清らかな状態を取り戻すための御祈祷です。過去のトラウマ、人間関係のしがらみ、運気の停滞などを解消し、新しいスタートを切れるよう導きます。",
  },
  "self-love": {
    title: "自己愛・魅力開花祈願",
    description:
      "自分をもっと大切にし、内面・外見の魅力を輝かせるご祈祷です。恋愛・人間関係・仕事にも良い影響をもたらします。",
    category: "その他",
    icon: Sparkles,
    color: "from-pink-600 to-rose-600",
    detailedDescription:
      "自分自身を愛し、本来の魅力を最大限に引き出すための御祈祷です。自信の向上、内面の美しさの開花、オーラの輝きを高め、周囲から愛される存在になれるよう導きます。",
  },
  relationships: {
    title: "人間関係円満祈願",
    description: "友人・同僚・ご近所など、人付き合いでの摩擦や誤解を解き、自然に笑顔で過ごせるように整えるご祈祷です。",
    category: "その他",
    icon: Users,
    color: "from-teal-600 to-cyan-600",
    detailedDescription:
      "あらゆる人間関係を円滑にし、調和のとれた交流を実現するための御祈祷です。コミュニケーション能力の向上、相互理解の促進、信頼関係の構築をサポートし、豊かな人間関係を築けるよう導きます。",
  },
  "money-luck": {
    title: "金運上昇祈願",
    description: "収入の安定や仕事での実りを引き寄せるご祈祷です。臨時収入や経済的な安心を得たいときにおすすめです。",
    category: "その他",
    icon: DollarSign,
    color: "from-yellow-600 to-amber-600",
    detailedDescription:
      "経済的な豊かさと安定を実現するための御祈祷です。収入源の拡大、投資の成功、無駄遣いの抑制など、お金に関する総合的な運気を向上させ、経済的な不安から解放されるよう導きます。",
  },
  health: {
    title: "健康長寿祈願",
    description:
      "心身の健康を守り、健やかな日々を過ごせるように整えるご祈祷です。病気平癒や体調回復のサポートにもつながります。",
    category: "その他",
    icon: Shield,
    color: "from-green-600 to-teal-600",
    detailedDescription:
      "身体と心の健康を維持・向上させるための御祈祷です。免疫力の強化、ストレスの軽減、生活習慣の改善をサポートし、長く健康で充実した人生を送れるよう導きます。",
  },
  study: {
    title: "学業成就祈願",
    description: "試験や資格取得などに向けて集中力や努力を高めるご祈祷です。学びのご縁を整え、合格へと導きます。",
    category: "その他",
    icon: GraduationCap,
    color: "from-indigo-600 to-blue-600",
    detailedDescription:
      "学習能力の向上と学業での成功を実現するための御祈祷です。集中力の強化、記憶力の向上、試験での実力発揮をサポートし、目標とする学業成果を達成できるよう導きます。",
  },
  "general-luck": {
    title: "開運総合祈願",
    description:
      "運気全般を底上げする万能のご祈祷です。恋愛・仕事・健康・人間関係など、あらゆる分野での流れを良い方向へと整えます。",
    category: "その他",
    icon: TrendingUp,
    color: "from-orange-600 to-red-600",
    detailedDescription:
      "人生のあらゆる分野で運気を向上させる包括的な御祈祷です。恋愛運、仕事運、健康運、金運、人間関係運など、すべての運気をバランス良く高め、総合的な幸福を実現できるよう導きます。",
  },
}

const priceOptions = [
  {
    amount: 100,
    icon: Star,
    color: "from-blue-500 to-blue-600",
    benefits: ["基本的な御祈祷文", "守護霊からのメッセージ"],
  },
  {
    amount: 500,
    icon: Star,
    color: "from-purple-500 to-purple-600",
    benefits: ["特別な御祈祷文", "詳細なメッセージ", "運気向上のアドバイス"],
  },
  {
    amount: 1000,
    icon: Crown,
    color: "from-indigo-500 to-indigo-600",
    benefits: ["上級御祈祷文", "個人的なメッセージ", "具体的な行動指針", "エネルギー浄化"],
  },
  {
    amount: 3000,
    icon: Crown,
    color: "from-red-500 to-red-600",
    benefits: ["特上御祈祷文", "詳細な霊視メッセージ", "運命の流れの解説", "強力な浄化", "開運のお守り効果"],
  },
  {
    amount: 5000,
    icon: Gem,
    color: "from-amber-500 to-orange-600",
    benefits: [
      "最上位御祈祷文",
      "守護霊からの詳細なメッセージ",
      "人生の使命についての洞察",
      "強力な運気上昇",
      "特別な守護",
      "願望実現の加速",
    ],
  },
  {
    amount: 10000,
    icon: Gem,
    color: "from-emerald-500 to-teal-600",
    benefits: [
      "極上御祈祷文",
      "複数の守護霊からのメッセージ",
      "詳細な未来予知",
      "カルマの浄化",
      "強力な願望実現力",
      "人生の転機の導き",
      "特別な加護",
    ],
  },
]

export default function PrayerDetailPage({ params }: { params: { id: string } }) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const prayerId = params.id
  const prayer = prayerTypes[prayerId as keyof typeof prayerTypes]

  if (!prayer) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-amber-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">御祈祷が見つかりません</h1>
          <Button onClick={() => (window.location.href = "/prayer-types")} className="shrine-gold-gradient">
            御祈祷一覧に戻る
          </Button>
        </div>
      </div>
    )
  }

  const handlePurchase = async () => {
    if (selectedAmount) {
      try {
        const response = await fetch("/api/create-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: selectedAmount,
            prayerType: prayerId,
          }),
        })

        const data = await response.json()

        if (data.url) {
          window.location.href = data.url
        } else {
          console.error("決済セッションの作成に失敗しました")
        }
      } catch (error) {
        console.error("決済処理でエラーが発生しました:", error)
      }
    }
  }

  const handleBackToPrayerTypes = () => {
    window.location.href = "/prayer-types"
  }

  const IconComponent = prayer.icon

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-amber-900">
      {/* ヘッダー */}
      <header className="shrine-gradient text-white py-6 md:py-8 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={handleBackToPrayerTypes}
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-red-800 transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">御祈祷一覧に戻る</span>
              <span className="sm:hidden">戻る</span>
            </Button>

            <div className="flex items-center gap-2 md:gap-3">
              <Torii className="w-6 h-6 md:w-8 md:h-8" />
              <h1 className="text-2xl md:text-4xl font-bold text-balance">{prayer.title}</h1>
              <Torii className="w-6 h-6 md:w-8 md:h-8" />
            </div>

            <div className="w-16 sm:w-32"></div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* 御祈祷詳細 */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          <Card className="saisen-shadow wa-border bg-gradient-to-b from-amber-50 to-yellow-100">
            <CardHeader className={`bg-gradient-to-br ${prayer.color} text-white pb-4 md:pb-6`}>
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
                <div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-2 text-xs md:text-sm">
                    {prayer.category}
                  </Badge>
                  <CardTitle className="text-2xl md:text-3xl text-balance">{prayer.title}</CardTitle>
                </div>
              </div>
              <CardDescription className="text-white/90 text-base md:text-lg text-pretty">{prayer.description}</CardDescription>
            </CardHeader>

            <CardContent className="pt-6 md:pt-8">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-red-900 mb-3 md:mb-4">詳細説明</h3>
                  <p className="text-sm md:text-base text-red-800 leading-relaxed text-pretty">{prayer.detailedDescription}</p>
                </div>

                {prayer.category === "恋愛系" && (
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-red-900 mb-3 md:mb-4">御祈祷の流れ</h3>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex gap-3 md:gap-4">
                        <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-red-800 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                          1
                        </div>
                        <div>
                          <h4 className="font-bold text-red-900 mb-1 text-sm md:text-base">心を整える</h4>
                          <p className="text-red-800 text-xs md:text-sm leading-relaxed">
                            静かに深呼吸をし、日々の雑念や不安をそっと手放していきます。心を穏やかに整えることで、祈りが澄んだ形で届きやすくなります。
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 md:gap-4">
                        <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-red-800 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                          2
                        </div>
                        <div>
                          <h4 className="font-bold text-red-900 mb-1 text-sm md:text-base">相手のことを思い描く</h4>
                          <p className="text-red-800 text-xs md:text-sm leading-relaxed">
                            祈りを届けたい大切な方や願いの対象を、心の中にやさしく思い浮かべます。相手の笑顔や温かな姿を鮮明に描くことで、祈りの力が深まります。
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 md:gap-4">
                        <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-red-800 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                          3
                        </div>
                        <div>
                          <h4 className="font-bold text-red-900 mb-1 text-sm md:text-base">願いを心に言葉として刻む</h4>
                          <p className="text-red-800 text-xs md:text-sm leading-relaxed">
                            「復縁を叶えたい」「良縁を授かりたい」など、ご自身の願いをはっきりと心の中で言葉にいたします。明確な祈りは、より強く神仏へと届きます。
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 md:gap-4">
                        <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-red-800 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                          4
                        </div>
                        <div>
                          <h4 className="font-bold text-red-900 mb-1 text-sm md:text-base">ご祈祷をお受けになる</h4>
                          <p className="text-red-800 text-xs md:text-sm leading-relaxed">
                            プロのツインレイ祈祷師が、神仏へと願いを真心込めてお届けし、良縁を結ぶためのエネルギーを整えてまいります。
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 md:gap-4">
                        <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-red-800 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                          5
                        </div>
                        <div>
                          <h4 className="font-bold text-red-900 mb-1 text-sm md:text-base">祈りを受け取る</h4>
                          <p className="text-red-800 text-xs md:text-sm leading-relaxed">
                            ご祈祷によって注がれる温かな力が、ご自身と大切な方へ届いていくことを静かに感じながら、心を委ねるように過ごします。
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 md:gap-4">
                        <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-red-800 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                          6
                        </div>
                        <div>
                          <h4 className="font-bold text-red-900 mb-1 text-sm md:text-base">感謝を捧げる</h4>
                          <p className="text-red-800 text-xs md:text-sm leading-relaxed">
                            「ありがとうございます」と心の中でそっと伝えます。感謝の気持ちは祈りの力をさらに深く結びつけてくれます。
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 md:gap-4">
                        <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-red-800 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                          7
                        </div>
                        <div>
                          <h4 className="font-bold text-red-900 mb-1 text-sm md:text-base">日常を前向きに歩む</h4>
                          <p className="text-red-800 text-xs md:text-sm leading-relaxed">
                            ご祈祷を受けられた後は、相手に思いやりをもって接する、自分自身を磨くなど、願いにふさわしい日々を大切にお過ごしください。その積み重ねが成就への道を開いてまいります。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 初穂料選択 */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-3 md:mb-4 text-balance">初穂料をお選びください</h2>
          <p className="text-base md:text-xl text-amber-100 max-w-3xl mx-auto text-pretty">
            お気持ちに応じた初穂料をお選びください。金額に応じて、より詳細で強力な御祈祷をお受けいただけます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto mb-8 md:mb-12">
          {priceOptions.map((option) => {
            const OptionIcon = option.icon
            return (
              <Card
                key={option.amount}
                className={`relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer border-3 saisen-shadow ${
                  selectedAmount === option.amount
                    ? "border-amber-400 shadow-2xl scale-105 divine-glow ring-4 ring-amber-300/50"
                    : "border-amber-600 hover:border-amber-400"
                } bg-gradient-to-b from-amber-50 to-yellow-100`}
                onClick={() => setSelectedAmount(option.amount)}
              >
                {selectedAmount === option.amount && (
                  <div className="absolute top-2 right-2 z-10">
                    <div className="bg-amber-400 text-red-900 rounded-full p-1.5 md:p-2 shadow-lg">
                      <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                    </div>
                  </div>
                )}

                <CardHeader
                  className={`${
                    option.color === "gold-shimmer" ? "gold-shimmer" : `bg-gradient-to-br ${option.color}`
                  } text-white pb-4 md:pb-6 pt-4 md:pt-6 ${selectedAmount === option.amount ? "shadow-inner" : ""}`}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <OptionIcon className="w-6 h-6 md:w-8 md:h-8" />
                      <div className="text-3xl md:text-4xl font-bold tracking-wide">¥{option.amount.toLocaleString()}</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent
                  className={`pt-6 md:pt-8 pb-6 md:pb-8 px-4 md:px-6 ${
                    selectedAmount === option.amount ? "bg-gradient-to-b from-amber-100 to-yellow-200" : ""
                  }`}
                >
                  <div className="text-center">
                    <p
                      className={`text-base md:text-lg font-medium ${
                        selectedAmount === option.amount ? "text-red-900" : "text-red-800"
                      }`}
                    >
                      {selectedAmount === option.amount ? "選択中" : "タップして選択"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* 購入ボタン */}
        {selectedAmount && (
          <div className="text-center">
            <div className="wood-texture saisen-shadow rounded-xl p-6 md:p-8 max-w-md mx-auto wa-border mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-red-900 mb-3 md:mb-4">選択された御祈祷</h3>
              <p className="text-sm md:text-base text-red-800 mb-2">{prayer.title}</p>
              <p className="text-2xl md:text-3xl font-bold text-amber-800">¥{selectedAmount.toLocaleString()}</p>
            </div>

            <Button
              onClick={handlePurchase}
              size="lg"
              className="w-full sm:w-auto shrine-gold-gradient hover:scale-110 transition-all duration-500 text-red-900 px-8 py-6 md:px-16 md:py-8 text-xl md:text-2xl font-bold shadow-2xl border-4 border-red-700 rounded-xl divine-glow"
            >
              ¥{selectedAmount.toLocaleString()}をお納めして御祈祷を受ける
            </Button>
          </div>
        )}

        <div className="mt-8 md:mt-12 text-center">
          <div className="wood-texture backdrop-blur-sm rounded-lg p-6 md:p-8 max-w-2xl mx-auto saisen-shadow wa-border">
            <h3 className="text-xl md:text-2xl font-bold text-red-900 mb-3 md:mb-4">個別相談をご希望の方へ</h3>
            <p className="text-sm md:text-base text-red-800 mb-4 md:mb-6 leading-relaxed text-pretty">
              より詳細な霊視や個別のご相談をご希望の方は、公式LINEにてお気軽にお問い合わせください。
            </p>
            <Button
              onClick={() => window.open("https://lin.ee/FsxTvpY", "_blank")}
              size="lg"
              className="w-full sm:w-auto shrine-gold-gradient hover:scale-110 transition-all duration-500 text-red-900 px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl font-bold shadow-2xl border-4 border-red-700 rounded-xl divine-glow"
            >
              公式LINEで詳しく相談する
            </Button>
          </div>
        </div>

        {/* 注意事項 */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="wood-texture backdrop-blur-sm rounded-lg p-6 md:p-8 max-w-4xl mx-auto saisen-shadow wa-border">
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

        <PrayerQA />
      </main>

      <SiteFooter />
    </div>
  )
}