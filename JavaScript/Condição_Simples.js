let budget = 4000;
let preçoproduto = 3550;
let desconto = preçoproduto - (preçoproduto * .15)

if (budget >= preçoproduto || budget >= desconto) {
    console.log(`Você possui ${budget} para utilizar no produto de valor ${preçoproduto}, após a compra você terá ${budget - preçoproduto}`)
    
} else {
    console.log(`Você possui ${budget} para utilizar no produto de valor ${preçoproduto}, falta um valor de ${preçoproduto - budget}`)
    
}