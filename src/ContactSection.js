function ContactDisplay() {
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
						<input type="email" className="form-control" placeholder="Enter email*" name="email" required />
					</p>
					<p>
						<textarea
							className="form-control"
							name="message"
							placeholder="Enter your message here*"
							style={{ height: "250px", resize: "none" }}
							required
						></textarea>
					</p>
					<p>
						<button type="submit" id="button1">
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
