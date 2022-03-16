import "./header.css";
//@ts-ignore
import Input from "../Input";
import Dropdown from "../Dropdown";

const handleLogIn = () => console.log("Login");
const handleCart = () => console.log("Cart");

const Header: React.FC = () => {
  return (
    <div className="h">
      <div className="h__container">
        <div className="h__logo-container">
          <img src="Logo.png" alt="" />
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
            <img src="icons/shopping_cart.svg" alt="" />
            <strong>Carrinho</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
