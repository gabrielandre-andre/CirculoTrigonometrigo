
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
}else if(array["video-id"] == ''){
    content.buttonback.style.backgroundColor = 'grey'
    window.location = '?video-id=1'
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
        document.cookie = content.videoId+'= 1 '
    }if(content.checkVideo.checked == false){
        document.cookie = content.videoId+'= 2 '
    }


},100)















addClass(19)


function addClass(naulas){

    var menuMenu = document.getElementById('menu-menu')

    for(var j = 1; j <= naulas; j++){

        menuMenu.innerHTML += '<div id="aula-'+j+'" class=""><i class="material-icons md-18">check</i> AULA '+j+'</div>'
    }


    for(var i = 0; i <= 19; i++){

        if(valor_cookie(i) == 1){

            content.checkVideo.checked = true

            $('#aula-'+i).addClass('conclued-aula');
            

        }
    }

}












videoSelect(content.videoId,20)



function videoSelect(videoId,maxId){

    if(videoId == 1){

        content.videoContent.innerHTML = '<iframe width="1016" height="746" src="https://www.youtube.com/embed/WrNjatlYNH0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



    }else if(videoId == 2){


        content.videoContent.innerHTML = '<iframe width="1016" height="746" src="https://www.youtube.com/embed/DILglksusY0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'


    }else if(videoId == 3){


        content.videoContent.innerHTML = '<iframe width="889" height="652" src="https://www.youtube.com/embed/77xJJaZsMxA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



    }else if(videoId == 4){


        content.videoContent.innerHTML = '<iframe width="889" height="652" src="https://www.youtube.com/embed/OVsNLlTqZqs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



    }else if(videoId == 5){


        content.videoContent.innerHTML = '<iframe width="889" height="652" src="https://www.youtube.com/embed/xNQrnrRTTao" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



    }else if(videoId == 6){


        content.videoContent.innerHTML = '<iframe width="889" height="652" src="https://www.youtube.com/embed/uqhKnaI0XA8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



    }else if(videoId == 7){


        content.videoContent.innerHTML = '<iframe width="889" height="652" src="https://www.youtube.com/embed/8LNwNoWmhjY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



    }else if(videoId == 8){


        content.videoContent.innerHTML = '<iframe width="889" height="500" src="https://www.youtube.com/embed/sel28nYNqYI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



    }else if(videoId == 9){


        content.videoContent.innerHTML = '<iframe width="889" height="652" src="https://www.youtube.com/embed/xQt7g-KAPfg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



    }else if(videoId == 10){

        content.videoContent.innerHTML = '<iframe width="889" height="652" src="https://www.youtube.com/embed/nw8EFLWenUo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'


    }else if(videoId == 11){

        content.videoContent.innerHTML = '<iframe width="889" height="652" src="https://www.youtube.com/embed/hwsaU_105wg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



    }else if(videoId == 12){


        content.videoContent.innerHTML = '<iframe width="889" height="500" src="https://www.youtube.com/embed/gcg6tiRk4hc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'


    }else if(videoId == 13){


        content.videoContent.innerHTML = '<iframe width="889" height="500" src="https://www.youtube.com/embed/nOq6U00SeGQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



    }else if(videoId == 14){


        content.videoContent.innerHTML = '<iframe width="889" height="500" src="https://www.youtube.com/embed/MoHs7JlgtGM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



    }else if(videoId == 15){


        content.videoContent.innerHTML = '<iframe width="889" height="500" src="https://www.youtube.com/embed/jobAedVj220" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



    }else if(videoId == 16){


        content.videoContent.innerHTML = '<iframe width="889" height="500" src="https://www.youtube.com/embed/lC-k50pTthg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



    }else if(videoId == 17){


        content.videoContent.innerHTML = '<iframe width="889" height="652" src="https://www.youtube.com/embed/dbW3N4_hIgE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



    }else if(videoId == 18){


        content.videoContent.innerHTML = '<iframe width="889" height="652" src="https://www.youtube.com/embed/8P8nfmOOOas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



    }else if(videoId == 19){


        content.videoContent.innerHTML = '<iframe width="889" height="652" src="https://www.youtube.com/embed/JLb96WsuJrk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



    }







    if(videoId >= maxId){
        var VideoID = maxId - 1
        window.location = '?video-id='+ VideoID;
    }

    if(videoId == maxId-1){
        content.buttonlater.style.backgroundColor = 'grey'
    }

}
