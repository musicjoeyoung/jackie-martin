import "./Services.scss"

const Audio = () => {
    return (
        <div className="audio-container">
            <h3>Audio</h3>
            <p>Here are some of the podcasts I've produced:</p>
            <div className="radio-container">
                <div className="featured">
                    <h4 className="featured__title">Featured: Winner of the <a href="https://allwomeninmedia.org/gracies/" target="_blank">Gracie</a> Award </h4>
                    <iframe frameborder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1135587/&share=1"></iframe>
                </div>
                <iframe frameborder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1012758/&share=1"></iframe>
                <iframe frameborder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1011018/&share=1"></iframe>
                <iframe frameborder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1079718/&share=1"></iframe>
            </div>
        </div>
    )
}

export default Audio