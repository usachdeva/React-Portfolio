import { useState } from "react";

import { validateEmail } from "../../utils/helpers";

export default function ContactMe() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

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
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !name || !message) {
            setErrorMessage("Email, name or message is invalid");
            return;
        }

        alert(`Hello ${name}`);

        setName("");
        setMessage("");
        setEmail("");
    };

    return (
        <div>
            <h1 className="Contact">Contact Me</h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={handleInputChange}
                        id="nameInput"
                        placeholder="Ken Adams"
                    />
                </div>

                <div class="mb-3">
                    <label for="email" class="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        onChange={handleInputChange}
                        id="emailInput"
                        placeholder="kenAdams@email.com"
                    />
                </div>

                <div class="mb-3">
                    <label for="Message" class="form-label">
                        Message
                    </label>
                    <textarea
                        class="form-control"
                        onChange={handleInputChange}
                        id="messageInput"
                        rows="3"
                    ></textarea>
                </div>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}
