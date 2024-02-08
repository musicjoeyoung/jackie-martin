import "./Home.scss"
import TextTransition, { presets } from "react-text-transition"
import { useState, useEffect } from "react"

const TEXTS = ['Editor', 'Sound Designer', 'Writer']


const Home = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000,
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <main className="main-container">
            <h1>Jackie Martin</h1>
            <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </main>
    )
}

export default Home