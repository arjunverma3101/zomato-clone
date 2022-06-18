import React from "react";

import Card from "./card";

function CardComponent(props) {
    const data = [
        {
            src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            title: "Order Online",
            subtitle: "Stay home and order to your doorstep",
            url: "/delivery"
        },
        {
            src: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            title: "Dinning Out",
            subtitle: "Visit the city's favourite dining venues",
            url: "/dining-out"

        },
        {
            src: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            title: "Nightlife and Clubs",
            subtitle: "Explore the city's top nightlife outlets",
            url: "/night-life"
        }
    ]
    return (
        <>
            <div className="flex lg:w-4/5 w-full m-auto justify-center items-center my-10 md:flex-row flex-col ">
                {
                    data.map((cd) => (
                        <Card {...cd} />
                    ))
                }
            </div>
        </>
    )
}

export default CardComponent;