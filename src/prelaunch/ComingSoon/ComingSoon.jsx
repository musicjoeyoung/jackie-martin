import CountdownTimer from "../CountdownTimer/CountdownTimer"
import "./ComingSoon.scss"
import resume from "../../assets/documents/Jackie-Martin-Resume.pdf"


const ComingSoon = () => {
    return (
        <div className="coming-soon">
            <h1 className="coming-soon__h1">Coming Soon!</h1>
            <p>Jackie's website is under construction. Stay tuned!</p>
            <p>While you're here, why not take a look at her <a href={resume} target="_blank" download>   resume</a>!</p>
            <CountdownTimer />
        </div>
    )
}

export default ComingSoon