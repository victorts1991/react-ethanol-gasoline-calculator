export function formatCurrency(value: number): string {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
}