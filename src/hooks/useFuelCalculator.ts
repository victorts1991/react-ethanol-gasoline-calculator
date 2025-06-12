import { useState, type FormEvent } from 'react'
import { ETHANOL_FACTOR } from '../utils/constants'
import { formatCurrency } from '../utils/formatters'

interface InfoProps {
  type: string
  value: string
}

export function useFuelCalculator() {
  const [gasolinePrice, setGasolinePrice] = useState(1)
  const [ethanolPrice, setEthanolPrice] = useState(1)
  const [info, setInfo] = useState<InfoProps | undefined>()

  function calculate(event: FormEvent){
    event.preventDefault()

    let calculo = ethanolPrice / gasolinePrice;

    if(calculo <= ETHANOL_FACTOR) { 
      setInfo({
        type: 'Álcool',
        value: formatCurrency(ethanolPrice)
      })
    } else {
      setInfo({
        type: 'Gasolina',
        value: formatCurrency(gasolinePrice)
      })
    }
  }

  return {
    gasolinePrice, setGasolinePrice,
    ethanolPrice, setEthanolPrice,
    info, setInfo,
    calculate
  }
}