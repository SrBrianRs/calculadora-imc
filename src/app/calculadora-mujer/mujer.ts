function calcular(peso,altura){
  const result = (peso/(altura*altura)).toFixed(3);
  return Number(result);
}

export default calcular;