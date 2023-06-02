const calcularRaizQuadrada = () => {
    const numeros = [4, 9, 16, 25, 36];
  
    const raizesQuadradas = numeros.map((numero) => Math.sqrt(numero));
  
    console.log("Array original:", numeros);
    console.log("Array com raízes quadradas:", raizesQuadradas);
  };
  
  calcularRaizQuadrada();
  