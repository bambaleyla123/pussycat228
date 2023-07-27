import { useEffect, useRef, useState } from "react";

const InfHSlider = ({ images }) => {
    const [imagesList, setImagesList] = useState(images);
    const elementRef = useRef();

    // -----------------

    // -----------------

    return (
        <ul className="flex overflow-x-auto snap-x">
            {imagesList.map((el, key) => (
                <li
                    key={key}
                    className="snap-start min-w-[80vw] md:min-w-[24rem]"
                >
                    <img
                        src={el}
                        className="w-[80vw] md:w-96"
                    ></img>
                </li>
            ))}
            <span ref={elementRef} className="w-[1px]">
                .
            </span>
        </ul>
    );
};

export default InfHSlider;
