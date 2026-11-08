// Street Fighter 6 routes collected from character-specific Year4 combo guides.
// Classic controls; route data is a sourced starting set, not an in-game lab verification.
(() => {
  const names = [
    ["ryu","リュウ","Ryu"],["luke","ルーク","Luke"],["jamie","ジェイミー","Jamie"],["chunli","春麗","Chun-Li"],["guile","ガイル","Guile"],["kimberly","キンバリー","Kimberly"],["juri","ジュリ","Juri"],["ken","ケン","Ken"],["blanka","ブランカ","Blanka"],["dhalsim","ダルシム","Dhalsim"],["ehonda","E.本田","E.Honda"],["deejay","ディージェイ","Dee Jay"],["manon","マノン","Manon"],["marisa","マリーザ","Marisa"],["jp","JP","JP"],["zangief","ザンギエフ","Zangief"],["lily","リリー","Lily"],["cammy","キャミィ","Cammy"],["rashid","ラシード","Rashid"],["aki","A.K.I.","A.K.I."],["ed","エド","Ed"],["akuma","豪鬼","Akuma"],["mbison","ベガ","M. Bison"],["terry","テリー","Terry"],["mai","舞","Mai"],["elena","エレナ","Elena"],["sagat","サガット","Sagat"],["cviper","C.ヴァイパー","C. Viper"],["alex","アレックス","Alex"],["ingrid","イングリッド","Ingrid"],["yasmine","ヤスミン","Yasmine"],["arjun","アルジュン","Arjun"]
  ];
  const pages = { akuma:"gouki_akuma", mbison:"vega_mbison" };
  const route = (id, starter, recipe, topic, resources, damage, oki, note="", main=false) => ({
    id, name:`${starter}始動`, starter, starterLabel:starter,
    kind:topic==="カウンターヒット"?"カウンターヒット":topic==="対空"?"対空":"地上通常ヒット",
    topic, pos:"どこでも", damage:damage??null, recipe,
    resources:[{label:"DRIVE",value:resources[0]},{label:"SA",value:resources[1]}],
    notes:note, oki, main, version:"Year4 / 2026-08-03",
    source:"スト6ラボ Year4（クラシック）"
  });
  const data = {
    ryu:[
      route("ryu-jump","ジャンプ強P","ジャンプ強P > 上げ突き > 強昇龍拳","対空",["なし","なし"],null,"前ステ > 鳩尾砕き重ね","+37F。基本の飛び込み。",true),
      route("ryu-mp","立ち中P","立ち中P > 屈中P > OD上段足刀蹴り > 旋風脚 > 竜巻旋風脚","地上通常ヒット",["2本","なし"],null,"前ステ×2から投げ・打撃・シミー","OD足刀からの運びと起き攻めを取る。",true),
      route("ryu-light","屈弱K","屈弱K > 立ち弱P > 立ち弱P > 強昇龍拳","地上通常ヒット",["なし","なし"],null,"前ステ > 鳩尾砕き重ね","小技からダウンを取る。")
    ],
    luke:[
      route("luke-jump","ジャンプ強K","ジャンプ強K > 立ち弱P > 立ち中P > 立ち強P > 強フラッシュナックル","地上通常ヒット",["なし","なし"],null,"弱フラッシュナックル〆は起き攻め向き。","Classic / Year4基本ルート。",true),
      route("luke-mp","屈中P","屈中P > 屈弱P > 弱フラッシュナックル","地上通常ヒット",["なし","なし"],null,"+36Fから起き攻め","パリィラッシュ後に投げ・打撃・シミー。",true),
      route("luke-light","屈弱K","屈弱K > 屈弱P > 弱フラッシュナックル","地上通常ヒット",["なし","なし"],null,"+36Fから起き攻め","小技始動。")
    ],
    jamie:[
      route("jamie-jump","ジャンプ強P","ジャンプ強P > 屈強P > 強張弓腿","地上通常ヒット",["なし","なし"],null,"中央で酔いレベル上げ","酔いレベルでルート・締めが変化。",true),
      route("jamie-mp","立ち中P","立ち中P > 屈中P > 強張弓腿","地上通常ヒット",["なし","なし"],null,"前ステ後に攻めを継続","酔いレベルに応じて派生を選択。",true),
      route("jamie-light","屈弱P","屈弱P > 屈弱P > 立ち弱K > 強張弓腿","地上通常ヒット",["なし","なし"],null,"ダウンを取って酔いレベル上げ","小技確認。")
    ],
    chunli:[
      route("chunli-mp","立ち中P","立ち中P > 屈中P > 中スピニングバードキック","地上通常ヒット",["なし","なし"],2160,"前ステ後、投げ・立ち中P・シミー","スピバ用に下溜めを作る。",true),
      route("chunli-light","屈弱K","屈弱K > 屈弱P > 弱スピニングバードキック","地上通常ヒット",["なし","なし"],1296,"前ステ後に起き攻め","溜めがシビア。",true),
      route("chunli-jump","ジャンプ強K","ジャンプ強K > 立ち中P > 屈中P > 中スピニングバードキック","地上通常ヒット",["なし","なし"],null,"前ステ後に投げ・打撃・シミー","通常技を出す前から下溜め。")
    ],
    guile:[
      route("guile-mp","立ち中P","立ち中P > 屈中P > 強サマーソルトキック","地上通常ヒット",["なし","なし"],null,"サマー〆から起き攻め","立ち中Pの後に溜めを作る。",true),
      route("guile-mp-target","立ち中P","立ち中P > 4強P > 強サマーソルトキック","地上通常ヒット",["なし","なし"],null,"サマー〆から起き攻め","しゃがみ相手には4強Pが当たらない場合あり。"),
      route("guile-sa3","屈中P","屈中P > 強サマーソルトキック > SA3","地上通常ヒット",["なし","3本"],null,"SA3で締める",""
      )
    ],
    kimberly:[
      route("kimberly-mp","屈中P","屈中P > 立ち中P > 立ち強P > 疾駆け > 影すくい","地上通常ヒット",["なし","なし"],1832,"端到達後、細工手裏剣起き攻め","Year4基本の運びルート。",true),
      route("kimberly-light","屈弱P","屈弱P×3 > 弱流転一文字","地上通常ヒット",["なし","なし"],1296,"+3Fで近距離攻め継続","小技からのシンプルなルート。",true),
      route("kimberly-rush","立ち中K","立ち中K > CDR > 屈強P > 疾駆け > 急停止 > 屈中P×2 > 立ち中P > 立ち強P > 疾駆け > 影すくい","地上通常ヒット",["3本","なし"],2240,"端到達後、細工手裏剣起き攻め","運びとSA回収も狙う。")
    ],
    juri:[
      route("juri-mp","立ち中P","立ち中P > 屈中P > 中風破刃","地上通常ヒット",["なし","なし"],null,"前ステで攻め継続","風破ストックを獲得。",true),
      route("juri-light","屈弱K","屈弱K > 屈弱P×2 > 中風破刃","地上通常ヒット",["なし","なし"],null,"風破刃後に起き攻め","小技からの基本。",true)
    ],
    ken:[
      route("ken-mp","屈中P","屈中P > 立ち弱K > 強昇龍拳","地上通常ヒット",["なし","なし"],2020,"前ステ+6Fから攻め","遠めの距離向け。",true),
      route("ken-close","屈中P","屈中P > 立ち中P > 立ち強P > 奮迅昇龍拳","地上通常ヒット",["なし","なし"],2540,"前ステ+6Fから攻め","密着限定。",true),
      route("ken-light","屈弱K","屈弱K > 屈弱P > 立ち弱K > 強昇龍拳","地上通常ヒット",["なし","なし"],1490,"+25F、前ステ+6F","Year4で屈中Pは通常ヒット+5F。")
    ],
    dhalsim:[
      route("dhalsim-anti","4中P CH","DR > 4中P CH > 中ヨガブラスト","対空",["1本","なし"],null,"ヒット高度で追撃を選ぶ","空中の相手を迎撃するルート。",true),
      route("dhalsim-od","ODヨガフレイム","ODヨガフレイム > 屈強K","地上通常ヒット",["2本","なし"],null,"ダウンを取る","浮かせ後の追撃。")
    ],
    ehonda:[route("ehonda-mp","立ち中P","立ち中P > 相撲ステップ > 鉄砲","地上通常ヒット",["なし","なし"],null,"距離を詰めて攻め継続","Year4で5中Pから鉄砲がつながる。",true)],
    deejay:[
      route("deejay-light","立ち弱P","立ち弱P > 屈弱P > 中ソバット","地上通常ヒット",["なし","なし"],null,"中ソバット後に起き攻め","基本小技ルート。",true),
      route("deejay-mp","立ち中P","立ち中P > 立ち弱K > 強ソバット","地上通常ヒット",["なし","なし"],null,"強ソバ後+2Fから投げ・打撃・シミー","",true),
      route("deejay-sa3","立ち中P","立ち中P > 立ち弱K > 中ソバット > SA3","地上通常ヒット",["なし","3本"],null,"SA3で締める","")
    ],
    manon:[
      route("manon-mp","立ち中P","立ち中P > CDR > 屈中P > 4強P > 中ランヴェルセ","地上通常ヒット",["3本","なし"],null,"メダル獲得を狙う","立ち回りの中Pヒットから使う。",true),
      route("manon-mk","立ち中K","立ち中K > CDR > 屈中P > 4強P > 中ランヴェルセ","地上通常ヒット",["3本","なし"],null,"メダル獲得を狙う","中距離の差し返し・置きから。"),
      route("manon-jump","ジャンプ中K","ジャンプ中K > 屈弱P×2 > 強ロン・ポワン","地上通常ヒット",["なし","なし"],null,"ダウンを取る","飛び込みからの安定ルート。")
    ],
    marisa:[
      route("marisa-light","屈弱K","屈弱K / 屈弱P > 屈弱P > 弱ディマカイルス > 6P派生","地上通常ヒット",["なし","なし"],1430,"派生後+31F","暴れ・下段・近距離確反向け。",true),
      route("marisa-mp","立ち中P","立ち中P > 中P > 中グラディウス","地上通常ヒット",["なし","なし"],2420,"ダウン後に攻め","シンプルな火力ルート。",true),
      route("marisa-mp-oki","立ち中P","立ち中P > 中P > 中ディマカイルス > 6P派生","地上通常ヒット",["なし","なし"],2280,"派生後+36Fから起き攻め","ダメージより起き攻めを優先。")
    ],
    lily:[
      route("lily-light","屈弱K","屈弱K > 屈弱P×2 > 中トマホーク","地上通常ヒット",["なし","なし"],null,"ダウン後に攻め","",true),
      route("lily-wind","屈中K","屈中K > 弱コンドルウインド","地上通常ヒット",["なし","なし"],null,"長いリーチを活かす","",true),
      route("lily-mp","屈強P","屈強P > CDR > 4強P > 立ち中K > 弱スパイア","地上通常ヒット",["3本","なし"],null,"スパイア後に攻め","Year4版。")
    ],
    cammy:[route("cammy-light","屈弱P","屈弱P×2 > 立ち弱K > 中スパイラルアロー","地上通常ヒット",["なし","なし"],null,"アロー後に起き攻め","小技からの基本。",true)],
    aki:[
      route("aki-light","屈弱P","屈弱P×2 > 立ち弱K > 強蛇頭鞭","地上通常ヒット",["なし","なし"],null,"強蛇頭鞭後+44F","Year4調整基準。",true),
      route("aki-mp","立ち中K","立ち中K > 立ち中P > 強蛇頭鞭","地上通常ヒット",["なし","なし"],null,"強蛇頭鞭後+44Fから起き攻め","",true),
      route("aki-pc","立ち強K PC","立ち強K PC > 強凶襲突 > 小技 > 強蛇頭鞭","パニッシュカウンター",["なし","なし"],null,"強蛇頭鞭後に攻め","")
    ],
    ed:[
      route("ed-light","屈弱P","屈弱P > 立ち弱P > 中サイコブリッツ","地上通常ヒット",["なし","なし"],null,"中ブリッツ後+39Fから起き攻め","",true),
      route("ed-mp","立ち中P","立ち中P > 屈弱K > 中サイコブリッツ","地上通常ヒット",["なし","なし"],null,"ブリッツ後に起き攻め","",true),
      route("ed-2mk","屈中P","屈中P > CDR > 立ち強P > 屈中K > 屈中P > 強サイコブリッツ","地上通常ヒット",["3本","なし"],null,"強ブリッツ後に起き攻め","")
    ],
    blanka:[
      route("blanka-light","立ち弱K","立ち弱K > 屈弱P > 強エレクトリックサンダー","地上通常ヒット",["なし","なし"],null,"約+39Fから起き攻め","",true),
      route("blanka-low","屈弱K","屈弱K > 屈弱P > 強エレクトリックサンダー","地上通常ヒット",["なし","なし"],null,"約+39Fから起き攻め","下段始動。",true),
      route("blanka-mp","屈中P","屈中P > 中ローリングアタック","地上通常ヒット",["なし","なし"],null,"ダウンを取る","火力重視。")
    ],
    jp:[
      route("jp-light","屈弱P","屈弱P×1～2 > 立ち弱P > 弱ストリボーグ","地上通常ヒット",["なし","なし"],null,"+38Fから起き攻め","近距離暴れ・確反。",true),
      route("jp-mk","立ち中K","立ち中K > 中ストリボーグ","地上通常ヒット",["なし","なし"],null,"中央牽制から攻め継続","",true),
      route("jp-mp","屈中P","屈中P > 立ち弱K > 弱ストリボーグ","地上通常ヒット",["なし","なし"],null,"+38Fから起き攻め","近距離限定。")
    ],
    zangief:[
      route("zangief-light","屈弱K","屈弱K > 立ち弱P > CDR > 屈弱P > 3中P > ダブルラリアット","地上通常ヒット",["3本","なし"],null,"ダブルラリアット後に攻め","Year4掲載ルート。",true),
      route("zangief-6hp","6強P","6強P > 3中P > ダブルラリアット","地上通常ヒット",["なし","なし"],null,"ダウンを取る","",true)
    ],
    akuma:[
      route("akuma-light","屈弱P","屈弱P×2 > 立ち弱K > 強昇龍拳","地上通常ヒット",["なし","なし"],null,"昇龍拳後に起き攻め","",true),
      route("akuma-mp","屈中P","屈中P×2 > 強昇龍拳","地上通常ヒット",["なし","なし"],null,"昇龍拳後に起き攻め","",true),
      route("akuma-sa3","屈強P","屈強P > 中竜巻斬空脚 > 弱昇龍拳 > SA3","地上通常ヒット",["なし","3本"],null,"SA3で締める","")
    ],
    mbison:[Object.assign(route("mbison-mp","立ち中P","立ち中P > 屈中P > 弱ダブルニー > 弱バックフィスト","地上通常ヒット",["なし","なし"],null,"ダウンを取る","古いSeason 2候補。Year4での成立は未確認。",true),{version:"Season 2 / 要再確認",source:"SF6 Frame Lab（Season 2候補・未再確認）",sourceUrl:"https://y62wang.github.io/sf6-frame-lab/combos-mbison.html"})],
    terry:[
      route("terry-light","屈弱K","屈弱K > 屈弱P > 中バーンナックル","地上通常ヒット",["なし","なし"],null,"中バーン後に起き攻め","距離により+30～42F。",true),
      route("terry-mp","屈中P","屈中P > 立ち弱K > 中バーンナックル","地上通常ヒット",["なし","なし"],null,"端へ運んで攻める","",true)
    ],
    sagat:[
      route("sagat-light","屈弱K","屈弱K×2 > 立ち弱P > 中タイガーアッパーカット","地上通常ヒット",["なし","なし"],null,"+27Fから起き攻め","立ち・しゃがみ確認不要。",true),
      route("sagat-mp","立ち中P","立ち中P > 屈弱P > 中タイガーアッパーカット","地上通常ヒット",["なし","なし"],null,"アッパー後に起き攻め","",true),
      route("sagat-pc","6強K PC","6強K PC > 4強P > 中タイガーショット > 6強K > 中タイガーアッパーカット","無敵技ガード後の確反",["なし","なし"],null,"アッパー後に攻め","Year4の新PCルート。")
    ],
    cviper:[
      route("viper-light","屈弱P","屈弱P > 屈弱P > 立ち弱K > 中サンダー","地上通常ヒット",["なし","なし"],null,"サンダー後に起き攻め","",true),
      route("viper-mp","立ち中P","立ち中P > 屈中P > 弱サンダー > トレース","地上通常ヒット",["なし","なし"],null,"距離を詰めて攻め","",true),
      route("viper-2mp","2強P","2強P > 中セイスモハンマー > ハイジャンプ中P > 空中強バーニングキック","地上通常ヒット",["なし","なし"],null,"起き攻め重視","")
    ],
    yasmine:[
      route("yasmine-light","屈弱P","屈弱P > 立ち弱P・弱Pターゲットコンボ > 中ダロイ > アロン","地上通常ヒット",["なし","なし"],1360,"+30F、前ステ後に投げ・屈中P・シミー","バヤニを獲得。",true),
      route("yasmine-mp","屈中P","屈中P > 強ダロイ > アロン","地上通常ヒット",["なし","なし"],1480,"+44F、前ステ×2後に攻め","バヤニを獲得。",true)
    ],
    elena:[route("elena-light","屈弱P","屈弱P×1～3 > 弱スピンサイズ","地上通常ヒット",["なし","なし"],null,"約+34Fから起き攻め","Year4基本小技ルート。",true)],
    mai:[
      route("mai-light","屈弱K","屈弱K > 屈弱P×2 > 弱忍蜂","地上通常ヒット",["なし","なし"],null,"弱忍蜂後に起き攻め","弱忍蜂はヒット確認。",true),
      route("mai-mp","屈中P","屈中P > 屈弱P > 弱忍蜂","地上通常ヒット",["なし","なし"],null,"弱忍蜂後に起き攻め","Year4基本。",true),
      route("mai-drive","屈中K","屈中K > CDR > 4強K > 屈中P > 強龍炎舞 > 弱忍蜂","地上通常ヒット",["3本","なし"],null,"弱忍蜂後に起き攻め","")
    ],
    rashid:[
      route("rashid-2mk","屈中K","屈中K > CDR > 立ち中K > 立ち強P > 中イーグル・スパイク","地上通常ヒット",["3本","なし"],null,"端へ運んで起き攻め","中足始動には追加補正あり。",true),
      route("rashid-pc","立ち強K PC","立ち強K PC > 6中P > 弱イーグル・スパイク","パニッシュカウンター",["なし","なし"],null,"イーグル後に攻め","",true)
    ],
    alex:[route("alex-air","前ジャンプ中P","前ジャンプ中P > クロスチョップ","地上通常ヒット",["なし","なし"],null,"密着起き攻め","Year4で空中ヒット後+7～8F付近。",true)],
    ingrid:[
      route("ingrid-light","屈弱K","屈弱K > 立ち弱P > 立ち弱K > 中サンライズ","地上通常ヒット",["なし","なし"],null,"サンライズ後に起き攻め","小技始動。",true),
      route("ingrid-mp","立ち中P","立ち中P > 中K > 中サンライズ","地上通常ヒット",["なし","なし"],null,"サンライズ後に起き攻め","ターゲットコンボ。",true),
      route("ingrid-2mp","屈中P","屈中P > 立ち弱K > 中サンライズ","地上通常ヒット",["なし","なし"],null,"サンライズ後に起き攻め","",true)
    ],
    arjun:[
      route("arjun-light","立ち弱P","立ち弱P > 屈弱P > 弱 大義の巨腕","地上通常ヒット",["なし","なし"],1100,"ダウンを取る","Year4追加キャラクター。",true),
      route("arjun-jump","ジャンプ強P","ジャンプ強P > 屈強P > 中 厳酷な岩肩","地上通常ヒット",["なし","なし"],2480,"ダウンを取る","",true),
      route("arjun-mp","立ち中P","立ち中P > 弱 大義の巨腕","地上通常ヒット",["なし","なし"],null,"相手との距離を確認","2段目が当たる間合いで成立。")
    ]
  };
  window.SF6_CHARACTERS = names.map(([id,name,latin], index) => {
    const page = pages[id] || id;
    const entries = data[id] || [];
    return {
      id, name, title:latin.toUpperCase(),
      group:index < 18 ? "ゲーム本編" : index < 22 ? "Year 1" : index < 26 ? "Year 2" : index < 30 ? "Year 3" : "Year 4",
      sourceUrl:`https://sf6-lab.net/fighters/${page}/combo`,
      sourceTitle:"スト6ラボ Year4 コンボ・起き攻め",
      description:`${name}・クラシック操作。Year4資料を基準に、始動技とゲージ状況で整理。`,
      routes:entries
    };
  });
})();

