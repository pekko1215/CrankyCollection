# CrankyCollection
 - 正規表現が苦手なあなたにおすすめ
 - 内部で検索位置を記憶し、直感的に文字列の切り出しができる。！
## 使い方
- CrankyCollection(Array,String)  
- 引数 Array
    - String  
    指定した文字が、現在の位置から初めに見つかった位置まで移動
    - Array  
    Stringを複数指定することができる。
    - Object  
    まだ作ってないよ！
    - Function  
    第一引数に、現在の文字を送り、戻り値がFalseになるまで読み飛ばす。
    - Boolean  
    Trueを指定すると、現在位置から文字の切り抜きを開始する。  
    Falseを指定すると、切り抜きを終了し、戻り値にPushする。
    - Number  
    現在位置を指定数ずらす。マイナスも可能  

- 引数 String
    - 検索される文字

## 使用例
- aタグからhrefのURLを取り出す。  

```javascript
var url = "<a href='http://dwadwad.com'>もちもちぼんばー</a>"

CrankyCollection(["a","href","=",["'",'"'],true,["'",'"'],-1,false],url)
```