function PlanetHopperEmbed() {
  return (
    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-12 col-lg-8 mb-4 mt-2">
        <div className="card text-start shadow bg-body rounded">
          <div className="ratio ratio-16x9">
            <iframe
              className="embed-responsive-item"
              title="Kingdomino Video"
              style={{ borderRadius: "6px" }}
              src="https://www.youtube.com/embed/ZJjWABGwFYo;&autoplay=1&mute=1"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanetHopperEmbed;
