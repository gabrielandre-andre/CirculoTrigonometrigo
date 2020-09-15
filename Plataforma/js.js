
const content = {}


content.buttonback = document.getElementById('backvideo')
content.buttonlater = document.getElementById('latervideo')
content.checkVideo = document.getElementById('checkVideoWatch')

content.videoContent = document.getElementById('video')


var url   = window.location.search.replace("?", "");
var items = url.split("&");

var array = {
  'video-id' : items[0],
  'name' : items[1]
}

content.videoId1 = array["video-id"].split('=');
content.videoId = parseInt(content.videoId1[1])

if(content.videoId <= 0){
    content.buttonback.style.backgroundColor = 'grey'
    window.location = '?video-id=1'
}else if(content.videoId == 1){
    content.buttonback.style.backgroundColor = 'grey'
}


function latervideo(){
    var calcVideo = content.videoId+1
	window.location = '?video-id='+calcVideo;

}
function backvideo(){

    var calcVideo = content.videoId-1
	window.location = '?video-id='+calcVideo;
    
}























var x = document.cookie

console.log(x)

function valor_cookie(nome_cookie) {
    // Adiciona o sinal de = na frente do nome do cookie
    var cname = ' ' + nome_cookie + '=';
    
    // Obtém todos os cookies do documento
    var cookies = document.cookie;
    
    // Verifica se seu cookie existe
    if (cookies.indexOf(cname) == -1) {
        return false;
    }
    
    // Remove a parte que não interessa dos cookies
    cookies = cookies.substr(cookies.indexOf(cname), cookies.length);

    // Obtém o valor do cookie até o ;
    if (cookies.indexOf(';') != -1) {
        cookies = cookies.substr(0, cookies.indexOf(';'));
    }
    
    // Remove o nome do cookie e o sinal de =
    cookies = cookies.split('=')[1];
    
    // Retorna apenas o valor do cookie
    return decodeURI(cookies);
}

setInterval(function(){

    if(content.checkVideo.checked == true){
        document.cookie = content.videoId+'=1'
    }if(content.checkVideo.checked != true){
        document.cookie = content.videoId+'=2'
    }


},100)


for(var i = 0; i <= 10; i++){
    if(valor_cookie(i) == 1){

        

    }
}




























videoSelect(content.videoId,3)



function videoSelect(videoId,maxId){

    if(videoId == 1){

        content.videoContent.innerHTML = "<iframe src='https://www.youtube.com/embed/CrSC1ZA9j0M' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"



    }else if(videoId == 2){


        content.videoContent.innerHTML = "<iframe src='https://www.youtube.com/embed/sVnfv3-SeuU' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"


    }







    if(videoId >= maxId){
        var VideoID = maxId - 1
        window.location = '?video-id='+ VideoID;
    }

    if(videoId == maxId-1){
        content.buttonlater.style.backgroundColor = 'grey'
    }

}