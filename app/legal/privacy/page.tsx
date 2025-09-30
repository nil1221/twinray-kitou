import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-amber-900">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="wood-texture rounded-xl p-8 saisen-shadow wa-border">
          <h1 className="text-4xl font-bold text-red-900 mb-8 text-center">プライバシーポリシー</h1>

          <div className="space-y-6 text-red-800">
            <div>
              <h2 className="text-xl font-bold mb-2">1. 個人情報の定義</h2>
              <p>
                本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に定義される個人情報を指します。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">2. 個人情報の収集</h2>
              <p>当サービスでは、以下の個人情報を収集する場合があります：</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>決済に関する情報（クレジットカード情報等）</li>
                <li>サービス利用に関する情報</li>
                <li>お問い合わせ時の連絡先情報</li>
                <li>アクセスログ、Cookie等の技術的情報</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">3. 個人情報の利用目的</h2>
              <p>収集した個人情報は、以下の目的で利用いたします：</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>サービスの提供・運営</li>
                <li>決済処理</li>
                <li>お客様からのお問い合わせへの対応</li>
                <li>サービスの改善・開発</li>
                <li>利用規約違反の対応</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">4. 個人情報の第三者提供</h2>
              <p>当社は、以下の場合を除き、個人情報を第三者に提供いたしません：</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>お客様の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>決済処理のため、決済代行会社（Stripe）に提供する場合</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">5. 個人情報の安全管理</h2>
              <p>当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">6. 個人情報の開示・訂正等</h2>
              <p>お客様は、当社が保有する個人情報について、開示、訂正、利用停止等を求めることができます。</p>
              <p>お問い合わせ先：nil.creation1221@gmail.com</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">7. Cookie等の利用</h2>
              <p>当サービスでは、サービスの利便性向上のためCookie等の技術を使用する場合があります。</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">8. プライバシーポリシーの変更</h2>
              <p>
                当社は、本プライバシーポリシーを変更する場合があります。変更後のプライバシーポリシーは、本ウェブサイトに掲載した時点で効力を生じます。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">9. お問い合わせ</h2>
              <p>個人情報の取扱いに関するお問い合わせは、以下までご連絡ください：</p>
              <p>メール：nil.creation1221@gmail.com</p>
              <p>営業時間：9:00～17:00（土日祝日を除く）</p>
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
