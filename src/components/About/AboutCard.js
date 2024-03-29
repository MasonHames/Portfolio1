import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Hi Everyone, I am <span className="purple">Mason Hames </span>
            from <span className="purple"> Atlanta, Georgia.</span>
            <br />I am a certified full stack web developer specializing in REACT.js
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books and Comics
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness and Hiking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Useless is not worthless"{" "}
          </p>
          <footer className="blockquote-footer">@devdevcharlie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
