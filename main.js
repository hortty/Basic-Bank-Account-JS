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

    constructor(_nome,_cpf,_idade) {
        super(_nome,_cpf,_idade);
    this._nome=_nome;
        this._cpf=_cpf;
        this._idade=_idade;
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
}

class Banco {
    #nome_banco
    #cidade

    constructor(conta) {
        this.c1 = conta;
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
    get c_idade() {
        return this.#cidade;
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

const cliente = [];

cliente[0] = new Conta("Gabriel",99988877766655,21);
cliente[0].agencia=789;
cliente[0].numero_conta=45678;
cliente[0].saldo=1000;

cliente[1] = new Conta("Joao",11111111111111,40);
cliente[1].agencia=001;
cliente[1].numero_conta=22222;
cliente[1].saldo=999999;

const b = new Banco(cliente[0]);
b.nome_banco="Bradesco";b.cidade="SP";

b.depositarDinheiro(200, cliente[0]);
b.retirarDinheiro(100,cliente[0]);
console.log(b.consultarSaldo(cliente[0]));

b.depositarDinheiro(1, cliente[1]);
b.retirarDinheiro(100,cliente[0]);
console.log(b.consultarSaldo(cliente[1]));
console.log(b.consultarSaldo(cliente[0]));
