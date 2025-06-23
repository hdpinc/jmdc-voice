# jmdc-voice
JMDCオフシャルブログのSASS / CSSを保存するためのリポジトリです。


## 概要
本リポジトリはGithub Pagesとして公開されています。
`/dist/css/style.css`はHatena blogからインポートされ、ブログデザインのカスタマイズに使用されています。

参考：Hatena blog(https://jmdchr.hatenablog.com/)

Hatena blogでは既存のモジュールのHTMLテンプレートがカスタマイズできないので、本リポジトリにHTMLファイルは含まれていません。
（StaticなHTMLを書いて追加することはできます。バナーの設置はこの方法を取っています。）

Updateの際はchromeなどのdeveloper toolでHTML要素のcssクラスを確認しながら、セレクターを上書く形でスタイリングしてください。

## 事前準備
はてなブログのアカウントを作成し、HRに編集権限を付与していただき、以下から管理画面にログインしてください。
https://accounts.hatena.ne.jp/login

## 使い方
```
npm run dev
```
`/src/scss`以下の.scssファイルを監視し、変更が検出されるたびにコンパイルします。
`/dist/css/style.css`にコンパイルされたCSSを、Hatena blogデザイン編集「カスタマイズ」タブの「デザインCSS」に貼り付けて表示確認してください。

参考：デザインCSSを記述する
https://help.hatenablog.com/entry/design/design-css

表示が正しく変更されたのが確認できたら、下記コマンドを叩き本番用CSSをビルドしてください。

```
npm run build
```
minifyされたcssファイルがビルドされます。
ビルドしたファイルをmainブランチに反映すると、Hatena blogの表示が更新されます。
（更新までタイムラグが生じる可能性があります）
