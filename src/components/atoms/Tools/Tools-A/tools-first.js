import React from "react";
import styles from "./tools-first.module.css";
import { RiArrowGoBackFill, RiArrowGoForwardLine } from "react-icons/ri";

import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";

import ImagesearchRollerOutlinedIcon from "@mui/icons-material/ImagesearchRollerOutlined";
const ToolsA = () => {
  const ar_screen = ["50%", "75%", "90%", "100%", "125%", "150%", "200%"];
  function handleAddEvent(command) {
    document.execCommand(command);
  }

  function handlePrintScreen(myDiv) {
    let mywindow = window.open(
      "",
      "PRINT",
      "height=650,width=900,top=100,left=100"
    );
    mywindow.print();
  }

  function handleFitScreen(myDiv, size) {
    if (size === "100%") {
      document.getElementById(myDiv).style.transform = "scale(1,1)";
    } else if (size === "50%") {
      document.getElementById(myDiv).style.transform = "scale(0.5,1)";
    } else if (size === "75%") {
      document.getElementById(myDiv).style.transform = "scale(0.75,1)";
    } else if (size === "90%") {
      document.getElementById(myDiv).style.transform = "scale(0.9,1)";
    } else if (size === "125%") {
      document.getElementById(myDiv).style.transform = "scale(1.25,1)";
    } else if (size === "150%") {
      document.getElementById(myDiv).style.transform = "scale(1.5,1)";
    } else if (size === "200%") {
      document.getElementById(myDiv).style.transform = "scale(2,1)";
    }
  }
  return (
    <div className={styles.first_container}>
      <RiArrowGoBackFill style={{fontSize: "0.8rem"}} onClick={() => handleAddEvent("undo")} />
      <RiArrowGoForwardLine style={{fontSize: "0.8rem"}} onClick={() => handleAddEvent("redo")} />
      <LocalPrintshopOutlinedIcon style={{fontSize: "1rem"}} onClick={() => handlePrintScreen("myDiv")} />
      <SpellcheckIcon style={{fontSize: "1rem"}} />
      <ImagesearchRollerOutlinedIcon style={{fontSize: "1rem"}} />
      <div >
        <select  className={styles.zoom_container}
          defaultValue={"100%"}
          onChange={(e) => handleFitScreen("myDiv", e.target.value)}
        >
          <option value="100%">100% </option>
          {ar_screen.map((ele) => (
            <option value={ele}>{ele}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ToolsA;
