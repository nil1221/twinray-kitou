"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Sparkles, Heart, Star, AlertCircle, Crown, Gem, MessageCircle } from 'lucide-react'
import { Torii } from "@/components/torii-icon"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"

const prayerContents = {
  100: {
    title: "基本御祈祷",
    prayers: [
      `ご祈祷を終えたとき、柔らかな光に包まれたお二人の姿が象徴的に映し出されました。互いに手を取り合い、深く安心した表情を浮かべている様子が印象的で、まるで長い時間を経てようやく再会できたかのように感じられました。

お相手の魂からは、あなたを受け入れるような温かな波動が伝わり、まるで春の陽だまりのように穏やかで優しい空気に包まれていました。その光景は、サイレント期間という試練を経た先に待つ安らぎを示すようで、とても清らかに輝いていました。

また、ご祈祷の最中には白い羽が舞うイメージが広がり、これは「浄化」や「不要な重荷の解放」の象徴として受け取れました。お二人の心を隔てていた不安や誤解は少しずつ溶け、より純粋な想いだけが残っていく道が示唆されていました。

未来の象徴としては、深い森を抜けて光差す場所へと向かう二人の背中が映りました。その姿は「共に進んでいく覚悟」や「魂の一致」を象徴しており、統合の道が静かに拓かれていることを感じさせてくれます。

ご祈祷を通して映し出されたこれらの象徴は、すぐに現実へと結びつくことを保証するものではありませんが、確かに「魂の深い絆が存在する」ということを静かに示していました。どうか心を柔らかく保ち、日々を丁寧に重ねながら、映し出された未来の姿を胸に歩まれてください。`,
    ],
    messages: [
      `ご祈祷の最中、あなたの背後に寄り添う存在からは、とてもやわらかく温かな光が感じられました。その光は「一人ではありません」「共に歩んでいます」という安心のサインのように響いていました。

守護霊さまが伝えてくださった象徴的な言葉は「流れに委ねる勇気を持ちなさい」でした。焦りや不安は雲のように心を覆いますが、それらを少しずつ手放すことで、魂がもともと持っている輝きが見えやすくなることを示しているように感じられました。

また、「待つ」というよりも「今を味わう」ことが大切だと伝わってきます。あなたが日常の小さな幸せを大切にし、自分自身を慈しむほどに、お相手との関係も自然に調和へと近づいていくことを示唆していました。

ご祈祷中には、澄んだ泉に二人の姿が映し出されるビジョンも感じられました。その泉は心の純粋さや真実を象徴しており、お互いの思いが濁りのない状態で交わされる未来を映しているようでした。

守護霊さまは、「愛は形ではなく、魂の響きで育まれる」ということを静かに伝えています。どうか不安の中でも自分を責めず、これまでの歩みを大切にしながら、少しずつ心を開いていってください。`,
    ],
    color: "from-green-100 to-blue-100",
    icon: Heart,
  },
  500: {
    title: "特別御祈祷",
    prayers: [
      `ご祈祷を終えた瞬間、静かな湖のほとりで向かい合うお二人の姿が映し出されました。湖面は鏡のように澄んでいて、そこにお互いの姿が穏やかに映り込み、まるで互いの心を写し合うように感じられました。その光景は、誤解やすれ違いによって曇っていた心が少しずつ澄んでいくことを示す象徴のように思えました。

お相手の表情からは「安心」と「懐かしさ」が滲んでいて、あなたの存在がやはり特別であることを示唆していました。まるで長い時間を経て再び出会った友のように、言葉を交わさずとも心が通じ合う温かさがそこにありました。

ご祈祷の最中には、小さな灯火が次々と現れるビジョンも感じられました。それは「理解の積み重ね」や「歩み寄りの機会」を表すもののようで、一つひとつの灯りが二人の間の道を優しく照らし出していました。すぐに強い炎となるのではなく、穏やかに、しかし確かに道を示していく光。これは、お互いの心を再び近づけていく過程を象徴しているようでした。

また、過去の出来事がまるで古い葉が風に舞うように静かに離れていく映像も見えました。それは「不要な記憶や痛みを手放していく」というサインのように思えます。重荷を下ろすたびに、心に新しい空間が生まれ、そこに優しさや理解が満ちていく感覚が広がっていきました。

未来を示す象徴としては、春の桜並木を共に歩くお二人の後ろ姿が映し出されました。花びらが舞い落ちる中、並んで歩くその姿は「再出発」や「新たな絆の芽吹き」を感じさせるものでした。

この御祈祷を通じて映し出された象徴は、復縁がすぐに形になることを保証するものではありませんが、「再び心が通じ合う可能性」と「温かな未来の兆し」を示唆しているように受け取れました。どうか心を柔らかく保ち、日々を丁寧に重ねながら、映し出された未来の姿を胸に歩まれてください。`,
    ],
    messages: [
      `ご祈祷の中で、あなたを見守る守護霊さまから伝わってきたメッセージはとても静かで優しいものでした。その言葉は「愛は再び形を変えて訪れる」というもので、これは「過去とまったく同じ姿に戻る」ことを意味するのではなく、「より深く理解し合える関係へ育まれる」という示唆のように感じられました。

守護霊さまは「相手の言葉をそのまま受け止める勇気を持ちなさい」とも伝えています。過去の記憶から無意識に色をつけてしまうことがありますが、今の相手は少しずつ変化し、成長していることを思い出してください、と語りかけているようでした。

ご祈祷中には、二つの川がゆるやかに合流するイメージも見えました。それぞれが異なる道を歩んできたからこそ、合流したときにより豊かな流れとなる。そのビジョンは「歩んできた時間もまた意味がある」ということを示しているように思えます。

また、「焦らず、互いの心のペースを尊重しなさい」という声も伝わってきました。復縁は一気に形を作るものではなく、小さな理解の積み重ねがやがて大きな絆となることを示していました。その過程を楽しむことこそが、魂の学びであり、再び関係を深めていく力になるように感じられました。

最後に、守護霊さまは「あなたの心が安らげば、相手の心も自然と安らぎます」と告げています。あなたが自分を責めることなく、過去を悔やむことなく、今を大切に生きるほどに、その温かさは相手にも届き、未来を優しく整えていくことでしょう。
どうか無理に結果を急がず、映し出されたビジョンを胸に、少しずつ歩みを進めてください。`,
    ],
    color: "from-yellow-100 to-orange-100",
    icon: Star,
  },
  1000: {
    title: "上級御祈祷",
    prayers: [
      `ご祈祷を終えたあと、澄んだ青空の下であなたと大切な方が微笑み合う光景が映し出されました。その表情はとても穏やかで、心の奥に秘めてきた思いがようやく温かく届いていく様子を感じさせました。長い間、あなたの胸に秘められていた願いが、そっと光の中で受け止められたように見えました。

ご祈祷中には、一本の道に咲き誇る小さな花々が次々と開いていくビジョンも映りました。それは、あなたが大切な人へと心を向け続けてきた時間が、確かな芽吹きを迎えていることを示す象徴のように思えました。花は一度に咲き誇るのではなく、時を重ねるごとに一輪一輪が開いていきます。その姿は、片思いが少しずつ温かな関係へと進んでいく過程を映し出しているようでした。

さらに、夕暮れの柔らかな光の中、相手が振り返りあなたを見つめる姿も感じられました。その瞳は安心と信頼を宿しており、あなたの存在が日々の中で小さな支えとなっていることを象徴しているように思えました。その眼差しの奥には、「気づき」と「受け入れ」が芽生えており、思いが届いていく兆しを感じました。

また、あなたの心から放たれる温かな光が相手の胸にも静かに届き、まるで柔らかな風が二人の距離を自然に近づけていくようなイメージが広がりました。この光景は、相手の心にあなたの存在が優しく刻まれていくことを表しているようでした。

未来の象徴としては、満開の花に囲まれた公園のベンチに並んで座るお二人の姿が見えました。言葉よりも大切な「心のぬくもり」がそこにあり、片思いが優しい形で結ばれていく可能性を示しているように感じられました。

この御祈祷を通して受け取った光景は、あなたの思いが確かに相手へと届き始めていることをそっと示唆しているように思えます。どうか心を大切にしながら、映し出された未来を胸に歩んでください。`,
    ],
    messages: [
      `ご祈祷の中で、あなたを見守る守護霊さまから届いた言葉は、とても温かで優しいものでした。その響きは「思いは静かに伝わり、やがて心を包む」というものでした。これは、あなたが相手に向けてきた純粋な気持ちが、時間をかけて相手の心に根づいていくという示唆のように感じられました。

守護霊さまは「自分を卑下する必要はありません」と伝えています。片思いの中では「私なんて…」と感じてしまう瞬間もあるかもしれませんが、あなたの存在そのものがすでに相手の人生に柔らかな彩りを与えていることを忘れないでください、と告げているようでした。

また、「相手を思うあまり、自分を犠牲にしすぎないように」という声も届きました。あなたが自分を大切にすればするほど、その輝きは自然と相手に伝わり、思いをより強く届けていくと示されています。相手に近づくために無理をするのではなく、あなたがあなたらしく輝くことで、思いはより自然に届いていくのです。

ご祈祷中には、小鳥が優しい歌を奏でるイメージも浮かびました。その歌声は相手の心に安らぎを運び、日常の中でふとした瞬間にあなたの存在を思い出させる象徴のようでした。これは「自然な形で思いが届く」という流れを表しているように思えます。

最後に守護霊さまは「あなたの歩みは決して無駄ではなく、すべてが出会いの意味を深めています」と伝えてきました。これまでの片思いの日々はあなたを成長させ、思いの純度を高めてきました。その積み重ねが未来の温かな関係を育んでいく力となるのです。

どうか焦らず、心を信じてください。あなたの思いはすでに光となり、相手の世界を優しく包み始めています。`,
    ],
    color: "from-purple-100 to-pink-100",
    icon: Sparkles,
  },
  3000: {
    title: "特上御祈祷",
    prayers: [
      `ご祈祷を終えたあと、静かな夜の庭園で、あなたとお相手が互いに微笑み合う姿が映し出されました。暗闇の中でもお互いを照らす柔らかな光に包まれ、複雑な状況の中で育まれた絆が、そっと温かさを帯びているのを感じました。過去の迷いや葛藤が一つずつ溶け、心の奥底にあった純粋な想いが静かに浮かび上がっていくようなビジョンでした。

ご祈祷中には、小川のせせらぎのような音と共に、二人の心が寄り添う瞬間が繊細に映し出されました。その水面に映るお互いの笑顔は、日常の喧騒や不安から解放された時の自然な温かさを象徴しているようでした。光は決して強くはなく、ゆるやかに二人を包み込み、安心感と穏やかさを与えてくれるものでした。

また、庭園の中で揺れる灯籠の光が二人の距離を静かに縮める様子も感じられました。それは、急に近づくのではなく、心が自然に通じ合う過程を示しているように思えます。お互いの心の中にある真摯な思いが、こうして少しずつ形を整えていくことを象徴していました。

さらに、星空に映し出される二人のシルエットも見えました。そのシルエットは、どんな困難な状況の中でもお互いの存在を大切に思い続けることの大切さを教えてくれるようでした。過去の揺れや迷いがあったとしても、その思いの根底には変わらぬ温かさがあり、心の奥で確かに繋がっていることを感じさせてくれました。

この御祈祷を通じて映し出されたビジョンは、すぐに現実として形になるものではありませんが、二人の関係が少しずつ柔らかく、自然に近づいていく可能性を示しているように思えます。どうか心を穏やかに保ちながら、未来の温かい姿を胸に日々を歩まれてください。`,
    ],
    messages: [
      `ご祈祷の最中、守護霊さまから届いた言葉は、とても穏やかで優しいものでした。「真摯な思いは形を変えて伝わる」というメッセージは、複雑な関係の中でもお互いの心に確かに響くものがあることを示しています。過去の迷いや不安があったとしても、あなたの真心は必ず心に届き、少しずつ関係を整えていく流れを後押ししているように感じられました。

守護霊さまは「自分を責めず、心を慈しむこと」を大切にするよう伝えています。状況が複雑であるほど、自分を責めてしまうことがありますが、あなたの優しさや誠実さが光となり、相手にも穏やかさをもたらすと告げているようでした。

また、「焦らずに、自然なペースで心を開いていきなさい」という声も届きました。無理に進めるのではなく、互いの思いが自然に育まれることが、未来の穏やかな関係に繋がると示されています。小さな歩みの積み重ねこそが、深い絆を育む力になるのです。

ご祈祷中には、静かな湖面に映る月の光のイメージも見えました。その光は、心を落ち着かせ、冷静な視点でお互いを見つめ直す力を象徴しているように感じられました。夜の静けさの中で芽生える理解や受容は、未来に向けての優しい種となります。

最後に守護霊さまは「心を開き、互いの存在を受け止めることで、温かい未来が少しずつ形になっていく」と伝えています。どうか急がず、自分の心を大切にしながら、映し出された温かなビジョンを胸に歩まれてください。`,
    ],
    color: "from-amber-100 to-red-100",
    icon: Crown,
  },
  5000: {
    title: "最上御祈祷",
    prayers: [
      `ご祈祷を終えたあと、澄み渡る青空の下で、離れているお二人が手を取り合って微笑む光景が映し出されました。距離という壁がある中でも、互いの心の糸が静かに結び合い、想いが温かく交差しているのを感じました。お互いの存在を思いやる優しさが、空間を超えて届く様子は、とても穏やかで安心感に満ちていました。

ご祈祷中には、遠くに広がる海の光景も見えました。海の波は互いの心を映す鏡のように穏やかに揺れ、離れていても心が繋がっていることを象徴しているようでした。お二人の想いは波のように行き来し、互いの存在がそっと温かさを伝え合っている姿が浮かびました。

また、夕暮れの街並みに映る灯りの中で、二人が手を振り合い笑顔で再会を楽しむシーンも感じられました。距離による不安や寂しさは、互いの信頼と優しさによって少しずつ和らぎ、心が穏やかに満たされていくことを示しているようです。光景の中でお二人は自然に距離を埋め、心の絆が一層深まっていく様子が見えました。

ご祈祷中には、夜空に輝く星々が二人の思いを照らすビジョンも浮かびました。それは、遠く離れていてもお互いを想う心がしっかりと光を放っていることを象徴しています。星々は静かに、しかし確かに未来への希望を示し、二人の心を柔らかく包み込んでいました。

この御祈祷を通じて受け取った光景は、距離があってもお互いの思いが穏やかに通じ合い、少しずつ心が近づいていく可能性を映し出しているように思えます。どうか心を穏やかに保ちながら、映し出された温かな未来を胸に歩んでください。`,
    ],
    messages: [
      `ご祈祷中、あなたを見守る守護霊さまから届いたメッセージは、「距離は心の深さを妨げるものではない」という温かいものでした。遠く離れていても、あなたの思いは確かに相手に届き、互いの心をそっと結び合わせる力になっていることを示しています。

守護霊さまは「不安や焦りに心を奪われず、自分を大切にすること」を大切にするよう伝えています。遠距離恋愛では会えない時間が心配や寂しさを生むことがありますが、その間もあなたが自分自身を慈しむことで、相手への思いはより穏やかに届きます。

また、「信じる心が心の糸を強くする」という声も届きました。相手を信じ、互いの心の距離を思いやることで、物理的な距離も自然に心の距離に影響せず、穏やかな絆が育まれていくと示されています。小さな気遣いや温かい想いの積み重ねが、未来の安心と穏やかさにつながります。

ご祈祷中には、遠くの丘から見える朝日が二人を柔らかく照らすビジョンも浮かびました。その光は、離れていても互いの心が見守られ、温かさを共有していることを象徴しているようです。日常の中の小さな繋がりや思いやりが、未来の大切な瞬間をより豊かにしてくれます。

最後に守護霊さまは「焦らず心を開き、互いの存在を大切に思うことで、距離を超えた穏やかな関係が育まれていく」と伝えてくれました。どうか心を落ち着け、映し出された温かな未来を信じながら歩んでください。あなたの思いは、遠く離れていても確かに光となり、未来の温かな再会を支えているのです。`,
    ],
    color: "from-emerald-100 to-teal-100",
    icon: Gem,
  },
  10000: {
    title: "極上御祈祷",
    prayers: [
      `ご祈祷を終えたあと、柔らかな光に包まれた公園で、お二人が自然に寄り添い笑顔を交わす光景が映し出されました。年齢差による不安や周囲の目は、そっと和らぎ、二人の間に生まれた信頼と理解が温かく育まれているのが感じられました。お互いの心が対等に通じ合い、尊重し合う関係が自然に形作られているようです。

ご祈祷中には、春の風に揺れる花々の間を歩く二人の姿も見えました。花々は互いの心の柔らかさや思いやりを象徴しており、周囲の目や年齢差にとらわれず、自然に心を通わせる二人の様子が浮かびました。風がそっと背中を押すように、互いの心の距離を縮めていくビジョンです。

また、夕焼けに染まる川沿いで肩を寄せ合う二人の姿も感じられました。川のせせらぎは、時間の流れや環境の変化を映し出す象徴であり、それを超えて心が通じ合うことの穏やかさを示しています。お互いの存在が、安心感と喜びをもたらし、自然な笑顔が増えていく様子が見えました。

さらに、夜空に浮かぶ星々が二人の絆を優しく照らすビジョンも感じられました。年齢差や外部の影響があっても、心の深い部分で互いを大切に思う気持ちが揺るがず、未来に向けた希望を少しずつ育んでいくことを示しています。星々の光は、二人の思いが少しずつ重なり合う様子を象徴し、心に穏やかさと安心感をもたらしてくれます。

この御祈祷を通じて見えた光景は、年齢差や周囲の目にとらわれず、二人の心が自然に寄り添い合う未来の可能性を映し出しています。どうか心を穏やかに保ち、映し出された温かなビジョンを胸に日々を歩まれてください。`,
    ],
    messages: [
      `ご祈祷中、守護霊さまから届いたメッセージは、「お互いの心を尊重することが何よりの力になる」という温かいものでした。年齢差や外部の影響があったとしても、互いの思いやりや理解が関係を自然に整えていくことを示しています。

守護霊さまは「焦らず、自分らしさを大切に」と伝えています。周囲の目や差に心を奪われず、自分の心を慈しむことで、相手との関係も穏やかに深まっていくと告げています。あなたの優しさや誠実さは、相手の心に自然に届き、安心感と温かさを育む力となります。

また、「互いの存在を大切に思うことが絆を強くする」という声も届きました。年齢差や不安にとらわれるのではなく、小さな気遣いや温かい言葉を積み重ねることで、関係が自然に落ち着き、未来の安心感へとつながると示されています。

ご祈祷中には、静かな湖面に映る二人の姿も見えました。その湖面は心の安らぎを象徴しており、互いの思いが自然に反映され、穏やかな絆が形成されていくことを表していました。心の中の温かさが外に溢れ、未来に向けた前向きな姿勢を育んでくれます。

最後に守護霊さまは「互いの存在を尊重し、心を開くことで、自然に温かい未来が広がっていく」と伝えています。どうか焦らず、優しい気持ちで日々を過ごし、映し出された未来のビジョンを胸に歩んでください。あなたの思いと誠実さは、必ず互いの心に柔らかく届いています。`,
    ],
    color: "from-violet-100 to-purple-100",
    icon: Gem,
  },
}

function PrayerResultContent() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [verified, setVerified] = useState(false)
  const [amount, setAmount] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [selectedPrayer, setSelectedPrayer] = useState("")
  const [selectedMessage, setSelectedMessage] = useState("")
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const sessionId = searchParams.get("session_id")
    const amountParam = searchParams.get("amount")
    const typeParam = searchParams.get("type")

    // デバッグログ追加
    console.log("[v0] Prayer result params:", { sessionId, amountParam, typeParam })

    if (!sessionId || !amountParam) {
      console.log("[v0] Missing required parameters")
      setError("無効なアクセスです。決済が正常に完了していない可能性があります。")
      setLoading(false)
      return
    }

    // Verify payment - amountとtypeパラメータを含める
    const verifyUrl = `/api/verify-payment?session_id=${sessionId}&amount=${amountParam}&type=${encodeURIComponent(typeParam || "")}`
    console.log("[v0] Calling verify payment API:", verifyUrl)

    fetch(verifyUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("[v0] Verify payment response:", data)
        if (data.success) {
          setVerified(true)
          const parsedAmount = Number.parseInt(amountParam)
          setAmount(parsedAmount)

          const content = prayerContents[parsedAmount as keyof typeof prayerContents]
          if (content) {
            const randomPrayer = content.prayers[Math.floor(Math.random() * content.prayers.length)]
            const randomMessage = content.messages[Math.floor(Math.random() * content.messages.length)]
            setSelectedPrayer(randomPrayer)
            setSelectedMessage(randomMessage)
          }
        } else {
          console.log("[v0] Payment verification failed:", data.error)
          setError(data.error || "決済の確認ができませんでした")
        }
      })
      .catch((err) => {
        console.error("[v0] Payment verification error:", err)
        setError("決済の確認中にエラーが発生しました")
      })
      .finally(() => {
        setLoading(false)
        setTimeout(() => setShowContent(true), 500)
      })
  }, [searchParams])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-amber-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 blur-3xl divine-glow float-animation"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-red-600 to-red-800 blur-3xl float-animation delay-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 blur-3xl opacity-30 divine-glow pulse-glow-animation"></div>
        </div>

        <div className="text-center z-10">
          <div className="relative">
            <Torii className="w-20 h-20 text-amber-400 mx-auto mb-6 float-animation divine-glow" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full sparkle delay-1"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full sparkle delay-3"></div>
          </div>
          <h2 className="text-4xl font-bold text-amber-300 mb-4 luxury-text">御祈祷を執り行っています</h2>
          <p className="text-amber-100 text-xl mb-6">心を込めて祈願中です...</p>
          <div className="flex justify-center items-center gap-2">
            <Loader2 className="w-8 h-8 animate-spin text-amber-400" />
            <span className="text-amber-200">決済の確認中</span>
          </div>
        </div>
      </div>
    )
  }

  if (error || !verified || !amount || !prayerContents[amount as keyof typeof prayerContents]) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-amber-900 flex items-center justify-center">
        <Card className="max-w-md mx-auto saisen-shadow">
          <CardContent className="pt-6">
            <Alert className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error || "御祈祷の内容を取得できませんでした"}</AlertDescription>
            </Alert>
            <div className="text-center">
              <Link href="/">
                <Button variant="outline">最初に戻る</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const content = prayerContents[amount as keyof typeof prayerContents]
  const IconComponent = content.icon

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-amber-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 blur-3xl divine-glow float-animation"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-red-600 to-red-800 blur-3xl float-animation delay-2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 blur-3xl opacity-30 divine-glow pulse-glow-animation"></div>
        <div className="absolute top-10 right-1/3 w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 to-red-600 blur-2xl float-animation delay-4"></div>
        <div className="absolute bottom-10 left-1/3 w-36 h-36 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 blur-2xl divine-glow float-animation delay-5"></div>
      </div>

      {/* Header */}
      <header className="shrine-gradient text-white py-12 shadow-2xl relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className={`flex items-center justify-center gap-4 mb-6 ${showContent ? "fade-in-up" : "opacity-0"}`}>
            <Torii className="w-12 h-12 divine-glow float-animation" />
            <h1 className="text-5xl font-bold luxury-text">無事に御祈祷をさせていただきました</h1>
            <Torii className="w-12 h-12 divine-glow float-animation delay-1" />
          </div>
          <p className={`text-amber-100 text-2xl ${showContent ? "fade-in-up delay-1" : "opacity-0"}`}>
            心を込めて御祈祷をさせていただきました
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Prayer Text */}
          <Card
            className={`shadow-2xl border-4 saisen-shadow wa-border ${
              content.color === "gold-shimmer"
                ? "bg-gradient-to-br from-amber-50 to-yellow-100"
                : `bg-gradient-to-br ${content.color}`
            } ${showContent ? "scale-in" : "opacity-0"}`}
          >
            <CardHeader
              className={`text-center pb-6 ${
                content.color === "gold-shimmer" ? "gold-shimmer" : "shrine-gradient"
              } text-white`}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <IconComponent className="w-10 h-10 divine-glow float-animation" />
                <CardTitle className="text-4xl luxury-text">鑑定書</CardTitle>
                <IconComponent className="w-10 h-10 divine-glow float-animation delay-1" />
              </div>
              <CardDescription className="text-white/90 text-2xl font-medium">御祈祷による鑑定結果</CardDescription>
            </CardHeader>

            <CardContent className="pt-8">
              <div className="wood-texture backdrop-blur-sm rounded-xl p-8 saisen-shadow">
                <h3 className="text-3xl font-bold text-red-900 mb-6 text-center flex items-center justify-center gap-2">
                  <Sparkles className="w-8 h-8 text-amber-600 sparkle" />
                  御祈祷文
                  <Sparkles className="w-8 h-8 text-amber-600 sparkle delay-2" />
                </h3>
                <div className="text-red-800 leading-relaxed whitespace-pre-line text-center text-lg font-medium">
                  {selectedPrayer}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Guardian Spirit Message */}
          <Card
            className={`shadow-2xl border-4 border-purple-400 bg-gradient-to-br from-purple-50 to-indigo-100 saisen-shadow ${showContent ? "scale-in delay-2" : "opacity-0"}`}
          >
            <CardHeader className="text-center pb-6 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
              <CardTitle className="text-4xl luxury-text flex items-center justify-center gap-3">
                <Sparkles className="w-10 h-10 divine-glow float-animation" />
                守護霊からのメッセージ
                <Sparkles className="w-10 h-10 divine-glow float-animation delay-1" />
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-8">
              <div className="wood-texture backdrop-blur-sm rounded-xl p-8 saisen-shadow">
                <div className="text-purple-900 leading-relaxed whitespace-pre-line text-lg font-medium">
                  {selectedMessage}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className={`text-center space-y-8 ${showContent ? "fade-in-up delay-3" : "opacity-0"}`}>
            <div className="wood-texture backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto saisen-shadow wa-border">
              <h3 className="text-3xl font-bold text-red-900 mb-6 flex items-center justify-center gap-2">
                <Crown className="w-8 h-8 text-amber-600 float-animation" />
                無事に御祈祷をさせていただきました
                <Crown className="w-8 h-8 text-amber-600 float-animation delay-1" />
              </h3>
              <p className="text-red-800 mb-6 text-lg leading-relaxed text-pretty">
                御祈祷は無事に完了いたしました。このメッセージを心に留め、日々の生活に活かしてください。
                神々の御加護があなたと共にありますように。
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-red-400 text-red-800 hover:bg-red-50 bg-transparent text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
                  >
                    新しい御祈祷を受ける
                  </Button>
                </Link>
              </div>
            </div>

            <div className="wood-texture backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto saisen-shadow wa-border">
              <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center justify-center gap-2">
                <MessageCircle className="w-6 h-6 text-green-600" />
                さらに詳しく知りたい方へ
              </h3>
              <p className="text-red-800 mb-6 text-pretty">
                より詳細な霊視や個別のご相談をご希望の方は、公式LINEにてお気軽にお問い合わせください。
                専門の霊能者が直接お答えいたします。
              </p>
              <Button
                onClick={() => {
                  window.open("https://lin.ee/FsxTvpY", "_blank")
                }}
                className="bg-green-500 hover:bg-green-600 text-white text-lg px-12 py-4 hover:scale-105 transition-all duration-300 divine-glow"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                公式LINEで詳しく相談する
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

export default function PrayerResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-red-800 mx-auto mb-4" />
            <p className="text-red-800 text-lg">御祈祷を準備しています...</p>
          </div>
        </div>
      }
    >
      <PrayerResultContent />
    </Suspense>
  )
}