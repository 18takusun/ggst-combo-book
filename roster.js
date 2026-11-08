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
      r("johnny-k", "5K / 2K", "小技ヒット", "CH 5K / 2K > 6K > 214[P]66]P[", null, "カウンターヒット時に6Kからミストファイナーで浮かせる。2.0以降は成立を再確認する候補。", {kind:"カウンターヒット",currentSource:false,source:"Dustloop（現行版未照合）",version:"旧版を含む参考",sourceUrl:"https://mail.dustloop.com/w/GGST/Johnny/Combos"}),
      r("johnny-poke", "遠S / 2S", "牽制ヒット", "遠S / 2S > 214S", null, "長い牽制から短く締めるルート。Ver.2.0向けジョニー解説を追加資料にした候補で、個別の成立確認は未了。", {currentSource:false,version:"2.0候補・現行未確認",source:"Dustloop – Johnny Starter / Ver.2.0 Johnny combo guide",sourceUrl:"https://www.youtube.com/watch?v=ytOdI1lKVwE"})
    ], {sourceTitle:"Dustloop – Johnny Combos",videoUrl:"https://www.youtube.com/watch?v=ytOdI1lKVwE",videoTitle:"Johnny 2.0 Combo Guide – Narutotrickzxtv"}),
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
      r("baiken-5k", "5K", "近距離ヒット", "5K > 2D", null, "近距離の短いダウン取り候補。2.0以降は長い旧ルートを避ける。", {currentSource:false,source:"Dustloop Baiken Starter（コンボ更新途上）",version:"2.0簡易候補",oki:"2D後の起き攻め。"}),
      r("baiken-2h-oki", "2H", "近距離ヒット", "2H > 41236H[X] > 2K > 6K > 236K", null, "Ver.2.0の梅喧専門プレイヤーの動画で紹介されたダウン後の安全飛び準備。相手との距離を見てIAD j.Hを重ねる。", {main:true,oki:"IAD j.Hで安全飛び。",version:"2.0",source:"AxolotlBaiken – Ver.2.0 combos/pressure",sourceUrl:"https://www.youtube.com/watch?v=lhsNb4G-UG4"}),
      r("baiken-tether-throw", "縄付き投げ", "投げ始動", "投げ > 遠S > 5H > 236K > 近S > 41236H > 236236S", null, "縄でつないだ相手への投げから覚醒必殺技までつなぐ、ゲージ使用ルート。", {kind:"ゲージ使用",meter:50,oki:"覚醒必殺技後に攻めを継続。",version:"2.0",source:"AxolotlBaiken – Ver.2.0 combos/pressure",sourceUrl:"https://www.youtube.com/watch?v=lhsNb4G-UG4"})
    ], {description:"2.0で変更された旧ルートは避け、2.0の梅喧専門プレイヤーの動画で確認できるルートを追加。",videoUrl:"https://www.youtube.com/watch?v=lhsNb4G-UG4",videoTitle:"GGST 2.0 Early Baiken Combos/Pressure – AxolotlBaiken"}),
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
      r("anji-kou", "5K / 2K", "近距離ヒット", "5K / 2K > 2D > 236S > j.K > j.D", "74〜95", "Kouで追撃し、距離が近ければ空中追撃。画面端運びを狙う。", {oki:"空中追撃後に近Sを重ねる。"}),
      r("anji-cs", "近S", "近距離ヒット", "近S > 5H > 236H~H", 134, "近Sから風神・凛へつなぐ簡単な基本コンボ。ヒット時は凛、ガード時は別の派生を選ぶ。", {main:true,oki:"凛後に近Sを重ねる。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/Anji_Mito/Combos"}),
      r("anji-poke", "遠S / 2S", "牽制ヒット", "遠S / 2S > 236H~H", "82〜84", "牽制が当たったら風神から凛でダウンを取る。先端の空振り確認時は風神が届く距離か注意。", {main:true,oki:"凛後に起き攻め。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/Anji_Mito/Combos"})
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
      r("zato-k", "5K / 2K", "小技ヒット", "5K / 2K > 2D > 214H", null, "ダウンを取りエディを再召喚。2K先端で2Dが届かないときは省く。", {main:true,oki:"エディ召喚から起き攻め。"}),
      r("zato-p", "5P / 2P", "割り込み", "5P / 2P > 6P", null, "最速の小技で割り込み、6Pでダウンを取る。", {main:true,version:"2.0+",oki:"ダウン後にエディを召喚。",sourceUrl:"https://mail.dustloop.com/w/GGST/Zato-1/Starter"}),
      r("zato-fs", "遠S", "牽制ヒット", "遠S > 22H", null, "地上ヒットした遠SからエディのLeapへつなぐ。エディゲージの残量を確認する。", {version:"2.0+",oki:"Leap後に攻めを継続。",sourceUrl:"https://mail.dustloop.com/w/GGST/Zato-1/Combos"})
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

  // Expand the roster with distinct match situations, prioritizing routes
  // listed in current 2.0+ character combo references.
  const addRoutes = (characterId, routes) => {
    const character = window.GGST_EXTRA_CHARACTERS.find(item => item.id === characterId);
    if (character) character.routes.push(...routes);
  };
  addRoutes("robo-ky", [
    r("rky-abare", "2P", "割り込み", "2P > (2P) > 6K > 214S", null, "近距離で相手の攻めに割り込む。先端では6Kや214Sが届かない場合がある。", {main:true,oki:"214Sでダウンを取る。",version:"2.02"}),
    r("rky-cs", "近S", "近距離ヒット", "近S > 2H > 22H > 近S > 遠S > 5H > 214S", null, "サーヴァントマットを使う近S始動。マット後にゲージを回収しながら追撃する。", {oki:"214Sでダウン。",version:"2.02"})
  ]);
  addRoutes("jam", [
    r("jam-cs", "近S", "近距離ヒット", "近S > 2H > 6H > 236H", null, "近距離の基本確認。カード状況と距離に応じて236Hを214S~Hへ置き換える。", {main:true,oki:"ダウン後にカード補充と起き攻め。",version:"2.0"}),
    r("jam-2d-ch-corner", "2D", "カウンターヒット", "CH 2D > 微歩き近S > 6HH > 236H > 近S > 6HH（壁張り付き） > 強化236K", 205, "画面端で2Dがカウンターヒットしたときの高リターン。微歩きが必要。", {kind:"カウンターヒット",pos:"画面端",version:"2.0"})
  ]);
  addRoutes("lucy", [
    r("lucy-2h", "2H", "対空", "2H > 214H", 71, "対空2Hからの簡単なダウン取り。カウンターヒットかつ先端なら溜め214Hでダメージを伸ばせる。", {kind:"対空",main:true,oki:"ハードノックダウンから起き攻め。",version:"2.0"}),
    r("lucy-2d-ch", "2D", "カウンターヒット", "CH 2D > 214H > j.S（空振り） > ダッシュ近S > 6H > 214H > 近S", null, "爆弾を当てて相手の下をくぐり追撃するカウンター確認。相手キャラによりタイミングが変わる。", {kind:"カウンターヒット",oki:"画面端が近ければ壁割りを狙う。",version:"2.0"})
  ]);
  addRoutes("unika", [
    r("unika-aa5p", "対空5P", "対空", "対空5P > 5H~5H > dc > 2S~2S~6K", 86, "どこでも使える簡単な対空5P確認。", {kind:"対空",main:true,version:"2.0"}),
    r("unika-4k-ch", "4K", "カウンターヒット", "CH 4K > 近S > 2H~2H~6K", 165, "4Kがカウンターヒットしたときの簡単な追撃。", {kind:"カウンターヒット",oki:"6Kでダウンを取って攻める。",version:"2.0"})
  ]);
  addRoutes("venom", [
    r("venom-cs-bnb", "近S", "近距離ヒット", "近S > 2H > [2]8H > ダッシュ近S > 2H > [2]8H > ダッシュ5K / 2K > 6H > 623{X}", null, "ボールを設置しながらダメージと起き攻めを伸ばす近S基本ルート。最遠距離の近Sでは届かない場合がある。", {main:true,oki:"ボール設置後に起き攻め。",version:"2.03"}),
    r("venom-corner-wb", "近S", "画面端", "近S > 6H > 214K > 微ダッシュ遠S > 5H > 214[H]（壁張り付き） > ダッシュ6H（壁割り）", 245, "画面端で壁割りを狙う2.03対応ルート。約37%のテンションを消費。", {pos:"画面端",meter:37,oki:"壁割り後に攻めを継続。",version:"2.03"})
  ]);
  addRoutes("dizzy", [
    r("dizzy-2k", "2K", "小技ヒット", "2K > 2D > 214K", 46, "下段からダウンを取り、魚を使った起き攻めにつなぐ。", {main:true,oki:"Fishを使って起き攻め。",version:"2.0"}),
    r("dizzy-p-ch", "5P / 2P", "カウンターヒット", "CH 5P / 2P > 2K > 2D > 214S", "86 / 91", "小技カウンターからダウンまで確認する。", {kind:"カウンターヒット",oki:"214S後に魚を使った起き攻め。",version:"2.0"})
  ]);
  addRoutes("slayer", [
    r("slayer-5h-ch-confirm", "5H", "カウンターヒット", "CH 5H > 近S > 5[D] > 5K > 6H > 214P~P", null, "5Hなどの大きなカウンターヒットから伸ばす基本確認。中央から壁張り付きまで運べる。", {kind:"カウンターヒット",main:true,oki:"壁張り付きなら壁割り。",version:"2.03"}),
    r("slayer-2d-ch", "2D", "カウンターヒット", "CH 2D > 近S > 5[D] > 5K > 6H > 214P~P", null, "2Dカウンター時に近Sで拾う。画面端が近い場合は壁張り付きまで狙える。", {kind:"カウンターヒット",version:"2.03"})
  ]);
  addRoutes("aba", [
    r("aba-fs", "遠S", "牽制ヒット", "遠S > 2H > 214H", 96, "ノーマルモードの遠S確認。嫉妬ゲージを大きく回復する。", {main:true,oki:"214Hでダウンし、嫉妬ゲージを回復。",version:"2.0"}),
    r("aba-5h-ch", "5H", "カウンターヒット", "CH 5H > 236S~6S", "65〜116", "ノーマルモードの5Hカウンター確認。距離を問わず必殺技までつながり、嫉妬ゲージも回復する。", {kind:"カウンターヒット",version:"2.0"})
  ]);
  addRoutes("elphelt", [
    r("elphelt-2h", "2H", "近距離ヒット", "2H > 214S > 近S > 6H > 214S~H", null, "2Hで浮かせてHere I Go!で追撃する基本形。近S拾いが難しい場合は2Kに置き換える。", {main:true,oki:"壁張り付きから壁割り。",version:"2.0"}),
    r("elphelt-2d-ch", "2D", "カウンターヒット", "CH 2D > 214H > j.S（空振り） > ダッシュ近S > 6H > 214H > 近S", null, "2Dカウンターから爆弾を当て、相手の下をくぐって追撃する。相手キャラによりタイミングが変わる。", {kind:"カウンターヒット",oki:"画面端なら壁割りを狙う。",version:"2.0"})
  ]);
  addRoutes("asuka", [
    r("asuka-5d-rc", "5D", "ゲージ使用", "5D > 66RRC > 22S > ダッシュ近S > 2H > ダッシュ近S > 2H > 近S > 2H > Empty Chant（壁張り付き） > 22S > 5H（壁割り）", 152, "溜めていないダストから50%テンションで中央から壁割りへ。コンボ中にマナを大きく回復できる。", {kind:"ゲージ使用",meter:50,oki:"マナを回復して壁割り。",version:"2.0"}),
    r("asuka-6h", "6H", "近距離ヒット", "6H > 214H", null, "呪文なしで使える簡単な重い攻撃からの追撃。マナ回復やカード補充に切り替えやすい。", {main:true,oki:"マナ回復またはカード補充。",version:"2.0"})
  ]);
  addRoutes("bedman", [
    r("bedman-fs-ch", "遠S", "カウンターヒット", "CH 遠S > 2K > 2D > 236S", 109, "遠Sカウンターから下段を経由する簡単な確認。", {kind:"カウンターヒット",oki:"236S後にエラー追撃を準備。",version:"2.0"}),
    r("bedman-corner", "近S", "画面端", "近S > 5H > 236H > ダッシュ近S > 遠S > 5H > 236H（壁張り付き） > ダッシュ5H（壁割り）", 219, "画面端で使う簡単な壁割りルート。2回目の近Sは省略可能。", {pos:"画面端",oki:"壁割り後に攻めを継続。",version:"2.0"})
  ]);
  addRoutes("sin", [
    r("sin-6k", "6K", "近距離ヒット", "6K > 近S > 6H > 236H", 119, "近距離6Kからの追撃。遠い場合は近Sを5Kに変え、最後をエルクハントにする。", {main:true,version:"2.0+"}),
    r("sin-cs-route", "近S", "近距離ヒット", "近S > 2S / 遠S > 2H > 236K", null, "近Sから共通で使える基本ルート。スタミナを残しながら運ぶ。", {oki:"スタミナを見ながら次の攻めへ。",version:"2.0+"})
  ]);
  addRoutes("bridget", [
    r("bridget-fs", "遠S", "牽制ヒット", "遠S > S > 236K[6] > K", 94, "遠Sから運び、攻めを継続する簡単な確認。", {main:true,oki:"相手を運びながら攻めを継続。",version:"2.02"}),
    r("bridget-2k-carry", "2K", "小技ヒット", "2K > 2D > 236K[6]~K", 67, "2Dから遠くへ運びたいときの選択。214S締めよりダメージと運びを優先。", {oki:"位置を運んで攻めを継続。",version:"2.02"})
  ]);
  addRoutes("testament", [
    r("testament-air", "空中j.H", "空中始動", "IAD j.H > j.D > j.236H > ダッシュ5K > 6H > 214P", 141, "空中ダッシュからの基本ジャンプ攻撃コンボ。", {kind:"空中始動",oki:"214Pでダウン。",version:"2.0"}),
    r("testament-stain-poke", "遠S", "牽制ヒット", "ステイン遠S > ダッシュ5K > 6H > 236S", 123, "ステイン付与中の遠Sから、距離を保ったままダウンを取る。", {oki:"236S後に起き攻め。",version:"2.0+"})
  ]);
  addRoutes("happy-chaos", [
    r("hc-p-ch", "5P / 2P", "カウンターヒット", "CH 5P / 2P > 6S > 214S~52~2P / 4P", "63 / 60", "小技カウンターからポータルを使って短くダウンを取る。立ち状態の相手限定。", {kind:"カウンターヒット",oki:"レティクルを維持して攻める。",version:"2.03"}),
    r("hc-fs-ch", "遠S", "カウンターヒット", "CH 遠S / 2S > 214S~585~4S > 近S > 6K > 2K > 6S > 214S~5H（壁張り付き） > 632146S", null, "遠Sカウンターからポータルを使って中央から壁割りへ運ぶ。弾と集中力の残量に注意。", {kind:"カウンターヒット",meter:50,oki:"壁割り後に攻めを継続。",version:"2.03"})
  ]);
  addRoutes("jack-o", [
    r("jacko-servant", "近S", "近距離ヒット", "近S > 214K（サーヴァント設置中）", null, "サーヴァントが場にいるときはAttack Commandで追撃できる。サーヴァントを準備できている場面向け。", {main:true,oki:"サーヴァントを使って起き攻め。",version:"2.0+"}),
    r("jacko-aa5p-ch", "対空5P", "対空", "対空5P（カウンター） > ダッシュ近S > 2H > 236K", null, "対空5Pが高めにカウンターしたときに近Sで拾う候補。距離と高さに注意。", {kind:"対空",currentSource:false,version:"候補・現行資料で再確認待ち"})
  ]);
  addRoutes("goldlewis", [
    r("gl-2p-ch", "2P", "カウンターヒット", "CH 2P > 268H > 684H", 78, "2Pカウンターからの簡単な追撃。", {kind:"カウンターヒット",oki:"684Hでダウンを取る。",version:"2.02"}),
    r("gl-aa5p", "対空5P", "対空", "対空5P > ダッシュ近S > 2H > 486H > 684H", "99〜102", "対空5Pからの追撃。近Sで拾うため相手との距離に注意。", {kind:"対空",oki:"684H後に起き攻め。",version:"2.02"})
  ]);
  addRoutes("ino", [
    r("ino-2s", "2S", "牽制ヒット", "2S > 236S", null, "リーチの長い2Sから音符を使ってダウンを取る。相手が立ち状態なら特に使いやすい。", {main:true,oki:"音符を使って起き攻め。",version:"2.0+"}),
    r("ino-2d-ch-corner", "2D", "カウンターヒット", "CH 2D > 214S > j.236H~H > j.S > jc j.S > j.236S（壁張り付き） > 214K~6", 173, "画面端付近の2Dカウンターから壁割りを狙う。", {kind:"カウンターヒット",pos:"画面端",oki:"壁割り後に起き攻め。",version:"2.0"})
  ]);
  addRoutes("gio", [
    r("gio-2d-ch", "2D", "カウンターヒット", "CH 2D > 214H~6S > 遅らせ遠S > 2H > 214H~4S > 遅らせ近S > 2H > 遅らせ214S（壁張り付き）", null, "2.0資料にある高リターン候補。コンボページの更新中につき現行版での成立は再確認待ち。ダッシュと遅らせ入力の調整が必要。", {kind:"カウンターヒット",oki:"壁張り付き後に壁割りまたは起き攻め。",currentSource:false,version:"2.0資料・現行再確認待ち"}),
    r("gio-roundstart-ch", "5K / 2K", "カウンターヒット", "ラウンド開始CH 5K / 2K > 2D > 214K", "71 / 86", "2.0資料にあるラウンド開始距離の候補。現行版での成立は再確認待ち。ノーマルヒットではつながらない。", {kind:"カウンターヒット",currentSource:false,version:"2.0資料・現行再確認待ち"})
  ]);
  addRoutes("nago", [
    r("nago-2d", "2D", "小技ヒット", "2D > 214H > OTG 6K > 236K", 92, "血液を調整しながらダウンを取る下段ルート。2D自体がダウンを取るので、状況によって214Hは省略できる。", {main:true,oki:"236K後に攻めを継続。",version:"2.0+"}),
    r("nago-2d-ch", "2D", "カウンターヒット", "CH 2D > 5K > 623H > 236K > 2K > 近S > 遠S連打（壁張り付き） > 6H", null, "カウンター時に中央から壁張り付きまで運ぶ。血液消費を見ながら使う。", {kind:"カウンターヒット",version:"2.0+"})
  ]);
  addRoutes("leo", [
    r("leo-2s", "2S", "牽制ヒット", "2S > 6H > 214[S] > 微歩き bt.P / bt.S > bt.H > 214H", null, "近距離の2Sからバックターンへ移行。距離が近い場合に使う。", {main:true,oki:"バックターンから攻めを続ける。",version:"2.0+"}),
    r("leo-jh-punish", "空中j.H", "空中始動", "低めのj.H（カウンター） > 近S > 2H > 214[S] > 微歩き bt.P / bt.S > bt.H > エンダー", null, "対空や確反でj.Hがカウンターしたときの追撃例。高さと相手の位置で調整が必要。", {kind:"空中始動",oki:"バックターンから起き攻め。",version:"2.0+"})
  ]);
  addRoutes("millia", [
    r("millia-2k-ch", "2K", "カウンターヒット", "CH / しゃがみヒット 2K > 6H > 214P", 78, "カウンターまたは相手のしゃがみ中に当たったときの追撃。通常ヒットの2D締めよりダメージを優先。", {kind:"カウンターヒット",version:"2.0"}),
    r("millia-6k", "6K", "近距離ヒット", "6K > 2K > 2D", 60, "6K中段から下段をつないでダウンを取る基本確認。", {oki:"2D後にディスク起き攻め。",version:"2.0"})
  ]);
  addRoutes("faust", [
    r("faust-air", "空中j.S", "空中始動", "j.S > j.H > 近S > 2D", 101, "空中からの簡単な確認。相手がしゃがんでいるとj.Hが空振りすることがある。", {kind:"空中始動",oki:"2Dでダウンを取る。",version:"2.0+"}),
    r("faust-dust", "5D", "ダスト", "5[D] > 8 > j.D > j.P > 88 > j.S > 88 > j.S > j.DD", 209, "どこでも狙える簡単な溜めダスト追撃。", {kind:"ダスト",version:"2.0+"})
  ]);
  addRoutes("potemkin", [
    r("pot-6k", "6K", "近距離ヒット", "6K > 623K", 95, "6Kからの簡単なダウン取り。", {main:true,oki:"起き上がりにガルダを重ねる。",version:"2.0+"}),
    r("pot-6k-ch", "6K", "カウンターヒット", "CH 6K > 214H > 632146P", 181, "6Kカウンターから覚醒必殺技につなぐ。", {kind:"カウンターヒット",meter:50,oki:"壁割り後に攻めを継続。",version:"2.0+"})
  ]);
  addRoutes("chipp", [
    r("chipp-jumpin", "空中j.S / j.H", "空中始動", "j.S / j.H > 5K > 2D", null, "ジャンプ攻撃を浅めに当てたときの簡単なダウン取り。", {kind:"空中始動",oki:"2D後に起き攻め。",version:"2.0+"}),
    r("chipp-2h-ch", "2H", "カウンターヒット", "CH 2H > 236[P] > 壁走り追撃", null, "2Hカウンターから壁走りへ移行。壁までの距離を見てルートを選ぶ。", {kind:"カウンターヒット",oki:"壁割り後に攻めを継続。",version:"2.01"})
  ]);
  addRoutes("axl", [
    r("axl-cs-bnb", "近S / 遠S", "近距離ヒット", "近S / 遠S > 2H > 214H > 2H（OTG）", null, "近距離の斬り攻撃からWinter Mantisで拾う基本ルート。遠S先端では214Hが届かない場合がある。", {main:true,oki:"OTG後に起き攻め。",version:"2.0+"}),
    r("axl-2p", "2P", "割り込み", "2P > 214H > 2H（OTG）", null, "小技で割り込んだ後にWinter Mantisで拾う。2H OTGが届く距離で使う。", {oki:"OTG後に起き攻め。",version:"2.0+"})
  ]);
  addRoutes("may", [
    r("may-2s-ch", "2S", "カウンターヒット", "CH 2S > [4]6S~P > 623K > 微ダッシュ2K > 6H > [2]8H > [4]6S~P（壁張り付き） > 2H", 135, "画面中央の2Sカウンター確認。相手がしゃがみ状態なら安全なダウン取りを優先できる。", {kind:"カウンターヒット",oki:"2Hで壁割りできない距離なら[2]8Hで起き攻め。",version:"2.0"}),
    r("may-dust", "5D", "ダスト", "5[D] > 8 > j.H > jc > j.H > j.S > j.H > jc > j.H > j.H", null, "どこでも使いやすい溜めダスト追撃。", {kind:"ダスト",version:"2.0+"})
  ]);
  addRoutes("ky", [
    r("ky-jh-rc", "空中j.H", "ゲージ使用", "j.H > 近S > 5H > 236K(2) > RRC > ダッシュ近S > 6H > 214S（壁張り付き） > 214S（壁割り）", 205, "中央から壁割りまで運ぶ50%テンション使用ルート。", {kind:"ゲージ使用",meter:50,oki:"壁割り後に攻めを継続。",version:"2.0+"}),
    r("ky-6p-ch", "6P", "カウンターヒット", "CH 6P > 214S", null, "対空や牽制6Pのカウンター確認。通常ヒットより高いリターンを狙う。", {kind:"カウンターヒット",oki:"214S後に起き攻め。",version:"2.0+"})
  ]);
  addRoutes("jam", [
    r("jam-dust-meter", "5D", "ゲージ使用", "5D > 66RRC~6HH > 214S~X > 近S > dc.en236S > 近S > 6H > 22K > 壁張り付き > en236K（壁割り）", 172, "角付近でSカードを所持しているときの50%テンション使用ルート。", {kind:"ゲージ使用",pos:"画面端",meter:50,oki:"壁割り後に攻めを継続。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Jam_Kuradoberi/Combos"}),
    r("jam-ch-aa6p", "6P", "対空カウンターヒット", "対空CH 6P > 236S > 2K > 6H > 214S~H", 116, "高めの対空カウンターから運びと起き攻めを両立。高さが足りない場合は短い締めを選ぶ。", {kind:"対空",oki:"214S~H後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Jam_Kuradoberi/Combos"})
  ]);
  addRoutes("lucy", [
    r("lucy-sc-throw", "SC中の投げ", "投げ始動", "SC投げ > 66遅らせ近S > 2S~S", 94, "Short Circuit中の投げからの簡単な追撃。2S~Sから214[H]を重ねる選択もある。", {oki:"214[H]の自動重ねを狙える。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Lucy/Combos"}),
    r("lucy-sc-throw-corner", "SC中の投げ", "画面端", "SC投げ > 近S > 遠S~S > 5H > 214K WS > 214[H]", 142, "画面端でShort Circuit中の投げからダメージと起き攻めを伸ばす。", {pos:"画面端",oki:"214[H]で起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Lucy/Combos"}),
    r("lucy-dust", "5D", "ダスト", "5[D]~8 > j.H > jc > j.H > j.S > 遅らせj.K > jc > j.SS", 162, "全キャラ共通の溜めダスト追撃。少し簡単にするなら最後をj.KKにする。", {kind:"ダスト",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Lucy/Combos"})
  ]);
  addRoutes("unika", [
    r("unika-cs-wallbreak", "近S", "近距離ヒット", "近S > 2H~2H~6S > ダッシュ5H~2H~4S > 壁張り付き > 214S", 256, "中央から壁割りまで運ぶ近Sの基本ルート。最初の2Hは近距離で当てる。", {main:true,oki:"壁割り後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Unika/Combos"}),
    r("unika-5h", "5H", "近距離ヒット", "5H > 214S", 105, "ノーマルヒット時の簡単なダウン取り。", {oki:"214S後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Unika/Combos"}),
    r("unika-2d-ch", "2D", "カウンターヒット", "CH 2D > 5H~5H dc > 5H~2H~6K", 148, "2Dカウンターからの簡単な追撃。より遠くからならダッシュを加えた延長を選ぶ。", {kind:"カウンターヒット",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Unika/Combos"})
  ]);
  addRoutes("venom", [
    r("venom-jd", "j.D", "中段ヒット", "j.D > [2]8H > 5K / 近S > 6H > 623[X]", "105〜122", "中段からボール設置を伴うダウン取り。近Sは近距離で選ぶ。", {oki:"ボール設置から起き攻め。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/Venom/Combos"}),
    r("venom-light-ch", "5P / 2P / 5K / 2K", "カウンターヒット", "CH 5P / 2P / 5K / 2K > 6K > [2]8H > 近S > 6H > 623{X}", 104, "小技カウンターを6Kで拾う。始動によって6Kのタイミングを練習する。", {kind:"カウンターヒット",oki:"623{X}後にボール起き攻め。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/Venom/Combos"}),
    r("venom-k-ch", "2K / 5K", "カウンターヒット", "CH 2K / 5K > 6H > [2]8S > ダッシュ2K > 6H > 623{X}", "114 / 124", "近距離のカウンター始動。2Kと5Kの順にダメージを記載。", {kind:"カウンターヒット",oki:"623{X}後にボール起き攻め。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/Venom/Combos"})
  ]);
  addRoutes("dizzy", [
    r("dizzy-fs-ch-oki", "遠S", "カウンターヒット", "CH 遠S(1〜2) > 236S~S > 66 2D", "107〜112", "ダメージよりダウンとノート起き攻めを優先するカウンター確認。", {kind:"カウンターヒット",oki:"2D後にノート起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Queen_Dizzy/Combos"}),
    r("dizzy-cs-ch-midscreen", "近S", "カウンターヒット", "CH 近S > 2H > 214H > 236H > ダッシュ近S > 6H > 214S（壁張り付き） > 214H", 254, "中央から壁割りまで運ぶ近Sカウンター。214Hから236Hを素早く入力する。", {kind:"カウンターヒット",oki:"壁割り後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Queen_Dizzy/Combos"}),
    r("dizzy-2s", "2S", "牽制ヒット", "2S > 5H(3) > ダッシュ6H > 214S", 153, "中距離2Sから安定した運びを狙う。", {oki:"214S後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Queen_Dizzy/Combos"})
  ]);
  addRoutes("aba", [
    r("aba-2d-ch-nm", "2D", "カウンターヒット", "NM CH 2D > 214K > 近S > dc > 近S > 6H > 遅らせ214H", 136, "ノーマルモードでJealousyを温存するカウンター確認。", {kind:"カウンターヒット",oki:"214H後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/A.B.A/Combos"}),
    r("aba-jr-2d", "2D", "Jealous Rage", "JR 2D > 623H > ダッシュ近S > 6H > 623H", 198, "Jealous Rage中の簡単な高火力ルート。Jealousyを多く消費する。", {oki:"623H後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/A.B.A/Combos"}),
    r("aba-air-k", "空中j.K", "空対空", "空対空j.K > 66 > j.S > 5K > 236S~6S", 82, "空中の相手を追いかけて起き攻めへつなぐ。最大距離では空中追撃が届かないことがある。", {kind:"対空",oki:"236S~6S後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/A.B.A/Combos"})
  ]);
  addRoutes("elphelt", [
    r("elphelt-p-ch", "5P / 2P", "カウンターヒット", "CH 5P / 2P > 近S > 5H > 214S~S > ダッシュ6D", 92, "小技カウンターから近Sで拾う。遠めの近Sが難しければ2Hに替える。", {kind:"カウンターヒット",oki:"6D後に攻めを継続。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Elphelt_Valentine/Combos"}),
    r("elphelt-aa5p", "対空5P", "対空", "対空5P > 6H > 214H > ダッシュ近S > 2S > 2H > 214S~K~H", 103, "対空5Pから大きく運ぶ追撃。入力を先行して準備する。", {kind:"対空",oki:"壁張り付きから壁割り。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Elphelt_Valentine/Combos"})
  ]);
  addRoutes("bedman", [
    r("bedman-cs-install", "近S", "ゲージ使用", "近S > 2H > 632146S > 5K > 236H", 133, "ミッドスクリーンでinstallを発動してエラーと起き攻めを得る。5Kが遅れるとつながらない。", {kind:"ゲージ使用",meter:50,oki:"エラー攻めへ移行。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Bedman/Combos"}),
    r("bedman-fs-install", "遠S", "ゲージ使用", "遠S > 2H > 632146S > 5K > 236H", 121, "遠Sからinstallへつなぐ。遠S先端では2Hが届かないため、短い遠Sなら使用。", {kind:"ゲージ使用",meter:50,version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Bedman/Combos"})
  ]);
  addRoutes("sin", [
    r("sin-cs-overdrive", "近S", "ゲージ使用", "近S > 5H / 2H > 623S~S > 近S > 6H > 632146H > 6H > 6H", 212, "テンション50%で壁まで運び、壁割り後に起き攻めするルート。", {kind:"ゲージ使用",meter:50,oki:"壁割り後に攻めを継続。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/Sin_Kiske/Combos"}),
    r("sin-corner-hoof", "近S / 遠S / 2S", "画面端", "近S / 遠S / 2S > 2H > 214S, 5K / 2K > 6H > 623S（壁張り付き）", "208〜239", "画面端限定、スタミナを使わず壁割りを狙うルート。", {pos:"画面端",oki:"壁割り後に起き攻め。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/Sin_Kiske/Combos"})
  ]);
  addRoutes("bridget", [
    r("bridget-2p-ch-oki", "2P", "カウンターヒット", "CH 2P > 2K > 2D > 214S", 46, "2Pカウンターからヨーヨー設置を伴うハードノックダウン。5Pカウンターではつながらない。", {kind:"カウンターヒット",oki:"214S後にヨーヨー起き攻め。",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Bridget/Combos"}),
    r("bridget-corner-2k", "2K", "画面端", "2K > 6H > j.236H > 6H > j.214K > 近S > 6H（壁張り付き） > j.63214P（壁割り）", 168, "画面端で2Kから高火力の壁割り。", {pos:"画面端",oki:"壁割り後に起き攻め。",version:"2.03",sourceUrl:"https://mail.dustloop.com/w/GGST/Bridget/Combos"})
  ]);
  addRoutes("testament", [
    r("testament-stain-k", "ステイン中の2K / 5K", "ゲージなし", "ステイン中2K / 5K > ダッシュ近S > 214[P] > 5K dc > 近S > 6H > 214[P]", 128, "ステイン状態の小技からダッシュキャンセルで拾う。再度のステイン付与とダッシュ重ねを狙う。", {oki:"ステインを付与し近Sで重ねる。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Testament/Combos"}),
    r("testament-cs-ch-far", "近S", "カウンターヒット", "遠距離CH 近S > 6H > 236[H] > ダッシュ近S > 214[P] > 5K dc > 近S > 遅らせ2S > 236S（壁張り付き） > 214P（壁割り）", 241, "中央より遠い位置から25%程度のゲージで壁割りまで運ぶ。難しいため距離があるカウンター用。", {kind:"カウンターヒット",meter:25,oki:"壁割りでステイン付与。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Testament/Combos"})
  ]);
  addRoutes("baiken", [
    r("baiken-hkab-switch", "空中ダッシュ236S", "画面端入れ替え", "空中ダッシュ236S > 近S > 6H > 41236H[X] > 5K > j.236K > 5K > 6H > 41236H~H", null, "梅喧専門プレイヤーのVer.2.0動画で紹介された入れ替えルート。距離と高さの確認が必要。", {pos:"画面端",version:"2.0",oki:"画面端入れ替え後に攻めを継続。",source:"AxolotlBaiken – Ver.2.0 combos/pressure",sourceUrl:"https://www.youtube.com/watch?v=lhsNb4G-UG4"})
  ]);
  addRoutes("happy-chaos", [
    r("hc-p-ch-double", "5P / 2P", "カウンターヒット", "CH 5P / 2P > 6S > 214S~585~2P / 4P > 214S~585~2P / 4P", 83, "立ち状態の相手限定。585を2回使い、テンション増加も得る。", {kind:"カウンターヒット",version:"2.03",sourceUrl:"https://mail.dustloop.com/w/GGST/Happy_Chaos/Combos"}),
    r("hc-aa-p-corner", "対空5P", "対空", "対空5P > 66 2K > 6K > 214S~585~2P / 4P > 66近S > 6S > 214S~585~2P / 4P（壁張り付き）", "74〜76", "画面端で対空5Pから左右を入れ替えて壁張り付きを狙う。位置に応じて最後の585を調整する。", {kind:"対空",pos:"画面端",version:"2.03",sourceUrl:"https://mail.dustloop.com/w/GGST/Happy_Chaos/Combos"})
  ]);
  addRoutes("jack-o", [
    r("jacko-p-meter", "2P / 5P", "ゲージ使用", "2P / 5P > 6H(1) > 632146P", "79 / 81", "小技から50%テンションで覚醒必殺技へ。近距離で安全な確反を取る。", {kind:"ゲージ使用",meter:50,version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Jack-O/Combos"}),
    r("jacko-cs-ch", "近S", "カウンターヒット", "CH 近S > 2H > 236P > 5K（サーヴァント当たり）dc > 近S > 6H(1) > 236[P]", "132〜150", "サーヴァントを使わずに始める高運びルート。締め方で起き攻めと距離を選べる。", {kind:"カウンターヒット",oki:"236[P]でサーヴァントを設置。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Jack-O/Combos"})
  ]);
  addRoutes("goldlewis", [
    r("gl-6p-ch-extended", "6P", "カウンターヒット", "CH 6P > 486H > ダッシュ5K > 684H", 145, "6Pカウンターから486Hで浮かせて追撃する。", {kind:"カウンターヒット",oki:"684H後に起き攻め。",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Goldlewis_Dickinson/Combos"}),
    r("gl-aa2p", "対空2P / 5P", "対空", "対空2P / 5P > ダッシュ近S > 2H > 486H >（ダッシュ5K >）684H", "99〜102", "対空小技を近Sで拾う。カウンターヒットなら近Sへのリンクが安定する。", {kind:"対空",oki:"684H後に起き攻め。",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Goldlewis_Dickinson/Combos"})
  ]);
  addRoutes("ino", [
    r("ino-jumpin-corner", "空中j.S / j.H", "画面端", "j.S / j.H > 6H(2) > 遅らせ214K~6 > 微歩き6H(2) > 214K~6 > 6H(2) > 214K~6 > 壁張り付き > 214S", "190〜224", "画面端で高火力を狙うループ。最後の6Hを5Hに替えると少し安定する。", {kind:"空中始動",pos:"画面端",oki:"214S後に起き攻め。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/I-No/Combos"}),
    r("ino-6h-ch", "6H", "カウンターヒット", "CH 6H(2) > 214S > j.236H~H > j.H > jc j.H > j.236S（壁張り付き） > 214S", 207, "ミッドスクリーンから壁割りまで運ぶ対空・確反向けのカウンター確認。", {kind:"カウンターヒット",oki:"壁割り後に起き攻め。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/I-No/Combos"})
  ]);
  addRoutes("gio", [
    r("gio-2s-ch", "2S", "カウンターヒット", "CH 2S(1) > 5H > 236K > 5K > 214K", 105, "2Hが届かない間合いで2Sがカウンターしたときの短い追撃。2S初段でキャンセルする。", {kind:"カウンターヒット",oki:"214K後に起き攻め。",version:"2.0",currentSource:false,source:"Dustloop（2.0資料・現行照合待ち）",sourceUrl:"https://mail.dustloop.com/w/GGST/Giovanna/Combos"})
  ]);
  addRoutes("nago", [
    r("nago-5k-ch", "5K", "カウンターヒット", "CH 5K > 214H > 遅らせ623H > 236K > 2K > 近S > f.SSS（壁張り付き） > 6H", "195〜211", "血液量に応じてダメージが変動。遅らせ623Hで拾い、血液をf.SSSと6Hで戻す。", {kind:"カウンターヒット",version:"2.03",oki:"壁割り後に攻めを継続。",sourceUrl:"https://mail.dustloop.com/w/GGST/Nagoriyuki/Combos"}),
    r("nago-5k-bsu", "5K", "近距離ヒット", "5K > 6K > 623P", "114〜127", "近距離でBloodsucking Universeへつなぐ。近すぎる間合いで使う。", {oki:"投げ後に血液を回復して攻める。",version:"2.03",sourceUrl:"https://mail.dustloop.com/w/GGST/Nagoriyuki/Combos"})
  ]);
  addRoutes("millia", [
    r("millia-6k-damage", "6K", "近距離ヒット", "6K > 2K > 6H > 214P", 96, "6Kからダウンを取り、236H締めよりダメージを優先する。", {oki:"214Pでハードノックダウン。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Millia_Rage/Combos"}),
    r("millia-6k-meter", "6K", "ゲージ使用", "6K > 2K > 6H > mc 236236S > ダッシュ近S > 6H > mc 214P", 155, "テンションを使い、ダメージと端運びを伸ばす。", {kind:"ゲージ使用",meter:50,oki:"214Pでハードノックダウン。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Millia_Rage/Combos"})
  ]);
  addRoutes("faust", [
    r("faust-fs-ch", "遠S", "カウンターヒット", "CH 遠S > 236S > 近S > j.S > j.H > 空中ダッシュj.H > 5K > 6H", 186, "ミッドスクリーンで壁が近いとき、遠Sカウンターを確認して壁張り付きまで運ぶ。", {kind:"カウンターヒット",pos:"画面中央",oki:"6Hで壁割り。",version:"2.01",sourceUrl:"https://mail.dustloop.com/w/GGST/Faust/Combos"}),
    r("faust-meter-corner", "遠S", "ゲージ使用", "遠S > 2H > 66RRC~236S[6661] > 近S > 2S > 236S（壁張り付き） > 6H（壁割り）", 179, "50%ゲージで壁割りを狙う。近距離始動と画面端の位置が必要。", {kind:"ゲージ使用",meter:50,pos:"画面端付近",oki:"壁割り後に攻めを継続。",version:"2.01",sourceUrl:"https://mail.dustloop.com/w/GGST/Faust/Combos"})
  ]);
  addRoutes("potemkin", [
    r("pot-2d-ch-easy", "2D", "カウンターヒット", "CH 2D > 623K > 遅らせ214H", "80〜91", "簡単なカウンター確認。214Hを遅らせて起き上がりに重ねる。", {kind:"カウンターヒット",oki:"ガルダ重ねまたは安全飛び。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/Potemkin/Combos"}),
    r("pot-2d-ch-cs", "2D", "カウンターヒット", "CH 2D > 214H > 近S > 2H > 214H > 2K > 623K", 157, "近距離で2Dがカウンターしたときの伸ばし。遠いと近Sか2Hが届かない。", {kind:"カウンターヒット",oki:"623K後に攻めを継続。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/Potemkin/Combos"})
  ]);
  addRoutes("chipp", [
    r("chipp-2s-carry", "近S", "近距離ヒット", "近S > 2S > 5H > 236P~K", "99〜129", "画面中央で使う簡単な代替ルート。236K締めより起き攻めを取りやすい。", {main:true,oki:"相手の近くに着地して起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Chipp_Zanuff/Combos"}),
    r("chipp-dust", "5D", "ダスト", "5[D]~8 > 遅らせj.D > j.K(1) > jc9 > j.D > j.K(1) > j.D > j.K(1) > j.D > j.D", 140, "調整不要の簡単な溜めダスト。Positive Bonusを得る壁割り用。", {kind:"ダスト",version:"2.01",sourceUrl:"https://mail.dustloop.com/w/GGST/Chipp_Zanuff/Combos"})
  ]);
  addRoutes("may", [
    r("may-fs-aa-ch", "遠S", "空中カウンターヒット", "空中CH 遠S > [4]6S~6K > j.K > 近S > 6H > [2]8H > 2S > [4]6S > 壁張り付き > 6[H]", 197, "空中の相手に遠Sがカウンターしたときの壁割り。多くの高さで成立する。", {kind:"対空",pos:"画面中央",oki:"壁割り後に攻めを継続。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/May/Combos"}),
    r("may-dolphin-h-ch", "[4]6H", "カウンターヒット", "CH [4]6H > ダッシュ（2溜め） > 2H > [2]8H > j.S > 5K > 6H > [4]6S（壁張り付き） > 6[H]", 172, "H版イルカカウンターから壁割り。ダッシュ中に下溜めを維持する。", {kind:"カウンターヒット",pos:"画面中央",oki:"壁割り後に攻めを継続。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/May/Combos"})
  ]);
  addRoutes("ky", [
    r("ky-2p-rc", "2P", "ゲージ使用", "2P > 6P > 214S > RRC > 5[D] > 近S > 2S > 5H > 214K", 106, "小技から50%テンションで追撃し、Shock Stateを付けて運ぶ。", {kind:"ゲージ使用",meter:50,version:"2.0",oki:"214K後に起き攻め。",sourceUrl:"https://mail.dustloop.com/w/GGST/Ky_Kiske/Combos"}),
    r("ky-2d-ch", "2D", "カウンターヒット", "CH 2D > 近S > dc > 近S > 2S > 5H > 214K, 2K > 6H（壁張り付き） > 214S", 201, "ミッドスクリーンの2Dカウンターから壁割りを狙う。近Sが届かない距離なら214Kで締める。", {kind:"カウンターヒット",pos:"画面中央",oki:"壁割り後に攻めを継続。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Ky_Kiske/Combos"}),
    r("ky-5h-ch", "5H", "カウンターヒット", "CH 5H > 214K > 2K > 2D > 遅らせ236H", 112, "2S > 5Hの連係がカウンターしたとき、低負担で起き攻めへ移行する。", {kind:"カウンターヒット",oki:"236H後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Ky_Kiske/Combos"})
  ]);
  addRoutes("robo-ky", [
    r("roboky-dust", "5D", "ダスト", "5[D] > 8 > j.H > jc9 > j.H > j.K > j.H > j.K > jc9 > j.H > j.DD", 215, "全キャラ共通の溜めダスト追撃。Ver.2.02資料のルート。", {kind:"ダスト",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Robo-Ky/Combos"}),
    r("roboky-2d-ch-opt", "2D", "カウンターヒット", "CH 2D > 2e.214H > j.S > j.D > adc > j.S > j.H > adc > j.S > j.H > 近S > 214S", 180, "カウンターからエネルギー技で浮かせ、空中ダッシュで伸ばす高火力候補。難度が高く、ゲージ残量に注意。", {kind:"カウンターヒット",oki:"214S後に起き攻め。",version:"現行ページ掲載・版表記なし",sourceUrl:"https://mail.dustloop.com/w/GGST/Robo-Ky/Combos"})
  ]);
  addRoutes("slayer", [
    r("slayer-2d-ch-simple", "2D", "カウンターヒット", "CH 2D > 2S > 214K~P", 99, "Pilebunkerの簡単な追撃。追加入力を重ねてダメージを伸ばすルートより操作が短い。", {kind:"カウンターヒット",version:"2.0",oki:"Pilebunker後に起き攻め。",sourceUrl:"https://mail.dustloop.com/w/GGST/Slayer/Combos"}),
    r("slayer-2d-ch-loop", "2D", "カウンターヒット", "CH 2D > 近S > 2S > 214K~P（追加入力）×1", 221, "Ver.2.03掲載の高火力ルート。近Sが届く距離限定で、Pilebunkerの追加入力が必要。", {kind:"カウンターヒット",version:"2.03",oki:"Pilebunker後に起き攻め。",sourceUrl:"https://mail.dustloop.com/w/GGST/Slayer/Combos"})
  ]);
  addRoutes("baiken", [
    r("baiken-2h-safejump", "2H", "カウンターヒット", "2H > 41236H[X] > 2K > 6K > 236K > 前ジャンプj.H", null, "Ver.2.0専門プレイヤー動画の起き攻めルート。最後の前ジャンプ攻撃を安全飛びとして使う。", {kind:"カウンターヒット",oki:"前ジャンプj.Hで安全飛び。",version:"2.0",source:"AxolotlBaiken – Ver.2.0 combos/pressure",sourceUrl:"https://www.youtube.com/watch?v=lhsNb4G-UG4"})
  ]);
  addRoutes("jam", [
    r("jam-6k", "6K", "中段ヒット", "6K > 236H > 2K > 6H > 236S", 110, "カードを使わない中段確認。起き攻めを取れる。", {oki:"236S後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Jam_Kuradoberi/Combos"}),
    r("jam-6k-ch-corner", "6K", "カウンターヒット", "CH 6K > 236H > 近S > 2H > 236H > 2K > 6HH（壁張り付き） > 236K（壁割り）", 194, "画面中央から壁割りを狙うノーゲージ候補。", {kind:"カウンターヒット",pos:"画面中央",oki:"壁割り後に攻めを継続。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Jam_Kuradoberi/Combos"}),
    r("jam-fs-ch-wall", "遠S", "カウンターヒット", "CH 遠S > 236H > 近S > 2H > 236H > 2K > 6HH > 236K（壁割り）", 201, "遠Sカウンターから壁割りまで運ぶルート。", {kind:"カウンターヒット",pos:"画面中央",oki:"壁割り後に攻めを継続。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Jam_Kuradoberi/Combos"})
  ]);
  addRoutes("unika", [
    r("unika-aa5p-v20", "対空5P", "対空", "対空5P > 5H~5H dc > 2S~2S~6K", 86, "どこでも安定しやすい5P対空の追撃。", {kind:"対空",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Unika/Combos"}),
    r("unika-aa5p-wall", "対空5P", "対空・画面端運び", "対空5P > ダッシュ近S > 2H~2H dc.6S > ダッシュ5H~214S（壁張り付き） > 214S", 161, "対空から壁割りまで運ぶ上級ルート。ダッシュキャンセル入力が必要。", {kind:"対空",pos:"画面中央",oki:"壁割り後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Unika/Combos"}),
    r("unika-fs-ch", "遠S", "カウンターヒット", "CH 遠S~2S dc > 2K > 6H~6K", 110, "遠S先端ではなく、追加入力が届く間合いで使うカウンター確認。", {kind:"カウンターヒット",oki:"6Kでダウンを取る。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Unika/Combos"}),
    r("unika-fs-corner", "遠S / 2S", "画面端", "遠S / 2S~2S~5S dc.6S > ダッシュ近S > 6H~6S（壁張り付き） > 214S（壁割り）", "224 / 221", "画面端のノーマルヒットから壁割り。遠S先端は近Sを5Kに替える。", {pos:"画面端",oki:"壁割り後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Unika/Combos"}),
    r("unika-throw-rc", "投げ", "ゲージ使用", "投げ > 66RRC > 66 6H~dc.6S > 5H > 214S（壁張り付き） > 214S（壁割り）", 192, "投げから50%テンションで中央壁割りを狙う。ステージ中央付近では成立しない。", {kind:"ゲージ使用",meter:50,pos:"画面中央",oki:"壁割り後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Unika/Combos"}),
    r("unika-2h-corner", "2H", "画面端", "2H~dc.6S > 5H~2H~6S（壁張り付き） > 214S（壁割り）", 233, "2H始動の画面端運び。近距離なら近S始動ルートを選ぶ。", {pos:"画面端",oki:"壁割り後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Unika/Combos"})
  ]);
  addRoutes("dizzy", [
    r("dizzy-p-ch-oki", "5P / 2P", "カウンターヒット", "CH 5P / 2P > 2K > 2D", "56 / 61", "小技カウンターから魚起き攻めを狙う短いルート。", {kind:"カウンターヒット",oki:"2D後に魚を使って起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Queen_Dizzy/Combos"}),
    r("dizzy-6p-ch", "6P", "カウンターヒット", "CH 6P > 236S~6S > ダッシュ6H > 214S（壁張り付き） > 214S（壁割り）", 141, "画面中央から壁割りへ伸ばす6Pカウンター。", {kind:"カウンターヒット",oki:"壁割り後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Queen_Dizzy/Combos"}),
    r("dizzy-2d-ch-wall", "2D", "カウンターヒット", "CH 2D > 近S > 6H > 236H~6H > ダッシュ214H > !IF > 214H > 214S（壁張り付き） > 214H（壁割り）", 215, "画面中央から壁割りまで狙う。近Sが届かない距離では5Kに替える。", {kind:"カウンターヒット",pos:"画面中央",oki:"壁割り後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Queen_Dizzy/Combos"})
  ]);
  addRoutes("bedman", [
    r("bedman-2s-corner", "2S", "画面端", "2S > 5H > 236H > ダッシュ遠S > 5H > 236H（壁張り付き） > ダッシュ5H（壁割り）", 202, "2Sからの画面端壁割り。近S始動より実戦で始動を狙いやすい。", {pos:"画面端",oki:"壁割り後に攻めを継続。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Bedman/Combos"})
  ]);
  addRoutes("bridget", [
    r("bridget-2s-basic", "2S", "牽制ヒット", "2S > S > 236K[6] > K", 90, "Ver.2.02資料掲載・ゲーム内未検証。遠S版と後半を共有する牽制確認。", {main:true,oki:"締め後に+10〜15Fから攻めを継続。",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Bridget/Combos"}),
    r("bridget-6p-hkd", "6P", "対空", "6P > 214S", 27, "Ver.2.02資料掲載・ゲーム内未検証。遠い対空や地上ヒット時の簡単な追撃。", {kind:"対空",oki:"214S後に有利を取る。",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Bridget/Combos"}),
    r("bridget-6p-ch-shoot", "6P", "対空", "CH 6P > 236K[6] > K", 75, "Ver.2.02資料掲載・ゲーム内未検証。高めのカウンター対空からShootにつなぐ。", {kind:"対空",oki:"高さにより有利時間が変わる。",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Bridget/Combos"}),
    r("bridget-2k-corner", "2K", "画面端", "2K > 6H > j.236H ▷ 6H > j.214K ▷ c.S > 6H > WS! > j.63214P", 168, "Ver.2.03資料掲載・ゲーム内未検証。端でダメージを伸ばすルート。壁割りに覚醒必殺技を使うと、その後ハードノックダウンを取れる。", {pos:"画面端",oki:"壁割り後にハードノックダウン。",version:"2.03",sourceUrl:"https://mail.dustloop.com/w/GGST/Bridget/Combos"}),
    r("bridget-5h-ch", "5H", "カウンターヒット", "CH 5H~H > 236K[6] > K", 105, "Ver.2.02資料掲載・ゲーム内未検証。連係中のカウンターヒットを短く確認する。6入力をK直前に離す。", {kind:"カウンターヒット",oki:"Shoot後に攻めを継続。",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Bridget/Combos"}),
    r("bridget-fs-poke", "遠S", "牽制ヒット", "遠S~S > 236K[6] > K", 94, "牽制から短く締めて有利を取る。", {oki:"+10〜15Fから攻めを継続。",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Bridget/Combos"}),
    r("bridget-fs-ch-corner", "遠S", "カウンターヒット", "CH 遠S > 5H~H > 236K[6] > 遅らせP > 2K > 6H（壁張り付き） > j.63214P（壁割り）", 163, "画面端の遠Sカウンター。遠距離や端から離れていると不安定。", {kind:"カウンターヒット",pos:"画面端",oki:"壁割り後に起き攻め。",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Bridget/Combos"}),
    r("bridget-dust", "5D", "ダスト", "5[D] > 9 > j.H > 9 > j.H > j.S > j.K > j.H~H", 186, "ゲージを使わず壁割り後のポジティブボーナスを取る。", {kind:"ダスト",oki:"壁割り後にポジティブボーナス。",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Bridget/Combos"})
  ]);
  addRoutes("ino", [
    r("ino-ch-normal", "近S / 遠S / 2S", "カウンターヒット", "CH 近S / 遠S / 2S / 2H > 236H > 6H > 236H", 148, "カウンターからハードノックダウンを取る簡単な汎用ルート。", {kind:"カウンターヒット",oki:"236H後に音符起き攻め。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/I-No/Combos"}),
    r("ino-fs-corner", "遠S / 2S", "画面端", "遠S / 2S > 5H > 214K~6 > 6H(2) > 遅らせ214K~6 > 5H > 214S（壁張り付き） > 236[S]（壁割り）", "217 / 214", "画面端で遠S・2Sから壁割り。始動距離と6Hの間合いを確認する。", {pos:"画面端",oki:"壁割り後に起き攻め。",version:"2.00",sourceUrl:"https://mail.dustloop.com/w/GGST/I-No/Combos"})
  ]);
  addRoutes("gio", [
    r("gio-2s-ch-extension", "2S", "カウンターヒット", "CH 2S(1/2) > 214H~6S > 近S > 2H > 214H~4S > 近S > 2H > 214S", 150, "2Sカウンターを初段・2段目のどちらで確認したかに合わせてキャンセル。", {kind:"カウンターヒット",oki:"214S後に起き攻め。",version:"2.0",currentSource:false,source:"Dustloop（2.0資料・現行照合待ち）",sourceUrl:"https://mail.dustloop.com/w/GGST/Giovanna/Combos"}),
    r("gio-cs-extended", "近S", "近距離ヒット", "近S > 2S > 2H > 214H~6S > 近S > 6H~H", 193, "近距離からの高火力候補。最後の6H追加入力を遅らせるとOTGを拾いやすい。", {oki:"6H後にダウン。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Giovanna/Combos"})
  ]);
  addRoutes("nago", [
    r("nago-5k-normal-623h", "5K", "近距離ヒット", "5K > 6K > 623H > 近S > 遠S連打", "138〜148", "血液量を見て使う近距離基本ルート。近Sが届かない距離なら2K締めの代替ルート。", {oki:"遠S連打で壁張り付き時は6Hで壁割り。",version:"2.03",sourceUrl:"https://mail.dustloop.com/w/GGST/Nagoriyuki/Combos"}),
    r("nago-5k-rc", "5K", "ゲージ使用", "BL2/しゃがみ/CH 5K > 6H > RRC > 5[D] > 2S > 623H > 236K > 近S > 遠S連打（壁張り付き） > 6H（壁割り）", "232〜286", "血液量と始動でダメージが変化する50%テンション壁割り。血液量を確認して選ぶ。", {kind:"ゲージ使用",meter:50,pos:"どこでも",oki:"壁割り後に攻めを継続。",version:"2.03",sourceUrl:"https://mail.dustloop.com/w/GGST/Nagoriyuki/Combos"}),
  ]);
  addRoutes("millia", [
    r("millia-2s", "2S", "牽制ヒット", "2S > 236S", 55, "先端の2Sから取れる簡単なダウン。", {oki:"ディスク起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Millia_Rage/Combos"}),
    r("millia-2s-5h", "2S", "近距離ヒット", "2S > 5H > 214P", 92, "2Sが近めで当たったときのダメージ重視。", {oki:"214Pでハードノックダウン。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Millia_Rage/Combos"}),
    r("millia-2k-meter", "2K", "ゲージ使用", "2K > 6H > mc 236236S > ダッシュ近S > 6H > mc 214P", 154, "カウンターまたはしゃがみヒットからテンションを使って端運びを伸ばす。", {kind:"ゲージ使用",meter:50,oki:"214Pでハードノックダウン。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Millia_Rage/Combos"}),
    r("millia-throw-frc", "投げ", "ゲージ使用", "投げ > 22FRRC~空振りj.H > j.D > jc j.D > 遅らせj.S > j.S > 近S > 6H > mc 214P", 122, "投げから50%テンションを使い、アイアンセイバー締めで起き攻め。", {kind:"ゲージ使用",meter:50,oki:"214Pでハードノックダウン。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Millia_Rage/Combos"})
  ]);
  addRoutes("happy-chaos", [
    r("hc-p-ch-knockdown", "5P / 2P", "カウンターヒット", "CH 5P / 2P > 6S > 214S~52~2P/4P", "63 / 60", "立ち状態限定。資源消費を抑えてダウンを取る短いルート。", {kind:"カウンターヒット",oki:"照準を維持して攻めを継続。",version:"2.03",sourceUrl:"https://mail.dustloop.com/w/GGST/Happy_Chaos/Combos"}),
    r("hc-aa5p-mid", "対空5P", "対空", "対空5P > ダッシュ2K > 6K > 214S~585~2P/4P > ダッシュ6S > 214S~H（壁張り付き）", 74, "中央付近の対空から壁張り付きを狙う。585後の照準管理が必要。", {kind:"対空",pos:"画面中央",oki:"壁張り付き後に壁割り。",version:"2.03",sourceUrl:"https://mail.dustloop.com/w/GGST/Happy_Chaos/Combos"}),
    r("hc-6p-ch-wall", "6P", "カウンターヒット", "CH 6P > 214S~585~4S/4K > 近S > 6K > 2K > 6S > 214S~H（壁張り付き）", 115, "地上・対空6Pカウンターから中央壁張り付き。距離によって射撃を追加。", {kind:"カウンターヒット",pos:"画面中央",oki:"壁張り付き後に壁割り。",version:"2.03",sourceUrl:"https://mail.dustloop.com/w/GGST/Happy_Chaos/Combos"})
  ]);
  addRoutes("jack-o", [
    r("jacko-p-ch-oki", "2P / 5P", "カウンターヒット", "CH 2P / 5P > 2K > 2D > 236[P]", "43 / 53", "暴れカウンターからサーヴァント設置を狙う。", {kind:"カウンターヒット",oki:"サーヴァントを設置して攻め直す。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Jack-O/Combos"}),
    r("jacko-2d-ch", "2D", "カウンターヒット", "CH 2D > 2H > 236P > 5K（サーヴァント当たり）dc > 近S > 6H(1) > 236[P]", "92〜132", "サーヴァントを利用して2Dカウンターから伸ばす。始動距離とサーヴァント位置に注意。", {kind:"カウンターヒット",oki:"236[P]でサーヴァント設置。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Jack-O/Combos"})
  ]);
  addRoutes("goldlewis", [
    r("gl-6p-ch-basic", "6P", "カウンターヒット", "CH 6P > 486H", 112, "長い6Pカウンターから簡単に追撃。距離が近ければダッシュ5Kで伸ばす。", {kind:"カウンターヒット",oki:"ダウン後に攻めを継続。",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Goldlewis_Dickinson/Combos"})
  ]);
  addRoutes("ky", [
    r("ky-aa214k", "214K", "対空", "対空214K > 2K > 6H > 214S > 微ダッシュ5H > 214K（壁張り付き） > 214S（壁割り）", 155, "端が近いときの対空フードルアルク。近Sではなく5Hで拾う。", {kind:"対空",pos:"画面中央",oki:"壁割り後に攻めを継続。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/Ky_Kiske/Combos"}),
    r("ky-aa5h-ch", "5H", "対空カウンターヒット", "対空CH 5H > 236H > ダッシュ5H > 623H > 近S > 2S > 5H > 214K", 209, "空中の相手に5Hがカウンターした場合の高火力追撃。", {kind:"対空",oki:"214K後に起き攻め。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/Ky_Kiske/Combos"})
  ]);
  addRoutes("asuka", [
    r("asuka-spellless-rc", "2P / 5K / 2K", "ゲージ使用", "始動技 > 66RRC > ダッシュ近S > 遅らせ2H > ダッシュ近S > 2H > ダッシュ5K > 6H", null, "呪文を使わずに50%テンションで端へ運ぶ。相手の高さで2Hを遅らせる。", {kind:"ゲージ使用",meter:50,oki:"6H後にマナ回復やカード補充。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/Asuka_R/Combos"}),
    r("asuka-spell-bnb", "近S", "近距離ヒット", "近S > 2H > Chant > Bookmark > ダッシュ近S > 2H > 5K > 6H", null, "呪文を当てて近Sから追撃する基本構造。呪文の種類で拾いの高さと回数を調整。", {oki:"6H後にマナ回復またはカード補充。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/Asuka_R/Combos"})
  ]);
  addRoutes("sin", [
    r("sin-cs-bnb", "近S", "近距離ヒット", "近S > 5H / 2H > 623S~S > 近S > 6H > !WS > 63214P > 6H", 202, "現行コンボ資料の基本ルート。スタミナ1本使用。", {main:true,oki:"Still Growing後に攻めを継続。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/Sin_Kiske/Combos"}),
  ]);
  addRoutes("elphelt", [
    r("elphelt-p-ch-hkd", "5P / 2P", "カウンターヒット", "CH 5P / 2P > 2K > 2D", 41, "Dustloop現行資料掲載・ゲーム内未検証。ダメージよりハードノックダウンと起き攻めを優先。", {kind:"カウンターヒット",oki:"2D後に起き攻め。",version:"現行資料",sourceUrl:"https://mail.dustloop.com/w/GGST/Elphelt_Valentine/Combos"}),
    r("elphelt-cs-2s-ch", "近S / 2S", "カウンターヒット", "CH 近S / 2S > 2H > 214H > j.H ▷ c.S > 2S > 2H > 214S~H WS!", null, "Dustloop現行資料掲載・ゲーム内未検証。カウンターのヒットストップで2Hを当てて浮かせる。", {kind:"カウンターヒット",oki:"壁張り付き後に壁割り。",version:"現行資料",sourceUrl:"https://mail.dustloop.com/w/GGST/Elphelt_Valentine/Combos"}),
    r("elphelt-bomb-bnb", "ボム（214H）", "近距離ヒット", "214H ▷ 2S > 2H > 214S~S~K~H", null, "Dustloop現行資料掲載・ゲーム内未検証。ボムが当たれば距離を問わず追撃できる基本形。遠距離ではc.Sを省いて2Sまたは2Hで拾う。", {main:true,oki:"Chain Lollipop締め後に起き攻め。",version:"現行資料",sourceUrl:"https://mail.dustloop.com/w/GGST/Elphelt_Valentine/Combos"}),
    r("elphelt-6p-aa-ch", "6P", "対空", "対空CH 6P > 214H > j.D ▷ ダッシュc.S > 2H > 214S~K~H WS!", null, "Dustloop現行資料掲載・ゲーム内未検証。近距離で6Pがカウンターしたときの発展ルート。j.Dを使うため距離が離れると成立しない。", {kind:"対空",oki:"壁張り付き後に壁割り。",version:"現行資料",sourceUrl:"https://mail.dustloop.com/w/GGST/Elphelt_Valentine/Combos"}),
    r("elphelt-2h-ch-side", "2H", "カウンターヒット", "CH 2H > 214H > j.S（空振り） ▷ ダッシュc.S > 2S > 2H > 214S~K~H WS!", null, "Dustloop現行資料掲載・ゲーム内未検証。大きなカウンターから相手の下をくぐる応用ルート。空中攻撃を空振りして走る時間を作る。", {kind:"カウンターヒット",oki:"壁張り付き後に壁割り。",version:"現行資料",sourceUrl:"https://mail.dustloop.com/w/GGST/Elphelt_Valentine/Combos"}),
  ]);
  addRoutes("testament", [
    r("testament-2k-stain", "2K / 5K", "小技ヒット", "ステイン中 2K / 5K > ダッシュ近S > 214[P] > 5K dc > 近S > 6H > 214[P]", 128, "ステイン付与中の小技からエリアルを挟まず確認。", {oki:"214[P]でステインを付与して攻める。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Testament/Combos"}),
    r("testament-cs-ch-corner", "近S", "カウンターヒット", "CH 近S > 6H > 236[H] > ダッシュ近S > 214[P] > 5K dc > 近S > 遅らせ2S > 236S（壁張り付き） > 214P（壁割り）", 241, "テンションを使わず中央から壁割りを狙う高運び候補。ステイン状態を維持する。", {kind:"カウンターヒット",pos:"画面中央",oki:"壁割り後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Testament/Combos"})
  ]);
  addRoutes("aba", [
    r("aba-jr-2d-v20", "嫉妬中2D", "カウンターヒット", "嫉妬中 CH 2D > 623H > ダッシュc.S > 6H > 623H", 198, "ジェラシーレイジ中の2Dカウンターから壁運びを狙う。嫉妬ゲージを確認する。", {kind:"カウンターヒット",oki:"623H後にダウン。",version:"2.0",source:"Nightshifter – A.B.A Combo Guide",sourceUrl:"https://www.youtube.com/watch?v=uLCwhnhPcNI"})
  ]);
  addRoutes("jam", [
    r("jam-k-dust", "5K / 2K", "小技ヒット", "5K / 2K > 2D > 22K / 22S / 22H", 43, "ダウンとカード補充を優先する低負担ルート。", {oki:"カード補充後に攻めを継続。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Jam_Kuradoberi/Combos"}),
    r("jam-dust-easy", "5D", "ダスト", "5[D]~8 > j.K > j.S > jc9 > j.K > j.S > j.H > j.DD", 168, "Ver.2.0資料の簡単な溜めダスト。", {kind:"ダスト",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Jam_Kuradoberi/Combos"}),
    r("jam-dust-opt", "5D", "ダスト", "5[D]~9 > j.D > jc > j.D > j.S > j.D > j.S > j.D > jc > j.DD", 192, "同じ始動のダメージ重視版。", {kind:"ダスト",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Jam_Kuradoberi/Combos"})
  ]);
  addRoutes("unika", [
    r("unika-cs-hkd", "近S", "近距離ヒット", "近S > 5H~2H~6K", 179, "端から離れているときにダウンを優先する短い近Sルート。", {oki:"6Kでハードノックダウン。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Unika/Combos"}),
    r("unika-cs-corner", "近S", "画面端", "近S > 6H~6S > ダッシュ近S > 6H~6S（壁張り付き） > 214S（壁割り）", 275, "近Sからの簡単な画面端コンボ。壁割りまで狙う。", {pos:"画面端",oki:"壁割り後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Unika/Combos"})
  ]);
  addRoutes("nago", [
    r("nago-5k-ch-any", "5K", "カウンターヒット", "CH 5K > 236S > 236K > 5K > 6K > 623P", "147〜156", "血液量にかかわらず中距離から血液吸血へつなげるカウンター確認。", {kind:"カウンターヒット",oki:"吸血後に攻めを継続。",version:"2.03",sourceUrl:"https://mail.dustloop.com/w/GGST/Nagoriyuki/Combos"}),
    r("nago-2k-wall", "2K", "ゲージなし・画面運び", "2K > 2D > 623H > 236K > 近S > 遠S連打（壁張り付き） > 6H", "151〜152", "2K下段から中央壁割りを狙う。血液収支はルート表記を確認。", {pos:"画面中央",oki:"壁割り後に攻めを継続。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/Nagoriyuki/Combos"})
  ]);
  addRoutes("may", [
    r("may-2d-ch", "2D", "カウンターヒット", "CH 2D > [2]8H > ダッシュ5K > 6H > [2]8H", "121（174）", "画面中央の下段カウンター確認。距離が近ければ近S拾いで伸ばせる。", {kind:"カウンターヒット",oki:"壁が近ければ[2]8H後に壁割り。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/May/Combos"}),
    r("may-air-air", "空中j.S / j.H", "空対空", "空対空j.S / j.H > 5K > 3K", "85 / 70", "ジャンプ攻撃で空対空を取ったときの簡単なダウン取り。", {kind:"空中始動",oki:"3K後にダウン。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/May/Combos"})
  ]);
  addRoutes("robo-ky", [
    r("roboky-6h-ch-wall", "6H", "カウンターヒット", "CH 6H > 236H~3 > j.H > j.D > 空中ダッシュj.S > 近S > 2S > 5H > 214S", null, "ラウンド開始距離から壁張り付きを取るVer.2.03掲載候補。", {kind:"カウンターヒット",pos:"画面中央",oki:"214S後に起き攻め。",version:"2.03",sourceUrl:"https://mail.dustloop.com/w/GGST/Robo-Ky/Combos"})
  ]);
  addRoutes("goldlewis", [
    r("gl-k-starter", "5K / 2K", "小技ヒット", "5K / 2K > 2D > 684H", "77〜84", "2Dから684Hへつないで有利なダウンを取る。", {oki:"684Hで有利なダウン。",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Goldlewis_Dickinson/Combos"}),
    r("gl-s-poke", "遠S / 2S", "牽制ヒット", "遠S / 2S > 684H", "78〜80", "牽制ヒットからの短く確実なダウン取り。", {oki:"684Hで有利なダウン。",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Goldlewis_Dickinson/Combos"}),
    r("gl-jd-air", "空中j.D", "空中始動", "j.D > 遅らせj.684H > 着地684H", 128, "j.Dが空中ヒットしたとき、j.684Hを遅らせて追加の地上追撃を狙う。", {kind:"空中始動",oki:"684Hでハードノックダウン。",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Goldlewis_Dickinson/Combos"})
  ]);
  addRoutes("baiken", [
    r("baiken-throw-rope", "ロープ中の投げ", "投げ始動", "ロープ中の投げ > 遠S > 5H > 236K > 近S > 41236H > 236236S", null, "梅喧専門プレイヤーのVer.2.0動画で紹介されたロープ投げコンボ。締めを覚醒必殺技にしてダメージを伸ばす。", {kind:"投げ始動",oki:"覚醒必殺技後に起き攻め。",version:"2.0",source:"AxolotlBaiken – Ver.2.0 combos/pressure",sourceUrl:"https://www.youtube.com/watch?v=lhsNb4G-UG4"}),
    r("baiken-sideswap-air", "空中ダッシュ236S", "画面端入れ替え", "空中ダッシュ236S > 近S > 6H > 41236H[X] > 5K > j.236K > j.H > jc > j.S > j.H > j.236K > 5K > 6H > 41236H~H", null, "Ver.2.0専門プレイヤー動画の発展型入れ替えルート。高さ・壁までの距離に応じた調整が必要。", {pos:"画面端",oki:"画面端を入れ替えて攻めを継続。",version:"2.0",source:"AxolotlBaiken – Ver.2.0 combos/pressure",sourceUrl:"https://www.youtube.com/watch?v=lhsNb4G-UG4"})
  ]);
  addRoutes("ino", [
    r("ino-jumpin-easy", "空中j.S / j.H", "空中始動", "j.S / j.H > 2K > 2D > 214P（音符） / 214S（空振り）", "68 / 76", "ジャンプ攻撃から簡単にダウンを取る。起き攻め重視なら音符、安定した安全飛びなら214Sを選ぶ。", {kind:"空中始動",oki:"音符または安全飛びで起き攻め。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/I-No/Combos"}),
    r("ino-js-jd", "空中j.S", "空対空", "空対空j.S > j.D > j.236H~H > j.S > j.236S", 102, "空対空から画面端では安全飛びになる追撃。", {kind:"空中始動",oki:"端で236Sが当たると安全飛び。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/I-No/Combos"})
  ]);
  addRoutes("gio", [
    r("gio-5d-rc", "5D", "ゲージ使用", "5D > FRRC > 2H > 214H~6S > 遠S > 2H > 214H~4S > 近S > 近S > f.S > 5H > 214K（壁張り付き） > 214H~6K（壁割り）", 175, "50%テンションと画面端付近の5D始動から壁割り。遠Sで拾うなど難度が高い。", {kind:"ゲージ使用",meter:50,pos:"画面端付近",oki:"壁割り後に起き攻め。",version:"2.0+",sourceUrl:"https://mail.dustloop.com/w/GGST/Giovanna/Combos"})
  ]);
  addRoutes("zato", [
  ]);
  addRoutes("goldlewis", [
    r("gl-2p-ch-cs", "2P", "カウンターヒット", "CH 2P > 近S > 5HS > 684H", 75, "しゃがみヒットまたはCH確認から、通常ヒットより高いダメージを取る。", {kind:"カウンターヒット",oki:"684Hでダウン。",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Goldlewis_Dickinson/Combos"}),
    r("gl-aa-p", "対空5P / 2P", "対空", "対空5P / 2P > ダッシュ近S > 2H > 486H > (ダッシュ5K) > 684H", "99〜102", "空中の相手に小技を当てたときの追撃。高さや距離によって最後の5Kを省く。", {kind:"対空",oki:"684Hでダウン。",version:"2.02",sourceUrl:"https://mail.dustloop.com/w/GGST/Goldlewis_Dickinson/Combos"}),
  ]);
  addRoutes("may", [
    r("may-2s-ch-corner", "2S", "カウンターヒット", "画面端 CH 2S > [4]6S~P > 2K > [2]8H > 5H > [4]6S~P > 近S > 5H > [4]6H > 6[H]", 192, "画面端の2Sカウンターから壁割りを狙う。最初のイルカ派生を素早く出す必要がある。", {kind:"カウンターヒット",pos:"画面端",oki:"壁割り後に起き攻め。",version:"5.00",sourceUrl:"https://mail.dustloop.com/w/GGST/May/Combos"}),
    r("may-fs-aa-ch-v500", "遠S", "対空カウンターヒット", "対空CH 遠S > [4]6S~6K > j.H > 近S > ダッシュ近S > 2H > [4]6S > 近S > WS 6[H]", 222, "対空で遠Sがカウンターした場合の高リターン追撃。高さとダッシュ距離の調整が必要。", {kind:"対空",pos:"画面中央",oki:"壁割り後に起き攻め。",version:"5.00",sourceUrl:"https://mail.dustloop.com/w/GGST/May/Combos"}),
    r("may-sd-ch-hkd", "S版イルカ", "カウンターヒット", "CH [4]6S > 2K > 2D", 58, "中央でも使える短いカウンター確認。複雑な追撃より起き攻めを優先する。", {kind:"カウンターヒット",oki:"2D後にハードノックダウン起き攻め。",version:"5.00",sourceUrl:"https://mail.dustloop.com/w/GGST/May/Combos"}),
    r("may-hd-ch", "H版イルカ", "カウンターヒット", "CH [4]6H > ダッシュ2H > [2]8H > IAD j.S > 5K > 6H > [4]6S WS 6[H]", 172, "H版イルカのカウンターから画面中央で壁割りまで運ぶ。着地後も溜めを維持しながら走る。", {kind:"カウンターヒット",pos:"画面中央",oki:"壁割り後に起き攻め。",version:"4.00・現行資料に掲載",sourceUrl:"https://mail.dustloop.com/w/GGST/May/Combos"})
  ]);
  addRoutes("nago", [
    r("nago-poke-bnb", "5K / 2S / 遠S", "牽制ヒット", "5K / 2S / 遠S > 214H > 623H > 236K > 2K > 近S > 遠S連打 WS > 6H", null, "複数の牽制から使う基本壁運び。終盤の遠S連打と6Hで血液を減らす。", {oki:"壁割り後に攻めを継続。",version:"現行コンボ資料",sourceUrl:"https://mail.dustloop.com/w/GGST/Nagoriyuki/Combos"}),
    r("nago-6p-aa", "6P", "対空", "6P > 623H > 236K > 近S > 遅らせ遠S連打", null, "通常ヒット・カウンター共通の対空追撃。近S後の遠S連打を少し遅らせる。", {kind:"対空",oki:"遠S連打後に血液を減らしつつ攻め継続。",version:"現行コンボ資料",sourceUrl:"https://mail.dustloop.com/w/GGST/Nagoriyuki/Combos"}),
    r("nago-2d-ch-v20", "2D", "カウンターヒット", "CH 2D > 5K > 623H > 236K > 2K > 近S > 遠S連打 WS > 6H", null, "下段カウンターから壁割りを狙う。中央は血液量と壁までの距離で追撃を調整する。", {kind:"カウンターヒット",oki:"壁割り後に攻めを継続。",version:"現行コンボ資料",sourceUrl:"https://mail.dustloop.com/w/GGST/Nagoriyuki/Combos"}),
    r("nago-throw-rc", "地上投げ", "ゲージ使用", "地上投げ > 66RRC~近S > 623H > 236K > 近S > 遠S連打", null, "投げをロマンキャンセルして壁運び。RRC後に通常近Sへつなぐ簡単な版も選べる。", {kind:"ゲージ使用",meter:50,oki:"壁割り後に攻めを継続。",version:"現行コンボ資料",sourceUrl:"https://mail.dustloop.com/w/GGST/Nagoriyuki/Combos"})
  ]);
  addRoutes("gio", [
    r("gio-fs-confirm", "遠S / 2S", "牽制ヒット", "遠S / 2S > 5H > 214K", null, "2Hが届かない距離で牽制を確認したときの簡単な締め。近距離用の伸ばしルートとは使い分ける。", {oki:"距離を保ち、次の牽制か2Dを重ねる。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Giovanna/Combos"}),
    r("gio-ch5h", "5HS", "カウンターヒット", "CH 5H > 236K > 遠S > 5H > 214H~4K", 139, "5HSのカウンター演出を見てから追撃する。214H~4Kを214Kにすると簡単。", {kind:"カウンターヒット",oki:"ハードノックダウン後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Giovanna/Combos"}),
    r("gio-jumpin", "空中j.K / j.S / j.H", "空中始動", "j.K / j.S / j.H > j.D(1) > 2K / 5H > 214K", 93, "ジャンプ攻撃から2Kまたは5HSへつなぐ簡単なルート。j.Hは低い高さで当てるとj.Dを省く。", {kind:"空中始動",oki:"214K後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Giovanna/Combos"})
  ]);
  addRoutes("unika", [
    r("unika-2d-ch-corner", "2D", "カウンターヒット", "画面端 CH 2D > ダッシュ近S > 6H~6S > 5H > 214S WS > 214S", 240, "画面端の2Dカウンターから壁割りまで狙う高リターンルート。", {kind:"カウンターヒット",pos:"画面端",oki:"壁割り後に起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Unika/Combos"}),
  ]);
  addRoutes("jam", [
    r("jam-corner-wallbreak", "近S", "画面端", "画面端 236K~6S > 近S > 6H~遅らせH > 236H > 2K > 236K WS > 5P WB", 167, "画面端の強化状態で壁割りまで狙う。6Hの追加打撃だけタイミング調整が必要。", {pos:"画面端",oki:"壁割り後にカードを補充して攻める。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Jam_Kuradoberi/Combos"}),
    r("jam-aa-6p", "6P", "対空", "対空6P > 236K", null, "6P対空からの簡単なダウン取り。高さや距離によって後続を省略する。", {kind:"対空",oki:"ダウン後にカードを補充。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Jam_Kuradoberi/Combos"}),
    r("jam-ch-2h", "2H", "カウンターヒット", "CH 2H > 236H > ダッシュ近S > 5[D] > 2K > 6H > 236H", 151, "遠Sや2Sからの連係がカウンターしたときの簡単な伸ばし。", {kind:"カウンターヒット",oki:"壁が近ければ壁割り。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Jam_Kuradoberi/Combos"})
  ]);
  addRoutes("bedman", [
    r("bedman-cs-bnb-v20", "近S", "近距離ヒット", "近S > 遠S > 2H > 236S / 236H", "123 / 132", "簡単に半画面ほど運ぶ基本形。236Sは端運び、236Hは起き攻めを優先する。", {main:true,oki:"236Hなら強い起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Bedman/Combos"}),
    r("bedman-a2a-js-v20", "空対空j.S", "空対空", "空対空j.S > 前ダッシュj.S > 近S > 6H > 236H", 128, "比較的安定した空対空追撃。下方向の空中ダッシュで同じ側に着地できる。", {kind:"空中始動",oki:"236Hで強い起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/Bedman/Combos"})
  ]);
  addRoutes("ino", [
    r("ino-dust-charged-v20", "5D", "ダスト", "5[D]~8 > 遅らせj.H > j.S > jc > j.H > j.S > j.H > jc > j.HH", 205, "Ver.2.0資料の溜めダスト。相手を背負った位置から中央へ運ぶ。", {kind:"ダスト",oki:"着地後に有利を維持。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/I-No/Combos"}),
    r("ino-5h-ch-v20", "5HS", "カウンターヒット", "CH 5H > 214S > jc j.S > j.236H~H > j.S > j.H > j.236S > 214S", 185, "5HSのカウンターから音符設置までつなぐ。相手の高さに合わせてジャンプ追撃。", {kind:"カウンターヒット",oki:"音符を置いて起き攻め。",version:"2.0",sourceUrl:"https://mail.dustloop.com/w/GGST/I-No/Combos"})
  ]);
  addRoutes("aba", [
    r("aba-aa-2s-v500", "対空2S", "対空", "対空2S > 遅らせ2H > 214K > 近S > 2H > 214H", 133, "対空2Sから嫉妬ゲージを回復する。2Hの高さ・当たり方により拾いを調整。", {kind:"対空",oki:"214H後に嫉妬ゲージ回復。",version:"5.00",sourceUrl:"https://mail.dustloop.com/w/GGST/A.B.A/Combos"}),
    r("aba-aa-2s-second-v500", "対空2S", "対空", "対空2S > 2H(2段目のみ) > 近S > 5H / 2H > 214H", 146, "2Hを早く出し、2段目だけが当たった場合の拾い直し。距離次第で締めを調整。", {kind:"対空",oki:"214H後に嫉妬ゲージ回復。",version:"5.00",sourceUrl:"https://mail.dustloop.com/w/GGST/A.B.A/Combos"}),
    r("aba-aa-2s-ch-v500", "対空2S", "カウンターヒット", "対空CH 2S > ダッシュ近S > 6H > 214K > 2K > 6H > 遅らせ214H", 146, "対空カウンター時の安定寄りの追撃。嫉妬ゲージを効率よく回復できる。", {kind:"対空",oki:"214H後に嫉妬ゲージ回復。",version:"5.00",sourceUrl:"https://mail.dustloop.com/w/GGST/A.B.A/Combos"})
  ]);
})();
