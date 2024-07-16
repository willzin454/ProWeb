import React from "react";
import "./Header.css";

const Header = (props) =>{
    const { nome } = props;
    return(
        <div className="header">
            <span>Ola, {nome}</span>
        </div>
    );
}
export default Header;