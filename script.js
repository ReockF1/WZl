const API="https://curly-morning-6dbe.qiufanb666.workers.dev/"

/* 头像上传 */
avatarInput.onchange=e=>{
const file=e.target.files[0]
const reader=new FileReader()
reader.onload=()=>avatarPreview.src=reader.result
reader.readAsDataURL(file)
}

/* 添加视频 */
async function add(){

let url=document.getElementById("url").value
let pass=document.getElementById("pass").value

let res=await fetch(API,{
method:"POST",
body:JSON.stringify({url,password:pass})
})

if(res.status!=200){
alert("密码错误")
return
}

load()
}

/* 加载视频 */
async function load(){

let res=await fetch(API)
let data=await res.json()

gallery.innerHTML=""

data.forEach(link=>{
let img=document.createElement("img")
img.src=link
gallery.appendChild(img)
})

}

load()
