import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../Summary'
import { SearchForm } from './components/Searchform'
import { PriceHighLight, TransactionsContainer, TransactionTable } from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContentx'



export function Transaction(){
 const {transactions} = useContext(TransactionsContext)


  return(
    <div>
      <Header/>
      <Summary/>
       <TransactionsContainer>
        <SearchForm/>
      <TransactionTable>
         <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighLight 
                  variant={transaction.type}>
                    {transaction.price}
                    </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createAt}</td>
              </tr>
            )
          })}    
        </tbody>
      </TransactionTable>
       </TransactionsContainer>
    </div>
  )
}