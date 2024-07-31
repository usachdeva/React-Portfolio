import { useState } from "react";
import emailjs from "emailjs-com";
import { validateEmail } from "../../utils/helpers";

export default function ContactMe() {
    const style = {
        input: {
            maxWidth: "30%",
            borderColor: "black",
        },
        textArea: { maxWidth: "30%", borderColor: "black" },
    };

    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "name") {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }

        setErrorMessage("");
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log(email);
        if (!validateEmail(email)) {
            setErrorMessage("Email is invalid");
            return;
        } else if (!name) {
            setErrorMessage("name  is invalid");
            return;
        } else if (!message) {
            setErrorMessage("message is invalid");
            return;
        }
        alert(`Hello ${name}`);

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs
            .send(
                "service_o8ylqqo",
                "template_e5jq8a6",
                templateParams,
                "9S7-j-FXY44M0M0vi"
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Email sent successfully!");
                },
                (error) => {
                    console.log("FAILED...", error);
                    setErrorMessage(
                        "Failed to send the email. Please try again later."
                    );
                }
            );

        setName("");
        setMessage("");
        setEmail("");
        setErrorMessage("");
    };

    return (
        <div className="form-container m-5">
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        style={style.input}
                        onChange={handleInputChange}
                        id="nameInput"
                        placeholder="Ken Adams"
                        name="name"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control input"
                        style={style.input}
                        onChange={handleInputChange}
                        id="emailInput"
                        placeholder="kenAdams@email.com"
                        name="email"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        Message
                    </label>
                    <textarea
                        className="form-control"
                        style={style.textArea}
                        onChange={handleInputChange}
                        id="messageInput"
                        rows="5"
                        name="message"
                    ></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}
