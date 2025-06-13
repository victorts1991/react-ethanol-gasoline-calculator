import { renderHook, act } from '@testing-library/react'
import { useFuelCalculator } from './useFuelCalculator'

const mockFormEvent = {
  preventDefault: jest.fn(),
} as unknown as React.FormEvent & { preventDefault: jest.Mock }

describe('useFuelCalculator', () => {
  // Limpa os mocks antes de cada teste para garantir isolamento
  beforeEach(() => {
    mockFormEvent.preventDefault.mockClear()
  })

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useFuelCalculator())

    expect(result.current.gasolinePrice).toBe(1)
    expect(result.current.ethanolPrice).toBe(1)
    expect(result.current.info).toBeUndefined()
  });

  it('should update gasoline price', () => {
    const { result } = renderHook(() => useFuelCalculator())

    act(() => {
      result.current.setGasolinePrice(6.50)
    });

    expect(result.current.gasolinePrice).toBe(6.50)
  });

  it('should update ethanol price', () => {
    const { result } = renderHook(() => useFuelCalculator())

    act(() => {
      result.current.setEthanolPrice(4.20)
    });

    expect(result.current.ethanolPrice).toBe(4.20)
  });

  it('should calculate and set info for Ethanol when it is more advantageous', () => {
    const { result } = renderHook(() => useFuelCalculator())

    act(() => {
      result.current.setEthanolPrice(3.00) // 3.00 / 5.00 = 0.6 (<= 0.7)
      result.current.setGasolinePrice(5.00) 
      result.current.calculate(mockFormEvent)
    });

    expect(result.current.info).toEqual({
      type: 'Álcool',
      value: 'R$ 3,00',
    })
    expect(mockFormEvent.preventDefault).toHaveBeenCalledTimes(1)
  });

  it('should calculate and set info for Gasoline when it is more advantageous', () => {
    const { result } = renderHook(() => useFuelCalculator())

    act(() => {
      result.current.setEthanolPrice(4.00) // 4.00 / 5.00 = 0.8 (> 0.7)
      result.current.setGasolinePrice(5.00) 
      result.current.calculate(mockFormEvent)
    });

    expect(result.current.info).toEqual({
      type: 'Gasolina',
      value: 'R$ 5,00',
    })
    expect(mockFormEvent.preventDefault).toHaveBeenCalledTimes(1)
  });

  it('should always call preventDefault on calculate', () => {
    const { result } = renderHook(() => useFuelCalculator())

    act(() => {
      result.current.calculate(mockFormEvent)
    });

    expect(mockFormEvent.preventDefault).toHaveBeenCalledTimes(1)
  });
});