import StarsGroup from "../stars-group/StartsGroup";
import purchase from "../../assets/cart_2.svg";
import like from "../../assets/hearts.svg";
import { Link } from "react-router-dom";
export default function ListElement({ params }) {
    const { header, price, description, image, id, rate } = params;
    return (<>
        <div className="goods-list__item">
            <div className="goods-list__item-description">
                <Link to={`/product/${id}`}>
                    <div className="goods-list__item-header">
                        {header}
                    </div>
                </Link>
                <div className="goods-list__rate">
                    <StarsGroup rate={rate}></StarsGroup>
                    <span className="goods-list__reveiw">0 reveiws</span>
                    <span className="goods-list__reveiw_submit">Submit a review</span>
                </div>
                <div className="devider"></div>
                <div className="goods-list__item-price">
                    {price} USD
                </div>
                <div className="goods-list__item-description-text">
                    {description}
                </div>
                <div className="goods-list__item-buy">
                    <button className="goods-list__item-buy-button"><img src={purchase} alt="" /> Add to
                        card</button>
                    <button className="goods-list__item-to-fav-button"><img src={like} alt="" /></button>
                </div>
            </div>
            <div className="goods-list__item-image">
                <img src={image} width="300" alt="" />
            </div>
        </div>
        <div className="devider"></div>
    </>)
}