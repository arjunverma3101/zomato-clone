import React from "react";

import FirstCarousel from "../components/carousel/firstCarousel.js";

import ItemCont from "../components/ItemsContainer/container.js";

function Delivery(props) {
    return (
        <>
            <FirstCarousel/>
            <ItemCont title={"Restaurants"}/>
        </>
    )
}

export default Delivery;