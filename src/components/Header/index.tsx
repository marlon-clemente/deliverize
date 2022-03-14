import "./header.css";
//@ts-ignore
import Input from "../Input";
import Dropdown from "../Dropdown";

const handleLogIn = () => console.log("Login");
const handleCart = () => console.log("Cart");

const Header: React.FC = () => {
  return (
    <div className="h">
      <div className="h-container">
        <div className="h-container-logoContainer">
          <img src="Logo.png" alt="" />
        </div>

        <div className="h-container-bar">
          <Dropdown label="Entrega:" />
          <Input
            name="search"
            autoComplete="off"
            placeholder="Busque por estabelecimento ou produtos"
          />
          <div className="h-container-bar-aContainer" onClick={handleLogIn}>
            <img src="icons/account_circle.svg" alt="" />
            <strong>Entrar</strong>
          </div>
          <div className="h-container-bar-aContainer" onClick={handleCart}>
            <img src="icons/shopping_cart.svg" alt="" />
            <strong>Carrinho</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
