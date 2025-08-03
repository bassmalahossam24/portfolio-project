import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className=" container mt-5  d-flex flex-column  justify-content-center p-5  ">
      <p className="about-para">About Us</p>
      <h1 className="who-header"> Who I am ?</h1>
      <p className=" mt-3 about-me">
        <strong>Hi Im Jackson Ford</strong> On her way she met a copy. The copy
        warned the Little Blind Text, that where it came from it would have been
        rewritten a thousand times and everything that was left from its origin
        would be the word (and) and the Little Blind Text should turn around and
        return to its own, safe country.
      </p>

      <p className=" mt-3 about-me">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of
        Grammar.
      </p>
     <div className="row">
  <div className="col-md-3">
    <div className="services color-1">
      <span className="icon2">
        <i className="fa-regular fa-lightbulb"></i>
      </span>
      <h3>Graphic Design</h3>
    </div>
  </div>
  <div className="col-md-3">
    <div className="services color-2">
      <span className="icon2">
        <i className="fa-solid fa-earth-africa"></i>
      </span>
      <h3>Web Design</h3>
    </div>
  </div>
  <div className="col-md-3">
    <div className="services color-3">
      <span className="icon2">
        <i className="fa-solid fa-database"></i>
      </span>
      <h3>Software</h3>
    </div>
  </div>
  <div className="col-md-3">
    <div className="services color-4">
      <span className="icon2">
        <i className="fa-solid fa-mobile-screen-button"></i>
      </span>
      <h3>Application</h3>
    </div>
  </div>
</div>

    </div>
  );
}
