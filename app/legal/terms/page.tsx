import { SiteFooter } from "@/components/site-footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-amber-900">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="wood-texture rounded-xl p-8 saisen-shadow wa-border">
          <h1 className="text-4xl font-bold text-red-900 mb-8 text-center">利用規約</h1>

          <div className="space-y-6 text-red-800">
            <div>
              <h2 className="text-xl font-bold mb-2">第1条（適用）</h2>
              <p>本規約は、当社が提供するツインレイ御祈祷サービス（以下「本サービス」）の利用条件を定めるものです。</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">第2条（サービス内容）</h2>
              <p>
                本サービスは、オンラインでの御祈祷サービスを提供し、御祈祷完了後にお客様専用のメッセージをお届けするサービスです。
              </p>
              <p>本サービスは娯楽を目的としたものであり、効果を保証するものではありません。</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">第3条（利用料金）</h2>
              <p>本サービスの利用料金は、お客様が選択された初穂料（100円～10,000円）となります。</p>
              <p>料金は事前決済とし、サービス申込時に決済いただきます。</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">第4条（禁止事項）</h2>
              <p>お客様は、以下の行為を行ってはなりません：</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>法令に違反する行為</li>
                <li>当社や第三者の権利を侵害する行為</li>
                <li>本サービスの運営を妨害する行為</li>
                <li>虚偽の情報を提供する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">第5条（サービスの変更・停止）</h2>
              <p>当社は、事前の通知なく本サービスの内容を変更、または提供を停止することがあります。</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">第6条（免責事項）</h2>
              <p>当社は、本サービスに関して以下の事項について一切の責任を負いません：</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>サービスの効果、信頼性、正確性</li>
                <li>お客様の期待する結果が得られないこと</li>
                <li>システムの不具合による損害</li>
                <li>第三者による不正アクセス等による損害</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">第7条（返品・キャンセル）</h2>
              <p>デジタルコンテンツの性質上、サービス提供開始後の返品・キャンセルはお受けできません。</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">第8条（個人情報の取扱い）</h2>
              <p>個人情報の取扱いについては、別途定めるプライバシーポリシーに従います。</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">第9条（準拠法・管轄裁判所）</h2>
              <p>
                本規約は日本法に準拠し、本サービスに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">第10条（規約の変更）</h2>
              <p>
                当社は、本規約を変更することがあります。変更後の規約は、本ウェブサイトに掲載した時点で効力を生じます。
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm">制定日：2025年10月1日</p>
              <p className="text-sm">最終更新日：2025年10月1日</p>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}
