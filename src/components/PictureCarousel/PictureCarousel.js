import { useEffect, useState } from 'react';
import './PictureCarousel.css';

const Carousel = (props) => {
    const data = ["a", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.data.id}.png`, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${props.data.id}.png`, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.data.id}.png`, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.data.id}.png`];
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length - 1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll(); }, 3000);
        // clean up function
        return () => clearInterval(interval);
    });


    function checkIfImageExists(url, callback) {
        const img = new Image();
        img.src = url;

        if (img.complete) {
            callback(true);
        } else {
            img.onload = () => {
                callback(true);
            };
            img.onerror = () => {
                callback(false);
            };
        }
    }

    data.forEach((item) => {
        checkIfImageExists(item, (exists) => {
            if (exists) {
            } else {
                let i = data.indexOf(item);
                data.splice(i, 1);
            }
        });
    });



    // console.log(checkImage("abced"));
    return (
        <div className='carousel-container'>
            {data.map((item, index) => {
                return <img src={item} alt="img" className='carousel-item'
                    style={{ transform: `translate(-${currentIndex * 100}%)` }}
                    key={index} onError={(e) => {
                        e.target.onError = null;
                        e.target.style.display = "none";
                        let i = data.indexOf(item);
                        data.splice(i, 1);
                        console.log(data);
                    }}></img>;
            })}
        </div>
    );
};
export default Carousel;