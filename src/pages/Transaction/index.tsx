import { Header } from '../../components/Header'
import { Summary } from '../Summary'
import { SearchForm } from './components/Searchform'
import { PriceHighLight, TransactionsContainer, TransactionTable } from './styles'

export function Transaction(){
  return(
    <div>
      <Header/>
      <Summary/>
       <TransactionsContainer>
        <SearchForm/>
      <TransactionTable>
         <tbody>
          <tr>
            <td width='50%'>Desenvolvimento de sites</td>
            <td>
              <PriceHighLight variant='income'>
              R$12.000,00
              </PriceHighLight>
              </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>

          <tr>
            <td width='50%'>Hamburguer</td>
            <td>
             < PriceHighLight variant='outcome'>
              - R$59,90
             </PriceHighLight>
              </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
          
        </tbody>
      </TransactionTable>
       </TransactionsContainer>
    </div>
  )
}