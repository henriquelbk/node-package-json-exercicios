const parOuImpar = () => {

    const escolha = process.argv[2].toLowerCase();

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
      
    
    const numeroAleatorioEntreZeroEDez = getRndInteger(0, 10)
    const minhaMao = Number(process.argv[3])
    const maodoPc = numeroAleatorioEntreZeroEDez
    const result = minhaMao + maodoPc 

    // if (escolha === 'par') {
    // } else if ( result % 2 === 0 ) {
    //    console.log(`${minhaMao} + ${maodoPc} = ${result} \nVocê venceu!`)
    // } else {
    //    console.log(`${minhaMao} + ${maodoPc} = ${result} \nVocê perdeu!`)
    // }

    // if (escolha === 'impar') {
    //  } else if ( result % 2 === 1 ) {
    //      console.log(`${minhaMao} + ${maodoPc} = ${result} \nVocê venceu!`)
    //  } else {
    //      console.log(`${minhaMao} + ${maodoPc} = ${result} \nVocê perdeu!`)
    //  }

    if ((escolha === 'par' && result % 2 === 0) || (escolha === 'impar' && result % 2 === 1)) {
        console.log(`${minhaMao} + ${maodoPc} = ${result}\nVocê venceu!`);
    } else {
        console.log(`${minhaMao} + ${maodoPc} = ${result}\nVocê perdeu!`);
    }

}

parOuImpar()