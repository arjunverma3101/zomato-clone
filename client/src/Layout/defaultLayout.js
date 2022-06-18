import React from "react";
import DDNcompo from "../components/DDNcompo/ddnCompo";
import Footer from "../components/Footer/footer";
import NavBar from "../components/NavBar/NavBar";
import NavSecondary from "../components/NavBar/navSecondary";
function DefaultLayout(props) {
    return (
        <>
            <nav className={`${props.isLanding ? "" : "hidden"}`}>
                <NavBar {...props} />
            </nav>
            <nav className={`${props.isLanding ? "hidden" : ""}`}>
                <NavSecondary {...props} />
            </nav>
            <div className={`${props.isDDN ? "" : "hidden"}`}>
                <DDNcompo />
            </div>
            {props.children}
            <Footer />
        </>
    )
}

export default DefaultLayout;