export const dateFormatter = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR').format(date)
}
