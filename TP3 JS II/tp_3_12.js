const ordenarValores = () => {
    let valor1 = Number(prompt("Digite o primeiro valor:"));
    let valor2 = Number(prompt("Digite o segundo valor:"));
    let valor3 = Number(prompt("Digite o terceiro valor:"));
  
    let valores = [valor1, valor2, valor3];
    valores.sort((a, b) => a - b);
  
    let divResultado = document.createElement('div');
    let pResultado = document.createElement('p');
    pResultado.textContent = `Valores ordenados: ${valores.join(', ')}`;
    divResultado.appendChild(pResultado);
    document.body.appendChild(divResultado);
  };
  
  ordenarValores();
  