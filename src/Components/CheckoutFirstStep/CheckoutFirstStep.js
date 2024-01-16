import "./CheckoutFirstStepStyle.css"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AwaitDeposit from "../AwaitDeposit/AwaitDeposit";
import InProgress from "../InProcess/Inprocess";
import AutoExchanging from "../AutoExchanging/AutoExchanging";

export default function CheckoutFirstStep() {

  const location = useLocation()
  const { sellCoin, buyCoin, amount, reciveAddressInput } = location.state.propsData
  
  const randomId = Math.random().toString().split('.')[1]///you must put ID from API

  const [statusProgress, setStatusProgress] = useState(<AwaitDeposit sellCoin={sellCoin} amount={amount} buyCoin={buyCoin} reciveAddressInput={reciveAddressInput}/>)
  // This is a temporary solution, since the API receives a response about the receipt of the coin and only then is it redirected to another page
 

  useEffect(()=>{
    setTimeout(()=>{
      setStatusProgress( <InProgress sellCoin={sellCoin} amount={amount} buyCoin={buyCoin} reciveAddressInput={reciveAddressInput}/>)
    },9000)

    setTimeout(()=>{
      setStatusProgress(<AutoExchanging sellCoin={sellCoin} amount={amount} buyCoin={buyCoin} reciveAddressInput={reciveAddressInput}/>)
    },12000)
  },[])



  return (
    <>
      <div className="global__NewContainer-sc-1hzbvz7-1 ePDBUC">
        <div className="styles__ExchangeFormLayout-sc-7wgjik-1 dLeclM">
          <div className="styles__Container-sc-4oujr1-0 kJZfJX">
            <div className="styles__ExchangeInfoBlock-sc-4oujr1-1 fixIQK">
              <div className="styles__ExchangeInfo-sc-4oujr1-4 jyrhvr">Exchange ID: <div className="styles__CopyId-sc-4oujr1-3 isGOjF">{randomId}<div className="styles__CopyIdIcon-sc-4oujr1-2 gArIhk" />
              </div>
              </div>
              <div className="styles__MobilButton-sc-4oujr1-6 hzeSAe">
                <a href="https://simpleswap.io/contacts" target="_blank" rel="noopener noreferrer" className="styles__NeedHelp-sc-4oujr1-5 bmtODR">
                <div className="styles__NeedHelpIcon-sc-4oujr1-7 whuQX" />
                <div className="styles__NeedHelpText-sc-4oujr1-8 hCjWvz">Need help?</div>
              </a></div>
            </div>
            {statusProgress}
           
           

          </div>
        </div>
      </div>
    </>
  )
}