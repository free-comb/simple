import { Link } from 'react-router-dom';


export default function ExchangeButton({link, statusButton, sellCoin, buyCoin, amount, reciveAddressInput}) {
    const data = {propsData :{sellCoin: sellCoin, buyCoin: buyCoin, amount:amount, reciveAddressInput:reciveAddressInput}}
    return (
        <>
            <Link 
            to={link}
            state={data}
            >
                <button className="styles__Button-sc-pjjdwd-1 gngNIH" disabled={statusButton}>Exchange</button>
            </Link>
        </>
    )
}