import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AutoExchanging({
  sellCoin,
  amount,
  buyCoin,
  reciveAddressInput,
}) {

    const [stateTopPanel, setStateTopPanel] = useState(sending)
    useEffect(()=>{
        setTimeout(()=>{
            setStateTopPanel(finish({
                sellCoin,
                amount,
                buyCoin,
                reciveAddressInput,
              }))
          },9000)
    },[])
  return (
    <>
      <div className="global__NewContainer-sc-1hzbvz7-1 ePDBUC">
        <div className="styles__ExchangeFormLayout-sc-7wgjik-1 dLeclM">
          <div className="styles__Container-sc-4oujr1-0 kJZfJX">

           {stateTopPanel}


            <div className="styles__Container-sc-1g6etzd-0 gObwM">
              <div className="styles__Header-sc-1g6etzd-2 bJTqBf">
                <div>Operation details</div>
              </div>
              <div className="styles__Main-sc-1g6etzd-4 haPycp">
                <div className="styles__Row-sc-1g6etzd-5 leXBSY">
                  <div className="styles__Label-sc-1g6etzd-6 jlJcfr">
                    You get:
                  </div>
                  <div className="styles__ContainerCoin-sc-1g6etzd-1 dRFxOT">
                    <div className="styles__Container-sc-1lemt1m-0 bqZRXG">
                      <div className="styles__Wrapper-sc-1lemt1m-1 eUuKin">
                        <div className="styles__Icon-sc-1lemt1m-2 kAjBvy">
                          <img
                          alt="img"
                            src={buyCoin.image}
                            className="styles__StyledImage-sc-7mvgp0-0 hUHZLf"
                          />
                        </div>
                        <div className="styles__Text-sc-1lemt1m-3 iggVUW">
                          17.054302 {buyCoin.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="styles__Row-sc-1g6etzd-5 leXBSY">
                  <div className="styles__Label-sc-1g6etzd-6 jlJcfr">
                    Recipient address:
                  </div>
                  <div className="styles__Container-sc-1yya6h8-0 hAXDSY">
                    <div className="styles__Text-sc-1yya6h8-1 fxvrJt">
                      {reciveAddressInput}
                    </div>
                  </div>
                </div>
                <div className="styles__Row-sc-1g6etzd-5 leXBSY">
                  <div className="styles__Label-sc-1g6etzd-6 jlJcfr" />
                  <div className="styles__Divider-sc-1g6etzd-12 hbbQNt" />
                </div>
                <div className="styles__Row-sc-1g6etzd-5 leXBSY">
                  <div className="styles__Label-sc-1g6etzd-6 jlJcfr">
                    You sent:
                  </div>
                  <div className="styles__ContainerCoin-sc-1g6etzd-1 dRFxOT">
                    <div className="styles__Container-sc-1lemt1m-0 bqZRXG">
                      <div className="styles__Wrapper-sc-1lemt1m-1 eUuKin">
                        <div className="styles__Icon-sc-1lemt1m-2 kAjBvy">
                          <img
                          alt="img"
                            src={sellCoin.image}
                            className="styles__StyledImage-sc-7mvgp0-0 hUHZLf"
                          />
                        </div>
                        <div className="styles__Text-sc-1lemt1m-3 iggVUW">
                          {amount} {sellCoin.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="styles__Row-sc-1g6etzd-5 leXBSY">
                  <div className="styles__Label-sc-1g6etzd-6 jlJcfr">
                    Deposit address:
                  </div>
                  <div className="styles__Container-sc-1yya6h8-0 hAXDSY">
                    <div className="styles__Text-sc-1yya6h8-1 fxvrJt">
                      0xacDaE1aa3108974572524B2A6D1097C72C156cCd
                    </div>
                  </div>
                </div>
                <div className="styles__Row-sc-1g6etzd-5 leXBSY">
                  <div className="styles__Label-sc-1g6etzd-6 jlJcfr">
                    Hash in:
                  </div>
                  <div className="styles__Container-sc-1yya6h8-0 hAXDSY">
                    <div className="styles__Text-sc-1yya6h8-1 fxvrJt">
                      0xb91e69a2e41677abc01bba9fa5b697f28165b4c4366c6f1124b5f2a2000aba45
                    </div>
                  </div>
                </div>
              </div>
              <div className="styles__Additional-sc-1g6etzd-13 bxqRFO" />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


function sending(){
    return(
        <div className="styles__Container-sc-1sglsc0-6 ldeRxi">
              <div className="styles__TopBlock-sc-1sglsc0-7 ihJldD">
                <div className="styles__Header-sc-1sglsc0-8 zJnHL">
                  <h1 className="styles__Title-sc-1sglsc0-9 cMIygI">Sending</h1>
                  <div className="styles__Description-sc-1sglsc0-11 gijewZ">
                    Coins are on the way
                  </div>
                </div>
              </div>
              <div className="styles__BottomBlock-sc-1sglsc0-32 bMzagy">
                <div className="styles__Dividers-sc-1sglsc0-39 hpnbZa">
                  <div className="styles__Divider-sc-1sglsc0-40 cDrVOr" />
                  <div className="styles__Divider-sc-1sglsc0-40 cDrVOr" />
                  <div className="styles__Divider-sc-1sglsc0-40 cDrVOr" />
                </div>
                <div className="styles__Statuses-sc-1sglsc0-41 bQCBbD">
                  <div
                    className="styles__StatusBlock-sc-1sglsc0-42 fDhrbr"
                    style={{
                      backgroundColor: "rgb(63, 187, 125)",
                      borderRadius: "100%",
                      height: "32px",
                      width: "32px",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt="img"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTIuNjY3IDcuMzMzbDMuNTUgMy4zMzRMMTMuMzM0IDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg=="
                      className="styles__StatusIcon-sc-1sglsc0-45 duddog"
                    />
                    <div className="styles__StatusText-sc-1sglsc0-46 dlQjmt status-text">
                      <div>Status:</div>Pending deposit
                    </div>
                  </div>
                  <div
                    className="styles__StatusBlock-sc-1sglsc0-42 fDhrbr"
                    style={{
                      backgroundColor: "rgb(63, 187, 125)",
                      borderRadius: "100%",
                      height: "32px",
                      width: "32px",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt="img"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTIuNjY3IDcuMzMzbDMuNTUgMy4zMzRMMTMuMzM0IDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg=="
                      className="styles__StatusIcon-sc-1sglsc0-45 duddog"
                    />
                    <div className="styles__StatusText-sc-1sglsc0-46 dlQjmt status-text">
                      <div>Status:</div>Confirming
                    </div>
                  </div>
                  <div
                    className="styles__StatusBlock-sc-1sglsc0-42 fDhrbr"
                    style={{
                      backgroundColor: "rgb(63, 187, 125)",
                      borderRadius: "100%",
                      height: "32px",
                      width: "32px",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt="img"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTIuNjY3IDcuMzMzbDMuNTUgMy4zMzRMMTMuMzM0IDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg=="
                      className="styles__StatusIcon-sc-1sglsc0-45 duddog"
                    />
                    <div className="styles__StatusText-sc-1sglsc0-46 dlQjmt status-text">
                      <div>Status:</div>Exchanging
                    </div>
                  </div>
                  <div className="styles__StatusBlock-sc-1sglsc0-42 khZixp">
                    <div className="styles__FlareContainer-sc-1sglsc0-43 iCMiXT">
                      <div className="styles__Flare-sc-1sglsc0-44 biqlGf" />
                    </div>
                    <img
                      alt="img"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjgxNyA2LjEzNWEuNTQ3LjU0NyAwIDAwLS41NTItLjFMMi4zNSAxMS4xODhhLjU0Ny41NDcgMCAwMC0uMDA0IDEuMDE5bDYuMDg4IDIuMzYgMi4zNiA2LjA4N2EuNTQ3LjU0NyAwIDAwMS4wMTgtLjAwNGw1LjE1My0xMy45MTVhLjU0Ny41NDcgMCAwMC0uMTQ4LS42em0tMS4yODUgMS4zMzNsLTQuMjQ0IDExLjQ1LTEuOTI0LTQuOTY4YS41NDYuNTQ2IDAgMDAtLjMxNC0uMzE0bC00Ljk3LTEuOTI0IDExLjQ1MS00LjI0NHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
                      className="styles__StatusIcon-sc-1sglsc0-45 duddog"
                    />
                    <div className="styles__StatusText-sc-1sglsc0-46 dlQjmt status-text">
                      <div>Status:</div>Sending
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}

function finish({
    sellCoin,
    amount,
    buyCoin,
    reciveAddressInput,
  }){
    return(
        <div className="styles__Container-sc-1a3bdo2-0 cHnLyd">
              <div className="styles__TopBlock-sc-1a3bdo2-1 jlgbfk">
                <h1 className="styles__Title-sc-1a3bdo2-2 jeSPVG">Finished successfully</h1>
                <div className="styles__Coins-sc-1a3bdo2-3 esnRwN">
                  <div className="styles__Container-sc-1lemt1m-0 bqZRXG">
                    <div className="styles__Wrapper-sc-1lemt1m-1 eUuKin">
                      <div className="styles__Icon-sc-1lemt1m-2 kAjBvy">
                        <img alt="img" src={sellCoin.image} className="styles__StyledImage-sc-7mvgp0-0 hUHZLf" /></div>
                      <div className="styles__Text-sc-1lemt1m-3 iggVUW">{amount} {sellCoin.name}</div>
                    </div>
                  </div>
                  <div className="styles__ExchangeIcon-sc-1a3bdo2-4 jCBPaw" />
                  <div className="styles__Container-sc-1lemt1m-0 bqZRXG">
                    <div className="styles__Wrapper-sc-1lemt1m-1 eUuKin">
                      <div className="styles__Icon-sc-1lemt1m-2 kAjBvy">
                        <img alt="img" src={buyCoin.image} className="styles__StyledImage-sc-7mvgp0-0 hUHZLf" /></div>
                      <div className="styles__Text-sc-1lemt1m-3 iggVUW">17.056092 {buyCoin.name}</div>
                    </div>
                  </div>
                </div>
                <div className="styles__FlexRow-sc-1a3bdo2-10 goZTtN">
                    <Link to={'/'} style={{textDecoration:"none"}}>
                        <div className="styles__Button-sc-1a3bdo2-5 gUPaNv">Start a new exchange</div>
                    </Link>
                </div>
              </div>
            </div>
    )
}