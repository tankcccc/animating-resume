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
    #code{
        position:fixed;
        left:0;
        width:50%;
        height:100%;
    }
    #paper{
        position:fixed;
        right:0;
        width:50%;
        height:100%;
        background:#ddd;
        display: flex; 
        justify-content:center;
        align-items:center;
    }
    #paper> .content{
        background: white;
    }
`

var result2 = `
        #paper{
            // width:100px;
            // height:100px;
            // background:blue;
        }
    `

var text = "body{color:red;}";
var md =`# 自我介绍
我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板
`
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
        domCode.scrollTop = domCode.scrollHeight
        if (n>=code.length) {
        clearInterval(id)
        //writeCode去call这个函数
        fn.call()
        
        }
    },0)
}
    //paper里边的内容
function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper>.content')
    let n=0
    var id=setInterval(()=>{
        n+=1
        domPaper.innerHTML=markdown.substring(0,n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n>=markdown.length) {
        clearInterval(id)
        //writeCode去call这个函数
        fn.call()
        
        }
    },0)
}

writeCode('',result ,()=>{
    //接受电话
    createPaper( ()=>{
        console.log('paper有了')
        writeCode(result,result2 ,()=>{
            writeMarkdown(md)
        })
    } )
})



//准备一张白纸 虽然他是同步，但也是可以回调
function  createPaper(fn){
    var paper =document.createElement('div')
    paper.id='paper'
    var content =document.createElement('pre')
    content.className='content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}


//把生成的样式添加到'我需要一张白纸后边'