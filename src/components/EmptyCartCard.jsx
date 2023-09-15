import { Link } from "react-router-dom";

function EmptyProductCard () {

    return (
        <div className="emptyCartCard">
            <p>Your cart is empty</p>
            <Link to='/store'><button>Shop Now</button></Link>
        </div>
    );
}

export default EmptyProductCard;