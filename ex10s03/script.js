const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

let valorInicial = document.getElementById('numero').value;
let raiz = document.getElementById('raiz').value;

let resultado = document.getElementById('resultado');

valorInicial = Number(valorInicial);
raiz = Number(raiz);

document.querySelector('#btn1').addEventListener('click', function (){//PA
    
    
    let valorInicial = Number.parseInt(document.getElementById('numero').value)            
    let raiz = Number.parseInt(document.getElementById('raiz').value)

    

    function calcular(a, b){
        if(!valorInicial  || !raiz ){//para campos vazios
            alert('Campo vazio, favor inserir um número!');
            return;
        }else{
        let retorno = '';
        for(let index = 1; index <= 10; index++) {
           document.getElementById('resultado').innerHTML= (retorno += 'Termo ' + index + '= ' + a + '<br>') 
           a+=b
        }
        }
    }
    calcular(valorInicial, raiz)

    document.getElementById('numero').value = null; //para limpar o input 
    document.getElementById('raiz').value = null; 
});

document.querySelector('#btn2').addEventListener('click', function (){//PG

    let valorInicial = Number.parseInt(document.getElementById('numero').value)            
    let raiz = Number.parseInt(document.getElementById('raiz').value)


    function calcularPG(a, b){
        if(!valorInicial  || !raiz ){//para campos vazios
            alert('Campo vazio, favor inserir um número!');
            return;
        }else{
        let retorno = '';
        for(let index = 1; index <= 10; index++) {
           document.getElementById('resultado').innerHTML= (retorno += 'Termo ' + index + '= ' + a + '<br>') 
           a*=b 
        }
        }
    }
    calcularPG(valorInicial, raiz)

    document.getElementById('numero').value = null; //para limpar o input 
    document.getElementById('raiz').value = null; 
});