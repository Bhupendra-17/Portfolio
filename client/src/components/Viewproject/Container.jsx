import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import Printify from './Printify.png';
import Zomato from './Zomato.png';
import Music from './Music.png';
import ClubVista from './ClubVista.png';
import GreenBreeze from './GreenBreeze.png';

function Container() {
    return (
        <div className="  gap-8 p-6 justify-center items-center">
            {/* GreenBreeze Card */}
            <Link
                to="https://greenbreeze.vercel.app"
                target="_blank"
                className="w-full sm:w-fit lg:w-fit"
            >
                <Card
                    title="GreenBreeze"
                    desc="Calculates the required plantation area to improve air quality in a city. Provides actionable solutions for combating air pollution using data points."
                    img={GreenBreeze}
                />
            </Link>

            {/* ClubVista Card */}
            <Link
                to="https://schedule-3fe75.web.app/"
                target="_blank"
            >
                <Card
                    title="ClubVista"
                    desc="Manages club events efficiently. Creates, schedules, and manages events. Uploads and stores reports for future reference, promoting transparency."
                    img={ClubVista}
                />
            </Link>

            {/* Printify Landing Page */}
            <Link
                to="https://printify-web-three.vercel.app/"
                target="_blank"
                
            >
                <Card
                    title="Printify Landing Page"
                    desc="Recreates the UI of Printify.com. Demonstrates UI design skills and front-end development knowledge while highlighting creative problem-solving."
                    img={Printify}
                />
            </Link>

            {/* Zomato UI Page */}
            <Link to="/zomato" >
                <Card
                    title="Zomato UI Page"
                    desc="Replicates the basic UI of Zomato's landing page. Demonstrates the ability to translate visual elements into code, showcasing foundational web skills."
                    img={Zomato}
                />
            </Link>

            {/* Music Player Website */}
            <Link to="/musicplayer" >
                <Card
                    title="Music Player Website"
                    desc="Builds a simple website for playing songs. Demonstrates the ability to integrate multimedia elements and create interactive web experiences."
                    img={Music}
                />
            </Link>
        </div>
    );
}

export default Container;
