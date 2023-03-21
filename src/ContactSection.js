import { useRef } from "react";

function ContactDisplay() {
    const buttonRef = useRef();
    const messageRef = useRef();
    const emailRef = useRef();

    const ValidateInput = () => {
        if (messageRef.current.value === "" || emailRef.current.value === "") {
            buttonRef.current.disabled = true;
        } else {
            buttonRef.current.disabled = false;
        }
    };

    return (
        <div className="contactpage">
            <div className="container" style={{ maxWidth: "550px" }}>
                <form name="contact" method="post">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="anchor" id="jumptocontact"></div>
                    <h1 className="changetextcolour">Contact Me</h1>
                    <p>
                        <input type="text" className="form-control" placeholder="Enter name" name="name" />
                    </p>
                    <p>
                        <input ref={emailRef} onChange={ValidateInput} type="email" className="form-control" placeholder="Enter email*" name="email" />
                    </p>
                    <p>
                        <textarea
                            ref={messageRef}
                            onChange={ValidateInput}
                            className="form-control"
                            name="message"
                            placeholder="Enter your message here*"
                            style={{ height: "250px", resize: "none" }}
                        ></textarea>
                    </p>
                    <p>
                        <button ref={buttonRef} type="submit" id="button1" disabled>
                            Submit
                        </button>
                    </p>
                </form>
            </div>
            <div className="infoforcontact">Note: Message will not send until a valid email address has been inputted along with text in the textbox. </div>
        </div>
    );
}

export default ContactDisplay;
