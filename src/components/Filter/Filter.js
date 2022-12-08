import { Link } from "react-router-dom";


import Bild from '../img/Vector.png';


function Filter({ filter }) {
    // console.log({ move: "out" });
    console.log("load");
    let buttons = document.querySelectorAll("button");
    console.log(buttons);



    return (
        <section>
            <span className="bilder">
                <img className="pk2" src={"https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png"} alt="Pokemon Logo"></img>

                <Link onClick={() => filter("pokemon/?limit=905&offset=0.")} to="/"><img className="pk3" src={Bild} alt="X Logo"></img></Link>
            </span>
            <h1 className="types">Types</h1>
            <div className="filter_w">
                <button onClick={(e) => { filter("type/bug", e.target); }}>Bug</button>
                <button onClick={(e) => { filter("type/dark", e.target); }}>Dark</button>
                <button onClick={(e) => { filter("type/dragon", e.target); }}>Dragon</button>
                <button onClick={(e) => { filter("type/electric", e.target); }}>Electric</button>
                <button onClick={(e) => { filter("type/fairy", e.target); }}>Fairy</button>
                <button onClick={(e) => { filter("type/fighting", e.target); }}>Fighting</button>
                <button onClick={(e) => { filter("type/fire", e.target); }}>Fire</button>
                <button onClick={(e) => { filter("type/flying", e.target); }}>Flying</button>
                <button onClick={(e) => { filter("type/ghost", e.target); }}>Ghost</button>
                <button onClick={(e) => { filter("type/grass", e.target); }}>Grass</button>
                <button onClick={(e) => { filter("type/ground", e.target); }}>Ground</button>
                <button onClick={(e) => { filter("type/ice", e.target); }}>Ice</button>
                <button onClick={(e) => { filter("type/normal", e.target); }}>Normal</button>
                <button onClick={(e) => { filter("type/plant", e.target); }}>Plant</button>
                <button onClick={(e) => { filter("type/poison", e.target); }}>poison</button>
                <button onClick={(e) => { filter("type/psychic", e.target); }}>psychic</button>
                <button onClick={(e) => { filter("type/rock", e.target); }}>rock</button>
                <button onClick={(e) => { filter("type/steel", e.target); }}>steel</button>
                <button onClick={(e) => { filter("type/water", e.target); }}>water</button>
            </div>
            <Link to="/"><button className="s" type="Button">Search</button></Link>

            {/* <div>

            </div> */}
        </section>
    );
    // <Link to={"filter/${apivalue}"}
    //             <List api={api} />
    //             fetch(`LINK/type/${Params.apivalue}``)
    // fetch(props.api...Bild.);
}

export default Filter;