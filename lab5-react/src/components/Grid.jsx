import { useEffect, useRef, useState } from "react"
import "./Grid.css"

export default function Grid () {

    const cellSize = 25
    let mouseBool = false
    const canvasRef = useRef(null)
    const [cells, setCells] = useState(0)

    useEffect (() => {
        const canvas = canvasRef.current
        canvas.width = 700
        canvas.height = 800
        const ctx = canvas.getContext("2d")
        const rect = canvas.getBoundingClientRect()

        for (let x = 0; x < rect.right; x++) {
            for (let y = cellSize; y < rect.bottom; y += cellSize) {
                ctx.fillStyle = "gray"
                ctx.fillRect(x, y, 1, 1)
            }
        }

        for (let y = 0; y < rect.bottom; y++) {
            for (let x = cellSize; x < rect.right; x += cellSize) {
                ctx.fillStyle = "gray"
                ctx.fillRect(x, y, 1, 1)
            }
        }
    }, [])

    function handleCellDraw (event) {
        if (mouseBool) {
            const canvas = canvasRef.current
            const ctx = canvas.getContext("2d")
            const rect = canvas.getBoundingClientRect()
            const mouseXPos = Math.floor((event.clientX - rect.left) / cellSize) * cellSize
            const mouseYPos = Math.floor((event.clientY - rect.top) / cellSize) * cellSize
            console.log(event.clientX, event.clientY, mouseXPos, mouseYPos)
            ctx.fillStyle = "red"
            ctx.fillRect(mouseXPos, mouseYPos, cellSize, cellSize)
            setCells(1)
        }
    }

    function enableMouse () {mouseBool = true}
    function disableMouse () {mouseBool = false}

    return (
        <>
            <canvas style={canvasStyle} ref={canvasRef} onClick={() => handleCellDraw()} onMouseDown={() => {enableMouse()}} onMouseMove={(event) => handleCellDraw(event)} onMouseUp={() => disableMouse()}>

            </canvas>
        </>
    )
}

const canvasStyle = {
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "gray",
    height: "800px",
    width: "700px"
}