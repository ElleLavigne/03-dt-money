import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"
import LogoImg from "../../assets/logo.svg"
import * as Dialog from "@radix-ui/react-dialog"
import { NewTransactionModal } from "../NewTransactionmodal"

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={LogoImg} alt="" />
          <Dialog.Root>

            <Dialog.Trigger asChild>            
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>
           <NewTransactionModal/>
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}
