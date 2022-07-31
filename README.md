# 眼鏡官網 week3

### 頁面
index 首頁
blog  部落格
Series-optical    系列眼鏡第一頁
Series-sunglasses 系列眼鏡第二頁
store 門市據點
store-taipei 門市據點第一頁
QA    常見問題

### layout
head.pug     網頁資訊
layout.pug   共通區塊、header區塊
footer.pug   footer區塊
navbar.pug   導覽列


------------------------------------------------------
## 參考ray 提供的gulp 修改路徑
https://github.com/hsiangfeng/Pug-Sweetaste

編譯Pug/jade > html
編譯scss、sass > css

## 資料夾路徑
app 開發環境 
  image > 圖片
  js    > js檔
  style  > Sass.Scss
  layout > 共通區塊 
public 輸出路徑


## EJS組合方式
1. layout  > header 、 navbar
2. content > 網站內容
3. footer  > footer

    head.pug  > head 區塊 、html資訊跟連結
    footer.pug  > footer 區塊
    layout.pug  > 共通區塊、header區外、連結head.pug 、nav區塊
   

## GULP功能
版型管理
SASS/SCSS編譯
PUG/JADE 編譯