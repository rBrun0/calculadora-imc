import { useState } from 'react'
import './App.css'



function App() {

  const [imc,setImc] = useState(0);
  const [inputAltura, setInputAltura] = useState();
  const [inputPeso, setInputPeso] = useState();
  const [comentario, setComentario] = useState("");

  const calculaImc = () => {
    var resImc = inputPeso / (inputAltura * inputAltura)
    setImc(resImc.toFixed(2))

    if(resImc < 18.5){
      setComentario("Abaixo do normal")
    } else if(resImc >= 18.6 && resImc <= 24.9){
      setComentario("normal")
    } else if(resImc >=25.0 && resImc <= 29.9){
      setComentario("sobrepeso")
    } else if(resImc >= 30.0 && resImc <= 34.9){
      setComentario("obesidade grau I")
    }
  }

  return (

    <>
    <h1>Calculadora De IMC</h1>

    <div className="imcContainer">
      <label htmlFor="inputPeso">peso</label>
      <input type="number" name="" id="inputPeso" value={inputPeso} onChange={(e) => setInputPeso(e.target.value)}/>

      <label htmlFor="inputAltura">altura</label>
      <input type="number" name="" id="inputAltura" value={inputAltura} onChange={(e) => setInputAltura(e.target.value)}/>

      <button onClick={calculaImc}>calcular</button>

      <h3>seu Imc:</h3>

      <div className="resultadoImc">{imc}</div>
      <div className="comentario">
        {comentario}
      </div>
    </div>



    </>
  )
}

export default App
