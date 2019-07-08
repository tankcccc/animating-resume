var text = "body{color:red;}";

// Returns a highlighted HTML string
var css = Prism.highlight(text, Prism.languages.css);




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
    /* 我需要一点代码高亮 */
    .token.selector{ color: #690; }
    .token.property{ color: #905; }
    /* 我需要一张白纸*/
`



var n=0
var id=setInterval(()=>{
    n+=1
    code.innerHTML=result.substring(0,n)
    code.innerHTML=Prism.highlight(code.innerHTML, Prism.languages.css);
    code.innerHTML=code.innerHTML.replace('html','<span style="color:red;">html</span>')
    // styleTag.innerHTML=result.substring(0,n)
    if (n>result.length) {
       clearInterval(id)
       fn2()
       fn3(result)
    }
},10)
//准备一张白纸
function fn2(){
    var paper =document.createElement('div')
    paper.id='paper'
    document.body.appendChild(paper)
}

//给白纸加样式
function fn3(preResult){
    var result = `
        #paper{
            width:100px;
            height:100px;
            background:red;
        }
    `
    var n=0
    var id=setInterval(()=>{
        n+=1
        // console.log(result.substring(0,n))
        // console.log(result.substring(n-1,n))
        //追加
        // console.log(code.innerHTML)
        // 给paper加高亮
        code.innerHTML=preResult+result.substring(0,n)
        code.innerHTML=Prism.highlight(code.innerHTML, Prism.languages.css);
        // 加样式
        styleTag.innerHTML = result.substring(0,n)
        console.log(styleTag.innerHTML)
        if (n>=result.length) {
            window.clearInterval(id)
        }
    },50)

}
//把生成的样式添加到'我需要一张白纸后边'