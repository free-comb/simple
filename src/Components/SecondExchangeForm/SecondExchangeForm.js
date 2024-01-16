import { useState } from "react";
import "./style.css"
import { useLocation } from "react-router-dom"
import ExchangeButton from "../ExchangeButton/ExchangeButton";

export default function SecondExchangeForm() {
   
    const location = useLocation()
    const  {sellCoin, buyCoin, amount} = location.state.propsData
    const [statusButton, setStatusButton] = useState(true)
 
    const [reciveAddressInput, setReciveAddressInput] = useState('');
    async function reciveAddressInputFunction(event) {
        const inputValue = event.target.value;
        await setReciveAddressInput(event.target.value)
        console.log(reciveAddressInput);
        inputValue.length > 0 ? setStatusButton(false) : setStatusButton(true)
    }



    return (
        <>
            <div className="styles__Page-sc-7wgjik-0 bKPQhL">
                <div className="global__NewContainer-sc-1hzbvz7-1 ePDBUC">
                    <div className="styles__ExchangeFormLayout-sc-7wgjik-1 dLeclM">
                        <div className="styles__Layout-sc-rmgah-0 itpnrP main-form">
                            <h1 className="styles__Title-sc-rmgah-16 kGoYbC">Exchange details</h1>
                            <div className="styles__Main-sc-rmgah-5 haqjJk">
                                <div className="styles__Row-sc-6affsp-0 jvUMab main-page__exchange-group main-page__exchange-from">
                                    <div className="styles__InputGroup-sc-6affsp-3 kiSdrD">
                                        <div className="styles__InputLabel-sc-6affsp-2 cGnerR">
                                            You send
                                        </div>
                                        <div className="styles__InputContainer-sc-6affsp-16 ezqCQh">
                                            <div className="styles__Input-sc-6affsp-4 fCsByf">
                                                {amount}
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" fyIjif">
                                        <img alt="img" src={sellCoin.image} className="styles__StyledImage-sc-7mvgp0-0 fayLXv" />
                                        <span className="styles__DropdownTickerName-sc-6affsp-11 iVxuQ">
                                            {sellCoin.name}
                                        </span>
                                    </div>
                                </div>

                                <div className="styles__Controls-sc-rmgah-6 vLbsw"></div>

                                <div className="styles__Row-sc-6affsp-0 jvUMab main-page__exchange-group main-page__exchange-to">
                                    <div className="styles__InputGroup-sc-6affsp-3 iRlAyw">
                                        <div className="styles__InputLabel-sc-6affsp-2 cGnerR">You get</div>
                                        <div className="styles__InputContainer-sc-6affsp-16 ezqCQh" />
                                        <div className="styles__InputTo-sc-6affsp-6 cfIszW">
                                            <div className="styles__InputToTilda-sc-6affsp-7 iOlOhY" />

                                            {/* Here you should add exchange rate conversion */}
                                            <span className="styles__InputText-sc-6affsp-5 dWFcUn">1.92889912</span>

                                        </div>
                                    </div>
                                    <div className="styles__DropdownGroup-sc-6affsp-9 fyIjif">
                                        <img alt="img" src={buyCoin.image} className="styles__StyledImage-sc-7mvgp0-0 fayLXv" />
                                        <span className="styles__DropdownTickerName-sc-6affsp-11 iVxuQ">{buyCoin.name}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="styles__Layout-sc-yho1ae-0 ktrFoH">
                                <div className="styles__Divider-sc-yho1ae-2 cGjqIP" />
                                <div className="styles__WrapperSteps-sc-rmgah-1 eogPBo">
                                    <div className="styles__Wrapper-sc-11r4b3l-0 bKKEKl">
                                        <div className="styles__Title-sc-11r4b3l-2 khRXwR">How to swap:</div>
                                        <div className="styles__FlexItem-sc-11r4b3l-1 iWRzCv">
                                            <div color="green" className="styles__Icon-sc-11r4b3l-3 hJmZoW">
                                                <div className="styles__Check-sc-11r4b3l-4 jTBPDF" />
                                            </div>
                                            <div color="green" className="styles__Label-sc-11r4b3l-6 hTibrS">Choose currencies</div>
                                        </div>
                                        <div className="styles__Divider-sc-11r4b3l-5 lhQfbJ" />
                                        <div className="styles__FlexItem-sc-11r4b3l-1 iWRzCv">
                                            <div color="black" className="styles__Icon-sc-11r4b3l-3 boIVRC">2</div>
                                            <div color="black" className="styles__Label-sc-11r4b3l-6 byDXUy">Enter the address</div>
                                        </div>
                                        <div className="styles__Divider-sc-11r4b3l-5 lhQfbJ" />
                                        <div className="styles__FlexItem-sc-11r4b3l-1 iWRzCv">
                                            <div color="gray" className="styles__Icon-sc-11r4b3l-3 kGACCS">3</div>
                                            <div color="gray" className="styles__Label-sc-11r4b3l-6 kQzJdi">Create an exchange</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="styles__Main-sc-yho1ae-3 fDZvvp">
                                    <div className="styles__WalletRow-sc-yho1ae-4 dsLuda">
                                        <h2 className="styles__WalletTitle-sc-yho1ae-6 degdGC">Enter the wallet address</h2>
                                    </div>
                                    <div className="styles__InputGroup-sc-yho1ae-8 gEUovM">
                                        <div className="styles__InputLabel-sc-yho1ae-9 gWvcdy exchange-group__label">
                                        </div>

                                        {/* Input for the address that will receive the coin after the exchange  */}
                                        <input onInput={reciveAddressInputFunction} id="address-input" className="styles__Input-sc-yho1ae-11 esfEBp address-input" placeholder={`Enter your ${buyCoin.name} address`} autoComplete="off" spellCheck={false} />



                                    </div>
                                    <div className="styles__ScanerOuter-sc-yho1ae-13 dlxQko">
                                        <div className="styles__ScanerBack-sc-yho1ae-14 kjLmbH" />

                                    </div>
                                    <ExchangeButton
                                        link={`/exchange/waiting-for-payment`}
                                        statusButton={statusButton}
                                        sellCoin={sellCoin}
                                        buyCoin={buyCoin}
                                        amount={amount}
                                        reciveAddressInput={reciveAddressInput}
                                    />

                                </div>
                                <div className="styles__Container-sc-1k88brn-0 gDnlpa" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}