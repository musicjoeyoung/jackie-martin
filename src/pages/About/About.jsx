import "./About.scss"

const About = () => {
    return (
        <main className="about-container">
            <h2>About</h2>
            <img className="about-container__img" src="../../../src/assets/images/jackie-martin-2.png" alt="Jackie Martin" />
            {/* <p>I’m a mother. Air Force Veteran. Been in production and media for over 12 years. Worked in Radio, television, casting, sports, sports news, entertainment radio/, News, live production, booking. I have a passion for audio, it’s for sure my love. I have a good ear for what should be on air and what is fluff. I can make a show sing. I was the line producer for the Takeaway live producing every morning for 3 years.</p> */}
            <p className="about-container__bio">Jackie Martin is a multifaceted media professional with over 12 years of experience in production and media, alongside being a proud mother and Air Force veteran. Her career has spanned various sectors, including radio, television, casting, sports, and live production, showcasing her diverse skill set and passion for storytelling. </p>
            <p className="about-container__bio"> Jackie's love for audio stands out, as she has a sharp ear for content that resonates with audiences, making her an expert at producing shows that engage and entertain. Her significant role as a line producer for the Takeaway (WNYC) for three years highlights her ability to handle live production with finesse, tackling subjects that matter and make a difference, especially her impactful work on stories about LGBTQ+ veterans. </p>
            <p className="about-container__bio">   Starting her career in radio after her service in the Air Force, Jackie worked with notable names like Howard Stern and contributed to SiriusXM sports channels, further solidifying her expertise and love for audio media. </p >
            <p className="about-container__bio"> Jackie Martin's journey through the media landscape is not just about her professional accomplishments but also her personal dedication as a veteran and a mother, bringing a unique perspective and depth to her work in production and media. </p>



        </main>
    )
}

export default About