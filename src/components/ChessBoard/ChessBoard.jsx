import React from 'react';
import ChessTile from '../ChessTile/ChessTile';
import './ChessBoard.scss'
const ChessBoard = () => {
const rows = [1,2,3,4,5,6,7,8]
const col = ["a","b","c","d","e","f","g","h"]
    return (
        <div className='chess-board'>
        {rows.map(()=>{
            return <ChessTile/>
        })}
        {rows.map(()=>{
            return <ChessTile/>
        })}
        {rows.map(()=>{
            return <ChessTile/>
        })}
        {rows.map(()=>{
            return <ChessTile/>
        })}
        {rows.map(()=>{
            return <ChessTile/>
        })}
        {rows.map(()=>{
            return <ChessTile/>
        })}
        {rows.map(()=>{
            return <ChessTile/>
        })}
        
        </div>
    );
};

export default ChessBoard;