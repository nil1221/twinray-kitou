import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-red-950 border-t-4 border-amber-400 mt-8 md:mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* サービス情報 */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-amber-400 mb-3 md:mb-4">
              <Link href="/" className="hover:text-amber-300 transition-colors">
                ツインレイ御祈祷
              </Link>
            </h3>
            <p className="text-amber-100 text-xs md:text-sm leading-relaxed">
              心を込めた御祈祷で、あなたの願いを天に届けます。 古来より受け継がれる神聖な御祈祷により、
              守護霊からの特別なメッセージをお授けいたします。
            </p>
          </div>

          {/* リーガルリンク */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-amber-400 mb-3 md:mb-4">法的事項</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/tokusho" className="text-amber-200 hover:text-amber-400 transition-colors text-xs md:text-sm">
                  特定商取引法に基づく表記
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-amber-200 hover:text-amber-400 transition-colors text-xs md:text-sm">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-amber-200 hover:text-amber-400 transition-colors text-xs md:text-sm">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/legal/refund" className="text-amber-200 hover:text-amber-400 transition-colors text-xs md:text-sm">
                  返品・キャンセルポリシー
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-amber-400 mb-3 md:mb-4">お問い合わせ</h3>
            <div className="space-y-2 text-xs md:text-sm text-amber-200">
              <p>営業時間: 9:00〜17:00（土日祝除く）</p>
              <p>メール: nil.creation1221@gmail.com</p>
              <div className="mt-4">
                <Link
                  href="https://lin.ee/FsxTvpY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors text-xs md:text-sm"
                >
                  公式LINEで相談
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-amber-300 text-xs md:text-sm">© 2025 ツインレイ御祈祷. All rights reserved.</p>
          <p className="text-amber-400 text-xs mt-2">
            本サービスは娯楽を目的としたものです。効果を保証するものではありません。
          </p>
        </div>
      </div>
    </footer>
  )
}