import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/PictureCarousel/PictureCarousel';
import german from '../../German JSON.json';
// import { isButtonElement } from 'react-router-dom/dist/dom';


function DetailPage(props) {
    const [pokeData, setPokeData] = useState();
    // const [sonderData, setsonderData] = useState();
    const params = useParams();
    let name;


    useEffect(() => {
        // url ende ist die pokedex id
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
            .then(response => response.json())
            .then((pokeData) => {
                setPokeData(pokeData);
            });
    },);

    // useEffect(() => {
    //     document.getElementById("searchInput").value = "";
    //     const controller = new AbortController();
    //     fetch(`https://pokeapi.co/api/v2/${"pokemon/?limit=100000&offset=0."}`, { signal: controller.signal })
    //         .then(res => res.json())
    //         .then((res) => {
    //             setsonderData(res.results);
    //             return () => {
    //                 controller.abort();
    //             };
    //         });
    // }, []);

    if (pokeData === undefined) {
        return;
    }
    // let lenght = (pokeData.name).length;
    // let array = [];

    // array.push(sonderData.filter(el => el.name.slice(0, lenght).toLowerCase() === pokeData.name.toLowerCase()));
    console.log(props.language);

    if (pokeData.id <= 905 && props.language === "German") {
        console.log(pokeData.id);
        name = german[pokeData.id - 1].name;
    } else if (pokeData.id <= 905 && props.language === "English") {
        name = pokeData.name;
    }

    return (
        <section>
            <article className='imgArticle'>
                <img alt="PokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`}></img>
                <h1 className='types-idName'>{("000" + (pokeData.id)).slice(-3) + "#"} {name}</h1>
                <p></p>
                <section className='pokeTypes'>{pokeData?.types.map((item) => {
                    return (
                        <div id='Q' className={`${item.type.name}`}> {item.type.name.toUpperCase()}</div>
                    );
                })}</section>
            </article>
            <article>
                <h2 className='types'> ABILITY</h2>
                <section className='ability'>{pokeData?.abilities.map((item) => {
                    return (

                        <div id='Z'>{item.ability.name.toUpperCase()}</div>

                    );
                })}</section>
                {/* MOVE */}
                {/* <section>{pokeData?.moves?.map((item) => {
                    return (
                        <div>
                            <div>{item.move.name}</div>
                        </div>
                    );
                })}</section> */}
            </article>

            <article className='carroussel-article'>
                <h2 className='types'>More Pictures</h2>
                <Carousel data={pokeData} />

            </article>
        </section>
    );
};

export default DetailPage;


