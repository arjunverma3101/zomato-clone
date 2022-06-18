import React from "react";
import DefaultLayout from "../Layout/defaultLayout";

function DeafultHOC(props) {
    const InnerComponent = props.element;
    return (
        <>
            <DefaultLayout {...props}>
                <InnerComponent isLoggedIn={props.isLoggedIn}/>
            </DefaultLayout>
        </>
    )
}

export default DeafultHOC;