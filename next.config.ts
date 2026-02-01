/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 静的書き出しを有効化
  images: {
    unoptimized: true, // GitHub Pagesでは画像の最適化が使えないため必須
  },
  // リポジトリ名が 'my-app' の場合、'/my-app' と指定が必要（カスタムドメインを使わない場合）
  // basePath: '/repo-name',
  trailingSlash: true,
}

export default nextConfig
