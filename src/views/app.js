import React from "react";

import "../index.css";

export default class App extends React.Component {
    render() {
        return (
            <div className={"flex w-full h-screen justify-center items-center bg-gray-900"}>
                <h1 className={"bg-gradient-to-tr from-purple-600 to-rose-600 text-transparent text-8xl bg-clip-text font-extrabold text-center uppercase text-clip"}>
                    React JS<br />
                    Tailwind CSS<br />
                    Webpack<br />
                    <span className={"text-9xl font-bold hover:pointer "}>🤍</span>
                </h1>
            </div>
        );
    }
}