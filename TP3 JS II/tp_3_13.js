const calcularFatorial = function(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFatorial(numero - 1);
    }
  };
  
  const exibirFatorial = () => {
    let numero = Number(prompt("Digite um número:"));
  
    let resultado = calcularFatorial(numero);
  
    let divResultado = document.createElement('div');
    let pResultado = document.createElement('p');
    pResultado.textContent = `O fatorial de ${numero} é ${resultado}`;
    divResultado.appendChild(pResultado);
    document.body.appendChild(divResultado);
  };
  
  exibirFatorial();
  