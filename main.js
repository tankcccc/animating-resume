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

var result2 = `
        #paper{
            width:100px;
            height:100px;
            background:red;
        }
    `

var text = "body{color:red;}";

// Returns a highlighted HTML string
var css = Prism.highlight(text, Prism.languages.css);


/*把code写到#code和style标签里*/
function writeCode(prefix,code,fn){
        var domCode=document.querySelector('#code')
        //我们第一次就会把前缀写进来
        domCode.innerHTML =prefix || ''
        var n=0
        var id=setInterval(()=>{
        n+=1
        domCode.innerHTML=Prism.highlight(prefix+code.substring(0,n), Prism.languages.css);
        styleTag.innerHTML=prefix+code.substring(0,n)
        if (n>=code.length) {
        clearInterval(id)
        //writeCode去call这个函数
        fn.call()
        
        }
    },10)
}
writeCode('',result ,()=>{
    //接受电话
    createPaper( ()=>{
        console.log('paper有了')
        writeCode(result,result2)
    } )
})



//准备一张白纸 虽然他是同步，但也是可以回调
function  createPaper(fn){
    var paper =document.createElement('div')
    paper.id='paper'
    document.body.appendChild(paper)
    fn.call()
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