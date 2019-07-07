var result=`
    /*
    * 面试官你好，我是XXX
    * 只用文字作做我介绍太单调了
    * 我就用代码来介绍吧
    * 首先准备一些样式
    */  
    *{
        transition: all 1s;
    }
    html{
        background:rga(222,222,222);
        font-size:16px;
    }

`



var n=0
var id=setInterval(()=>{
    n+=1
    code.innerHTML=result.substring(0,n)
    styleTag.innerHTML=result.substring(0,n)
    if (n>result.length) {
       clearInterval(id)
    }
},10)