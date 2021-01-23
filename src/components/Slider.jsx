import React, { useState, useEffect } from 'react';
import InfoBlock from './Content/Populars/InfoBlock/InfoBlock';
import classes from './Content/Populars/Populars.module.css';

const Slider = (props) => {
    let [currentIndex, setCurrentIndex] = useState(0);
    let [activeElement, setActiveElement] = useState(props.items[0]);

    const handleActiveElement = (element, index) => {
        setCurrentIndex(index);
        setActiveElement(element);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            let index = currentIndex + 1;

            if (currentIndex === props.items.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(index);
            }

            if (typeof props.items[currentIndex] !== "undefined") {
                setActiveElement(props.items[currentIndex]);
            }

        }, 5000);
        return () => clearInterval(timer);
    });

    function getPrevious() {
        let index = currentIndex - 1;

        if (index < 0) {
            index = props.items.length - 1;
        }

        setCurrentIndex(index);
        setActiveElement(props.items[index]);
    }

    function getNext() {
        let index = currentIndex + 1;

        if (index > props.items.length - 1) {
            index = 0;
        }

        setCurrentIndex(index);
        setActiveElement(props.items[index]);
    }

    let elements = props.items.map((item, index) => {
        const style = activeElement.id === item.id ? { opacity: 1 } : { opacity: 0.55 };

        return (
            <div key={item.id} className={classes.item} style={style} onClick={() => handleActiveElement(item, index)}>
                <img src={item.image} alt="" />
                <div className={classes.name}>{item.title}</div>
            </div>
        )

    });

    return (<div>
        <div className={classes.trend}>
            <button className={classes.prev} onClick={getPrevious}></button>
            {elements}
            <button className={classes.next} onClick={getNext}></button>
        </div>
        {activeElement && <InfoBlock activeElement={activeElement} />}
    </div>
    );
}

export default Slider;