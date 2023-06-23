import Dropdown from "../dropdown/dropdown"
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
    return (
        <header>

            <div className="header-small-menu">
                <div className="header-navigation__logo">
                    <a href="/"><img src={logo} alt="" />MODEVICE</a>
                </div>

                <div className="header-small-menu__profile-corner">

                    <div className="header-small-menu__profile">
                        <i className="fi fi-rr-user"></i>
                    </div>
                    <div className="header-small-menu_basket">
                        <i className="fi fi-rr-search"></i>
                    </div>
                    <div className="header-small-menu_basket">
                        <Link to="/basket"><i className="fi fi-rr-shopping-cart"></i></Link>
                    </div>
                    <div className="header-small-menu__currency-lang-corner">
                        <div className="header-small-menu__dropdown_lang">
                            <Dropdown options={[
                                { label: "RU", value: "USD" },
                                { label: "UZ", value: "UZS" },
                                { label: "ENG", value: "RUB" },
                            ]}
                                width={"80px"}
                            />
                        </div>
                        <div className="header-small-menu__dropdown_currency">
                            <Dropdown options={[
                                { label: "USD", value: "USD" },
                                { label: "UZS", value: "UZS" },
                                { label: "RUB", value: "RUB" },
                            ]}
                                width={"80px"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <nav className="header-navigation">

                <div className="header-navigation__burger"><img alt="" /></div>
            </nav>
        </header>
    )
}
export default Header;