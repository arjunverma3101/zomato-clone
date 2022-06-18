import React from "react";
import ResPoster from "../components/RestaurantPoster/ResPoster.js";
import ItemCont from "../components/ItemsContainer/container.js";
import RevContainer from "../components/ReviewSection/revContainer.js";
function Restaurant(props) {
    return (
        <>
            <ResPoster isLoggedIn={props.isLoggedIn} />
            <ItemCont title={"Foods"} isFood={true} isLoggedIn={props.isLoggedIn} />
            <RevContainer />
        </>
    )
}

export default Restaurant;