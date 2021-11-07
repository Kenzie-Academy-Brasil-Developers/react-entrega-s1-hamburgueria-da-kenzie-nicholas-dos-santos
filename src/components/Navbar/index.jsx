import "./style.css";
import { useState } from "react";
import Logo from "../../images/Logo.png";

function Navbar({ showProducts }) {
  const [userInput, setUserInput] = useState("");

  return (
    <header className="header__nav">
      <img src={Logo} alt="logo" />
      <div className="div__input">
        <input
          className="input__filterItens"
          type="text"
          placeholder={"Digitar pesquisa"}
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button className="input__btn" onClick={() => showProducts(userInput)}>
          Pesquisar
        </button>
      </div>
    </header>
  );
}

//Como fazer o menu renderizar todos os produtos novamente ao apagar preenchimento do input?

export default Navbar;
