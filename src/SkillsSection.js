import { useState, useEffect } from "react";

// skill component
function Skill({ imgSrc, label }) {
    return (
        <div className="icon">
            <div className="icon-box">
                <img src={imgSrc} alt="Skill Icon" />
            </div>
            <div className="icon-label">{label}</div>
        </div>
    );
}

// skills display component
function SkillsDisplay() {
    // initially 5 icons per row
    const [iconsPerRow, setIconsPerRow] = useState(5);

    // array to hold the skills, img and label
    const skills = [
        { imgSrc: "./Images/IMGPy.png", label: "Python" },
        { imgSrc: "./Images/IMGGIT.png", label: "Git" },
        { imgSrc: "./Images/IMGAWS.png", label: "AWS" },
        { imgSrc: "./Images/sql.png", label: "MySQL" },
        { imgSrc: "./Images/IMGC++.png", label: "C++" },
        { imgSrc: "./Images/vscode.png", label: "VSCode" },
        { imgSrc: "./Images/mongo.png", label: "MongoDB" },
        { imgSrc: "./Images/IMGCSS.png", label: "CSS" },
        { imgSrc: "./Images/IMGJava.png", label: "Java" },
        { imgSrc: "./Images/IMGJs.png", label: "JavaScript" },
        { imgSrc: "./Images/IMGHTML.png", label: "HTML" },
        { imgSrc: "./Images/react.png", label: "React" },
        { imgSrc: "./Images/nodejs.png", label: "NodeJS" },
        { imgSrc: "./Images/mocha.png", label: "Mocha" },
        { imgSrc: "./Images/SQLite.png", label: "SQLite" },
    ];

    useEffect(() => {
        function handleResize() {
            // less icons per row when screen is small
            if (window.innerWidth <= 700) {
                setIconsPerRow(3);
            } else {
                setIconsPerRow(5);
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const rows = Math.ceil(skills.length / iconsPerRow);
    const skillRows = [];

    // loop through rows and push each skill into a row/column position
    for (let i = 0; i < rows; i++) {
        const start = i * iconsPerRow;
        const end = start + iconsPerRow;
        const row = skills.slice(start, end);

        skillRows.push(
            <div className="icon-row" key={i}>
                {row.map((skill) => (
                    <Skill key={skill.label} imgSrc={skill.imgSrc} label={skill.label} />
                ))}
            </div>
        );
    }

    return (
        <div className="skillsection">
            <div className="anchor" id="jumptoskills"></div>
            <h1>Skills</h1>
            <div className="icons-container">{skillRows}</div>
            <div style={{ marginBottom: "40px" }}></div>
        </div>
    );
}

export default SkillsDisplay;
