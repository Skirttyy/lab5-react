import { useState } from "react"
import Cell from "./Cell"
import "./Grid.css"

export default function Grid({ color, gridArray, setGridArray, isActive }) {

    const [mouseDown, setMouseDown] = useState(false)

    if (isActive === false) {
        return (
            <div className="grid-container">
                {gridArray.map((row, indexI) => (
                    <div key={indexI}>
                        {row.map((cell, indexJ) => (
                            <Cell
                                size="small"
                                key={indexI + "-" + indexJ}
                                color={cell}
                            />
                        ))}
                    </div>
                ))}
            </div>
        )
    }

    function onClickHandler(indexI, indexJ) {
        setGridArray(gridArray.map((row, i) =>
            row.map((cell, j) => {
                if (i === indexI && j === indexJ) {
                    return color
                }
                return cell
            })
        ))
    }

    function mouseDownHandler() {
        setMouseDown(true)
    }

    function mouseUpHandler() {
        setMouseDown(false)
    }

    return (
        <div className="grid-container">
            {gridArray.map((row, indexI) => (
                <div key={indexI}>
                    {row.map((cell, indexJ) => (
                        <Cell
                            key={indexI + "-" + indexJ}
                            color={cell}
                            onClick={() => onClickHandler(indexI, indexJ)}
                            onMouseMove={mouseDown === true ? () => onClickHandler(indexI, indexJ) : null}
                            onMouseDown={() => mouseDownHandler()}
                            onMouseUp={() => mouseUpHandler()}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}