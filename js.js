
const display = {}

const content = {}

function clickconfirm(){
    display.inputText = document.getElementById('angValue')

    display.debugConsole = document.getElementById('content-data')

    if(display.inputText.value == ''){

        display.debugConsole.style.animationName = "balancoDisplayDebug"

        display.debugConsole.style.animationDuration = "0.5s"

        

        display.debugConsole.style.borderLeft = '10px solid #ff4747'
        
        display.debugConsole.style.backgroundColor = 'white'

        display.debugConsole.innerHTML = "<p>PREENCHA O CAMPO ACIMA!</p>"

    }else{


        if(display.inputText.value == 'ok'){

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


            if(content.checkradio == 1){

                //CÓDIGO DO SENO

            }else if(content.checkradio == 2){

                //CÓDIGO DO COSSENO
                
            }else if(content.checkradio == 3){

                //CÓDIGO DA TANGENTE
                
            }else if(content.checkradio == undefined){

                display.debugConsole.style.animationName = "balancoDisplayDebug"

                display.debugConsole.style.animationDuration = "0.5s"

                

                display.debugConsole.style.borderLeft = '10px solid #ff4747'

                display.debugConsole.innerHTML = "<p>Selecione uma opção acima!</p>"

                
            
                
            }else{

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