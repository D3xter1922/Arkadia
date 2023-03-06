import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "build/Build.loader.js",
    dataUrl: "build/Build.data",
    frameworkUrl: "build/Build.framework.js",
    codeUrl: "build/Build.wasm",
  });

  return (
    <div className="App">
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={
          ({ visibility: isLoaded ? "visible" : "hidden" },
          { width: "100%", height: "100vh" })
        }
      />
    </div>
  );
}

export default App;
