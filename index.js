

const pessoa1 = {
    nome: "Leonardo",
    Sobrenome: "Avelino",
    idade: 30
};

console.log(pessoa1.nome);  //acessar o nome no objeto.
console.log(pessoa1.Sobrenome); //acessar o sobrenome no objeto.



const pessoa2 = {
    nome: "Maria",
    Sobrenome: "Avelino",
    idade: 25
};

console.log(pessoa2.nome);
console.log(pessoa2.Sobrenome);


function criaPessoa(nome, sobrenome, idade){
    return{
        nome,
        sobrenome,
        idade
    };
}

const pessoa3 = criaPessoa("Leonardo", "Avelino", 30);
console.log(pessoa3.nome);

const pessoa4 = criaPessoa("João", "Almeida", 25);

console.log(pessoa4.nome);

const pessoa5 = criaPessoa("Amumu","Do Egito", 1500);

console.log(pessoa5.nome, pessoa5.sobrenome);


const pessoa6 = {
    nome: "Seu",
    sobrenome: "Bolacha",
    idade: 38,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);
    },

    atualIdade(){
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa6.fala();

pessoa6.incrementaIdade();
pessoa6.atualIdade();
pessoa6.incrementaIdade();
pessoa6.atualIdade();
