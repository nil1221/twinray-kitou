import { SiteFooter } from "@/components/site-footer"

export default function TokushoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-amber-900">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="wood-texture rounded-xl p-8 saisen-shadow wa-border">
          <h1 className="text-4xl font-bold text-red-900 mb-8 text-center">特定商取引法に基づく表記</h1>

          <div className="space-y-6 text-red-800">
            <div>
              <h2 className="text-xl font-bold mb-2">販売業者</h2>
              <p>株式会社ニル・クリエーション</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">運営責任者</h2>
              <p>代表取締役 加藤萌奈</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">所在地</h2>
              <p>〒150-6018 東京都渋谷区恵比寿4-20-3 恵比寿ガーデンプレイスタワー18階</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">連絡先</h2>
              <p>電話番号：03-5789-5267</p>
              <p>メールアドレス：nil.creation1221@gmail.com</p>
              <p>営業時間：9:00～17:00（土日祝日を除く）</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">商品・サービスの内容</h2>
              <p>オンライン御祈祷サービス</p>
              <p>御祈祷完了後、お客様専用のメッセージをお届けいたします</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">販売価格</h2>
              <p>100円～10,000円（税込）</p>
              <p>※選択された初穂料により価格が決定されます</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">支払方法</h2>
              <p>クレジットカード決済（Stripe決済システム使用）</p>
              <p>対応カード：VISA、MasterCard、American Express、JCB等</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">支払時期</h2>
              <p>サービス申込時に即時決済</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">サービス提供時期</h2>
              <p>決済完了後、即座に御祈祷を実施し、専用メッセージをお届けいたします</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">返品・キャンセルについて</h2>
              <p>デジタルコンテンツの性質上、返品・交換はできません。</p>
              <p>詳細は「返品・キャンセルポリシー」をご確認ください。</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">その他費用</h2>
              <p>インターネット接続料金、通信費等はお客様のご負担となります</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">免責事項</h2>
              <p>本サービスは娯楽を目的としたものであり、効果、信頼性、正確性等を保証するものではありません。</p>
              <p>サービスの結果をどのように利用するかは、お客様の自己責任において判断をお願いいたします。</p>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}
