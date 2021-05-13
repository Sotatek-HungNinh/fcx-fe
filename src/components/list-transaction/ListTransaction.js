import "./ListTransaction.css";
import React, { useState, useEffect } from 'react';
import ReactToolTip from "react-tooltip";
import Popup from "reactjs-popup";

function ListTransaction() {
    const [pageSize, setPageSize] = useState(5);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://10.2.14.46:3000/list-order")
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
    }, [items]);

    var firstPages = items.slice(0, pageSize);
    var pageNum = items.length / pageSize;

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
                            <th>Marker Address</th>
                            <th>Taker Address</th>
                            <th>Maker Asset Data</th>
                            <th>Taker Asset Data</th>
                            <th>Maker Asset Amount</th>
                            <th>Taker Asset Amount</th>
                            <th>ExpirationTime</th>
                            <th>Salt</th>
                            <th>Status</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {firstPages.map(item => (
                            <tr>
                                <th>{item.id}</th>
                                <th style={{textOverflow:"ellipsis", overflow:"hidden"}}>{item.makerAddress}</th>
                                <th style={{textOverflow:"ellipsis", overflow:"hidden"}}>{item.takerAddress}</th>
                                <th>{item.makerAssetData}</th>
                                <th>{item.takerAssetData}</th>
                                <th>{item.makerAssetAmount}</th>
                                <th>{item.takerAssetAmount}</th>
                                <th>{item.expirationTimeSeconds}</th>
                                <th>{item.salt}</th>
                                <th className={(item.status ===0 ? 'active':'pending')}>{(item.userId === 0 ? 'active':'pending')}</th>
                                <th style={{width: "10%"}} data-tip="view">
                                    <Popup position="top right" trigger={<img src="eye.png" alt="view" style={{width: "30%", cursor: "pointer"}}/>}>
                                        {close => <div>
                                            <div>id: {item.id}</div>
                                            <div style={{textOverflow:"ellipsis", overflow:"hidden"}}>Marker Address: {item.makerAddress}</div>
                                            <div style={{textOverflow:"ellipsis", overflow:"hidden"}}>Taker Address: {item.takerAddress}</div>
                                            <div style={{textOverflow:"ellipsis", overflow:"hidden"}}>Maker Asset Data: {item.makerAssetData}</div>
                                            <div style={{textOverflow:"ellipsis", overflow:"hidden"}}>Taker Asset Data: {item.takerAssetData}</div>
                                            <div style={{textOverflow:"ellipsis", overflow:"hidden"}}>Maker Asset Amount: {item.makerAssetAmount}</div>
                                            <div style={{textOverflow:"ellipsis", overflow:"hidden"}}>Taker Asset Amount: {item.takerAssetAmount}</div>
                                            <div style={{textOverflow:"ellipsis", overflow:"hidden"}}>ExpirationTime: {item.expirationTimeSeconds}</div>
                                            <div style={{textOverflow:"ellipsis", overflow:"hidden"}}>Salt: {item.salt}</div>
                                            <div>Status: {(item.userId === 0 ? 'active':'pending')}</div>
                                            <a className="close" onClick={close}>&times;</a>
                                        </div>}
                                    </Popup>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                    <ReactToolTip backgroundColor="green"/>
                </table>
                <nav>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default ListTransaction;