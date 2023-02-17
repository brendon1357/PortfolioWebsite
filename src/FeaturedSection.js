import PlanetHopperEmbed from "./PlanetHopperSection";

function FeaturedProjects() {
  return (
    <div className="featuredprojects">
      <div className="anchor" id="jumptofeatured"></div>
      <h1>Featured Projects</h1>
      <div className="container">
        <PlanetHopperEmbed />
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex align-self-stretch mb-4 mt-2">
            <KingdominoCard />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex align-self-stretch mb-4 mt-2">
            <ChatroomCard />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "40px" }}></div>
    </div>
  );
}

function KingdominoCard() {
  return (
    <div className="card">
      <div className="ratio ratio-16x9">
        <iframe
          className="embed-responsive-item"
          title="Kingdomino Video"
          style={{ borderRadius: "6px 6px 0px 0px" }}
          src="https://www.youtube.com/embed/SAC4lelmnvo;&autoplay=1&mute=1"
          allowFullScreen
        ></iframe>
      </div>
      <div className="card-body">
        <h5 className="card-title">Kingdomino Computerized</h5>
        <p className="card-text">
          This is a computerized version of the award winning board game Kingdomino. This project was created in my Software Engineering class by a group of
          four people which included myself and three of my fellow classmates. The game was made using Java and features the ability to play against AIs as well
          as the ability to save a current game state to return to later.
        </p>
      </div>
      <div className="card-footer">
        <a href="./Executables/Kingdomino.jar" target="_blank" rel="no-referrer" className="btn btn-primary">
          Click to Download
        </a>
      </div>
    </div>
  );
}

function ChatroomCard() {
  return (
    <div className="card">
      <div className="ratio ratio-16x9">
        <iframe
          className="embed-responsive-item"
          title="Chatroom Video"
          style={{ borderRadius: "6px 6px 0px 0px" }}
          src="https://www.youtube.com/embed/7kmNrBKYKEc;&autoplay=1&mute=1"
          allowFullScreen
        ></iframe>
      </div>
      <div className="card-body">
        <h5 className="card-title">Online Chatroom</h5>
        <p className="card-text">
          An online chatroom that was made in Java using Swing for the GUI. The server for the chatroom is hosted on an AWS E2 instance and allows connections
          through SSL sockets. This was my first personal project tackling networking. I learned a lot about how sockets work and how to make communcation
          between server and client secure using the SSL protocol.
        </p>
      </div>
      <div className="card-footer">
        <a href="https://github.com/brendon1357/Chatroom" target="_blank" rel="no-referrer" className="btn btn-primary">
          Github Repository
        </a>
      </div>
    </div>
  );
}

export default FeaturedProjects;
