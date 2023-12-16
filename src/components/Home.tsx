import React from "react";
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

// css 
import '../css/home.css'

// react-icons
import { BiSolidDownArrowCircle } from 'react-icons/bi'
import { EventCard } from "./EventCard";

// assets
import opening  from '../assets/opening.avif'
import programming from '../assets/programming.webp'
import ps from '../assets/ps.jpg'
import pubg from '../assets/pubg.png'
import reading from '../assets/reading.jpeg'
import awards from '../assets/awards.jpg'


const Home: React.FC = () => {

    const [t] = useTranslation("global")

    const eventsMonday = ['Opening Ceremony', 'Music Festival', 'Games']
    const eventsTuesday = ['Assembling Computer', 'Programming Competiton', 'Network Challange']
    const eventsWednesday = ['Brain Ring', 'Play Station', 'Treasure Quest']
    const eventsThursday = ['Chess Competition', 'PUBG Competition', 'Poster Competition']
    const eventsFriday = ['Brain Ring 2.0', 'Logo & UI Design', 'Reading Competition']
    const eventsSaturday = ['Closing Ceremony', 'Karaoke', 'Short Film']

    return (
        <div className="home">

            <div className="about">
                <h1 className="about--title">AI & Cybersecurity Week</h1>
                <p className="about--subtitle">{t("home.description")}</p>
                <div className="arrow-abs">
                    <Link to='skills' smooth={true}><BiSolidDownArrowCircle size={45} color='goldenrod'/></Link>
                </div>
            </div>

            <div className="skills">
                <h1 className="skills--title" id="skills">{t('home.skills')}</h1>
                <p className="agenda-subtitle">(18.12.2023 - 23.12.2023)</p>
                <div className="events-wrapper">
                    <EventCard budge="Monday" title={eventsMonday} date="18.12.2023" url="/monday" image={opening}/>
                    <EventCard budge="Tuesday" title={eventsTuesday} date="19.12.2023" url="/tuesday" image={programming}/>
                    <EventCard budge="Wednesday" title={eventsWednesday} date="20.12.2023" url="/wednesday" image={ps}/>
                    <EventCard budge="Thursday" title={eventsThursday} date="21.12.2023" url="thuesday" image={pubg}/>
                    <EventCard budge="Friday" title={eventsFriday} date="22.12.2023" url="/friday" image={reading}/>
                    <EventCard budge="Saturday" title={eventsSaturday} date="23.12.2023" url="/saturday" image={awards}/> 
                </div>
            </div>

        </div>
    )
}

export default Home