import styled, { css } from "styled-components"

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`
// Para existir variantes com outras propriedades, cria uma interface, adiciona as propriedades

interface SummaryCardsProps{
  variant?: 'green';
}
// No componente que pode receber as outras propriedades, coloque <NomeInterface> criado.

export const SummaryCard = styled.div<SummaryCardsProps>`
  background-color: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};
  }
  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  //Para usar a interface criada basta fazer uma condicional e passar o novo valor
  ${props => props.variant === 'green' && css`
    background-color: ${props.theme["green-700"]};
  `}
`

