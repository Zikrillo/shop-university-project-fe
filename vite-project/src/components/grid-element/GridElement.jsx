import StarsGroup from "../stars-group/StartsGroup";
import purchase from "../../assets/cart_2.svg";
import like from "../../assets/hearts.svg";

export default function GridElement({params}) {
    const {header, price, image} = params;
    return (
        <>
            <div className="goods-grid__item">
                <div className="goods-grid__item-image">
                    <img src={image} alt="" />
                </div>
                <div className="goods-grid__item-header">
                    {header}
                </div>
                <div className="goods-list__rate">
                    <StarsGroup rate={2}/>
                </div>
                <div className="goods-grid__item-price-row">
                    <div className="goods-grid__item-price">
                       {price}
                    </div>
                    {/* <div className="goods-grid__item-price-old">
                        $534,33
                    </div>
                    <div className="goods-grid__item-price-discount">
                        24% Off
                    </div> */}
                </div>
                <div className="goods-list__item-buy">
                    <button className="goods-list__item-buy-button"><img src={purchase} alt="" /> Add to
                        card</button>
                    <button className="goods-list__item-to-fav-button"><img src={like} alt="" /></button>
                </div>
            </div>
        </>
    );
}
