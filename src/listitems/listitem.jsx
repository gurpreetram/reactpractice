import React from "react";

const ListItems = () => {

const Electronics = ["tv" , "speaker" , "ac" , "cooler" ,"freez"]

    return(
       <>
        <div className="text-center ">
                <h3>List_Items</h3>
               <div className="d-flex justify-content-center">
               {
                    Electronics.map((item , index) => (
                        <li className="list-group-item m-3 fs-5 text-uppercase" key={index}>{item}</li>
                    ))
                }
               </div>
        </div>
       </>
     )
}

export default ListItems;