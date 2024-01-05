import React from "react";

import bannerImage from "../../assets/images/relax-on-van.jpg"
import Button from "../molecules/home/Button";

export default function About() {

    return (
        <div className="about">
            <img className="about__banner-img" src={bannerImage} />
            <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
            <p>Our mission is to enliven your road trop with the perfect travel van rental. Our vans are recertified before wach trip to ensure yout travel plans can go off whithout a hitch.</p>
            <p className="about__second-p">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            <div>
                <h2>Your destination is waiting. <br/> Your can is ready.</h2>
                <Button 
                    bgColor="#000000"
                    title="Explore our vans"
                    to="/vans"
                />
            </div>
        </div>
    )
}