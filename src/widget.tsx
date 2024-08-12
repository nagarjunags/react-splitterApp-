import error from "./assets/error.svg";
import info from "./assets/info.svg";
import warning from "./assets/warning.svg";
import "./widget.css";
import "./App.css";

export const Widget = ({
  type,
  heading,
  children,
}: {
  type: string;
  heading: string;
  children: string;
}) => {
  let svg = "";
  let backgorungColor = "";
  let borderLeft = "";
  if (type === "info") {
    svg = info;
    backgorungColor = "#00bbf0";
  } else if (type === "warning") {
    svg = warning;
    backgorungColor = "#fdb44b";
    borderLeft = "#ff9d00";
  } else if (type === "error") {
    svg = error;
    backgorungColor = "#ef5a5a";
  }
  return (
    <div>
      <div
        className={`widget ${type}`}
        style={{
          backgroundColor: backgorungColor,
          borderLeft: `4px solid ${borderLeft}`,
        }}
      >
        <img src={svg} className="SVG"></img>
        <h2>{heading}</h2>
        <p>{children}</p>
      </div>
      <br></br>
    </div>
  );
};
