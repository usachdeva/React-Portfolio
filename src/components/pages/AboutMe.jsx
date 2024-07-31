import profile from "../../assets/images/profile-photo.jpeg";

export default function About() {
    const styles = {
        image: {
            width: "200px",
            height: "200px",
            border: "1px solid black",
            borderRadius: "50%",
        },
        text: {
            textAlign: "justify",
            margin: "2% 10%",
        },
    };
    return (
        <div className="m-3">
            <img
                src={profile}
                style={styles.image}
                alt="Profile Picture"
                className="mx-auto d-block"
            />
            <p className="text-break" style={styles.text}>
                Hi, I graduated from UoFT BootCamp for coding. Though I have a
                little bit of experience in working with languages while working
                on projects back in 2018. I joined this course to learn more
                about new technologies, so that I can enter this area
                professionally.
                <br />
                In the experience, you will find the projects I have completed
                during the course. There I have attached to github repos and the
                links for the working of the working of the projects. At the end
                of the portfolio, there is section to contact me where you can
                leave your email and message, I will cotact you later.
            </p>
        </div>
    );
}
