
const display = {}

const content = {}

function clickconfirm(){
    display.inputText = document.getElementById('angValue')

    display.debugConsole = document.getElementById('content-data')

    if(display.inputText.value == ''){

        display.debugConsole.style.display = 'block'

        display.debugConsole.style.animationName = "balancoDisplayDebug"

        display.debugConsole.style.animationDuration = "0.5s"

        

        display.debugConsole.style.borderLeft = '10px solid #ff4747'
        
        display.debugConsole.style.backgroundColor = 'white'

        display.debugConsole.innerHTML = "<p>PREENCHA O CAMPO ACIMA!</p>"

    }else{


        if(display.inputText.value == 'ok'){

            display.debugConsole.style.display = 'block'

            display.debugConsole.style.animationName = "balancoDisplayDebug"

            display.debugConsole.style.animationDuration = "0.5s"

            

            display.debugConsole.style.borderLeft = '10px solid #ff4747'

            display.debugConsole.innerHTML = "<p>VALOR INVÁLIDO!</p>"



        }else{

            display.debugConsole.style.borderLeft = '10px solid #9389BC'
            
            display.debugConsole.style.backgroundColor = 'white'

            display.debugConsole.innerHTML = "<p>DADOS AQUI!</p>"

            
            verifyRadio()

            display.inputText.valueConverted = parseInt(display.inputText.value)

            display.inputText.valueConvertedRadius = display.inputText.valueConverted * Math.PI/180

            display.debugConsole.style.display = 'block'

            if(content.checkradio == 1){

                //CÓDIGO DO SENO

                if(display.inputText.valueConverted <= 90){
                    content.valueContent = Math.sin(display.inputText.valueConvertedRadius)
                    display.debugConsole.innerHTML = "<p> O SENO DE "+display.inputText.valueConverted+" É: <b>"+Math.round(content.valueContent * 1000)/1000+"</b></p>"

                }else{

                }

            }else if(content.checkradio == 2){

                //CÓDIGO DO COSSENO

                if(display.inputText.valueConverted <= 90){
                    content.valueContent = Math.cos(display.inputText.valueConvertedRadius)
                    display.debugConsole.innerHTML = "<p> O COSSENO DE "+display.inputText.valueConverted+" É:<b> "+Math.round(content.valueContent * 1000)/1000+"</b></p>"
                }else{

                }
                
            }else if(content.checkradio == 3){

                //CÓDIGO DA TANGENTE

                if(display.inputText.valueConverted <= 90){
                    content.valueContent = Math.tan(display.inputText.valueConvertedRadius)
                    display.debugConsole.innerHTML = "<p> A TANGENTE DE "+display.inputText.valueConverted+" É:<b> "+Math.round(content.valueContent * 1000)/1000+"</b></p>"

                }else{

                }
                
            }else if(content.checkradio == undefined){

                display.debugConsole.style.display = 'block'


                display.debugConsole.style.animationName = "balancoDisplayDebug"

                display.debugConsole.style.animationDuration = "0.5s"

                

                display.debugConsole.style.borderLeft = '10px solid #ff4747'

                display.debugConsole.innerHTML = "<p>Selecione uma opção acima!</p>"

                
            
                
            }else{
                
                display.debugConsole.style.display = 'block'


                display.debugConsole.style.animationName = "balancoDisplayDebug"

                display.debugConsole.style.animationDuration = "0.5s"

                

                display.debugConsole.style.borderLeft = '10px solid #ff4747'

                display.debugConsole.innerHTML = "<p>Ocorreu um erro interno. Informe o administrador no email: contato@gabrielandre.com.br</p>"

            }

        }


    }


    function verifyRadio(){
        var radios = {
            'seno' : document.getElementById('seno'),
            'cosseno' : document.getElementById('cosseno'),
            'tangente' : document.getElementById('tangente')
        }

        if(radios.seno.checked == true){
            content.checkradio = 1
        }else if(radios.cosseno.checked == true){
            content.checkradio = 2
        }else if(radios.tangente.checked == true){
            content.checkradio = 3
        }

    }


    
}