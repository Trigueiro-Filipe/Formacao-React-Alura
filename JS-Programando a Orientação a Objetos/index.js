import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./Funcionarios/SistemaAutenticacao.js";
/*import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";*/

const diretor = new Diretor("Rodrigo",1000,12345678900);
const gerente = new Gerente("Ricardo",5000,12378945601);

diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais",78945612379,"456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente,"456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456");

console.log(gerenteEstaLogado,diretorEstaLogado,clienteEstaLogado);















/*

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteRicardo = new ContaCorrente(cliente1,1001);

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca  = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);


//const conta = new Conta(0,'teste',1006);
//console.log(contaPoupanca);
//console.log(contaCorrenteRicardo);

//console.log(conta);
console.log(contaSalario);
*/