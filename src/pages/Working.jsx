import { useState } from "react";

import kirby1 from "../assets/kirby_1.gif"
import kirby2 from "../assets/kirby_2.gif"
import kirby3 from "../assets/kirby_3.gif"
import kirby4 from "../assets/kirby_4.gif"
import "../styles/working.css" 
 function Working() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [kirby1, kirby2, kirby3, kirby4];

    const imageChanger = (index) => {
        const nextIndex = (index + 1) % images.length;
        setCurrentIndex(nextIndex);
    };

    setTimeout(() => {
        imageChanger(currentIndex);
    }, 10000);

    return (
        <div className="working">
            <div>
            <h1>I'M COOKING SOMETHING</h1>
            <img className="Kirby-img" src={images[currentIndex]} alt="Kirby Imagen" onClick={() => imageChanger(currentIndex)}/>
            </div>
            <span>COMING SOON...</span>
        </div>
    );
}

export default Working;