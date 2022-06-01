import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Development Portfolio</strong> - React Portfolio{" "}
          <a href="https://github.com/ArbiNazari" target="_blank" rel="noreferrer">
            Arbi Nazari
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="https://stackoverflow.co" target="_blank" rel="noreferrer">
            StackOverFlow.co
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;