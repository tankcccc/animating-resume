var result=`
    body{
        background:red;
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
},100)