import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";



function App() {
  const [theme, setTheme] = useState(true)
  const [themeName, setThemeName] = useState("dark")

  const Toggle = ()=>{
    setTheme(theme?false:true);
  }

  function backGroundColors(color){

    document.body.style.backgroundColor = color? "#C2B540":"black";
    return{
      backgroundColor : color? "#C2B540":"black",
    }
  }

  

  useEffect(()=>{
    setThemeName(themeName==="Light"?"Dark":"Light")
  },[theme])

  return (
    <div className="body">

      <h1 className="main"style={backGroundColors(theme)}>QUIZZARD</h1>
      <div className="mode" onClick={Toggle}>{themeName}</div>
      
      
    </div>
  );
}

export default App;