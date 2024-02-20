import React from "react";

function CatDropdown({ className, id, title, cards, isActive })
{
    const [active, setActive] = React.useState(isActive);
    
    let titleClass = "taste__title "+className+(active ? " _active" : "");
    
    if(title === "&hidden") return (<></>);
    
    return (
        <div>
            <h2 className={titleClass} id={id}
                onClick = {() => setActive(!active)}>
				<span>{title}</span>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5 15L12 8L19 15"
						stroke="#6B7280"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</h2>
       
           { /* active || (!window.screen.orientation.type.includes("portrait")) ? cards : "" */ }
           { active ? cards : "" }
        </div>
    );
}

export default CatDropdown;
