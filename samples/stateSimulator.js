
const armazena = [];

function CamiloState(){

        

        this.AdicionaData =  function ( data ){

            armazena.push(...data);
        } 
}

const state = new CamiloState();

function getState(  recebePrimeiroValor ){

        if( recebePrimeiroValor) {
            state.AdicionaData(recebePrimeiroValor);
        }


        var teste = function Teste(teste){
            state.AdicionaData.call(teste)
        }

        return [
            armazena,  //array  0
            teste  //func 1
         ]
} 


const [teste, setTeste] = getState([]);

// const umArrayQualquer = []

// umArrayQualquer.push(1)

// umArrayQualquer.push("teste")

// const obj = { 
//     name: "Camilo",
//     idade: 134,
//     altura: 174
// }

// umArrayQualquer.push(obj);

// function teste(  valor ){
//     console.log( `Mostra Valor: ${valor}`)
// };

// umArrayQualquer.push(teste);


// // console.log(umArrayQualquer);

// const [ , , , pegaUmFunc  ] = umArrayQualquer; //armazenado o objeto (function) na variavel recebeDoArray


// //console.log(pegaUmFunc);

// pegaUmFunc("Imprime esse valor");


// // recebeDoArray("Bucks liro");

// //console.log(umArrayQualquer[3]);


setInterval(function () {
//aqui dentro vai ser executado depois de 5 segundos
     setTeste([1, 2,4,5,6,7,8,9])


}, 5000);


setInterval(function () {
    //aqui dentro vai ser executado depois de 5 segundos
        console.log(teste);
    
    
    }, 10000);