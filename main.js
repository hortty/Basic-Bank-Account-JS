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
        inp = prompt("Qual o nome do banco?");
        inp2 = prompt("Qual a cidade em que o banco se situa?");
        banco[b] = new Banco(b);
        banco[b].nome_banco=inp;
        banco[b].cidade=inp2;
        b++;
    }
}

function abrirConta(num) {
    let inp='',inp2='',inp3='',inp4='',inp5='',inp6='';
    for(i=0;i<num;i++) {
        inp = prompt("Qual o nome do cliente?");
        inp2 = prompt("Qual o CPF do cliente?");
        inp3 = prompt("Qual a idade do cliente?");
        inp4 = prompt("Qual o numero da conta do cliente?");
        inp5 = prompt("Qual a agencia do cliente?");
        inp6 = prompt("Qual o saldo do cliente?");
        cliente[c] = new Conta(inp,inp2,inp3,inp4,inp5,inp6,c);
        c++;
    }
}

function validacaoBC() {
    if(banco[0]!=null && cliente[0]!=null) {
        document.getElementById("text").innerHTML = "Digite de acordo com a operacao que desejar:<br><br>1-Adicionar Banco<br>2-Cadastrar Cliente<br>3-Sair<br>4-Informacoes Banco Cliente<br>5-Transacoes<br>6-Emprestimo<br>";
        valorbool=true;
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

function consultar() {
    document.getElementById("operacoes").innerHTML += "aa";
}
function retirar() {
    document.getElementById("operacoes").innerHTML += "bb";
}
function depositar() {
    document.getElementById("operacoes").innerHTML += "cc";
}

function fechar() {
    document.getElementById("tabela").innerHTML = '';
}

function selecionar() {
    document.getElementById("operacoes").innerHTML += "Ola";
}

function voltarHome() {
    window.open("main.html","_self");
}
function clicar() {
    if(document.getElementById("entrada").value != '') {
    let m = document.getElementById("entrada").value;
    if(m==="1") {
        input2 = prompt("Quantos bancos deseja cadastrar?");
        abrirBanco(input2);
    }
    else if(m==="2") {
        input2 = prompt("Quantos clientes deseja cadastrar?");
        abrirConta(input2);
    }
    else if(m==="3") {
        window.close();
    }
    else if(m==4) {         // == '!=' ===
        if(valorbool===true){
            input2 = prompt("Qual tipo de informacoes precisa?\n1-Bancos Cadastrados\n2-Clientes Cadastrados");
            if(input2==="1"){
                consultarBancos();
                document.getElementById("tabela").innerHTML = ''; 
                //consulta
        if(document.getElementById("tabela").innerHTML == ''){
            document.getElementById("tabela").innerHTML += '<div style="background-color: white; color: black;padding: 1px;"><button type="button" onClick=fechar()>X</button><table border="5"><tr><th>Cliente</th><th>Banco</th></tr><tr><td>'+'cliente'+
            '</td><td>'+'cliente2'
            +'</td></tr><tr><td>tabela3</td><td>tabela4</td></tr></table></div>';
            }
            //consulta
            }
            else if(input2==="2") {
                consultarClientes();
                document.getElementById("tabela").innerHTML = ''; 
                //consulta
        if(document.getElementById("tabela").innerHTML == ''){
            document.getElementById("tabela").innerHTML += '<div style="background-color: white; color: black;padding: 1px;"><button type="button" onClick=fechar()>X</button><table border="5"><tr><th>Cliente</th><th>Banco</th></tr><tr><td>'+'banco2'+
            '</td><td>'+'banco'
            +'</td></tr><tr><td>tabela3</td><td>tabela4</td></tr></table></div>';
            }
            //consulta
            }
        }
    }
    else if(m==="5") {
        
            window.open("transferencia.html","_self");
        
    }
    else if(m==="6") {
        if(valorbool===true) {
            
        }
    }
    else {
        console.log("Por favor, digite uma opcao valida!!");
    }
    validacaoBC();
    }
}
