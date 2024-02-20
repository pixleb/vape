import React from "react";

function Categories()
{
    const [whichActive, setWhichActive] = React.useState(0);
    
    return (
        <div className="subcategory-catalog">
            <div className="subcategory-catalog__content">
				<a href="#sec1">
				<div className={ !whichActive ? ("subcategory-catalog__item _active") : ("subcategory-catalog__item")}
                    onClick = {() => setWhichActive(0)}>
				    FRUITS & DRINKS</div>
                </a>
				<a href="#sec2">
				<div className={ whichActive===1 ? ("subcategory-catalog__item _active") : ("subcategory-catalog__item")}
                   onClick = {() => setWhichActive(1)}>
                   ICE EDITIONS</div>
                </a>
                <a href="#sec3">
                <div className={ whichActive===2 ? ("subcategory-catalog__item _active") : ("subcategory-catalog__item")}
                    onClick = {() => setWhichActive(2)}>
				    SWEETS & DESSERTS
				</div>
				</a>
            </div>
        </div>
    );
}

export default Categories;
