/*
 * ハンズオンのリンク一覧
 *
 * ハンズオンを追加・変更するときはこの配列だけを編集してください。
 *   title       : ハンズオン名
 *   summary     : 概要（1〜2文）
 *   docsUrl     : 手順書の URL（GitHub Pages があればそちら、なければリポジトリ内の目次）
 *   repoUrl     : GitHub リポジトリの URL
 *   tags        : デバイス・サービス名など
 *   status      : "open"（公開中） / "preparing"（準備中）
 */
window.HANDS_ON_LINKS = [
  {
    title:
      "【白ボタン】SORACOM LTE-M Button for Enterprise を押すと「近くのご当地情報」が Discord に届く！ハンズオン",
    summary:
      "白ボタンを押すと、簡易位置測位で得たおおよその位置から SORACOM Flux の AI アクションがご当地情報を生成し、Discord に投稿します。",
    docsUrl:
      "https://github.com/soracomug/explorer2026-hands-on-lte-m-button-for-enterprise#readme",
    repoUrl:
      "https://github.com/soracomug/explorer2026-hands-on-lte-m-button-for-enterprise",
    tags: [
      "LTE-M Button for Enterprise",
      "SORACOM Flux",
      "簡易位置測位",
      "Discord",
    ],
    status: "open",
  },
  {
    title:
      "【GPS】GPS マルチユニットの「いまどこ？」を地図で見える化！SORACOM Harvest × Lagoon 位置情報ハンズオン",
    summary:
      "GPS マルチユニットの位置情報を SORACOM Harvest で確認し、SORACOM Lagoon で可視化します。中・上級者向けに SORACOM Beam で AWS へ送るコンテンツもあります。",
    docsUrl:
      "https://github.com/soracomug/explorer2026-hands-on-gpsmultiunit/blob/main/docs/README.md",
    repoUrl: "https://github.com/soracomug/explorer2026-hands-on-gpsmultiunit",
    tags: [
      "GPS マルチユニット",
      "SORACOM Harvest",
      "SORACOM Lagoon",
      "SORACOM Beam",
    ],
    status: "open",
  },
  {
    title:
      "【MCP】AI エージェントに話しかけて SORACOM を操作！MCP で調べる・設定する・分析する生成AI ハンズオン",
    summary:
      "生成AIエージェントから SORACOM Knowledge MCP で公式ドキュメントを調べ、SORACOM アカウントの情報参照・設定変更や Harvest Files のデータ分析を体験します。",
    docsUrl:
      "https://github.com/soracomug/explorer2026-hands-on-gen-ai/blob/main/docs/index.md",
    repoUrl: "https://github.com/soracomug/explorer2026-hands-on-gen-ai",
    tags: [
      "生成AI",
      "Claude Code",
      "Kiro CLI",
      "SORACOM Knowledge MCP",
      "SORACOM MCP Server",
      "SORACOM Harvest Files",
    ],
    status: "open",
  },
  {
    title:
      "【写真】スマホで撮った写真を AI が解析して Discord に届ける！SORACOM Flux AI画像判定ハンズオン",
    summary:
      "スマホや PC で撮影した画像を SORACOM Harvest Files にアップロードし、SORACOM Flux の AI アクションで解析した結果を Discord に通知します。",
    docsUrl:
      "https://github.com/soracomug/explorer2026-hands-on-flux-image-ai#readme",
    repoUrl: "https://github.com/soracomug/explorer2026-hands-on-flux-image-ai",
    tags: [
      "SORACOM Harvest Files",
      "SORACOM Flux",
      "生成AI",
      "画像解析",
      "Discord",
    ],
    status: "open",
  },
];
