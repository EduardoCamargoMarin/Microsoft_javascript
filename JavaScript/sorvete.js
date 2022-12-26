let saborSorvete = ["Chocolate", "Flocos", "Morango", "Creme"] //Sabores de sorvete

console.warn('Sabores clássicos desde 1994')
console.log(saborSorvete[0]);
console.log(saborSorvete[1]);
console.log(saborSorvete[2]);
console.log(saborSorvete[3]);

//adicionar mais sabores

saborSorvete.push("Menta");
saborSorvete.push("Paçoca");
saborSorvete.push("Açai");
saborSorvete.push("Ferrero");
saborSorvete.push("Sonho de Valsa");

//Apresentar os novos sabores
console.error('Trazendo os novos sabores a partir de janeiro 2023!')

console.log(saborSorvete[4]);
console.log(saborSorvete[5]);
console.log(saborSorvete[6]);
console.log(saborSorvete[7]);
console.log(saborSorvete[8]);

//Traz todos os conteudos, evitando a repetição do console.log

for( let i = 0; i < saborSorvete.length; i++) {
    console.log(saborSorvete[i])
}

