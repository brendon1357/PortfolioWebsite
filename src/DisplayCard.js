// Utilitize bootstrap cards to create a custom card with given properties
function CustomCard({ imageSrc, title, text, URL, buttonText }) {
	return (
		<div className="card">
			<img className="card-img-top" src={imageSrc} alt="Project" />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{text}</p>
			</div>
			<div className="card-footer">
				<a href={URL} target="_blank" rel="no-referrer" className="btn btn-primary">
					{buttonText}
				</a>
			</div>
		</div>
	);
}

function CustomVideoCard({ frameTitle, videoSrc, cardTitle, cardText, URL, buttonText, techUsed }) {
	return (
		<div className="card">
			<div className="ratio ratio-16x9">
				<iframe className="embed-responsive-item" title={frameTitle} style={{ borderRadius: "6px 6px 0px 0px" }} src={videoSrc} allowFullScreen></iframe>
			</div>
			<div className="card-body">
				<h5 className="card-title">{cardTitle}</h5>
				<p className="card-text">{cardText}</p>
				<p className="card-text">{techUsed}</p>
			</div>
			<div className="card-footer">
				<a href={URL} target="_blank" rel="no-referrer" className="btn btn-primary">
					{buttonText}
				</a>
			</div>
		</div>
	);
}

export { CustomCard, CustomVideoCard };
