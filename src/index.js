/* Tutorial at https://youtu.be/MAD2HnUFjgg */

import React from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";

import sideMenu from "./data";

import "./styles.css";

function App() {
  console.log(sideMenu);
  return (
    <div className="App">
      {sideMenu.map((item) => {
        return <Menu title={item.title} content={item.content} />;
      })}
      {/* <Menu
        title="Mechanical"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Menu
        title="How do I track my order?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Menu
        title="Can I purchase items again?"
        content="
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        "
      /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
