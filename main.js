const cliente = [], banco=[];
let input = '', input2=0, cont=0, i=0, c=0, b=0;
let print1,print2,print3;
let valorbool = false, vbool=false, vbool2=false;
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

function saiuCampo() {
    if(vbool===false) {
        let compare = document.getElementById("cliente").value;
        console.log(cliente[0].nome);
        console.log(compare);
    for(i=0;i<c;i++) {        //colocar clientes no for
        if(cliente[i].nome === compare) {
            vbool=true;
            i=c;
            print3=cliente[i].saldo;
            document.getElementById("cdr").innerHTML += "cliente "+cliente[i].nome + " e na variavel " + compare;
        }
    }
}
    if(vbool === false) {
        alert("Esse cliente nao existe no registro!");
    }
}

function saiuCampo2() {
    if(vbool2===false) {
        let compare2 = document.getElementById("banco").value;
        console.log(banco[0].nome_banco);
        console.log(compare2);
        for(i=0;i<b;i++) {
            if(banco[i].nome_banco === compare2) {
                vbool2=true;
                i=b;
                document.getElementById("cdr").innerHTML += "<br><br>"+banco[i].nome + " e na variavel " + compare2;
            }
        }
}
    if(vbool2 === false) {
        alert("Esse banco nao existe no registro!");
    }
    if((vbool===true && vbool2===true)) {
        document.getElementById("cdr").innerText = "<br>O cliente "+print1+" possui exatamente R$ "+print3+" em sua conta do banco "+print2;
    }
}

function consultar() {
    vbool=false, vbool2=false;
    document.getElementById("cdr").innerText = '';
    document.getElementById("cdr").innerHTML += "<br><label for='cliente'><b>Nome cliente:  </b></label><input type='text' name='text' id='cliente' onBlur='saiuCampo()'></input><br>";
    document.getElementById("cdr").innerHTML += "<br><label for='banco'><b>Nome banco:  </b></label><input type='text' name='text2' id='banco' onBlur='saiuCampo2()'></input><br>";
}
function retirar() {
    document.getElementById("operacoes").innerHTML += "b";
}
function depositar() {
    document.getElementById("operacoes").innerHTML += "c";
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
        document.getElementById("geral").innerHTML = '<div align="left"><button id="voltar" type="button" onClick="voltarHome()">←</button><label for="voltar">&nbsp;&nbsp; Voltar</label></div><br><br><br><br><br><br><br><br><br><br><br><br><div align="center" style="background-color: black;padding: 18px;"><div align="center" id="titulo" style="background-color: cadetblue;color:rgb(0, 0, 0); padding: 2px;"><h2>TRANSACOES</h2></div><br><div align="center" id="operacoes" style="background-color: cadetblue;color:rgb(0, 0, 0); padding: 4px;"><h4>Consultar Saldo</h4><h4>Depositar dinheiro</h4><h4>Retirar dinheiro</h4><select onchange="{if(this.options[this.selectedIndex].onclick != null){this.options[this.selectedIndex].onclick(this);}}"><option value="default">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Escolha:</option><option onclick="consultar();" value="A">Calcular Saldo</option><option onclick="depositar();" value="B">Depositar na conta</option><option onclick="retirar();" value="C">Retirar da conta</option></select></div><br><div id="cdr" style="background-color: cadetblue;color:rgb(0, 0, 0); padding: 0px;"></div></div>';
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
