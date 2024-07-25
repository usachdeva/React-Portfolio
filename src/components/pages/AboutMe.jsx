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
            <p className="text" style={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis minus consequatur non vitae architecto delectus aut,
                ipsam corrupti tenetur natus dolorum adipisci aperiam odio
                molestias officiis nulla ipsum magni veritatis? Modi fugit
                dolorum totam voluptatem suscipit fuga, voluptatum, deserunt
                perspiciatis dicta distinctio consequatur hic facere! Omnis
                cumque voluptates, accusantium blanditiis sequi tempora fuga
                enim optio commodi modi aperiam, minus labore. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Eos dolore perferendis
                aliquid provident hic quos sunt odio tempora rem, architecto
                nisi magni laborum beatae nam ullam incidunt fugiat? Corporis,
                reprehenderit! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Reprehenderit quaerat inventore laboriosam
                quae a harum neque doloremque molestias eaque culpa quo, quam
                repudiandae porro odit cumque qui, ad pariatur quas!
            </p>
        </div>
    );
}
