import React from "react";

import Filter from "./Filter";
import CardContainer from "./CardContainer";

function ProfileSection2(props) {
    return (
        <>
            <div className="lg:w-4/5 lg:px-0 px-10 w-full m-auto flex md:flex-row flex-col gap-10">
                <Filter />
                <CardContainer/>
            </div>
        </>
    );
};
export default ProfileSection2;