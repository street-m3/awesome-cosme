<a href="https://magical-kleicha-1ee4d8.netlify.app/" title="AWESOME COSME ホームページ"><img src="https://magical-kleicha-1ee4d8.netlify.app/images/logo.svg" alt="AWESOME COSME" align="center"></a>


## AWESOME COSME
[![Netlify Status](https://api.netlify.com/api/v1/badges/ffa5799e-58b7-460c-92cf-ca0a09ec86b5/deploy-status)](https://app.netlify.com/sites/magical-kleicha-1ee4d8/deploys)
<img src="https://img.shields.io/github/languages/code-size/street-m3/awesome-cosme">


化粧品ブランドAWESOME COSME（架空）のホームページを作成しました。こちらのポートフォリオは、コードメンターから発売されているデザイン素材を購入し作成しました。コーディングを専門としていますので、ソースコードから技術能力を判断していただけますと幸いです。


URL: [AWESOME COSME オフィシャルサイト](https://magical-kleicha-1ee4d8.netlify.app/)
## Stack
<img src="https://img.shields.io/badge/-HTML-f2f2f2.svg?logo=html5&style=popout">
<img src="https://img.shields.io/badge/-PostCSS-dd3a0a.svg?logo=PostCSS&style=popout">
<img src="https://img.shields.io/badge/-Lit-5865f2.svg?logo=lit&style=popout">
<img src="https://img.shields.io/badge/-Webcomponents.org-f2f2f2.svg?logo=Webcomponents.org&style=popout">

## 概要
このポートフォリオサイトでは、下層ページのデザインカンプは存在しなかったため、トップページだけの静的サイトの構築をする予定でした。ですが、1ページならではのサイトが作れないかと考え、シングルページアプリケーションの作成に取り組もうと思いました。
## 実装方針
1. 1枚のサイト構築にReactやVueはオーバースペックなため、Web componentsライブラリであるLitを用いて開発します。
2. 既存のRouterを導入すること自体はとても簡単ですが、勉強も兼ねてルーターも自作します。URLとマッチすれば、必要なDOMをレンダリングするシンプルなものです。
3. リダイレクトはNetlifyの`_redirects`を使って、index.htmlを返却するようにします。

また、DOMの更新について以下のことを考えました。<br>
①MutationObserver APIでDOMの変更を検知してコンテンツを更新<br>
②ReactやVueなどのフレームワークを使用し、ライブラリーを導入する


2点とも比較的実装は簡単ですが、Litのレンダリング処理の兼ね合いもあるため使用しませんでした。
### なんでLit?
純粋にReactやVueが苦手（汗）で、キャッチアップするコストが高いからというのが率直な意見です。
ライブラリの使用経験は過去にもありますが、ReactやVueでもないライブラリーを探して辿り着いたのがLitでした。情報が少なめはあるものの、Web componentsを使えば、Vanillaよりも簡潔に早く実装できると考えたからです。ドキュメントを読むために時間は要しましたが、チュートリアルが充実していたので、取り入れやすかったです。
## 機能
1. モーダルウインドウ（コンセプトムービーの表示）
2. スムーススクロール
3. アコーディオンパネル
## Files
```` 
src
├── css
│   ├── Base
│   │   └── _base.pcss
│   ├── Fragments
│   │   └── _fragments.pcss
│   ├── Generic
│   │   ├── _author.pcss
│   │   └── _reset.pcss
│   ├── Settings
│   │   └── _global.pcss
│   ├── Tools
│   │   └── _mixin.pcss
│   ├── Trumps
│   │   └── _test.pcss
│   ├── Fonts
│   └── style.pcss
├── images
│   └── image..
├── index.html
├── js
│   ├── components
│   │   ├── layouts/..wrapper etc
│   │   └── site/..header, footer etc
│   ├── env
│   │   └── env.js
│   ├── lib
│   │   ├── utils/..backFaceFixed etc
│   │   ├── drawer.js
│   │   └── modal.js
│   ├── pages
│   │   └── top/..
│   ├── styles
│   │   ├── container
│   │   └── utils.js
│   └── index.js
````

## こだわりポイント
モーダルウインドウは、アクセシビリティに対応するため自分なりに工夫して作成しました。
未だ発展途上で今後も機能追加していく予定です。やがては実務で使えたらいいなと感じています。


[modal-components](https://github.com/street-m3/modal-components)
## 改善点
- 振る舞いを理解してコードを抽象化する
Router（ヘッダーロゴをクリックするとhistory APIを呼ぶなど）のロジックは、コードの抽象化をすると逆にわかりづらくなることも考えて、あえて関数の統一化しませんでした。
SPAに必要な、URLマッチャー、DOMの更新、routes.jsonの呼び出しなど追加したい機能が多くあります。それについては、今後ベストプラクティスを検討し調整する必要がありそうです。


- 今回のポートフォリオのような小規模なサイトであれば、PostCSSではなく`global.css` のようなピュアなCSSファイルの方が管理しやすいと思いました。ディレクトリが増え、不要なスタイルも増える可能性があるからです。
## 今後の計画
1. Stripeの決済機能を追加したい
2. 自作のカルーセルスライダーを導入


最後までお読みいただきまして、ありがとうございました🙏