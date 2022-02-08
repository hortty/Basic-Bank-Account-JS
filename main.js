const cliente = [], banco=[];
let input = '', input2=0, cont=0, i=0, c=0, b=0, j=0;
let print1,print2,print3;
let valorbool = false, vbool=false, vbool2=false, existe=false, flag=false;
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
    _saldo
    #id
    _senha

    constructor(_nome,_cpf,_idade,numero_conta,agencia,saldo,id,senha) {
        super(_nome,_cpf,_idade);
        this._nome=_nome;
        this._cpf=_cpf;
        this._idade=_idade;
        this.#numero_conta=numero_conta;
        this.#agencia=agencia;
        this._saldo=saldo;
        this.#id = id;
        this._senha = senha;
    }
    set numero_conta(n) {
        this.#numero_conta = n;
    }
    set agencia(a) {
        this.#agencia = a;
    }
    set senha(s) {
        this._senha = s;
    }
    set senha(s) {
        this._senha = s;
    }
    get numero_conta() {
        return this.#numero_conta;
    }
    get agencia() {
    return this.#agencia;
    }
    set saldo(s) {
        this._saldo = s;
    }
    get saldo() {
        return this._saldo;
    }
}

class Banco {
    #nome_banco
    #cidade
    #id 
    _agencia

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
    set agencia(a) {
        this._agencia = a;
    }
    get agencia() {
        return this._agencia;
    }
    consultarSaldo(conta_cliente) {
        this.c1 = conta_cliente;
        return `O cliente ${this.c1._nome}, idade ${this.c1._idade}, com o numero da conta ${this.c1.numero_conta} possui R$ ${this.c1.saldo} de saldo no banco ${this.#nome_banco}`;
        }
    depositarDinheiro(s, conta_cliente) {
        s = parseInt(s);
        this.c1 = conta_cliente;
        this.c1.saldo+=s;
    }
    retirarDinheiro(r, conta_cliente) {
        r = parseInt(r);
        this.c1 = conta_cliente;
        if((this.c1.saldo-r)>=0) {
        this.c1.saldo-=r;
        }
        else {
            alert("Saldo insuficiente, nao eh possivel retirar todo esse valor!");
        }
    }
}

function abrirBanco(num) {
    let inp='',inp2='',inp3='', flag3=true;
    flag=true;
    for(i=0;i<num;i++) {
        inp = prompt("Qual o nome do banco?");
        inp2 = prompt("Qual a cidade em que o banco se situa?");
        while(true) {
        flag3=true;
        inp3 = prompt("Qual a agencia do banco?");
        for(j=0;j<b;j++) {
            if(inp3 === banco[j].agencia) {
                alert("Nao eh possivel usar esse numero, ja existe um banco com essa agencia!")
                flag3=false;
            }
        }
        if(flag3===true) {
            break;
        }
        }
        banco[b] = new Banco(b);
        banco[b].nome_banco=inp;
        banco[b].cidade=inp2;
        banco[b].agencia=inp3;
        b++;
    }
}

function abrirConta(num) {
    let inp='',inp2='',inp3='',inp4='',inp5='',inp6='', inp7='';
    let booleano = true, flag3=true;
    let contador=0;
    if(flag===true) {
    for(i=0;i<num;i++) {
        inp = prompt("Qual o nome do cliente?");
        inp2 = prompt("Qual o CPF do cliente?");
        inp3 = prompt("Qual a idade do cliente?");
        while(true) {
            flag3=true;
            inp4 = prompt("Qual o numero da conta do cliente?");
            for(j=0;j<c;j++) {
                if(inp4 === cliente[j].numero_conta) {
                    alert("Nao eh possivel usar esse numero, ja existe um cliente com esse numero de conta!")
                    flag3=false;
                }
            }
            if(flag3===true) {
                break;
            }
            }
        while(booleano) {
        inp5 = prompt("Qual a agencia do cliente?");
        for(j=0;j<b;j++) {
            if(banco[j].agencia===inp5) {
                j=b;
                booleano=false;
            }
        }
        if(booleano===true) {
            alert("Essa agencia nao existe, tente novamente!");
            contador++;
        }
        if(contador===2) {
            alert("Essa agencia nao existe, para consultar as agencias disponiveis digite 4 no Input da aba MENU");
            break;
        }
        }
        if(contador!==2) {
        inp6 = parseInt(prompt("Qual o saldo do cliente?"));
        inp7 = prompt("Cadastre uma senha:");
        cliente[c] = new Conta(inp,inp2,inp3,inp4,inp5,inp6,c,inp7);
        c++;
        }
    }
}
    else {
        alert("Voce primeiro precisa cadastrar um banco!");
    }
}

function validacaoBC() {
    if(Object.values(cliente).length > 0 && Object.values(banco).length > 0) {
        document.getElementById("text").innerHTML = "Digite de acordo com a operacao que desejar:<br><br>1-Adicionar Banco<br>2-Cadastrar Cliente<br>3-Sair<br>4-Informacoes Banco Cliente<br>5-Transacoes<br>6-Emprestimo<br>";
        valorbool=true;
    }
}

function saiuCampo() {
    if(vbool===false) {
        let compare = document.getElementById("cliente").value;
    for(i=0;i<c;i++) {
            if(compare===cliente[i].nome) {
                print1 = cliente[i].nome;
                print3 = cliente[i].saldo;
                vbool=true;
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
        for(i=0;i<b;i++) {
            if(compare2 === banco[i].nome_banco) {
                vbool2=true;
                print2 = banco[i].nome_banco;
            }
        }
}
    if(vbool2 === false) {
        alert("Esse banco nao existe no registro!");
    }
    if((vbool===true && vbool2===true)) {
        document.getElementById("cdr").innerHTML = "<br><b>O <i>cliente</i> "+print1+" possui exatamente R$"+print3+" em sua conta do <i>banco</i> "+print2+"</b><br><br>";
    }
}

function consultar() {
    vbool=false, vbool2=false;
    document.getElementById("cdr").innerText = '';
    document.getElementById("cdr").innerHTML += "<br><label for='cliente'><b>Nome cliente:  </b></label><input type='text' name='text' id='cliente' onBlur='saiuCampo()'></input><br>";
    document.getElementById("cdr").innerHTML += "<br><label for='banco'><b>Nome banco:  </b></label><input type='text' name='text2' id='banco' onBlur='saiuCampo2()'></input><br><br>";
}
function retirar() {
    document.getElementById("cdr").innerHTML = '';
    document.getElementById("cdr").innerHTML += '<br><label for="deposito"><b>Informe o numero da conta: </b><input type="text" name="texto" id="deposito"><br>';
    document.getElementById("cdr").innerHTML += '<br><label for="deposito2"><b>Informe a agencia: </b><input type="text" name="texto" id="deposito2"><br>';
    document.getElementById("cdr").innerHTML += '<br><label for="deposito3"><b>Informe o valor: </b><input type="text" name="texto" id="deposito3"><br><br>';
    document.getElementById("cdr").innerHTML += '<br><label for="senha"><b>Informe a senha: </b><input type="text" name="texto" id="senha"><br>';
    document.getElementById("cdr").innerHTML += '<br><button type="button" onClick=botaoRetirar()>RETIRAR</button><br><br>';
}

function botaoRetirar() {
    let numconta = document.getElementById("deposito").value;
    let numagencia = document.getElementById("deposito2").value;
    let senha = document.getElementById("senha").value;
    let numvalor = document.getElementById("deposito3").value;
    existe=false;
    let aux=0;

    for(i=0;i<c;i++) {
        if(numconta===cliente[i].numero_conta) {
            if(numagencia===cliente[i].agencia) {
            if(senha===cliente[i]._senha) {
                aux=i;
                existe=true;
            }
            else {
                alert("Senha invalida!");
            }  
        }  
    }
}
if(existe===false) {
    alert("Acesso negado!");
}
else {
    for(i=0;i<b;i++) {
            if(numagencia===banco[i].agencia) {
                    banco[i].retirarDinheiro(numvalor, cliente[aux]);
                    document.getElementById("cdr").innerHTML = "<br><b>O novo valor da conta de "+cliente[aux].nome+" no banco "+banco[i].nome_banco+" é exatamente R$"+cliente[aux].saldo+"</b><br><br>";
            }
        }
}
}

function depositar() {
    document.getElementById("cdr").innerHTML = '';
    document.getElementById("cdr").innerHTML += '<br><label for="deposito"><b>Informe o numero da conta: </b><input type="text" name="texto" id="deposito4"><br>';
    document.getElementById("cdr").innerHTML += '<br><label for="deposito2"><b>Informe a agencia: </b><input type="text" name="texto" id="deposito5"><br>';
    document.getElementById("cdr").innerHTML += '<br><label for="deposito3"><b>Informe o valor: </b><input type="text" name="texto" id="deposito6"><br><br>';
    document.getElementById("cdr").innerHTML += '<br><button type="button" onClick=botaoDepositar()>DEPOSITAR</button><br><br>';
}

function botaoDepositar() {
    let numconta = document.getElementById("deposito4").value;
    let numagencia = document.getElementById("deposito5").value;
    let numvalor = document.getElementById("deposito6").value;
    existe=false;
    let aux=0;

    for(i=0;i<c;i++) {
        if(numconta===cliente[i].numero_conta) {
            if(numagencia===cliente[i].agencia) {
                aux=i;
                existe=true; 
        }  
    }
}
if(existe===false) {
    alert("Conta inexistente!");
}
else {
    for(i=0;i<b;i++) {
            if(numagencia===banco[i].agencia) {
                    banco[i].depositarDinheiro(numvalor, cliente[aux]);
                    document.getElementById("cdr").innerHTML = "<br><b>O novo valor da conta de "+cliente[aux].nome+" no banco "+banco[i].nome_banco+" é exatamente R$"+cliente[aux].saldo+"</b><br><br>";
            }
        }
}
}

function fechar() {
    document.getElementById("tabela").innerHTML = '';
}

function selecionar() {
    document.getElementById("operacoes").innerHTML += "Ola";
}

function voltarHome() {
    document.getElementById("geral").innerHTML = '';
    document.getElementById("geral").innerHTML += '<div id="home" align="center" style="background-color: rgb(0, 0, 0); color:ghostwhite; padding: 18px;"><div><div id="menu" style="background-color: crimson;padding: 1px;"><h2>MENU</h2></div></div><br><div id="select" style="background-color: crimson;padding: 1px;"><br><p id="text">Digite de acordo com a operacao que desejar:<br><br>1-Adicionar Banco<br>2-Cadastrar Cliente<br>3-Sair<br></p><label for="entrada">Input: </label><input id="entrada" type="text" name="entrada" required><br><br><button type="button" onClick = "clicar()">Submit</button><br><br></div><br><div id="tabela"></div></div>';
    document.getElementById("text").innerHTML = "Digite de acordo com a operacao que desejar:<br><br>1-Adicionar Banco<br>2-Cadastrar Cliente<br>3-Sair<br>4-Informacoes Banco Cliente<br>5-Transacoes<br>6-Emprestimo<br>";
}
function clicar() {
    if(document.getElementById("entrada").value !== '') {
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
        //consulta
        if(valorbool===true) {
            input2 = prompt("Qual tipo de informacoes precisa?\n1-Clientes Cadastrados\n2-Bancos Cadastrados");
            if(input2==="1") {
                consultarClientes();
                document.getElementById("tabela").innerHTML = ''; 
                document.getElementById("tabela").innerHTML += "<div style='background-color: white; color: black;padding: 1px;'><button type='button' onClick=fechar()>X</button></div>";
                for(i=0;i<c;i++) {
                    document.getElementById("tabela").innerHTML += '<div style="background-color: white; color: black;padding: 1px;"><table border="5">'+'<tr><th>id</th><th>nome</th><th>cpf</th><th>numero da conta</th><th>agencia</th><th>saldo</th></tr><tr><td>'+i+'</td>'+'<td>'+cliente[i].nome+'</td>'+'<td>'+cliente[i].cpf+'</td>'+'<td align="center">'+cliente[i].numero_conta+'</td>'+'<td align="center">'+cliente[i].agencia+'</td>'+'<td>'+cliente[i].saldo+'</td>'+'</tr></table></div><br>';
                }
            }
            else if(input2==="2") {
                consultarBancos();
                document.getElementById("tabela").innerHTML = ''; 
                document.getElementById("tabela").innerHTML += "<div style='background-color: white; color: black;padding: 1px;'><button type='button' onClick=fechar()>X</button></div>";
                for(i=0;i<b;i++) {
                    document.getElementById("tabela").innerHTML += '<div style="background-color: white; color: black;padding: 1px;"><table border="5">'+'<tr><th>id</th><th>nome banco</th><th>cpf</th><th>cidade</th><th>agencia</th></tr><tr><td>'+i+'</td>'+'<td>'+banco[i].nome_banco+'</td>'+'<td>'+banco[i].cidade+'</td>'+'<td align="center">'+banco[i].agencia+'</td>'+'</tr></table></div><br>';
                }
            }
        }
    }
        //consulta
    else if(m==="5") {
        document.getElementById("geral").innerHTML = '<div align="left"><button id="voltar" type="button" onClick="voltarHome()">←</button><label for="voltar">&nbsp;&nbsp; Voltar</label></div><br><br><br><br><br><br><br><br><br><br><br><br><div align="center" style="background-color: black;padding: 18px;"><div align="center" id="titulo" style="background-color: cadetblue;color:rgb(0, 0, 0); padding: 2px;"><h2>TRANSACOES</h2></div><br><div align="center" id="operacoes" style="background-color: cadetblue;color:rgb(0, 0, 0); padding: 4px;"><h4>Consultar Saldo</h4><h4>Depositar dinheiro</h4><h4>Retirar dinheiro</h4><select onchange="{if(this.options[this.selectedIndex].onclick !== null){this.options[this.selectedIndex].onclick(this);}}"><option value="default">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Escolha:</option><option onclick="consultar();" value="A">Consultar Saldo</option><option onclick="depositar();" value="B">Depositar na conta</option><option onclick="retirar();" value="C">Retirar da conta</option></select></div><br><div id="cdr" style="background-color: cadetblue;color:rgb(0, 0, 0); padding: 0px;"></div></div>';
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
