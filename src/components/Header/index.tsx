import "./header.css";
import Input from "../Input";
import Dropdown from "../Dropdown";
import Popover from "../Popover";

const Header: React.FC = () => {
  const handleLogIn = () => console.log("Login");
  const handleCart = () => console.log("Cart");

  return (
    <div className="h">
      <div className="h__arrow_down">
        <img src="icons/arrow_left_24px.svg" alt="" />
      </div>
      <div className="h__container">
        <div className="h__logo-container">
          <img className="h__logo-container__img" src="Logo.png" alt="Logo" />
        </div>

        <div className="h__container-bar">
          <div className="h__container-bar__c-delivery">
            <Dropdown label="Entrega:" />
          </div>
          <div className="h__container-bar__c-search">
            <Input
              name="search"
              autoComplete="off"
              placeholder="Busque por estabelecimento ou produtos"
            />
          </div>

          <div className="h__container-bar__a-container" onClick={handleLogIn}>
            <img src="icons/account_circle.svg" alt="" />
            <strong>Entrar</strong>
          </div>

          <div className="h__container-bar__a-container" onClick={handleCart}>
            {/* div para dar suporte ao Badge e Poppover */}
            <div className="h__container-bar__a-container__cart">
              <img src="icons/shopping_cart.svg" alt="" />
              <div className="h__container-bar__a-container__cart__badge">
                1
              </div>
              <div className="h__container-bar__a-container__cart__popover">
                <Popover />
              </div>
            </div>
            <strong>Carrinho</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
