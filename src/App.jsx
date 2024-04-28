import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <Button
            style={{ backgroundColor: "red" }}
            onBtnColorChange={() => setColor("red")}
          >
            Red
          </Button>
          <Button
            style={{ backgroundColor: "green" }}
            onBtnColorChange={() => setColor("green")}
          >
            green
          </Button>
          <Button
            style={{ backgroundColor: "blue" }}
            onBtnColorChange={() => setColor("blue")}
          >
            blue
          </Button>
          <Button
            style={{ backgroundColor: "grey" }}
            onBtnColorChange={() => setColor("grey")}
          >
            Grey
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
