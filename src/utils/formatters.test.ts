import { formatCurrency } from './formatters'

describe('formatCurrency', () => {
  it('should format a whole number as Brazilian currency', () => {
    expect(formatCurrency(10)).toBe('R$\u00A010,00')
  })

  it('should format a number with cents as Brazilian currency', () => {
    expect(formatCurrency(5.50)).toBe('R$\u00A05,50')
  })

  it('should format a number with more than two decimal places correctly', () => {
    expect(formatCurrency(7.123)).toBe('R$\u00A07,12')
  })

  it('should format zero as Brazilian currency', () => {
    expect(formatCurrency(0)).toBe('R$\u00A00,00')
  })

  it('should format a large number as Brazilian currency', () => {
    expect(formatCurrency(1234567.89)).toBe('R$\u00A01.234.567,89')
  })
})