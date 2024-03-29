# 2023 年後期「JavaScript 基礎」授業課題

## 授業内コード

1. 10 月 5 日（木）はじめの一歩
2. 10 月 5 日（木）GitHub リポジトリ作成
3. 10 月 12 日（木）文字列の連結、変数、定数、複合代入演算子
4. 10 月 19 日（木）document オブジェクトと DOM
5. 10 月 26 日（木）その他の document の取得と挿入、イベント
6. 11 月 2 日（木）classList ととにかくイベント
7. 11 月 9 日（木）if 文で条件分岐、左右まで
8. 11 月 16 日（木）中間確認テスト
9. 11 月 30 日（木）関数
10. 12 月 7 日（木）関数、引数、戻り値、関数式、変数のスコープ
11. 12 月 14 日（木）コールバック関数、アロー関数
12. 1 月 11 日（木）フォームとオブジェクト
13. 1 月 25 日（木）JSON と Date()

※JavaScript メモは、別ファイル[lesson.md](./lesson.md)に収納

## 2 月 1 日（木）

- オブジェクトにて、Chiikawa カード作成
- 期末テスト

## 1 月 25 日（木）

- JSON(JavaScript Object Notition)=JavaScript のオブジェクト記法
- new Date で今の時間情報が取れる

```js
//ミリ秒を日、時間、分、秒に変換する
const seconds = Math.floor(difference / 1000);
const minutes = Math.floor(seconds / 60);
const hours = Math.floor(minutes / 60);
const days = Math.floor(hours / 24);

console.log("進級展までの日数は" + days + "日です。");
```

## 1 月 18 日（木）

- オブジェクトの配列
- for...in
- 配列の操作（push とか）
- for...of
- 多重配列

## 1 月 11 日（木）

### フォーム

form は、.value で値が取れる
value は文字列なので注意

### オブジェクト

- やっと出てきた、プロパティとメソッドの正体
- .（ドット記法）と[]ブランケット記法
- []の場合、数値は添字なるので注意

## 12 月 14 日（木）

- コールバック関数
  - コールバック関数は、関数の引数に関数を当てる使い方
- アロー関数
  - this が使えないので注意
- 関数名、関数の定義、関数式、関数の実行
  - 関数名しかない場合は、function と同じ
  - 関数名に()が付いていると関数の実行
  - const 関数名は、関数式
  - return は、戻り値

## 11 月 30 日

- LEVEL 別ドリル開始
- 関数

## 11 月 16 日

- 中間確認テスト

## 11 月 9 日

- 条件分岐
- スライドショウ前・次の画像がなければ

## 11 月 2 日

- classList.add,classList.toggle,classList.remove,classList.contains
- カウンターを使って配列を操作

## 10 月 26 日

- getElementById,getElementsByClassName,getElementsByTagName
- innerHTML と複合代入演算子を使った要素の追加
  - さらにテンプレートリテラルを使うと便利
- addEventListner("イベント",function(){ 処理 });
- element.setAttribute("属性名","属性値")
  - これで、表示を切り替える

## 10 月 19 日

- コレクション（配列）
- 繰り返し処理（for 文）
  - 配列を使った複数要素の追加
  - 要素の創出

## 10 月 12 日

- リテラルと演算子
- 文字列の連結
- 変数と定数
- 複合代入演算子
- document.オブジェクトと DOM の途中まで

## 10 月 5 日

- インターネットの基本について理解する。
- Web の基本的な仕組みを理解する。
- Web サーバーの役割について理解する。
- 開発環境の構築
- JavaScript を書く場所
