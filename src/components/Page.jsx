import "./Page.css"
import { useState } from "react";
import Grid from "./Grid";
import MiniGrid from "./MiniGrid";

const colors = [
  "#FF6B6B",
  "#4ECDC4",
  "#556270",
  "#C7F464",
  "#FFA07A",
  "#6A5ACD",
  "#20B2AA",
  "#FFB347",
  "#B19CD9",
  "#77DD77",
  "#AEC6CF",
  "#FFD1DC",
  "#FDFD96",
  "#836953",
  "#2E8B57"
];

let tempGrid = []
for (let i = 0; i < 15; i++) {
    tempGrid.push([])
    for (let j = 0; j < 15; j++) {
        tempGrid[i].push("white")
    }
}

export default function Page() {
    const [color, setColor] = useState(colors[0]);
    const [savedGrids, setSavedGrids] = useState([])
    const [gridArray, setGridArray] = useState(tempGrid)

    function saveGrid () {
        setSavedGrids([...savedGrids, gridArray])
    }

    function deleteGrid (index) {
        setSavedGrids(savedGrids.filter((grid, i) => i !== index))
    }

  return (
    <div className="page-container">
      <div className="colors-container">
        {colors.map((c) => (
          <div
            key={c}
            className="color-box"
            style={{ backgroundColor: c }}
            onClick={() => setColor(c)}
          />
        ))}
        <div>
            <button onClick={() => {saveGrid()}}>Adauga</button>
            <button onClick={() => {setGridArray(tempGrid)}}>Sterge</button>
        </div>
      </div>

      <div>
        <Grid color={color} gridArray={gridArray} setGridArray={setGridArray}/>
      </div>

      <p>Grile salvate: {savedGrids.length}</p>
      <div className="grid-list">
        {savedGrids.map((value, index) => <MiniGrid color={color} gridArray={value} setGridArray={setGridArray} isActive={false} deleteGrid={deleteGrid} index={index}/>)}
      </div>
    </div>
  );
}