import React from "react";
import NotF from "../../assets/images/Preloader/bfR2.gif"


class NotFound extends React.Component{
    componentDidMount() {
        document.title = "Not found";
    }

    render() {
        return (
            <div style={{
                backgroundColor: "#fff",
                minHeight: "350px"}}>
            <div style={{textAlign: "center"}}>
            <img src={NotF} alt="Not found"
                 style={{opacity: '.78'}}
                 />
            <h2>404 Not Found</h2>
        </div>
            </div>
                )

    }
}

export default NotFound;