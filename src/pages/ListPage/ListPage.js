
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import german from '../../German JSON.json';

function List(props) {
    // const [searchterm, setSearchTerm] = useState("?limit=500&offset=0.");
    const [PokeData, setPokeData] = useState();
    const [searchLink, setsearchLink] = useState(props.searchLink);
    // const [searchTerm, setSearchTerm] = useState(props.searchTerm);
    const [searchLimit, setsearchLimit] = useState(50);
    const [useAbleData, setuseAbleData] = useState();

    props.loading();

    useEffect(() => {
        setsearchLink(props.searchLink);
    }, [props.searchLink, searchLink]);

    useEffect(() => {
        const controller = new AbortController();
        fetch(`https://pokeapi.co/api/v2/${searchLink}`, { signal: controller.signal })
            .then(res => res.json())
            .then((res) => {
                if (props.searchLink.includes("type")) {
                    setPokeData(res.pokemon);
                    setuseAbleData(res.pokemon);
                } else if (props.searchLink.includes("pokemon")) {
                    setPokeData(res.results);
                    setuseAbleData(res.results);
                }

                return () => {
                    controller.abort();
                };
            });
        // console.log(PokeData);
    }, [props.searchLink, searchLink,]);



    useEffect(() => {
        if (PokeData === undefined) {
            return;
        }
        if (props.searchTerm === "") {
            setuseAbleData(PokeData);
        }
        // if (searchTerm === "reset") {
        //     setSearchTerm("pokemon/?limit=905&offset=0.");
        //     // setuseAbleData(PokeData);
        //     return;
        // }

        // setSearchTerm(`pokemon/${searchTerm}`);
        let length = (props.searchTerm).length;

        if (props.searchLink.includes("type")) {
            setuseAbleData(PokeData.filter(el => el.pokemon.name.slice(0, length).toLowerCase() ===
                (props.searchTerm).toLowerCase().replaceAll(" ", "-")));

        } else if (props.searchLink.includes("pokemon")) {
            setuseAbleData(PokeData.filter(el => el.name.slice(0, length).toLowerCase() ===
                (props.searchTerm).toLowerCase().replaceAll(" ", "-")));
        }

    }, [props.searchTerm, PokeData, props.searchLink]);


    if (PokeData === undefined) {
        return;
    }

    if (PokeData[0].pokemon?.name !== undefined && searchLink.includes("pokemon")) {
        return;
    }

    // if (PokeData[0].name === undefined) {

    // }

    return (

        <div className="main_Div">
            {useAbleData?.slice(0, searchLimit).map((item, index) => {
                let name;
                let i;
                /* let c; */
                /* console.log(a); */
                if (props.searchLink.includes("type")) {
                    name = item.pokemon.name;
                    i = item.pokemon.url.slice(-6, -1).replace("/", "").replace("n", "").replace("o", "").replace("m", "");
                    if (i <= 905 && props.language === "German") {
                        name = german[i - 1].name;
                    }
                } else if (props.searchLink.includes("pokemon")) {
                    if (item.url === undefined) {
                        return (console.log("return"));
                    }
                    name = item.name;
                    i = item.url.slice(-6, -1).replace("/", "").replace("n", "").replace("o", "").replace("m", "");
                    if (i <= 905 && props.language === "German") {
                        name = german[i - 1].name;
                    }
                }
                if (i > 905) {
                    return (console.log("return"));
                }


                return (
                    <Link to={`/pokemon/${i}`} key={index} className='map_div'>
                        <img className='PokeImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`} alt='POKEimg'></img>
                        <span className='ueber_num_Name'>
                            <p className='num_name'> {name.toUpperCase()} </p>
                            <p className='num_name'> {("000" + (i)).slice(-3) + "#"} </p>
                        </span>
                    </Link>
                );
            })}
            <div className='showMore'>
                <button onClick={() => {
                    setsearchLimit(searchLimit + 20);
                }}>Show More</button>
            </div>
        </div>
    );
}
export default List;