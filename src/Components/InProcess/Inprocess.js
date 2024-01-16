
export default function InProgress({ sellCoin, amount, buyCoin, reciveAddressInput }) {

    
    return (
        <>
            <><div className="styles__Container-sc-1sglsc0-6 ldeRxi">
                <div className="styles__TopBlock-sc-1sglsc0-7 ihJldD">
                    <div className="styles__Header-sc-1sglsc0-8 zJnHL">
                        <h1 className="styles__Title-sc-1sglsc0-9 cMIygI">Exchange in progress</h1>
                        <div className="styles__Description-sc-1sglsc0-11 gijewZ">Your coins are exchanged and are safe
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
                        <div className="styles__StatusBlock-sc-1sglsc0-42 fDhrbr" style={{
                            backgroundColor: "rgb(63, 187, 125)",
                            borderRadius: "100%",
                            height: "32px",
                            width: "32px",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <img alt="img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTIuNjY3IDcuMzMzbDMuNTUgMy4zMzRMMTMuMzM0IDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==" className="styles__StatusIcon-sc-1sglsc0-45 duddog" />
                            <div className="styles__StatusText-sc-1sglsc0-46 dlQjmt status-text">
                                <div>Status:</div>Pending deposit
                            </div>
                        </div>
                        <div className="styles__StatusBlock-sc-1sglsc0-42 fDhrbr" style={{
                            backgroundColor: "rgb(63, 187, 125)",
                            borderRadius: "100%",
                            height: "32px",
                            width: "32px",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <img alt="img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTIuNjY3IDcuMzMzbDMuNTUgMy4zMzRMMTMuMzM0IDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==" className="styles__StatusIcon-sc-1sglsc0-45 duddog" />
                            <div className="styles__StatusText-sc-1sglsc0-46 dlQjmt status-text">
                                <div>Status:</div>Confirming
                            </div>
                        </div>
                        <div className="styles__StatusBlock-sc-1sglsc0-42 khZixp">
                            <div className="styles__FlareContainer-sc-1sglsc0-43 iCMiXT">
                                <div className="styles__Flare-sc-1sglsc0-44 biqlGf" />
                            </div>
                            <img alt="img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjgwOCA3LjUxNUEuNjEzLjYxMyAwIDAwMTcgNy4wNzhhLjU4Ny41ODcgMCAwMC0uMTkyLS40MzZMMTQuMjA5IDQuMThBLjY1NC42NTQgMCAwMDEzLjc1IDRhLjY4NC42ODQgMCAwMC0uNDYyLjE4LjYxNi42MTYgMCAwMC0uMTkxLjQzOC41OS41OSAwIDAwLjE5LjQzNmwxLjQ5NSAxLjQxaC02LjIzYTQuNjggNC42OCAwIDAwLTMuMjE1IDEuMjYgNC4xOTMgNC4xOTMgMCAwMC0xLjMzMiAzLjA0NS42LjYgMCAwMC4xOS40MzUuNjcuNjcgMCAwMC40Ni4xOC42NjkuNjY5IDAgMDAuNDU5LS4xOC42LjYgMCAwMC4xOS0uNDM1YzAtLjQwNC4wODQtLjgwNC4yNDctMS4xNzdhMy4wNyAzLjA3IDAgMDEuNzA0LS45OTggMy4yNyAzLjI3IDAgMDExLjA1NC0uNjY2IDMuNDA3IDMuNDA3IDAgMDExLjI0My0uMjM1aDYuMjNsLTEuNDk0IDEuNDFhLjYxNC42MTQgMCAwMC0uMTkyLjQzNi41ODcuNTg3IDAgMDAuMTkyLjQzNy42NTIuNjUyIDAgMDAuNDYxLjE4Mi42ODEuNjgxIDAgMDAuNDYxLS4xODJsMi41OTktMi40NjF6TTYuNzkgMTQuMDIzYS42NzEuNjcxIDAgMDEuNDYtLjE4Yy4xNzQgMCAuMzQuMDY1LjQ2Mi4xOGEuNjAyLjYwMiAwIDAxLjE5MS40MzcuNjA2LjYwNiAwIDAxLS4xOS40MzdsLTEuNDk1IDEuNDA4aDYuMjNjLjg2MSAwIDEuNjg4LS4zMjMgMi4yOTctLjkuNjA5LS41NzcuOTUxLTEuMzYuOTUxLTIuMTc1IDAtLjE2My4wNjgtLjMyLjE5LS40MzVhLjY2OC42NjggMCAwMS40Ni0uMThjLjE3MiAwIC4zMzcuMDY0LjQ1OS4xOGEuNi42IDAgMDEuMTkuNDM1IDQuMTk0IDQuMTk0IDAgMDEtMS4zMzIgMy4wNDUgNC42OCA0LjY4IDAgMDEtMy4yMTUgMS4yNmgtNi4yM2wxLjQ5NCAxLjQxYS42MTQuNjE0IDAgMDEuMTkyLjQzNi41ODcuNTg3IDAgMDEtLjE5Mi40MzcuNjUyLjY1MiAwIDAxLS40NjEuMTgyLjY4Mi42ODIgMCAwMS0uNDYxLS4xODJsLTIuNTk5LTIuNDZBLjYxNC42MTQgMCAwMTQgMTYuOTJhLjU4Ny41ODcgMCAwMS4xOTItLjQzN2wyLjU5OS0yLjQ2eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" className="styles__StatusIcon-sc-1sglsc0-45 duddog"/>
                            <div className="styles__StatusText-sc-1sglsc0-46 dlQjmt status-text">
                                <div>Status:</div>Exchanging
                            </div>
                        </div>
                        <div className="styles__StatusBlock-sc-1sglsc0-42 iKdVGf">
                            <img alt="img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjgxNyA2LjEzNWEuNTQ3LjU0NyAwIDAwLS41NTItLjFMMi4zNSAxMS4xODhhLjU0Ny41NDcgMCAwMC0uMDA0IDEuMDE5bDYuMDg4IDIuMzYgMi4zNiA2LjA4N2EuNTQ3LjU0NyAwIDAwMS4wMTgtLjAwNGw1LjE1My0xMy45MTVhLjU0Ny41NDcgMCAwMC0uMTQ4LS42em0tMS4yODUgMS4zMzNsLTQuMjQ0IDExLjQ1LTEuOTI0LTQuOTY4YS41NDYuNTQ2IDAgMDAtLjMxNC0uMzE0bC00Ljk3LTEuOTI0IDExLjQ1MS00LjI0NHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" className="styles__StatusIcon-sc-1sglsc0-45 duddog"/>
                            <div className="styles__StatusText-sc-1sglsc0-46 dlQjmt status-text">
                                <div>Status:</div>Sending
                            </div>
                        </div>
                    </div>
                </div>
            </div>



                <div className="styles__Container-sc-1g6etzd-0 gObwM">
                    <div className="styles__Header-sc-1g6etzd-2 bJTqBf">
                        <div>Operation details</div>
                    </div>
                    <div className="styles__Main-sc-1g6etzd-4 haPycp">
                        <div className="styles__Row-sc-1g6etzd-5 leXBSY">
                            <div className="styles__Label-sc-1g6etzd-6 jlJcfr">You'll get:</div>
                            <div className="styles__ContainerCoin-sc-1g6etzd-1 dRFxOT">
                                <div className="styles__Container-sc-1lemt1m-0 bqZRXG">
                                    <div className="styles__Wrapper-sc-1lemt1m-1 eUuKin">
                                        <div className="styles__Icon-sc-1lemt1m-2 kAjBvy">
                                            <img alt="img" src={buyCoin.image} className="styles__StyledImage-sc-7mvgp0-0 hUHZLf" /></div>
                                        <div className="styles__Tilda-sc-1lemt1m-7 bCtHyS" />
                                        <div className="styles__Text-sc-1lemt1m-3 iggVUW">17.054302 {buyCoin.name}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="styles__Row-sc-1g6etzd-5 leXBSY">
                            <div className="styles__Label-sc-1g6etzd-6 jlJcfr">Address of the recipient:</div>
                            <div className="styles__Container-sc-1yya6h8-0 hAXDSY">
                                <div className="styles__Text-sc-1yya6h8-1 fxvrJt">{reciveAddressInput}</div>

                            </div>
                        </div>
                        <div className="styles__Row-sc-1g6etzd-5 leXBSY">
                            <div className="styles__Label-sc-1g6etzd-6 jlJcfr" />
                            <div className="styles__Divider-sc-1g6etzd-12 hbbQNt" />
                        </div>
                        <div className="styles__Row-sc-1g6etzd-5 leXBSY">
                            <div className="styles__Label-sc-1g6etzd-6 jlJcfr">Вы отправили:</div>
                            <div className="styles__ContainerCoin-sc-1g6etzd-1 dRFxOT">
                                <div className="styles__Container-sc-1lemt1m-0 bqZRXG">
                                    <div className="styles__Wrapper-sc-1lemt1m-1 eUuKin">
                                        <div className="styles__Icon-sc-1lemt1m-2 kAjBvy">
                                            <img alt="img" src={sellCoin.image} className="styles__StyledImage-sc-7mvgp0-0 hUHZLf" /></div>
                                        <div className="styles__Text-sc-1lemt1m-3 iggVUW">{amount} {sellCoin.name}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="styles__Row-sc-1g6etzd-5 leXBSY">
                            <div className="styles__Label-sc-1g6etzd-6 jlJcfr">Deposit address:</div>
                            <div className="styles__Container-sc-1yya6h8-0 hAXDSY">
                                <div className="styles__Text-sc-1yya6h8-1 fxvrJt">0xacDaE1aa3108974572524B2A6D1097C72C156cCd</div>

                            </div>
                        </div>
                        <div className="styles__Row-sc-1g6etzd-5 leXBSY">
                            <div className="styles__Label-sc-1g6etzd-6 jlJcfr">Incoming transaction hash:</div>
                            <div className="styles__Container-sc-1yya6h8-0 hAXDSY">
                                <div className="styles__Text-sc-1yya6h8-1 fxvrJt">
                                    0xb91e69a2e41677abc01bba9fa5b697f28165b4c4366c6f1124b5f2a2000aba45</div>

                            </div>
                        </div>
                    </div>
                    <div className="styles__Additional-sc-1g6etzd-13 bxqRFO" />

                </div></>
        </>
    )
}