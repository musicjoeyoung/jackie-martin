import "./Services.scss"
import Audio from "../Services/Audio"
import Video from "../Services/Video"
import Script from "../Services/Script"


const Services = () => {
    return (
        <div className="services-container">
            <h2>Services</h2>
            <p>On this page you'll find some of the projects I've worked on!</p>
            <Audio />
            <Video />
            <Script />
        </div>
    )
}

export default Services