/*
 * ハンズオンのリンク一覧
 *
 * ハンズオンを追加・変更するときはこの配列だけを編集してください。
 *   title       : ハンズオン名
 *   summary     : 概要（1〜2文）
 *   docsUrl     : 手順書の URL（GitHub Pages があればそちら、なければリポジトリ内の目次）
 *   repoUrl     : GitHub リポジトリの URL
 *   tags        : デバイス・サービス名など
 *   duration    : 所要時間の目安（不明なら空文字）
 *   status      : "open"（公開中） / "preparing"（準備中）
 */
window.HANDS_ON_LINKS = [
  {
    title:
      "SORACOM LTE-M Button for Enterprise を押すと「近くのご当地情報」が Discord に届く！SORACOM Flux ハンズオン",
    summary:
      "白ボタンを押すと、簡易位置測位で得たおおよその位置から SORACOM Flux の AI アクションがご当地情報を生成し、Discord に投稿します。",
    docsUrl:
      "https://github.com/soracomug/explorer2026-hands-on-lte-m-button-for-enterprise#readme",
    repoUrl:
      "https://github.com/soracomug/explorer2026-hands-on-lte-m-button-for-enterprise",
    tags: ["LTE-M Button for Enterprise", "SORACOM Flux", "簡易位置測位", "Discord"],
    duration: "約60分",
    status: "open",
  },
  {
    title: "GPS マルチユニット ハンズオン",
    summary: "GPS マルチユニット SORACOM Edition を使ったハンズオンです。",
    docsUrl: "https://github.com/soracomug/explorer2026-hands-on-gpsmultiunit#readme",
    repoUrl: "https://github.com/soracomug/explorer2026-hands-on-gpsmultiunit",
    tags: ["GPS マルチユニット"],
    duration: "",
    status: "preparing",
  },
];
