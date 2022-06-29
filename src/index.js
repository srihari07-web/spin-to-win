import React from "react";
import ReactDOM from "react-dom";
import Animation from "./components/animation/Animation";
import Wheel from "./components/wheel";
import "./styles.css";

export class App extends React.Component {
  constructor() {
    super();
    this.places = [
      "50% OFF",
      "20% OFF",
      "Free shipping",
      "50% OFF",
      "20% OFF",
      "FREE SHIPPING",
      "50% OFF",
      "20% OFF",
      "Free shipping",
      "50% OFF",
      "20% OFF",
      "FREE SHIPPING"
    ];
  }

  render() {
    return (
      <div className="App  ">
        <h1>
          <span
            style={{
              color:
                "orange"
            }}
          >
            STARTUP
            TALKY{" "}
          </span>
          <br />
          SPIN TO
          WIN
        </h1>
        <p>
          Spin to
          win a
          Discount!
        </p>
        <br />
        <Animation />
        <Wheel
          items={
            this
              .places
          }
        />
        ;
      </div>
    );
  }
}

const rootElement = document.getElementById(
  "root"
);
ReactDOM.render(
  <App />,
  rootElement
);
