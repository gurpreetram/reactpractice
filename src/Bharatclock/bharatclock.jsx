import React from "react";

const BharaClock = () => {

const time = new Date();

     return(
        <div className="bg-primary text-center">
                   <h1>Bharat_clock</h1>
                    <p>This clock show the time of India.. </p>
                    <p>The current time is :{time.toLocaleDateString()} - {time.toLocaleTimeString()} </p>
        </div>
     )
}

export default BharaClock;