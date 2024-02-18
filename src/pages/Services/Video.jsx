import "./Services.scss"

const Video = () => {
    return (

        <div className="video-container" id="video">
            <h3>Video</h3>
            <p>Here are some of the videos I've edited:</p>
            <div className="videos-container">
                <iframe className="videos-container__video" width="560" height="315" src="https://www.youtube.com/embed/bK1RRBpDyhE?si=N-jKGNi4s0YLzGcu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe className="videos-container__video" width="560" height="315" src="https://www.youtube.com/embed/sEsu2BjsNVc?si=OaMniygHmqufMVGX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe className="videos-container__video" width="560" height="315" src="https://www.youtube.com/embed/xBGRzpXDDtg?si=ILDCVKao4SYqmElh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe className="videos-container__video" width="560" height="315" src="https://www.youtube.com/embed/bpz4xgXeycQ?si=J428COzh_aWuC_qw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>

    )
}

export default Video 