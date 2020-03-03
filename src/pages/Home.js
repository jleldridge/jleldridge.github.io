import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid bg-dark">
        <h1 className="display-3 text-info">Hello!</h1>
        <p className="lead">
          I am Jeffrey Eldridge, a software engineer based out of Portland,
          Oregon. I have used several different languages in my career so far,
          including javascript, C#, golang, objective-c, ruby, and others. I
          have worked professionally on web apps and desktop apps for both MacOS
          and Windows. I pride myself on being able to pick up and learn
          whatever tools I need to solve a problem.
        </p>
        <p className="lead mt-4">
          Contact:{" "}
          <a href="mailto:jleldridge27@gmail.com">jleldridge27@gmail.com</a>
        </p>
        <a
          class="btn btn-primary"
          href="https://www.linkedin.com/in/jeffrey-eldridge-547aa3b3/"
          target="_blank"
        >
          LinkedIn Profile
        </a>
      </div>
    );
  }
}

export default Home;
