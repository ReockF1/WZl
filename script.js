function playVideo(url){
document.getElementById("frame").src=url
document.getElementById("player").classList.remove("hidden")
}

function closePlayer(){
document.getElementById("frame").src=""
document.getElementById("player").classList.add("hidden")
}