import Reat from 'react';
import '../index.css';

export default function Square(propes){
    return (
        <button className = {"Square " + propes.shade}
        onClick = {propes.onClick}
        style = {propes.style}>
        </button>
    );
}