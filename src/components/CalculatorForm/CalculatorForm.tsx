import type { FormEvent } from "react"
import './index.css'

interface CalculatorFormProps {
  gasolinePrice: number
  setGasolinePrice: (value: number) => void
  ethanolPrice: number
  setEthanolPrice: (value: number) => void
  onSubmit: (event: FormEvent) => void
}

export function CalculatorForm({
  gasolinePrice,
  setGasolinePrice,
  ethanolPrice,
  setEthanolPrice,
  onSubmit,
}: CalculatorFormProps){
    return (
        <form className="form" onSubmit={onSubmit}>
          <label>Álcool (preço por litro):</label>
          <input 
            value={ethanolPrice}
            onChange={(e) => setEthanolPrice(Number(e.target.value))}
            className='input' 
            type="number"
            placeholder='4,90'
            min="1"
            step="0.01"
            required
          />
          <label>Gasolina (preço por litro):</label>
          <input 
            value={gasolinePrice}
            onChange={(e) => setGasolinePrice(Number(e.target.value))}
            className='input' 
            type="number"
            placeholder='4,90'
            min="1"
            step="0.01"
            required
          />

          <input 
            className="button"
            type="submit"
            value="Calcular"
          />
        </form>
    )
}