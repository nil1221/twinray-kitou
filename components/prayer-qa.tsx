"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

const qaData = [
  {
    question: "ご祈祷を受けると、必ず願いは叶いますか？",
    answer:
      "ご祈祷は「願いに寄り添い、心を整え、前向きに進むためのサポート」としてお届けしています。結果をお約束するものではありませんが、多くの方が安心感や気持ちの変化を感じられています。",
  },
  {
    question: "名前や生年月日を伝える必要はありますか？",
    answer:
      "必須ではありません。匿名でもご祈祷をお受けできます。ただし、お名前や生年月日をお知らせいただくと、より具体的にイメージしやすくなるため、ご希望に応じてご検討ください。また、より明確に思いを伝えたい方は、御祈祷後にお渡しする鑑定書をスクリーンショットして、公式LINEへお送りいただくと遠隔ヒーリングをプレゼントさせていただきます。",
  },
  {
    question: "どのくらいの期間で変化を感じられますか？",
    answer:
      "ご祈祷の感じ方には個人差があります。すぐに心が軽くなる方もいれば、時間をかけて少しずつ穏やかに整っていく方もいらっしゃいます。焦らず、ご自身のペースで日々をお過ごしください。",
  },
  {
    question: "ご祈祷の効果は一時的ですか？",
    answer:
      "ご祈祷は「心の支え」や「後押し」として作用するものです。祈りをきっかけに、ご自身の行動や心の在り方も自然に前向きに変化していくことで、より持続的に実感していただける場合があります。",
  },
  {
    question: "他のご祈祷と一緒に受けても大丈夫ですか？",
    answer:
      "はい、大丈夫です。どなたにも安心して受けていただけるよう祈りを届けています。無理のない形で、お気持ちに沿ってお受けください。",
  },
]

export function PrayerQA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="mt-16">
      <div className="wood-texture backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto saisen-shadow wa-border">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-red-900 mb-4 flex items-center justify-center gap-3">
            <HelpCircle className="w-8 h-8 text-amber-600" />
            ご祈祷Q&A
            <HelpCircle className="w-8 h-8 text-amber-600" />
          </h3>
          <p className="text-red-800 text-lg">よくいただくご質問にお答えいたします</p>
        </div>

        <div className="space-y-4">
          {qaData.map((qa, index) => (
            <Card
              key={index}
              className="border-2 border-red-300 bg-gradient-to-b from-amber-50 to-yellow-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader
                className="cursor-pointer hover:bg-red-50 transition-colors duration-200 pb-4"
                onClick={() => toggleQuestion(index)}
              >
                <CardTitle className="flex items-center justify-between text-red-900 text-lg">
                  <span className="flex items-center gap-3">
                    <span className="bg-red-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      Q{index + 1}
                    </span>
                    {qa.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-red-600 flex-shrink-0" />
                  )}
                </CardTitle>
              </CardHeader>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <CardContent className="pt-0 pb-6">
                  <div className="flex items-start gap-3">
                    <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      A
                    </span>
                    <p className="text-red-800 leading-relaxed text-pretty">{qa.answer}</p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-red-100 to-amber-100 rounded-lg p-6 border-2 border-red-300">
            <h4 className="text-xl font-bold text-red-900 mb-3">個別相談をご希望の方へ</h4>
            <p className="text-red-800 mb-4 text-sm leading-relaxed">
              より詳細な霊視や個別のご相談をご希望の方は、公式LINEにてお気軽にお問い合わせください。
            </p>
            <button
              onClick={() => window.open("https://lin.ee/FsxTvpY", "_blank")}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-red-900 font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 border-2 border-red-700"
            >
              公式LINEで詳しく相談する
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
