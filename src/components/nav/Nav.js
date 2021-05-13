import {Link} from "../../../node_modules/react-router-dom";
import "./Nav.css";
function Nav() {
    return (
        <nav>
            <ul>
                <Link to="/home">
                    <li>Home</li>
                </Link>
                <Link to="/swap">
                    <li>Order</li>
                </Link>
                <Link to="/list-transaction">
                    <li>Transaction</li>
                </Link>
            </ul>
        </nav>
    );
}
export default Nav;