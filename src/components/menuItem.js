import React from "react";
import './menuItemStyle.scss'

const menuItem = ({ title, imageUrl }) => {
    return (

        <div className="menuItem" style={
            { backgroundImage: { imageUrl } }
        } >
            <div className="content" >
                <h1 className="title">{title}</h1>
                <span className="subtitle" >SHOP NOW</span>
            </div>
        </div>
    )

}
export default menuItem

