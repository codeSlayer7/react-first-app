import React from "react";


const AppHeader = ({likedItem, all})=>{
    
    return (
        <div className="app-header">
            <h1>Bakyt Abykanov </h1>
            <h2> {all} note, liked {likedItem} </h2>
        </div>
    )
}

export default AppHeader;