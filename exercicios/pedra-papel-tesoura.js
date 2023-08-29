// const pedraPapelTesoura = () => {

//     function getRndInteger(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) ) + min;
//       }
      
//     const numeroAleatorio = getRndInteger(0, 2)
//     const minhaEscolha = process.argv[2].toLowerCase()
//     let escolhaPC = numeroAleatorio

//     if (escolhaPC === 1) {
//         escolhaPC = "pedra"
//     } else if (escolhaPC === 2) {
//         escolhaPC = "papel"
//     } else {
//         escolhaPC = "tesoura"
//     }

//     if (minhaEscolha === "pedra" && escolhaPC === "pedra") {
//         console.log(`${minhaEscolha} e ${escolhaPC}, empate.`);
//     } else if (minhaEscolha === "pedra" && escolhaPC === "papel") {
//         console.log(`${minhaEscolha} e ${escolhaPC}, você perdeu.`);
//     } else if (minhaEscolha === "pedra" && escolhaPC === "tesoura") {
//         console.log(`${minhaEscolha} e ${escolhaPC}, você ganhou.`);
//     } else if (minhaEscolha === "papel" && escolhaPC === "papel") {
//         console.log(`${minhaEscolha} e ${escolhaPC}, empate.`);
//     } else if (minhaEscolha === "papel" && escolhaPC === "pedra") {
//         console.log(`${minhaEscolha} e ${escolhaPC}, você ganhou.`);
//     }  else if (minhaEscolha === "papel" && escolhaPC === "tesoura") {
//         console.log(`${minhaEscolha} e ${escolhaPC}, você perdeu.`);
//     }  else if (minhaEscolha === "tesoura" && escolhaPC === "tesoura") {
//         console.log(`${minhaEscolha} e ${escolhaPC}, empate.`);
//     }  else if (minhaEscolha === "tesoura" && escolhaPC === "pedra") {
//         console.log(`${minhaEscolha} e ${escolhaPC}, você perdeu.`);
//     }  else if (minhaEscolha === "tesoura" && escolhaPC === "papel") {
//         console.log(`${minhaEscolha} e ${escolhaPC}, você ganhou.`);
//     }
// }

const pedraPapelTesoura = () => {

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
      
    const opcoes = ["pedra", "papel", "tesoura"];
    const numeroAleatorio = getRndInteger(0, 2); 

    const escolhaPC = opcoes[numeroAleatorio];
    const minhaEscolha = process.argv[2].toLowerCase();

    const resultados = {
        "pedra": {
            "pedra": "Empate.",
            "papel": "Você perdeu.",
            "tesoura": "Você ganhou."
        },
        "papel": {
            "pedra": "Você ganhou.",
            "papel": "Empate.",
            "tesoura": "Você perdeu."
        },
        "tesoura": {
            "pedra": "Você perdeu.",
            "papel": "Você ganhou.",
            "tesoura": "Empate."
        }
    };

    const resultadoFinal = resultados[minhaEscolha][escolhaPC];
    console.log(`${minhaEscolha} e ${escolhaPC}, ${resultadoFinal}`);
};

pedraPapelTesoura();