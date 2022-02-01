const cliente = [], banco=[];
let input = '', input2=0, cont=0, i=0, c=0, b=0;
let valorbool = false;
let variavel = {
    valor: ''
}

class Pessoa {
    _nome
    _cpf
    _idade 

    constructor(nome,cpf,idade) {
        this._nome=nome;
        this._idade=idade;
        this._cpf=cpf;
    }
    set nome(n) {
    this._nome = n;
}
    set cpf(c) {
        this._cpf = c;
    }
    set idade(i) {
        this._idade = i;
    }
    get nome() {
    return this._nome;
}
    get cpf() {
        return this._cpf;
    }
    get idade() {
        return this._idade;
    }
}

class Conta extends Pessoa {
    #numero_conta
    #agencia
    #saldo
    #id

    constructor(_nome,_cpf,_idade,numero_conta,agencia,saldo,id) {
        super(_nome,_cpf,_idade);
        this._nome=_nome;
        this._cpf=_cpf;
        this._idade=_idade;
        this.#numero_conta=numero_conta;
        this.#agencia=agencia;
        this.#saldo=saldo;
        this.#id = id;
    }
    set numero_conta(n) {
        this.#numero_conta = n;
    }
    set agencia(a) {
        this.#agencia = a;
    }
    get numero_conta() {
        return this.#numero_conta;
    }
    get agencia() {
        return this.#agencia;
    }
    set saldo(s) {
        this.#saldo = s;
    }
    get saldo() {
        return this.#saldo;
    }
    getInformacoes() {
        console.log(`#id${this.#id} nome ${this._nome}, ${this._idade} anos de idade e CPF ${this._cpf}, possui R$${this.#saldo} reais. Dono da conta de numero ${this.#numero_conta}, agencia ${this.#agencia}.`);
    }
}

class Banco {
    #nome_banco
    #cidade
    #id 

    constructor(id) {
        this.c1 = null;
        this.#id=id;
    }
    set nome_banco(n) {
    this.#nome_banco = n;
}
    get nome_banco() {
    return this.#nome_banco;
}
    set cidade(c) {
        this.#cidade = c;
    }
    get cidade() {
        return this.#cidade;
    }
    getInformacoes() {
        console.log(`#id${this.#id} Banco ${this.#nome_banco} da cidade ${this.#cidade}`);
    }
    consultarSaldo(conta_cliente) {
        this.c1 = conta_cliente;
        return `O cliente ${this.c1._nome}, idade ${this.c1._idade}, com o numero da conta ${this.c1.numero_conta} possui R$ ${this.c1.saldo} de saldo no banco ${this.#nome_banco}`;
}
    depositarDinheiro(s, conta_cliente) {
        this.c1 = conta_cliente;
        this.c1.saldo+=s;
    }
    retirarDinheiro(r, conta_cliente) {
        this.c1 = conta_cliente;
        this.c1.saldo-=r;
    }
}

function abrirBanco(num) {
    let inp='',inp2='';
    for(i=0;i<num;i++) {
        console.log("Qual o nome do banco?");
        inp = prompt();
        console.log("Qual a cidade em que o banco se situa?");
        inp2 = prompt();
        banco[b] = new Banco(b);
        banco[b].nome_banco=inp;
        banco[b].cidade=inp2;
        b++;
    }
}

function abrirConta(num) {
    let inp='',inp2='',inp3='',inp4='',inp5='',inp6='';
    for(i=0;i<num;i++) {
        console.log("Qual o nome do cliente?");
        inp = prompt();
        console.log("Qual o CPF do cliente?");
        inp2 = prompt();
        console.log("Qual a idade do cliente?");
        inp3 = prompt();
        console.log("Qual o numero da conta do cliente?");
        inp4 = prompt();
        console.log("Qual a agencia do cliente?");
        inp5 = prompt();
        console.log("Qual o saldo do cliente?");
        inp6 = prompt();
        cliente[c] = new Conta(inp,inp2,inp3,inp4,inp5,inp6,c);
        c++;
    }
}

function validacaoBC(variavel) {
    if(banco[0]!=null && cliente[0]!=null) {
        variavel.valor = "\n4-Informacoes Banco Cliente\n5-Transacoes\n6-Emprestimo";
    }
}

function consultarBancos() {
    for(i=0;i<b;i++) {
        banco[i].getInformacoes();
    }
}

function consultarClientes() {
    for(i=0;i<c;i++) {
        cliente[i].getInformacoes();
    }
}

function carreguei() {
    //document.getElementById("text").innerHTML += (`MENU<br>Digite de acordo com a operacao que desejar:<br>1-Adicionar Banco<br>2-Cadastrar Cliente<br>3-Sair${variavel.valor}<br>`);
    document.write("Ola gay");
}

while(true) {
    carreguei();
    carreguei();
    carreguei();
    console.log(`             MENU\nDigite de acordo com a operacao que desejar:\n1-Adicionar Banco\n2-Cadastrar Cliente\n3-Sair${variavel.valor}\n`);
    if(variavel.valor==='') {
        console.log("Cadastre pelo menos um banco e um cliente para realizar mais operacoes!\n");
        valorbool=true;
    }
    input = prompt("MENU");

    if(input==="3") {
        confirm("Tem certeza que deseja sair?");
        break;
    }
    else if(input==="1") {
        console.log("Quantos bancos deseja cadastrar?");
        input2 = prompt();
        abrirBanco(input2);
    }
    else if(input==="2") {
        console.log("Quantos clientes deseja cadastrar?");
        input2 = prompt();
        abrirConta(input2);
    }
    else if(input==="4") {
        if(valorbool===true){
        console.log("Qual tipo de informacoes precisa?\n1-Bancos Cadastrados\n2-Clientes Cadastrados");
        input2 = prompt();
        if(input2==="1"){
            consultarBancos();
        }
        else if(input2==="2") {
            consultarClientes();
        }
    }
}
    else if(input==="5") {
        if(valorbool===true) {

        }
    }
    else if(input==="6") {
        if(valorbool===true) {
            
        }
    }
    else {
        console.log("Por favor, digite uma opcao valida!!");
    }
    validacaoBC(variavel);
}

