import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../lib/axios"

interface Transaction {
  id: number
  description: string
  type: "income" | "outcome"
  price: number
  category: string
  createAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}

interface TransactionsProviderProps {

  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {

const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(search?: string) {

    const response = await api.get('/transactions')
    if (search){
      const filteredSearch = response.data.filter((item: Transaction) => {

        return item.description.includes(search)
      })
      setTransactions(filteredSearch)
    } else{
      
      setTransactions(response.data)
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  useEffect(() =>{
    console.log('transactions mudou -->', transactions)
  }, [transactions])
  

  // async function fetchTransactions(query?: string) {
  //   const response = await api.get('transactions', {
  //     params: {
  //       q: query,
  //     }
  //   })  
  //     setTransactions(response.data)

  // }

  // useEffect(() => {
  //   fetchTransactions()
  // }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
