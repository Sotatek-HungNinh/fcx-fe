import "./Swap.css";
function Swap() {
    return (
        <div className="card">
            <h4 className="card-header">SWAP CRYPTO</h4>
            <div className="card-body">
                <div className="container">
                    <form action="">
                        <div className="form-group">
                            <input type="text" name="eth" id="eth" className="form-control" placeholder="ETH" />
                        </div>
                        <img src="swap.png" alt="This is image" />
                        <div className="form-group">
                            <input type="text" name="usdt" id="usdt" className="form-control" placeholder="USDT" />
                        </div>  
                        <button type="submit" className="btn btn-primary">Submit</button>          
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Swap;