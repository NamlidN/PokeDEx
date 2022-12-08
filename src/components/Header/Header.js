// import {  } from "react-router-dom";
import { useRef, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Dpk from '../img/Dpk.png';
import Lpk from '../img/Lpk-50.png';
import Reset from "../img/reset.png";
import Dark from "../img/dark.png";
import Light from "../img/light.png";
import backButton from '../img/back-button.png';
import PokemonLogo from '../img/PokeLogo.png';
import ÜbersetzungsPic from '../img/ubersetzenSVG.svg';



function Header(props) {
    let navigate = useNavigate();
    const searchRef = useRef();
    // const filterRef = useRef();
    const params = useParams();
    // const [filterMenu, setFilterMenu] = useState();


    const handleOnClick = useCallback(() => navigate('/', { replace: true }), [navigate]);

    return (
        <header>
            <Link className="LogoLink" to="/"> <img className="Logo" src={PokemonLogo} alt="Pokemon Logo"></img></Link>
            <nav>
                <button className="btn_img_burger button" type="button">{params.pokemon === "pokemon" ? <Link to="/"><img src={backButton} className="burgerimg" alt="burgerMenu" ></img></Link> : <Link to="/filter"> <img src={props.burgerimg === "Dpk" ? Dpk : Lpk} className="burgerimg" alt="burgerMenu" ></img></Link>}</button>
                <input id="searchInput" onChange={(e) => { props.search(e.target.value); handleOnClick(); }} placeholder="Search Pokemon" Ref={searchRef}></input>
                <span className="button_wrapper">
                    <button onClick={() => props.resetButton()}>
                        <Link to="/"><img className="btn_reset" src={Reset} alt="Filter reset"></img></Link>
                    </button>
                    <button type="button" onClick={() => props.setDarkmode()} ><img className="btn_LD" src={props.dlimg === "Dark" ? Dark : Light} alt="DarkMode"></img></button>
                    <button className="üButton" type="button" onClick={() => props.setLanguage()} ><img className="btn_LD" src={ÜbersetzungsPic} alt="DarkMode"></img></button>
                </span>
                {/* {filterMenu} */}
            </nav>
        </header>
    );
}


export default Header;