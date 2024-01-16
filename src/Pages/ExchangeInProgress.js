import { useLocation } from "react-router-dom"


export default function ExchangeInProgress(){
    const location = useLocation()
    const { sellCoin, buyCoin, amount, reciveAddressInput } = location.state.props
    console.log(sellCoin);
    return(
        <>
        Exchange in progress
        </>
    )
}