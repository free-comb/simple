import { useEffect, useState } from 'react';
import './FirstExchangeStyle.css';
import ExchangeButton from '../ExchangeButton/ExchangeButton';



export default function FirsExchangeForm() {
    ///I used the API of the original site to take a list of currencies and images.
    const yourApiKey = ""///put your api key


    const [listCrypto, setListCrypto] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [selectedCoinForSell, setSelectedCoinForSell] = useState({})
    const [sendInput, setSendInput] = useState(1)
    const [selectedCoinForBuy, setSelectedCoinForBuy] = useState({})

    useEffect(() => {
        
            fetch(`https://api.simpleswap.io/get_all_currencies?api_key=${yourApiKey}`)
            .then(response => response.json())
            .then(data => {
                setListCrypto(data)
                setIsLoaded(true)
                setSelectedCoinForSell(data[0])
                setSelectedCoinForBuy(data[5])
            },(error)=>{console.log(error);});
       
       
    }, [])


    

    function handleChangeFirstInput(event) {
        if (!isNaN(event.target.value)) {
            setSendInput(event.target.value)
        }
    }

    if (!isLoaded) {
        return (<div className="styles__Layout-sc-y0viyd-0 MbtXp main-form" style={{width: "100%",
            maxWidth: "680px",
            borderradius: "16px",
            background: "#fff",
            margin:"auto"
        }}>Loading...</div>)
    }
    else {

        return (
            <>
                <div className="global__NewContainer-sc-1hzbvz7-1 ePDBUC">
                    <div className="styles__Row-sc-gdoee2-3 cHzJyq main-page__exchange-form">
                        <h1 className="styles__Title-sc-gdoee2-4 hPKzUi">Crypto Exchange</h1>
                        <p className="styles__SubTitle-sc-gdoee2-5 cjggAc">Free from sign-up, limits, complications</p>
                        <div className="styles__Layout-sc-1nylueb-0 hhzarz">
                            <div className="styles__Layout-sc-y0viyd-0 MbtXp main-form">
                                <div className="styles__Tab-sc-1gnwpkl-0 gcuZFM main-page__tabs">
                                    <div className="styles__TabLeft-sc-1gnwpkl-1 hIXdPM main-page__tab-crypto" style={{ margin: 'auto' }}>
                                        <span>Crypto Exchange</span>
                                    </div>

                                </div>
                                <div className="styles__Main-sc-pjjdwd-0 bNkCSW">
                                    <div className="styles__Row-sc-yro9np-0 dyUeOw main-page__exchange-group main-page__exchange-from">
                                        <div className="styles__InputGroup-sc-yro9np-2 gocmbd">
                                            <label htmlFor="exchange_form_from_field" className="styles__InputLabel-sc-yro9np-1 bGyWBM">You Send</label>

                                            {/* this input is for the user to enter the desired amount for exchange */}
                                            <input
                                                inputMode="decimal"
                                                id="exchange_form_from_field"
                                                className="styles__Input-sc-yro9np-3 hoYCOf"
                                                type="text"
                                                value={sendInput}
                                                onChange={handleChangeFirstInput}
                                            />
                                            {/* this input is for the user to enter the desired amount for exchange */}

                                        </div>


                                        {/* list send coin */}
                                        <div className="styles__DropdownGroup-sc-yro9np-8 fiMYjp">
                                            <div className='secImg'>
                                                <img id="first" src={selectedCoinForSell.image} alt={selectedCoinForSell.name} />
                                            </div>
                                            <select
                                                id='select_first'
                                                className="styles__DropdownGroup-sc-yro9np-8 fiMYjp"
                                                onChange={e => {
                                                    setSelectedCoinForSell(listCrypto.find(coin => coin.name === e.target.value))
                                                }}
                                            >
                                                {
                                                    listCrypto.map((el, id) => {
                                                        return (
                                                            <option id={id} key={id}
                                                                value={el.name}
                                                            >
                                                                {el.name}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        {/* list send coin */}

                                    </div>
                                    <div className="empty-block-50px"></div>
                                    <div className="styles__Row-sc-yro9np-0 dyUeOw main-page__exchange-group main-page__exchange-to">
                                        <div className="styles__InputGroup-sc-yro9np-2 EBloy">
                                            <label className="styles__InputLabel-sc-yro9np-1 bGyWBM">You get</label>
                                            <div className="styles__InputTo-sc-yro9np-5 bwuFSW">
                                                <div className="styles__InputToTilda-sc-yro9np-6 gZEATK" />

                                                {/* expected amount */}
                                                <span className="styles__InputText-sc-yro9np-4 hmwndh">1.92937579</span>
                                                {/* expected amount */}

                                            </div>
                                        </div>

                                        {/* list send coin */}
                                        <div className="styles__DropdownGroup-sc-yro9np-8 fiMYjp">
                                            <div className='secImg'>
                                                <img id="second" src={selectedCoinForBuy.image} alt={selectedCoinForBuy.name} />
                                            </div>
                                            <select
                                                id='select_second'
                                                className="styles__DropdownGroup-sc-yro9np-8 fiMYjp"
                                                onChange={e => {
                                                    setSelectedCoinForBuy(listCrypto.find(coin => coin.name === e.target.value))
                                                }}
                                            >
                                                {
                                                    listCrypto.map((el, id) => {
                                                        return (
                                                            <option id={id+el.name} key={id}
                                                                value={el.name}
                                                            >
                                                                {el.name}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        {/* list get coin */}
                                    </div>

                                    {/* transfer all data to the next stage of exchange */}
                                    <ExchangeButton
                                        link={
                                            `/exchange`
                                        }
                                        statusButton={false}
                                        amount={sendInput}
                                        sellCoin={selectedCoinForSell}
                                        buyCoin={selectedCoinForBuy}
                                    />
                                    {/* transfer all data to the next stage of exchange */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


