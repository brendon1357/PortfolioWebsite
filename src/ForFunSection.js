import CustomCard from "./DisplayCard.js";

function ForFunProjects() {
  return (
    <div className="projectsforfun">
      <div className="anchor" id="jumptoforfun"></div>
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
              imageSrc="./Images/PWManager.png"
              title="Password Management App"
              text="A desktop application that allows a user to sign up with an account and use the application to generate 
              secure passwords that don't need to be memorized. The true password can be encrypted, so that the encrypted password can be 
              stored somewhere safely, and used to get the true password back."
              URL="https://github.com/brendon1357/EncoderApp"
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
