import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../Summary'
import { SearchForm } from './components/Searchform'
import { PriceHighLight, TransactionsContainer, TransactionTable } from './styles'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createAt: string
}

export function Transaction(){
  const [transactions, setTransactions] = useState<Transaction[]>([])
  async function loadTransactions(){
    const response = await fetch("http://localhost:3000/transactions")
    const data = await response.json();
   setTransactions(data)
  }
  useEffect(() => {
    loadTransactions()
  }, [])


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