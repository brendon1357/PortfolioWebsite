function SkillsDisplay() {
  return (
    <div className="skillsection">
      <div className="anchor" id="jumptoskills"></div>
      <h1>Skills</h1>
      <div className="container" style={{ maxWidth: "800px" }}>
        <div className="row justify-content-center">
          <Skill mWidth="15rem" mHeight="15rem" imgSrc="./Images/IMGC++.png" />
          <Skill mWidth="15rem" mHeight="15rem" imgSrc="./Images/IMGPy.png" />
          <Skill mWidth="15rem" mHeight="15rem" imgSrc="./Images/IMGGIT.png" />
          <Skill mWidth="15rem" mHeight="15rem" imgSrc="./Images/IMGAWS.png" />
          <Skill mWidth="15rem" mHeight="15rem" imgSrc="./Images/sql.png" />
        </div>
        <div className="row justify-content-center">
          <Skill mWidth="15rem" mHeight="15rem" imgSrc="./Images/IMGCSS.png" />
          <Skill mWidth="15rem" mHeight="15rem" imgSrc="./Images/IMGJava.png" />
          <Skill mWidth="15rem" mHeight="15rem" imgSrc="./Images/IMGJs.png" />
          <Skill mWidth="15rem" mHeight="15rem" imgSrc="./Images/IMGHTML.png" />
          <Skill mWidth="15rem" mHeight="15rem" imgSrc="./Images/react.png" />
        </div>
      </div>
      <div style={{ paddingTop: "40px" }}></div>
    </div>
  );
}

function Skill({ mWidth, mHeight, imgSrc }) {
  return (
    <div className="col mb-4 mt-2 d-flex align-self-stretch">
      <div className="card mx-auto" style={{ maxWidth: { mWidth }, maxHeight: { mHeight }, backgroundColor: "#23272C" }}>
        <img className="card-img-top" src={imgSrc} alt="" />
      </div>
    </div>
  );
}

export default SkillsDisplay;
