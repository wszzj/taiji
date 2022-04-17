let text = document.querySelector("#text");
let style = document.querySelector("#style");
let string = `
/* 你好，我叫小明
 * 接下来我要演示一下我的前端功底
 * 首先我要准备一个 div
 */
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我把 div 变成一个太极图
 * 注意看好了
 * 首先，把 div 变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 太极图是阴阳形成的
 * 一黑一白
 */
#div1{
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/* 加两个小球 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:#000;
    background: rgb(0,0,0);
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:#fff;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string1 = "";

let n = 0;

let step = () => {
  setTimeout(() => {
    //替换空格
    if (string[n] === "\n") {
      string1 += "<br>";
    }
    //替换空为缩进
    else if (string[n] === " ") {
      string1 += "&nbsp";
    } else {
      string1 += string[n];
    }
    text.innerHTML = string1;
    style.innerHTML = string.substring(0, n);
    window.scroll(0, 9999);
    text.scroll(0, 9999);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 50);
};
step();
