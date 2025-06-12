import './index.css'

interface InfoProps {
  type: string; // Ex: 'Álcool' ou 'Gasolina'
  value: string; // Ex: 'R$ 4,90' (já formatado)
}


interface ResultDisplayProps {
  info: InfoProps
}

export function ResultDisplay({ info }: ResultDisplayProps) {
  
  return (
    <section  className='result'>
      <h2 className="result-title">Compensa usar {info.type}</h2>
      <span>{info.value}</span>
    </section>
  );
}