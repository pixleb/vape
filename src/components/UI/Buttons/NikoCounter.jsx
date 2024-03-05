import React, { useState } from "react";
import classNames from "classnames";
import ButtonMinus from "./ButtonMinus";
import ButtonPlus from "./ButtonPlus";

function ButtonCounter({
	className = "",
	size = "sm",
	onClickCounter,
	onClickMinusBtn,
	onClickPlusBtn,
	quantity,
    quantityHandler,
    maxlimit,
    minlimit,
    inputBlurHandler,
	...props
}) {
	const classes = classNames("counter counter-" + size, className);
    
    const [stockOverflow, setStockOverflow] = useState(false);

	// Написать потом логику проброса стейта с родительского компонента сюда
    
    const handleInput = e => {
        let currentValue = Number(e.target.value);
        quantityHandler(currentValue);
    }
    
    const handleBlur = e => {
        let currentValue = Number(e.target.value);
        if(currentValue < minlimit || currentValue > maxlimit)
        {
            setStockOverflow(true);
            currentValue = (currentValue > maxlimit ? maxlimit : minlimit);
        }
        currentValue = Math.ceil(currentValue/5)*5;
        e.target.value = currentValue;
        inputBlurHandler(currentValue);
        console.log('set value on blur')
    }
    
    let ctrRef = React.useRef();

	return (
		<div className={classes} onClick={onClickCounter}>
			<div className="counter__content">
				<ButtonMinus
					onClick={onClickMinusBtn}
					className={size === "md" ? "button-minus-md" : "button-minus-sm"}
				/>
				<input ref={ctrRef} 
				    type="number" 
				    className="counter__body" 
				    onChange={handleInput}
				    onBlur={handleBlur}
				    value={quantity} 
				    style={{'width': '4.5rem', 'border': 'none', 'padding': '0', 'margin': 'auto', 'text-align': 'center'}}
				/>
				<ButtonPlus
					onClick={onClickPlusBtn}
					className={size === "md" ? "button-plus-md" : "button-plus-sm"}
				/>
			</div>
			
			{ stockOverflow ? (
                <>
                    <br />
                    * max. {maxlimit}
                </>
                ) : ("")
            }
			
		</div>
        
        
	);
}

export default ButtonCounter;
