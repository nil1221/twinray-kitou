import { SiteFooter } from "@/components/site-footer"

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-amber-900">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="wood-texture rounded-xl p-8 saisen-shadow wa-border">
          <h1 className="text-4xl font-bold text-red-900 mb-8 text-center">返品・キャンセルポリシー</h1>

          <div className="space-y-6 text-red-800">
            <div>
              <h2 className="text-xl font-bold mb-2">1. 基本方針</h2>
              <p>
                本サービスは、デジタルコンテンツ（オンライン御祈祷サービス）の性質上、サービス提供開始後の返品・キャンセルは原則としてお受けできません。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">2. サービス提供開始のタイミング</h2>
              <p>以下のタイミングでサービス提供が開始されたものとみなします：</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>決済完了後、御祈祷結果ページが表示された時点</li>
                <li>お客様専用のメッセージが生成された時点</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">3. 例外的な返金対応</h2>
              <p>以下の場合に限り、返金を検討いたします：</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>システムの不具合により、サービスが正常に提供されなかった場合</li>
                <li>決済エラーにより重複決済が発生した場合</li>
                <li>当社の責に帰すべき事由により、サービスが提供できなかった場合</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">4. 返金の方法</h2>
              <p>返金が認められた場合、原則として決済に使用されたクレジットカードへの返金となります。</p>
              <p>返金処理には、1～2週間程度お時間をいただく場合があります。</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">5. 返金手数料</h2>
              <p>当社の責に帰すべき事由による返金の場合、返金手数料は当社が負担いたします。</p>
              <p>その他の場合、返金手数料をご負担いただく場合があります。</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">6. クーリングオフについて</h2>
              <p>
                本サービスは、特定商取引法第26条第2項第2号に該当するデジタルコンテンツのため、クーリングオフの対象外となります。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">7. お問い合わせ</h2>
              <p>返品・キャンセルに関するお問い合わせは、以下までご連絡ください：</p>
              <p>メール：nil.creation1221@gmail.com</p>
              <p>営業時間：9:00～17:00（土日祝日を除く）</p>
              <p>お問い合わせの際は、決済時の情報をお知らせください。</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">8. 注意事項</h2>
              <p>本サービスは娯楽を目的としたものであり、効果を保証するものではありません。</p>
              <p>サービスの性質をご理解の上、ご利用ください。</p>
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
