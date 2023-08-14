import React from "react";

const Button = ({children}) => {

    return(<button className="m-auto my-1 bg-dark text-gray-light py-2 px-3 w-fit rounded-lg hover:bg-dark-light">
        {children}
    </button>)
}

export default Button;