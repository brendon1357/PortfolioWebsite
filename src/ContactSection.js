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
      <div className="container">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <a className="anchor" id="jumptocontact"></a>
          <h1 className="changetextcolour">Contact Me</h1>
          <p>
            <input
              type="text"
              className="changeWidth"
              placeholder="Enter name"
              name="name"
            />
          </p>
          <p>
            <input
              ref={emailRef}
              type="email"
              className="changeWidth"
              placeholder="Enter email*"
              name="email"
            />
          </p>
          <p>
            <textarea
              ref={messageRef}
              className="changeWidth"
              name="message"
              placeholder="Enter your message here*"
            ></textarea>
          </p>
          <p>
            <button
              type="submit"
              id="button1"
              onClick={ValidateInput}
              ref={buttonRef}
            >
              Submit
            </button>
          </p>
        </form>
      </div>
      <div className="infoforcontact">
        Note: Message will not send until a valid email address has been
        inputted along with text in the textbox.{" "}
      </div>
    </div>
  );
}

export default ContactDisplay;
