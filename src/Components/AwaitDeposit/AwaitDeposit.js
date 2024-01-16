

export default function AwaitDeposit({ sellCoin, amount, buyCoin, reciveAddressInput }) {

  return (
    <>
      <div className="styles__Container-sc-1sglsc0-6 ldeRxi">
        <div className="styles__TopBlock-sc-1sglsc0-7 dsAfcI">
          <div className="styles__Header-sc-1sglsc0-8 zJnHL">
            <h1 className="styles__Title-sc-1sglsc0-9 ekVIrd">Awaiting your deposit</h1>
          </div>
          <div className="styles__DepositRow-sc-1sglsc0-12 fcTulS">
            <div className="styles__DepositLabel-sc-1sglsc0-13 UjqQi">Send deposit:</div>
            <div className="styles__Container-sc-1lemt1m-0 bqZRXG">
              <div className="styles__Wrapper-sc-1lemt1m-1 eUuKin">
                <div className="styles__Icon-sc-1lemt1m-2 kAjBvy">
                  <img alt="img" src={sellCoin.image} className="styles__StyledImage-sc-7mvgp0-0 hUHZLf" /></div>
                <div className="styles__MainText-sc-1lemt1m-4 bNPLxM">{amount}</div>
                <div className="styles__MainTicker-sc-1lemt1m-5 gzqgsu">{sellCoin.name}</div>
              </div>
            </div>
          </div>
          <div className="styles__DepositRow-sc-1sglsc0-12 styles__AddressRow-sc-1sglsc0-14 fcTulS cNGjaV">
            <div className="styles__DepositLabel-sc-1sglsc0-13 styles__AddressLabel-sc-1sglsc0-15 UjqQi CanCx">
              Deposit address:</div>
            <div className="styles__AddressCol-sc-1sglsc0-19 DxlVV">
              <div className="styles__AddressInfo-sc-1sglsc0-16 gogTbO">
                <div className="styles__AddressQR-sc-1sglsc0-20 hPBePY">

                  {/* The address of the wallet that will accept the coin. I suspect that the list of coins will be limited and you need to think about the receiving addresses in advance, it would be better if they came from outside according to the coin they are giving */}
                  <svg shapeRendering="crispEdges" height="88" width="88" viewBox="0 0 29 29">
                    <path fill="#f5f8fb" d="M0,0 h29v29H0z" />
                    <path fill="#3F5878" d="M0 0h7v1H0zM8 0h1v1H8zM10 0h1v1H10zM12 0h1v1H12zM14 0h1v1H14zM16 0h2v1H16zM19 0h1v1H19zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM9 1h5v1H9zM16 1h2v1H16zM20 1h1v1H20zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h3v1H8zM13 2h4v1H13zM20 2h1v1H20zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h3v1H8zM12 3h4v1H12zM17 3h1v1H17zM20 3h1v1H20zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h1v1H8zM11 4h2v1H11zM14 4h6v1H14zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM10 5h2v1H10zM13 5h2v1H13zM16 5h1v1H16zM18 5h2v1H18zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM10 7h1v1H10zM12 7h1v1H12zM14 7h5v1H14zM20 7h1v1H20zM0 8h4v1H0zM6 8h1v1H6zM8 8h1v1H8zM10 8h3v1H10zM14 8h4v1H14zM21 8h1v1H21zM24 8h3v1H24zM28,8 h1v1H28zM0 9h1v1H0zM2 9h1v1H2zM5 9h1v1H5zM7 9h2v1H7zM10 9h1v1H10zM12 9h3v1H12zM16 9h2v1H16zM19 9h2v1H19zM22 9h1v1H22zM24 9h1v1H24zM28,9 h1v1H28zM1 10h1v1H1zM4 10h1v1H4zM6 10h9v1H6zM16 10h2v1H16zM21 10h1v1H21zM24 10h4v1H24zM0 11h3v1H0zM4 11h1v1H4zM9 11h2v1H9zM13 11h1v1H13zM15 11h2v1H15zM18 11h3v1H18zM24 11h1v1H24zM27,11 h2v1H27zM0 12h1v1H0zM3 12h1v1H3zM6 12h5v1H6zM12 12h7v1H12zM20 12h1v1H20zM25 12h3v1H25zM1 13h1v1H1zM4 13h1v1H4zM7 13h1v1H7zM9 13h1v1H9zM11 13h2v1H11zM14 13h9v1H14zM25,13 h4v1H25zM0 14h7v1H0zM10 14h2v1H10zM14 14h1v1H14zM16 14h8v1H16zM28,14 h1v1H28zM0 15h1v1H0zM4 15h1v1H4zM7 15h2v1H7zM11 15h1v1H11zM14 15h2v1H14zM22 15h4v1H22zM28,15 h1v1H28zM0 16h1v1H0zM2 16h2v1H2zM5 16h3v1H5zM10 16h1v1H10zM12 16h2v1H12zM16 16h1v1H16zM18 16h1v1H18zM21 16h1v1H21zM24 16h2v1H24zM1 17h1v1H1zM3 17h3v1H3zM9 17h2v1H9zM13 17h3v1H13zM17 17h1v1H17zM20 17h1v1H20zM0 18h1v1H0zM5 18h4v1H5zM10 18h1v1H10zM13 18h1v1H13zM15 18h1v1H15zM21 18h5v1H21zM2 19h1v1H2zM5 19h1v1H5zM9 19h3v1H9zM14 19h1v1H14zM17 19h3v1H17zM22 19h1v1H22zM25 19h2v1H25zM28,19 h1v1H28zM1 20h9v1H1zM14 20h2v1H14zM17 20h1v1H17zM19 20h8v1H19zM28,20 h1v1H28zM8 21h1v1H8zM13 21h1v1H13zM19 21h2v1H19zM24,21 h5v1H24zM0 22h7v1H0zM9 22h2v1H9zM13 22h2v1H13zM16 22h1v1H16zM19 22h2v1H19zM22 22h1v1H22zM24 22h1v1H24zM27 22h1v1H27zM0 23h1v1H0zM6 23h1v1H6zM10 23h4v1H10zM18 23h1v1H18zM20 23h1v1H20zM24 23h1v1H24zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM9 24h1v1H9zM11 24h1v1H11zM15 24h4v1H15zM20 24h5v1H20zM26,24 h3v1H26zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h2v1H8zM11 25h1v1H11zM13 25h3v1H13zM18 25h2v1H18zM21 25h1v1H21zM24 25h2v1H24zM28,25 h1v1H28zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM8 26h3v1H8zM12 26h1v1H12zM14 26h1v1H14zM19 26h1v1H19zM21 26h1v1H21zM23 26h1v1H23zM28,26 h1v1H28zM0 27h1v1H0zM6 27h1v1H6zM8 27h1v1H8zM10 27h1v1H10zM12 27h2v1H12zM15 27h1v1H15zM18 27h4v1H18zM23 27h2v1H23zM27 27h1v1H27zM0 28h7v1H0zM8 28h1v1H8zM11 28h1v1H11zM18 28h1v1H18zM20 28h3v1H20zM25 28h1v1H25zM27 28h1v1H27z">
                    </path>
                  </svg>

                </div>
                {/* The address of the wallet that will accept the coin. I suspect that the list of coins will be limited and you need to think about the receiving addresses in advance, it would be better if they came from outside according to the coin they are giving */}
                <div className="styles__AddressText-sc-1sglsc0-21 giBVQz">
                  bc1quunm5u5k6wjs3vq5hv8u97m38a58psncwdzgrj
                </div>

              </div>
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
            <div className="styles__StatusBlock-sc-1sglsc0-42 khZixp">
              <div className="styles__FlareContainer-sc-1sglsc0-43 iCMiXT">
                <div className="styles__Flare-sc-1sglsc0-44 biqlGf" />
              </div>
              <img alt="img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUuOTQzIDEyLjk3M2ExLjEzOCAxLjEzOCAwIDEwMC0yLjI3NiAxLjEzOCAxLjEzOCAwIDAwMCAyLjI3NnptNC4wNzYgMGExLjEzOCAxLjEzOCAwIDEwMC0yLjI3NiAxLjEzOCAxLjEzOCAwIDAwMCAyLjI3NnptNC4wNzYgMGExLjEzOCAxLjEzOCAwIDEwMC0yLjI3NiAxLjEzOCAxLjEzOCAwIDAwMCAyLjI3NnoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNOS45ODggMkM0LjQ4NiAyIDAgNi40OSAwIDEyczQuNDg2IDEwIDkuOTg4IDEwQzE1LjQ5MSAyMiAyMCAxNy41MzIgMjAgMTIgMjAgNi40OSAxNS41MTQgMiA5Ljk4OCAyem0wIDE4LjYzNGMtNC43NCAwLTguNi0zLjg2Ni04LjYtOC42MSAwLTQuNzQ2IDMuODYtOC42MTIgOC42LTguNjEyczguNjAyIDMuODY2IDguNjAyIDguNjExYy4wMjMgNC43NDUtMy44MzkgOC42MTEtOC42MDIgOC42MTF6IiBmaWxsPSIjZmZmIi8+PC9zdmc+" className="styles__StatusIcon-sc-1sglsc0-45 duddog" />
              <div className="styles__StatusText-sc-1sglsc0-46 dlQjmt status-text">
                <div>Status:</div>Pending deposit
              </div>
            </div>
            <div className="styles__StatusBlock-sc-1sglsc0-42 iKdVGf">
              <img alt="img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTguNDI0IDcuMjE3YS41NjQuNTY0IDAgMDAuNzg2LS4xMzVsMi4wNjItMi45MTctLjM4OC0uMjc0YS41NjQuNTY0IDAgMDAtLjIyOS0uMTYybC0yLjMtMS42MjZhLjU2NC41NjQgMCAxMC0uNjUuOTIxbDEuMTgxLjgzNmE5LjAyMyA5LjAyMyAwIDAwMS41NzIgMTcuOTA4LjU2NC41NjQgMCAwMDAtMS4xMjhBNy44OTUgNy44OTUgMCAwMTkuMzUyIDQuOTI3TDguMjkgNi40M2EuNTY0LjU2NCAwIDAwLjEzNS43ODZ6bTYuODMzIDExLjc2OWE3Ljg4IDcuODggMCAwMS0yLjQ4IDEuMjguNTYuNTYgMCAwMC0uMzc0LjcwNS41NjEuNTYxIDAgMDAuNjkyLjM3NnYuMDAybC4wMTMtLjAwNC4wMi0uMDA3YTguOTI4IDguOTI4IDAgMDAyLjgxNS0xLjQ1Ny41NjMuNTYzIDAgMDAuMTA2LS43OTIuNTc4LjU3OCAwIDAwLS43OTItLjEwM3ptMy4wMS03LjQ0M2EuNTY2LjU2NiAwIDAwLjY0MS40NzQuNTY4LjU2OCAwIDAwLjQ3NC0uNjQgOC45NjMgOC45NjMgMCAwMC0xLjAyMy0zLjAyNC41NjUuNTY1IDAgMDAtLjk4Ny41NDdjLjQ1NC44Mi43NTcgMS43MTUuODk1IDIuNjQzek0xMy42IDQuMjU0YS41NjkuNTY5IDAgMDAtLjc2MS41MjYuNTY1LjU2NSAwIDAwLjM2Ny41MyA3Ljg5MyA3Ljg5MyAwIDAxMi4zOTIgMS40MTJsLjAwMy4wMDJjLjAwMi4wMDQuMDA2LjAwNi4wMDguMDA4bC4wMDQuMDAyYS41NTQuNTU0IDAgMDAuNi4wODQuNTY0LjU2NCAwIDAwLjEzMy0uOTQgOC45NjkgOC45NjkgMCAwMC0yLjc0Ny0xLjYyNHptNS4yNTYgOS42NDVhLjU3My41NzMgMCAwMC0uNjY4LjQzNiA3LjgxNCA3LjgxNCAwIDAxLTEuMDQ1IDIuNTg3LjU2NC41NjQgMCAwMC45NTMuNjA0IDguOTY3IDguOTY3IDAgMDAxLjE5OC0yLjk2Mi41NjUuNTY1IDAgMDAtLjQzOC0uNjY1eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" className="styles__StatusIcon-sc-1sglsc0-45 duddog" />
              <div className="styles__StatusText-sc-1sglsc0-46 dlQjmt status-text">
                <div>Status:</div>Confirming
              </div>
            </div>
            <div className="styles__StatusBlock-sc-1sglsc0-42 iKdVGf">
              <img alt="img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjgwOCA3LjUxNUEuNjEzLjYxMyAwIDAwMTcgNy4wNzhhLjU4Ny41ODcgMCAwMC0uMTkyLS40MzZMMTQuMjA5IDQuMThBLjY1NC42NTQgMCAwMDEzLjc1IDRhLjY4NC42ODQgMCAwMC0uNDYyLjE4LjYxNi42MTYgMCAwMC0uMTkxLjQzOC41OS41OSAwIDAwLjE5LjQzNmwxLjQ5NSAxLjQxaC02LjIzYTQuNjggNC42OCAwIDAwLTMuMjE1IDEuMjYgNC4xOTMgNC4xOTMgMCAwMC0xLjMzMiAzLjA0NS42LjYgMCAwMC4xOS40MzUuNjcuNjcgMCAwMC40Ni4xOC42NjkuNjY5IDAgMDAuNDU5LS4xOC42LjYgMCAwMC4xOS0uNDM1YzAtLjQwNC4wODQtLjgwNC4yNDctMS4xNzdhMy4wNyAzLjA3IDAgMDEuNzA0LS45OTggMy4yNyAzLjI3IDAgMDExLjA1NC0uNjY2IDMuNDA3IDMuNDA3IDAgMDExLjI0My0uMjM1aDYuMjNsLTEuNDk0IDEuNDFhLjYxNC42MTQgMCAwMC0uMTkyLjQzNi41ODcuNTg3IDAgMDAuMTkyLjQzNy42NTIuNjUyIDAgMDAuNDYxLjE4Mi42ODEuNjgxIDAgMDAuNDYxLS4xODJsMi41OTktMi40NjF6TTYuNzkgMTQuMDIzYS42NzEuNjcxIDAgMDEuNDYtLjE4Yy4xNzQgMCAuMzQuMDY1LjQ2Mi4xOGEuNjAyLjYwMiAwIDAxLjE5MS40MzcuNjA2LjYwNiAwIDAxLS4xOS40MzdsLTEuNDk1IDEuNDA4aDYuMjNjLjg2MSAwIDEuNjg4LS4zMjMgMi4yOTctLjkuNjA5LS41NzcuOTUxLTEuMzYuOTUxLTIuMTc1IDAtLjE2My4wNjgtLjMyLjE5LS40MzVhLjY2OC42NjggMCAwMS40Ni0uMThjLjE3MiAwIC4zMzcuMDY0LjQ1OS4xOGEuNi42IDAgMDEuMTkuNDM1IDQuMTk0IDQuMTk0IDAgMDEtMS4zMzIgMy4wNDUgNC42OCA0LjY4IDAgMDEtMy4yMTUgMS4yNmgtNi4yM2wxLjQ5NCAxLjQxYS42MTQuNjE0IDAgMDEuMTkyLjQzNi41ODcuNTg3IDAgMDEtLjE5Mi40MzcuNjUyLjY1MiAwIDAxLS40NjEuMTgyLjY4Mi42ODIgMCAwMS0uNDYxLS4xODJsLTIuNTk5LTIuNDZBLjYxNC42MTQgMCAwMTQgMTYuOTJhLjU4Ny41ODcgMCAwMS4xOTItLjQzN2wyLjU5OS0yLjQ2eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" className="styles__StatusIcon-sc-1sglsc0-45 duddog" />
              <div className="styles__StatusText-sc-1sglsc0-46 dlQjmt status-text">
                <div>Status:</div>Exchanging
              </div>
            </div>
            <div className="styles__StatusBlock-sc-1sglsc0-42 iKdVGf">
              <img alt="img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjgxNyA2LjEzNWEuNTQ3LjU0NyAwIDAwLS41NTItLjFMMi4zNSAxMS4xODhhLjU0Ny41NDcgMCAwMC0uMDA0IDEuMDE5bDYuMDg4IDIuMzYgMi4zNiA2LjA4N2EuNTQ3LjU0NyAwIDAwMS4wMTgtLjAwNGw1LjE1My0xMy45MTVhLjU0Ny41NDcgMCAwMC0uMTQ4LS42em0tMS4yODUgMS4zMzNsLTQuMjQ0IDExLjQ1LTEuOTI0LTQuOTY4YS41NDYuNTQ2IDAgMDAtLjMxNC0uMzE0bC00Ljk3LTEuOTI0IDExLjQ1MS00LjI0NHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" className="styles__StatusIcon-sc-1sglsc0-45 duddog" />
              <div className="styles__StatusText-sc-1sglsc0-46 dlQjmt status-text">
                <div>Status:</div>Sending
              </div>
            </div>
          </div>
        </div>
        <div className="styles__ExtraBottomBlock-sc-1sglsc0-33 cvfhSC">
          <div className="styles__NotificationBlock-sc-1sglsc0-34 gnswqh">
            <div className="styles__NotificationDivider-sc-1sglsc0-35 imUtrm" />
            <div className="styles__NotifactionIcon-sc-1sglsc0-36 hMkDJM" />
            <div className="styles__NotificationText-sc-1sglsc0-37 dJnRUb">If you sent the coins and the status did
              not change immediately, do not worry. Our system needs a few minutes to detect the transaction.
            </div>
            <button className="styles__NotificationCloseButton-sc-1sglsc0-38 jnrQFE" />
          </div>
        </div>
      </div>

      <div className="styles__Container-sc-1g6etzd-0 gObwM">
        <div className="styles__Header-sc-1g6etzd-2 bJTqBf">
          <div>Operation details</div>
        </div>
        <div className="styles__Main-sc-1g6etzd-4 haPycp">
          <div className="styles__Row-sc-1g6etzd-5 leXBSY">
            <div className="styles__Label-sc-1g6etzd-6 jlJcfr">You get:</div>
            <div className="styles__ContainerCoin-sc-1g6etzd-1 dRFxOT">
              <div className="styles__Container-sc-1lemt1m-0 bqZRXG">
                <div className="styles__Wrapper-sc-1lemt1m-1 eUuKin">
                  <div className="styles__Icon-sc-1lemt1m-2 kAjBvy">
                    <img src={buyCoin.image} alt="img" className="styles__StyledImage-sc-7mvgp0-0 hUHZLf" />
                  </div>
                  <div className="styles__Tilda-sc-1lemt1m-7 bCtHyS" />
                  {/* Add from API calculadet swap coin */}
                  <div className="styles__Text-sc-1lemt1m-3 iggVUW">1.92852176 {buyCoin.name}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="styles__Row-sc-1g6etzd-5 leXBSY">
            <div className="styles__Label-sc-1g6etzd-6 jlJcfr">Recipient address:</div>
            <div className="styles__Container-sc-1yya6h8-0 hAXDSY">
              <div className="styles__Text-sc-1yya6h8-1 fuRKbM">{reciveAddressInput}</div>

            </div>
          </div>
        </div>
        <div className="styles__Additional-sc-1g6etzd-13 bxqRFO" />
      </div>
    </>
  )
}