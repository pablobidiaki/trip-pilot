export function createItineraryPrompt(dto){

return `Você é um especialista em turismo.
        Crie um roteiro com as seguintes informações desejo o retorno em JSON.
        Origem:
        ${dto.departure}
        Destino:
        ${dto.destination}
        Dias:
        ${dto.days}
        Orçamento:
        ${dto.budget}
        Data de ida:
        ${dto.when}

    `
}