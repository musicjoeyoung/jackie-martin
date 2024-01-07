import CountdownTimer from "../CountdownTimer/CountdownTimer"
import "./ComingSoon.scss"


const ComingSoon = () => {
    return (
        <div className="coming-soon">
            <h1>Coming Soon!</h1>
            <p>Jackie's website is under construction. Stay tuned!</p>
            <CountdownTimer />
        </div>
    )
}

export default ComingSoon