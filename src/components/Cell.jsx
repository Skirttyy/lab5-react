import "./Cell.css"

export default function Cell ({color, onClick, onMouseMove, onMouseDown, onMouseUp, size}) {

    return (
        <div className={size === "small" ? "small-cell-container" : "cell-container"}
            onMouseMove={onMouseMove}
            style={{backgroundColor: color}}
            onClick={onClick}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}>
        </div>
    )
}