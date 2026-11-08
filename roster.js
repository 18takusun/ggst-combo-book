// Additional playable GGST characters. Route data is sourced per character;
// leave damage empty when the current reference does not provide a useful value.
(() => {
  const dustloop = slug => `https://mail.dustloop.com/w/GGST/${slug}/Combos`;
  const r = (id, starter, topic, recipe, damage, note, options = {}) => ({
    id, name: `${starter}始動`, starter, starterLabel: starter,
    kind: options.kind || "地上通常ヒット", topic, pos: options.pos || "どこでも",
    damage: damage ?? null, recipe, notes: note, source: options.source || "Dustloop（キャラ別コンボ資料）",
    sourceUrl: options.sourceUrl, version: options.version || "2.0以降資料",
    currentSource: options.currentSource !== false, main: !!options.main,
    meter: options.meter ?? 0, oki: options.oki || ""
  });
  const c = (id, name, group, slug, routes, extra = {}) => ({
    id, name, group, title: extra.title || name.toUpperCase(),
    sourceUrl: dustloop(slug), sourceTitle: extra.sourceTitle || `Dustloop – ${name} Combos`,
    videoUrl: extra.videoUrl || "", videoTitle: extra.videoTitle || "",
    description: extra.description || "コンボ候補を始動技ごとに整理。詳しい条件は各ルートの詳細を参照。",
    routes
  });

  window.GGST_EXTRA_CHARACTERS = [
    c("robo-ky", "Robo-Ky", "Season Pass 5", "Robo-Ky", [
      r("rky-5hs", "5HS", "近距離ヒット", "5HS > 214S", null, "単発確認しやすい短い基本ルート。ダウンを取って次の攻めへ。", {main:true,oki:"ダウン後に接近して攻めを継続。"}),
      r("rky-fs", "遠S", "牽制ヒット", "遠S > 5HS > 214S", null, "遠Sから5HSを入れ込む簡単なヒット確認。", {main:true,oki:"214Sでダウン。"}),
      r("rky-2k", "2K", "小技ヒット", "2K > 2D > 214S", null, "小技からの簡単なダウン取り。")
    ]),
    c("jam", "ジャム", "Season Pass 5", "Jam_Kuradoberi", [
      r("jam-p", "5P / 2P", "割り込み", "5P / 2P × 1〜2 > 236K", "50〜56", "5Fの小技から確認。ダッシュ慣性があればPを3回までつなげられる。", {main:true,oki:"近距離ならダッシュ近Sを重ねる。"}),
      r("jam-2k", "2K", "小技ヒット", "2K > 2D > 22K / 22S / 22H", null, "下段始動からダウンを取り、カードを補充する。", {main:true,oki:"カード補充後に攻めを継続。"}),
      r("jam-aa5p", "対空5P", "対空", "対空5P > 近S > 2H > 236H > 2K > 6H > 236S", 91, "Dustloopの基本対空コンボ。相手の高さで近S拾いを調整。", {kind:"対空",oki:"236Sでダウンを取る。"})
    ], {sourceTitle:"Dustloop – Jam Combos", videoUrl:"https://note.com/glad_bonobo9284/n/n56284a659708", videoTitle:"ジャム Ver.2.02コンボまとめ"}),
    c("lucy", "ルーシー", "Season Pass 4", "Lucy", [
      r("lucy-p", "5P / 2P", "割り込み", "5P / 2P > 6P > 214K~S", null, "小技から運び、近距離ならダッシュ近Sの起き攻めを狙える。", {main:true,oki:"ダッシュ近Sで起き攻め。"}),
      r("lucy-k", "5K / 2K", "小技ヒット", "5K / 2K > 2D > 214K~S", null, "K始動の基本ルート。5K先端で2Dが届かない相手・状況に注意。", {main:true,oki:"ダッシュ近Sで起き攻め。"}),
      r("lucy-fs", "遠S", "牽制ヒット", "遠S~S > 5HS > 214K~S", null, "遠Sの連係から運ぶ。遠距離カウンターではS追加入力が届かない場合がある。", {oki:"接近して近Sを重ねる。"})
    ], {sourceTitle:"Dustloop – Lucy Combos"}),
    c("unika", "ユニカ", "Season Pass 4", "Unika", [
      r("unika-p", "5P / 2P", "割り込み", "5P / 2P > 6P > 236K", "52〜54", "近距離での簡単な小技確認。Pを遠くで当てた場合はつながらないことがある。", {main:true}),
      r("unika-cs", "近S", "近距離ヒット", "近S > 2H~2H~6S > ダッシュ5H~2H~4S > 214S", 256, "中距離から壁割りまで狙える基本ルート。壁までの距離でダッシュ量を調整。", {main:true,oki:"壁割り後に起き攻め。"}),
      r("unika-6p", "6P", "対空", "6P > 236K", 66, "6Pからの簡単な確認。相手の高さによって236Kを遅らせる。", {kind:"対空"})
    ]),
    c("venom", "ヴェノム", "Season Pass 4", "Venom", [
      r("venom-p", "5P / 2P", "割り込み", "5P / 2P × n > [4]6H", "38〜75", "連打からの簡単な確認。4回刻む場合はダッシュ慣性が必要。", {main:true}),
      r("venom-2k", "2K", "小技ヒット", "2K > 2D(1) > [2]8H > 5K > 6H > 623{X}", "85〜135", "ボール設置とハードノックダウンを取る基本ルート。距離によって近Sに置き換え。", {main:true,oki:"ボール設置後に起き攻め。"}),
      r("venom-cs", "近S", "近距離ヒット", "近S > 2H > [2]8H > 微ダッシュK > 6H > 623{X}", "155〜175", "ボール設置で起き攻めを作る。遠い近SではH版の溜めが間に合わないことがある。", {oki:"ボール設置後に起き攻め。"})
    ]),
    c("dizzy", "ディズィー", "Season Pass 4", "Queen_Dizzy", [
      r("dizzy-p", "5P / 2P", "割り込み", "5P / 2P > 6P > 214S", "74〜79", "近距離限定の簡単な小技確認。", {main:true}),
      r("dizzy-6p", "6P", "対空", "6P > 214S", 79, "地上・対空6Pからの簡単な確認。", {kind:"対空",main:true}),
      r("dizzy-aa5p", "対空5P", "対空", "対空5P > 5K > 6H > 236H~6H > ダッシュ6H > 214S > 214S", 128, "対空から魚と氷結をつなぐルート。相手の高さを見て5Kを拾う。", {kind:"対空",oki:"Ice Fieldを使った起き攻め。"})
    ]),
    c("slayer", "スレイヤー", "Season Pass 3", "Slayer", [
      r("slayer-cs", "近S", "近距離ヒット", "近S > 遠S > 近S > 遠S > 5K > 2D", null, "簡単にダウンを取る基本コンボ。起き攻めや端運びへ伸ばせる。", {main:true,oki:"ダウン後にKダンディーステップなどで起き攻め。"}),
      r("slayer-5h-ch", "5HS", "カウンターヒット", "CH 5HS > 近S > 5D > 5K > 6H > 214P~P", null, "大きなカウンター時の基本確認。位置によって壁張り付き。", {kind:"カウンターヒット",oki:"壁張り付きなら壁割り。"}),
      r("slayer-cs-ch", "近S", "カウンターヒット", "CH 近S > 5D > 近S > 214P~P > 近S > 2S > 2H > 214P~P", null, "CH近Sからの高リターン。コンボ中にパイルバンカーを多く挟むと追撃できない。", {kind:"カウンターヒット"})
    ]),
    c("aba", "A.B.A", "Season Pass 3", "A.B.A", [
      r("aba-2d", "2D", "小技ヒット", "2D > 214H", 73, "ノーマルモードの簡単なダウン取り。ほぼ全距離で成立。", {main:true,oki:"嫉妬ゲージを25%回復。"}),
      r("aba-k", "5K / 2K", "小技ヒット", "5K / 2K > 2D > 623H > ダッシュ5K > 6H > 236S~6S", "141〜179", "ジェラシーレイジ中の基本ルート。距離によって追撃と壁割りを調整。", {main:true,oki:"壁割りでジェラシーを回復。"}),
      r("aba-cs", "近S", "近距離ヒット", "近S > 遠S > 2H > 214H", "96〜131", "ノーマルモードからジェラシーレイジへ移る基本ルート。", {oki:"214Hでゲージを回復。"})
    ], {videoUrl:"https://www.youtube.com/watch?v=uLCwhnhPcNI",videoTitle:"Nightshifter – A.B.A Ver.2.0 Combo Guide"}),
    c("elphelt", "エルフェルト", "Season Pass 3", "Elphelt_Valentine", [
      r("elphelt-p", "5P / 2P", "割り込み", "5P / 2P > 6P > 214K", 41, "小技からの簡単なダウン取り。カウンターなら2K > 2Dで起き攻めを優先。", {main:true,oki:"214K後に近Sで攻めを継続。"}),
      r("elphelt-cs", "近S", "近距離ヒット", "近S > 2H > 214S > 近S > 6H > 214S~H", null, "地上から2Hで浮かせ、Here I Go!で追撃する基本ルート。", {main:true,oki:"壁張り付き後に壁割り。"}),
      r("elphelt-fs-ch", "遠S", "カウンターヒット", "CH 遠S > 2H > 214H > ダッシュ近S > 2S > 2H > 214S~H", null, "遠Sカウンターから2Hで浮かせる。距離が遠いと近Sを省いて2Sから拾う。", {kind:"カウンターヒット",oki:"壁張り付き後に壁割り。"})
    ], {sourceTitle:"Dustloop – Elphelt Combos"}),
    c("johnny", "ジョニー", "Season Pass 2", "Johnny", [
      r("johnny-cs", "近S", "無敵技ガード後の確反", "近S > 2HS > MFC", null, "ミストファイナーカンセルでコンボを伸ばす近S始動。2.0以降のルート資料と照合中の参考候補。", {main:true,currentSource:false,source:"Dustloop（現行版未照合）",version:"旧版を含む参考",oki:"後続は距離と手札で調整。"}),
      r("johnny-k", "5K / 2K", "小技ヒット", "CH 5K / 2K > 6K > 214[P]66]P[", null, "カウンターヒット時に6Kからミストファイナーで浮かせる。2.0以降は成立を再確認する候補。", {kind:"カウンターヒット",currentSource:false,source:"Dustloop（現行版未照合）",version:"旧版を含む参考"})
    ], {sourceTitle:"Dustloop – Johnny Combos"}),
    c("asuka", "飛鳥＝R♯", "Season Pass 2", "Asuka_R", [
      r("asuka-cs", "近S", "無敵技ガード後の確反", "近S > 2H > 近S > 2H > 5K > 6H", null, "呪文なしの基本ルート。6H後にマナ回復やカード補充を行える。", {main:true,oki:"6H後にマナ回復またはカード補充。"}),
      r("asuka-2d", "2D", "近距離ヒット", "2D > Howling Metron > 22S > 2S > 5H", 94, "最遠距離以外で成立する呪文使用ルート。資料のダメージはKy基準。", {oki:"Howling Metronで有利を取る。"}),
      r("asuka-dust", "5D", "無敵技ガード後の確反", "5[D] > j.H > j.S > jc > j.H > j.S > j.H > jc > j.HH", 190, "共通の溜めダスト追撃。", {kind:"ダスト"})
    ]),
    c("bedman", "ベッドマン？", "Season Pass 2", "Bedman", [
      r("bedman-p", "2P", "割り込み", "2P > 2P（> 2P）> 236S", 46, "小技からエラーをため、攻め直す基本ルート。", {main:true}),
      r("bedman-k", "5K / 2K", "小技ヒット", "5K / 2K > 2D > 236S", "66〜87", "全距離で使いやすいキック始動。近距離は236S、起き攻め重視なら2D止めも選べる。", {main:true,oki:"236S後にエラー追撃を準備。"}),
      r("bedman-cs", "近S", "近距離ヒット", "近S > 遠S > 2H > 236S", "123〜132", "エラーをためつつ端へ運ぶ。遠S先端では2Hが届かないため注意。", {oki:"接近して攻めを継続。"})
    ]),
    c("sin", "シン", "Season Pass 2", "Sin_Kiske", [
      r("sin-cs", "近S", "無敵技ガード後の確反", "近S > 5H > 623S~S > 近S > 6H > 63214P", 202, "ゲージを1本使う基本コンボ。多くのコンボの土台になる。", {main:true,meter:100,oki:"Still Growingで強化して起き攻め。"}),
      r("sin-k", "5K / 2K", "小技ヒット", "5K / 2K > 2D > 63214P", "45〜54", "スタミナを温存してダウンを取り、強化を重ねる。", {main:true,oki:"Still Growing後に起き攻め。"}),
      r("sin-k-meter", "5K / 2K", "ゲージ使用", "5K / 2K > 2D > 236H~H", "83〜103", "スタミナを使い、画面を大きく運ぶ。", {meter:0,oki:"画面端へ運んで攻めを継続。"})
    ]),
    c("bridget", "ブリジット", "Season Pass 2", "Bridget", [
      r("bridget-p", "5P / 2P", "割り込み", "5P / 2P > 5P / 2P > 6K > 236K[6] > K", "60〜70", "距離でパンチ回数を調整する基本確認。", {main:true,oki:"相手を運んで攻めを継続。"}),
      r("bridget-k", "5K / 2K", "小技ヒット", "5K / 2K > 2D > 214S", "36〜47", "簡単にハードノックダウンを取り、セットプレイへ。", {main:true,oki:"起き攻め用のヨーヨー設置。"}),
      r("bridget-cs", "近S", "近距離ヒット", "近S > 2D > 214S", 62, "ダメージを抑えて起き攻めを優先。運び重視なら6H > j.63214Pに変更。", {oki:"起き攻め用のヨーヨー設置。"})
    ]),
    c("testament", "テスタメント", "Season Pass 1", "Testament", [
      r("testament-k", "5K / 2K", "小技ヒット", "5K / 2K > 2D > 236S / 236H", "77〜95", "遠距離まで運ぶ基本ルート。H版なら手動の安全飛びを狙える。", {main:true,oki:"H版から安全飛び。"}),
      r("testament-6p", "6P", "対空", "6P > 236S", 81, "近距離またはダッシュ慣性があるときに成立。遠いと空振りする。", {kind:"対空"}),
      r("testament-cs-ch", "近S", "カウンターヒット", "CH 近S > 6H > 236[H] > ダッシュ近S > 6H > 236236P", 267, "約25%のゲージで壁割りまで運ぶカウンター確認。", {kind:"カウンターヒット",meter:25,oki:"壁割り後にStainを付与。"})
    ]),
    c("baiken", "梅喧", "Season Pass 1", "Baiken", [
      r("baiken-2k", "2K", "小技ヒット", "2K > 2D", null, "2.0では2Dがハードノックダウンに変更。短く安定したダウン取りとして記載。追加追撃は現行資料で確認できたものだけ追加する。", {main:true,currentSource:false,source:"Dustloop Baiken Starter（コンボ更新途上）",version:"2.0簡易候補",oki:"2D後の起き攻め。"}),
      r("baiken-5k", "5K", "近距離ヒット", "5K > 2D", null, "近距離の短いダウン取り候補。2.0以降は長い旧ルートを避ける。", {currentSource:false,source:"Dustloop Baiken Starter（コンボ更新途上）",version:"2.0簡易候補",oki:"2D後の起き攻め。"})
    ], {description:"2.0で多くの旧ルートに変更が入ったため、現行の簡単なダウン取りを先に掲載。高火力ルートは2.0資料が整い次第追加。"}),
    c("happy-chaos", "ハッピーケイオス", "Season Pass 1", "Happy_Chaos", [
      r("hc-k", "5K / 2K", "小技ヒット", "5K / 2K > 2D > H", "62〜78", "2.03資料の簡単な基本ルート。H後は銃と集中力の管理が必要。", {main:true,oki:"状況に応じて射撃で起き攻め。"}),
      r("hc-5p", "5P / 2P", "割り込み", "5P / 2P > H", "38〜41", "素早い小技からの簡単な割り込み確認。", {main:true}),
      r("hc-k-meter", "5K / 2K", "ゲージ使用", "5K / 2K > 6S > 214S~585~2P / 4P", "100〜101", "簡単なゲージ/ポータル使用ダウン取り。レティクル維持が必要。", {meter:0,oki:"レティクルを維持して攻める。"})
    ]),
    c("jack-o", "ジャック・オー", "Season Pass 1", "Jack-O", [
      r("jacko-k", "5K / 2K", "小技ヒット", "5K / 2K > 2D > 236K", "57〜69", "簡単なダウン取り。召喚で起き攻めを追加できる。", {main:true,oki:"236Pで召喚し、サーヴァントを投げる。"}),
      r("jacko-p", "2P / 5P", "割り込み", "2P / 5P > 6H", "49〜56", "距離によって2発目のPにダッシュ慣性が必要。", {main:true,oki:"ハードノックダウン後に召喚。"}),
      r("jacko-aa", "対空5P", "対空", "対空5P > 5K > dc > 236P", 40, "素早い対空からサーヴァント起き攻め。", {kind:"対空",oki:"召喚後にサーヴァントを投げる。"})
    ]),
    c("goldlewis", "ゴールドルイス", "Season Pass 1", "Goldlewis_Dickinson", [
      r("gl-p", "2P / 5P", "割り込み", "2P / 5P > (2P) > 684H", "55〜58", "遠くで当てた5Pはしゃがみ相手に届かないことがある。", {main:true,oki:"684Hでダウン、接近して起き攻め。"}),
      r("gl-6p", "6P", "対空", "6P > 684H", 88, "6Pからダウンを取る簡単な確認。", {kind:"対空",oki:"684Hでダウン。"}),
      r("gl-2k", "2K / 5K", "小技ヒット", "2K / 5K > 684H", null, "通常ヒットでつながる。相手を転ばせて起き攻めする。", {main:true,oki:"684H後に接近して起き攻め。"})
    ]),
    c("ino", "イノ", "ゲーム本編", "I-No", [
      r("ino-2k", "2K", "小技ヒット", "2K > 2D > 214S", 43, "下段からダウンを取る。214Pで音符を設置する選択もある。", {main:true,oki:"音符を使った起き攻め。"}),
      r("ino-cs", "近S", "無敵技ガード後の確反", "近S > 5H > 236H", 105, "確反に使う近Sからの簡単なコンボ。", {main:true}),
      r("ino-fs", "遠S", "牽制ヒット", "遠S > 5H > 236H", 91, "牽制ヒットからハードノックダウンを狙う。遠S先端では5Hが空振りしやすい。", {oki:"ハードノックダウン後に起き攻め。"})
    ]),
    c("anji", "アンジ", "ゲーム本編", "Anji_Mito", [
      r("anji-k", "5K / 2K", "小技ヒット", "5K / 2K > 2D > 236P", 54, "基本は2DからShitsu設置。5K先端ではダッシュ慣性が必要な場合がある。", {main:true,oki:"Shitsuを設置して攻める。"}),
      r("anji-kou", "5K / 2K", "近距離ヒット", "5K / 2K > 2D > 236S > j.K > j.D", "74〜95", "Kouで追撃し、距離が近ければ空中追撃。画面端運びを狙う。", {oki:"空中追撃後に近Sを重ねる。"})
    ]),
    c("gio", "ジオヴァーナ", "ゲーム本編", "Giovanna", [
      r("gio-p", "5P / 2P", "割り込み", "5P / 2P × 2 > 6P", 50, "近距離からの安定した小技確認。さらに214H~6Kで起き攻めへ。", {main:true,oki:"強化214Kから起き攻め。"}),
      r("gio-cs", "近S", "無敵技ガード後の確反", "近S > 2H > 214H~4S[6] > 近S > 2H > 214S", null, "近Sから2Hを繰り返す基本確反。強化214Sは浮かせと追撃を簡単にする。", {main:true,oki:"最後の214S後に起き攻め。"}),
      r("gio-fs", "遠S", "牽制ヒット", "遠S > 5H > 214K", 85, "遠S/2Sからの簡単な確認。", {oki:"強化214K後に起き攻め。"})
    ]),
    c("nago", "名残雪", "ゲーム本編", "Nagoriyuki", [
      r("nago-2k", "2K", "小技ヒット", "2K > 2D > OTG 6K > 236K", 92, "血を使いながら運ぶ基本下段コンボ。先端ではOTG 6Kを2Sに置換。", {main:true,oki:"236K後に攻めを継続。"}),
      r("nago-5k", "5K", "近距離ヒット", "5K > 6K > 214H > OTG 6K > 236K", null, "血液消費を意識しながら距離を運ぶ。先端では追撃距離を確認。", {oki:"236K後に攻めを継続。"}),
      r("nago-2s", "2S", "牽制ヒット", "2S > 214H > OTG 2S > 236K", null, "長い牽制から運び、血液消費を抑える。", {main:true,oki:"236K後に攻めを継続。"})
    ]),
    c("leo", "レオ", "ゲーム本編", "Leo_Whitefang", [
      r("leo-fs", "遠S", "牽制ヒット", "遠S > 5H > 236S", null, "遠Sや5Hからの簡単な基本ルート。", {main:true,oki:"ダッシュして重ね技。"}),
      r("leo-k", "5K / 2K", "小技ヒット", "5K / 2K > 6K > 236S", null, "K始動からダウンを取って攻めを継続。", {main:true,oki:"ダッシュして重ね技。"}),
      r("leo-cs-ch", "近S", "カウンターヒット", "CH 近S > 2H > 214[S]", null, "重いボタンのカウンターからバックターンへ移行。", {kind:"カウンターヒット",oki:"バックターンから攻める。"})
    ]),
    c("zato", "ザトーONE", "ゲーム本編", "Zato-1", [
      r("zato-cs", "近S", "近距離ヒット", "近S > 2S > 5H > 22H", null, "エディ操作を増やさない簡単なコンボ。", {main:true,oki:"エディを安全に召喚して攻める。"}),
      r("zato-k", "5K / 2K", "小技ヒット", "5K / 2K > 2D > 214H", null, "ダウンを取りエディを再召喚。2K先端で2Dが届かないときは省く。", {main:true,oki:"エディ召喚から起き攻め。"})
    ]),
    c("millia", "ミリア", "ゲーム本編", "Millia_Rage", [
      r("millia-p", "2P", "割り込み", "2P > 6P > 236S", "44〜45", "小技からの標準的な割り込み確認。", {main:true}),
      r("millia-k", "2K / 5K", "小技ヒット", "2K / 5K > 2D > 236H", null, "ダウンを取ってディスク起き攻めへ。", {main:true,oki:"236Hからディスク起き攻め。"}),
      r("millia-cs", "近S", "近距離ヒット", "近S > 2H > 214P > 2K > 6H > 214P", null, "確反用の基本ルート。ハードノックダウンと運びを狙う。", {oki:"214Pでハードノックダウン。"})
    ]),
    c("faust", "ファウスト", "ゲーム本編", "Faust", [
      r("faust-2k", "2K", "小技ヒット", "2K(2) > 2D > 236P", 41, "アイテムを使わずダウンを取る簡単な下段ルート。", {main:true}),
      r("faust-5p", "5P", "割り込み", "5P > 6P > 236S", 71, "5Pからの確認。236Sはガードされると危険なのでヒット確認する。", {main:true,oki:"236S後に起き攻め。"}),
      r("faust-cs", "近S", "近距離ヒット", "近S > 2S > 236S[6661] > 近S > 6H > 236S WS > 6H", 202, "画面端に近い位置で壁割りを狙う基本ルート。", {oki:"壁割り後に攻め継続。"})
    ]),
    c("potemkin", "ポチョムキン", "ゲーム本編", "Potemkin", [
      r("pot-2k", "2K", "小技ヒット", "2K > 2D", null, "短くダウンを取る基本ルート。", {main:true,oki:"ダウン後にガルダ起き攻め。"}),
      r("pot-236p", "メガフィスト", "近距離ヒット", "236P > 2K > 623K", 90, "前メガフィストのヒットから簡単な追撃。", {main:true,oki:"623Kでダウン。"}),
      r("pot-214h", "ガルダ", "近距離ヒット", "214H > 632146P", 133, "ガルダヒットから覚醒必殺技につなぐ。", {meter:50})
    ]),
    c("chipp", "チップ", "ゲーム本編", "Chipp_Zanuff", [
      r("chipp-fs", "遠S", "牽制ヒット", "遠S > 236S~236S", 74, "遠距離牽制から簡単な連係。相手がしゃがみなら236Kまで追加。", {main:true}),
      r("chipp-cs", "近S", "近距離ヒット", "近S > 2S > 2H > 236K > j.236P~K", "110〜137", "中央で使う安定した基本ルート。近すぎる画面端では別ルートにする。", {oki:"相手の起き上がりに攻めを継続。"}),
      r("chipp-2d", "2D", "小技ヒット", "2D > 236S~236S", 74, "スイープから簡単にダウンを取る。", {oki:"起き攻めを継続。"})
    ]),
    c("axl", "アクセル", "ゲーム本編", "Axl_Low", [
      r("axl-2k", "2K", "小技ヒット", "2K > 6K > 236S~8", 97, "2.0以降資料に記載された簡単な遠距離締め。", {main:true,oki:"OTG近Sから冬蟷螂の起き攻めを狙う。"}),
      r("axl-5p-aa", "対空5P", "対空", "対空5P > 236S~8", 83, "遠距離対空からRensen。カウンター時は少し遅らせる。", {kind:"対空",main:true}),
      r("axl-2k-hkd", "2K", "小技ヒット", "2K > 2D > 214H > 2H（OTG）", 88, "ダウン後のOTGで締め、冬蟷螂を重ねる。旧版資料の候補。", {currentSource:false,source:"Dustloop（旧版記載・現行未確認）",version:"旧版参考",oki:"OTG後に冬蟷螂の起き攻め。"})
    ], {videoUrl:"https://www.youtube.com/watch?v=MF2QYaBkJEI",videoTitle:"GGST 2.0 Axl Combo Guide"}),
    c("may", "メイ", "ゲーム本編", "May", [
      r("may-cs", "近S", "近距離ヒット", "近S > 2H > [2]8H", 125, "中央で使う簡単な基本コンボ。ダウンを取りやすい。", {main:true,oki:"ダウン後に近Sを重ねる。"}),
      r("may-2k", "2K", "小技ヒット", "2K > 2D > [2]8H", null, "下段から簡単にダウンを取る。", {main:true,oki:"ダウン後に近Sを重ねる。"}),
      r("may-corner", "近S", "画面端", "近S > 2H > [4]6S > 近S > 2H > [4]6S > 近S > 5HS", 243, "2.0で紹介された全キャラ対応の簡単な端基本ルート。", {pos:"画面端",oki:"壁割り後に起き攻め。"})
    ]),
    c("ky", "カイ", "ゲーム本編", "Ky_Kiske", [
      r("ky-2p", "2P", "割り込み", "2P > 6P > 214S", "54〜58", "小技からShock Stateを付与する簡単な確認。", {main:true,oki:"Shock Stateを利用して攻める。"}),
      r("ky-2k", "2K", "小技ヒット", "2K > 2D > 214S", null, "よく使う下段始動。遠すぎる先端では注意。", {main:true,oki:"ダッシュ5Kの安全飛びを狙う。"}),
      r("ky-cs", "近S", "無敵技ガード後の確反", "近S > 2S > 5H > 214K", null, "近Sや遠Sから共通で使える基本ルート。", {oki:"遠距離では236Hで起き攻め。"})
    ], {sourceTitle:"Dustloop – Ky Combos", videoUrl:"https://note.com/toguro45/n/nd4f5aadaa51f",videoTitle:"カイ Ver.2.0 コンボまとめ"})
  ];
})();
