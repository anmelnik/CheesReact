import React from 'react'
import { useDrag, DragPreviewImage } from 'react-dnd'

export default function Piece({ piece: { type, color }, position }) {
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: 'piece', id: `${position}_${type}_${color}` },
        collect: (monitor) => {
            return { isDragging: !!monitor.isDragging() }
        },
    })
    const pieceImg = require(`../src/assets/${type}_${color}.png`);
    return (
        <>
            <DragPreviewImage connect={preview} src={pieceImg} />
            <div className="piece-container" style={{ opacity: isDragging ? 0 : 1 }}>
                <img src={pieceImg.default} alt="pic" className="piece" ref={drag}/>
            </div>
        </>
    )
}