import React from 'react'
import HeroComponent from "../components/HeroComponent.jsx";
import ProjectsComponent from "../components/ProjectsComponent.jsx";
import AboutComponent from "../components/AboutComponent.jsx";
import ContactComponent from "../components/ContactComponent.jsx";

const HomePage = () => {
    return (
        <div className="mx-5 my-5">
            <HeroComponent/>
            <ProjectsComponent/>
            <AboutComponent/>
            <ContactComponent/>
        </div>
    )
}
export default HomePage
