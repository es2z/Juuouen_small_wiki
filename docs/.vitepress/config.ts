import { defineConfig } from 'vitepress';

export default defineConfig({
    // サイト全体の基本情報
    title: '獣くんきれはし', // サイトのタイトル
    description: 'A small wiki for Juuouen', // サイトの説明

    // ベースURLの設定 (GitHub Pagesの場合、リポジトリ名を指定)
    base: '/Juuouen_small_wiki/',

    // ヘッダーの設定
    themeConfig: {
        // サイドバーの設定
        sidebar: [
            {
              items: [
                { text: 'はじめに', link: '/introduction' } // 概要のセクション1
              ]
            },
            {
              text: '戦い方について',
              items: [
                { text: '概要', link: '/tactics/overview' } // 概要2のセクション
              ]
            }
          ]
    }
});
