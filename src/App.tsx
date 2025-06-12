import { useFuelCalculator } from './hooks/useFuelCalculator'
import logoImg from './assets/logo.png'
import './App.css'
import { CalculatorForm } from './components/CalculatorForm/CalculatorForm'
import { ResultDisplay } from './components/ResultDisplay/ResultDisplay'

export default function App(){

  const {
    gasolinePrice, setGasolinePrice,
    ethanolPrice, setEthanolPrice,
    info,
    calculate
  } = useFuelCalculator()

  return (
    <div>
      <main className='container'>
        <img 
          className='logo'
          src={logoImg}
          alt="Logo da Calculadora de Gasolina ou Álcool"
        />
        <h1 className='title'>Qual a melhor opção?</h1>

        <CalculatorForm 
          gasolinePrice={gasolinePrice}
          setGasolinePrice={setGasolinePrice}
          ethanolPrice={ethanolPrice}
          setEthanolPrice={setEthanolPrice}
          onSubmit={calculate}
        />

        {
          info && Object.keys(info).length > 0 &&
          <ResultDisplay 
            info={info}
          />
        }
        
      </main>
    </div>
  )
}