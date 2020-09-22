/*import preloader from "../../../assets/images/preloader.svg";*/
import preloader from "../../../assets/images/preloader2.svg";
import React from "react";

const wrapperStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
};

let Preloader = () => {
    return <div style={wrapperStyle}><img src={preloader}/></div>
}

export default Preloader;