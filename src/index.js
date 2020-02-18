import React from "react";
import { render } from "react-dom";
import ReactNesteLoder from "react-nested-loder";
import fakeAPICall from "./fakeAPICall";
import { appStyle, buttonStyle } from "./styles";

// Step1: define your button

let Button = ({
    onClick,
    text,
    loading, // will be injected
    error,  // will be injected
}) => (
    <button onClick={onClick} style={buttonStyle(loading, error)}>  
        {error ? "Error": loading ? "..." : text}
    </button>
);

// Step2: wrap your button that it receive the loading prop

Button = ReactNesteLoder({
    onError: (error, remove) => setTimeout(remove, 1000),
})(Button);

const App = () => (
    <div style={appStyle}>
        <Button text="click me" onClick={() => fakeAPICall()}></Button>
    </div>
);

render(<App />, document.getElementById("root"));