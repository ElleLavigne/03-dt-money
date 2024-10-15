import { MagnifyingGlass } from "phosphor-react";
import { SerachFormContainer } from "./styles";

export function SearchForm () {
  return(
   <SerachFormContainer>
    <input type="text" placeholder="busque por transações" />

    <button type="submit">
     <MagnifyingGlass size={20}/> 
      Buscar</button>
   </SerachFormContainer>
  )
}