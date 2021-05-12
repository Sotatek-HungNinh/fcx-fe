import "./ListTransaction.css";
import React, { useState, useEffect } from 'react';
import ReactToolTip from "react-tooltip";
import Popup from "reactjs-popup";

function ListTransaction() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr>
                                <th>{item.id}</th>
                                <th>{item.title}</th>
                                <th>{item.userId}</th>
                                <th className={(item.userId % 2 ===0 ? 'active':'pending')}>{(item.userId % 2 === 0 ? 'active':'pending')}</th>
                                <th style={{width: "10%"}} data-tip="view">
                                    <Popup position="top right" trigger={<img src="eye.png" alt="view" style={{width: "30%", cursor: "pointer"}}/>}>
                                        {close => <div>
                                            <div>id: {item.id}</div>
                                            <div style={{textOverflow:"ellipsis", overflow:"hidden"}}>Name: {item.title}</div>
                                            <div>UserId: {item.userId}</div>
                                            <div>Status: {(item.userId % 2 === 0 ? 'active':'pending')}</div>
                                            <a className="close" onClick={close}>&times;</a>
                                        </div>}
                                    </Popup>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                    <ReactToolTip backgroundColor="green"/>
                </table>
            </div>
        );
    }
}

export default ListTransaction;