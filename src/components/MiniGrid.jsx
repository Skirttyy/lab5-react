import Grid from "./Grid"
import "./MiniGrid.css"

export default function MiniGrid({ color, gridArray, setGridArray, deleteGrid, index }) {
    return (
        <div className="mini-grid-container">
            <Grid color={color} gridArray={gridArray} setGridArray={setGridArray} isActive={false}/>
            <button onClick={() => deleteGrid(index)}>Sterge</button>
            <button onClick={() => setGridArray(gridArray)}>Incarca</button>
        </div>
    )
}