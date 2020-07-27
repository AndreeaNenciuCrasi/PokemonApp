import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? "slategray" : "lightgray",
    height: "200vh",
    width: "100vw",
  };
  return <div style={styles}>{props.children}</div>;
}
