import CustomCard from "./DisplayCard.js";

function ForFunProjects() {
  return (
    <div className="projectsforfun">
      <a className="anchor" id="jumptoforfun"></a>
      <h1>Projects For Fun</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex align-self-stretch mb-5 mt-2">
            <CustomCard
              imageSrc="./Images/Platformer.png"
              title="2D Platformer Game"
              text="A platformer game that was made in Python using Pygame. The player has to jump onto 
                    moving platforms to avoid falling, and the player has to avoid being hit by incoming fireballs. 
                    The player also has the ability to shoot and destroy the incoming fireballs."
              URL="https://github.com/brendon1357/Platformer"
              buttonText="Github Repository"
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex align-self-stretch mb-5 mt-2">
            <CustomCard
              imageSrc="./Images/DecoderPictureUPDATED.png"
              title="Desktop Decoder/Encoder App"
              text="A simple GUI that allows any user to generate a randomized password that can then be encoded and decoded later whenever necessary. 
                    Implements a local database. Built using Python and the CustomTkinter library. CustomTkinter provides a very easy to implement modern 
                    looking UI."
              URL="https://github.com/brendon1357/DecoderApp"
              buttonText="Github Repository"
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex align-self-stretch mb-5">
            <CustomCard
              imageSrc="./Images/Calculator.png"
              title="Basic Calculator"
              text="A simple calculator web application built with the purpose of practicing vanilla JavaScript and HTML. Styled with CSS. 
              Supports multiplication, addition/subtraction, and square root operations. Button does not link to source code, but 
              instead links to the actual calculator to demo."
              URL="./javascriptcalculator.html"
              buttonText="Demo Calculator"
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex align-self-stretch mb-5">
            <CustomCard
              imageSrc="./Images/Space.png"
              title="Space Invaders Inspired Game"
              text="A basic game created with inspiration from the original space invaders game. One of my first projects ever created. 
              Purpose of displaying this project is to emphasize the progress I have made over the years in software development. 
              Built with Python and Pygame."
              URL="https://github.com/brendon1357/SpaceInvadersInspired"
              buttonText="Github Repository"
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex align-self-stretch mb-4">
            <CustomCard
              imageSrc="./Images/Voice.jpeg"
              title="Voice Assistant"
              URL="https://github.com/brendon1357/VoiceAssistant"
              text="Created a program in Python using the Vosk speech recognition API that detects my voice and listens for specific commands. 
                    I programmed the assistant to set reminders for me, open various websites, lock my computer, and do a few other easily 
                    automated tasks."
              buttonText="Github Repository"
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex align-self-stretch mb-4">
            <CustomCard
              imageSrc="./Images/Alarm.png"
              title="Alarm Application"
              URL="https://github.com/brendon1357/ReminderApp"
              text="Created a program where I could set a reminder, add a precedence level, and set an alarm time. 
                    Then, using a text-to-speech assistant, the reminders would be triggered at the desired times, 
                    in order of precedence, and read aloud to me. Reminders were autonomously discarded when no longer applicable."
              buttonText="Github Repository"
            />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "40px" }}></div>
    </div>
  );
}

export default ForFunProjects;
