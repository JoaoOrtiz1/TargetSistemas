
/*Exercicio 1 */
var indice = 13, soma = 0, k = 0;

while(k < indice){
    k = k + 1;
    soma = soma + k;
}

console.log(soma);

/*Exercicio 2 */

let maxNumber = prompt("Digite o número para verificar na sequência de Fibonacci: ");

maxNumber = parseInt(maxNumber);


if(isNaN(maxNumber)) {
  console.log("Número inválido!");
}else{
  let fibonacci = [0, 1];
  while(fibonacci[fibonacci.length - 1] <= maxNumber){
    let nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(nextNumber);
}
  fibonacci.pop();

  console.log("Sequência de Fibonacci até " + maxNumber + ":");
  console.log(fibonacci);
  if(fibonacci.includes(maxNumber)){
    console.log("O numero " + maxNumber + " está na sequência ");
  }else{
    console.log("O numero " + maxNumber + " não está na sequência ");
  }
}

/*Exercicio 3 */

fetch("dados.json")
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);
    let menorValor = jsonData[0].valor;
    let maiorValor = jsonData[0].valor;
    let media, soma = jsonData[0].valor;
    let diasSemFaturamento = 0;
    let diasFmaior = 0;

    for(let i = 1; i < jsonData.length; i++){
        if(jsonData[i].valor != 0){
            if(jsonData[i].valor < menorValor){
                menorValor = jsonData[i].valor
            }
        }
    }

    for(let i = 1; i < jsonData.length; i++){
        if(jsonData[i].valor != 0){
            if(jsonData[i].valor > maiorValor){
                maiorValor = jsonData[i].valor
            }
        }
    }

    for(let i = 1; i < jsonData.length; i++){
        if(jsonData[i].valor != 0){
            soma += jsonData[i].valor;
        }else{
            diasSemFaturamento += 1;
        }
    }
    
    media = soma/ (jsonData.length - diasSemFaturamento);

    for(let i = 0; i < jsonData.length; i++){
        if(jsonData[i].valor != 0){
            if(jsonData[i].valor > media){
                diasFmaior +=1;
            }
        }
    }

    
    console.log("Média "+media);
    console.log("Número de dias com faturamento maior que a média: "+diasFmaior);
    console.log("O menor valor de faturamento foi de "+menorValor);
    console.log("O maior valor de faturamento foi de "+maiorValor);
});

/*Exercicio 4 */

let faturamento = [
    {   estado: "SP",
        valor: 67836.43
    },
    {   estado: "RJ",
        valor: 36678.66
    },
    {   estado: "MG",
        valor: 29229.88
    },
    {   estado: "ES",
        valor: 27165.48
    },
    {   estado: "outros",
        valor: 19849.53
    }
];

let somaF= 0;

for(let i = 0; i < faturamento.length; i++){
    somaF += faturamento[i].valor;
}

for(let i = 0; i < faturamento.length; i++){
    let percentual = [];
    percentual[i] = (faturamento[i].valor / somaF)*100;
    console.log("Faturamento de "+faturamento[i].estado+": "+percentual[i]+"%")

}


/*Exercicio 5 */
let texto = "TargetSistemas"; 
let textoInvertido = ""; 


for (let i = texto.length - 1; i >= 0; i--) {
  textoInvertido += texto[i];
}

console.log("Texto original: " + texto);
console.log("Texto invertido: " + textoInvertido);