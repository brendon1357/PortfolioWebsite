function SkillsDisplay() {
  return (
    <div className="skillsection">
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
        <div style={{ paddingTop: "40px" }}></div>
      </div>
    </div>
  );
}

function Skill({ mWidth, mHeight, imgSrc }) {
  return (
    <div className="col mb-4 mt-2 d-flex align-self-stretch">
      <div className="card mx-auto shadow bg-body rounded" style={{ maxWidth: { mWidth }, maxHeight: { mHeight } }}>
        <img className="card-img-top" src={imgSrc} alt="" />
      </div>
    </div>
  );
}

export default SkillsDisplay;
