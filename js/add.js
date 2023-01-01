        let areaEntrada = document.getElementById("entrada");
        let areaSalida = document.getElementById("texsalida");
        let btnEncriptar = document.getElementById("encriptar");
        let btnDesencriptar = document.getElementById("desencriptar");
        let btnCopiar = document.getElementById("copiar");

        btnCopiar.addEventListener("click",copiarPortapapeles)
        function copiarPortapapeles(){
            let texto = document.getElementById('texsalida');            
            texto.select();
            texto.setSelectionRange(0, 99999);
            document.execCommand('copy');
            areaEntrada.value=""
            document.getElementById('cuadro').style.display = 'block';
            document.getElementById('salida').style.display = 'none';
        }


        btnEncriptar.addEventListener("click",encriptar);

        function encriptar(){            
            let texto = areaEntrada.value; 
            texto=texto.toLowerCase();
            let encriptado="";
        for(let i=0;i<texto.length;i++){
                encriptado+=comparar(texto[i]);
        }
        
        document.getElementById('cuadro').style.display = 'none';
        document.getElementById('salida').style.display = 'block';
        areaSalida.value=encriptado;
        }
        function comparar(letra){
            let salida;
            switch(letra){
                case "a":
                    salida="ai";
                    break;
                case "e":
                    salida="enter";
                    break;
                case "i":
                    salida="imes";
                    break;
                case "o":
                    salida="ober";
                    break;
                case "u":
                    salida="ufat";
                    break;
                    default:
                    salida=letra;
            }
            return salida;
        }
        btnDesencriptar.addEventListener("click",desencriptar);
        function desencriptar(){
            //alert('hola crack');
            
            
                let texto=areaEntrada.value.toLowerCase();
                    texto=texto.replaceAll("ai", "a");
                    texto=texto.replaceAll("enter", "e");
                    texto=texto.replaceAll("imes", "i");
                    texto=texto.replaceAll("ober", "o");
                    texto=texto.replaceAll("ufat", "u");
                    document.getElementById('cuadro').style.display = 'none';
                    document.getElementById('salida').style.display = 'block';
                areaSalida.value=texto;
                //alert('chao crack');
        }