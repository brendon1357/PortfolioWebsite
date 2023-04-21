function StarcraftEmbed() {
	return (
		<div className="col-sm-12 col-md-12 col-lg-6 mb-4 mt-2">
			<div className="card text-start">
				<div className="ratio ratio-16x9">
					<iframe
						className="embed-responsive-item"
						title="Starcraft AI Video"
						style={{ borderRadius: "0px" }}
						src="https://www.youtube.com/embed/E7R422XH-S8;&autoplay=1&mute=1"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default StarcraftEmbed;
