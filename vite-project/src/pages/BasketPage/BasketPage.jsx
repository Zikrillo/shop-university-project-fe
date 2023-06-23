import Header from "../../components/header/Header"
export default function BasketPage(){
    return (<>
    <Header></Header>
    <div className="wraper-basket">
      <nav className="tab-items no-fix">
        <div className="tab-items__tab-item tab-active">Home</div>
        <div className="tab-items__devider">/</div>
        <div className="tab-items__tab-item">Hot Deal</div>
      </nav>
      <div className="basket">
        <div className="basket__container">
          <div className="basket__head">
            <div className="basket__product-text">PRODUCT</div>
            <div className="basket__price">PRICE</div>
            <div className="basket__qty">QTY</div>
            <div className="basket__unit-price">UNIT PRICE</div>
          </div>
          <div className="basket__products">
            <div className="basket__product">
              <div className="basket__product-img">
                <form className="form-x" action="">
                  <button className="btn-x"></button>
                </form>
                <img src="src/assets/comp.png" alt="" />
              </div>
              <div className="basket__product-name">Nike Airmax 270 react</div>
              <div className="basket__product-price">$998</div>
              <form className="basket__product-value" action="">
                <button className="basket__calc-btn"></button>
                <input value="2" className="basket__value-inp" type="text" />
              </form>
              <div className="basket__product-unit-price">$499</div>
            </div>
            <div className="basket__product">
              <div className="basket__product-img">
                <form className="form-x" action="">
                  <button className="btn-x"></button>
                </form>
                <img src="src/assets/comp.png" alt="" />
              </div>
              <div className="basket__product-name">Nike Airmax 270 react</div>
              <div className="basket__product-price">$998</div>
              <form className="basket__product-value" action="">
                <button className="basket__calc-btn"></button>
                <input value="2" className="basket__value-inp" type="text" />
              </form>
              <div className="basket__product-unit-price">$499</div>
            </div>
          </div>
          <div className="basket__bottom">
            <div className="basket__left">
              <form className="basket__form" action="#">
                <input
                  placeholder="Voucher code"
                  className="basket__input"
                  type="text"
                />
                <button className="basket__reddem">Redeem</button>
              </form>
            </div>
            <div className="basket__right">
              <div className="basket__calculation">
                <div className="basket__subtotal">
                  <span className="basket__subtotal-text">Subtotal</span>
                  <span className="basket__subtotal-value">$998</span>
                </div>
                <div className="basket__shipping">
                  <span className="basket__shipping-text">Shipping fee</span>
                  <span className="basket__shipping-value">$20</span>
                </div>
                <div className="basket__coupon">
                  <span className="basket__coupon-text">Coupon</span>
                  <span className="basket__coupon-value">No</span>
                </div>
                <div className="basket__total">
                  <span className="basket__total-text">total</span>
                  <span className="basket__total-value">$118</span>
                </div>
                <form className="form-check" action="#">
                  <button className="basket__total-btn">Check out</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <nav className="footer__footer-row">
          <div className="footer__small-data">
            <div className="footer__small-data-logo">Navigation</div>
            <div className="footer__small-data-description">
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Laptops</a></li>
                <li><a href="">PC</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__small-data">
            <div className="footer__small-data-logo">Modevice</div>
            <div className="footer__small-data-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </div>
          </div>
          <div className="footer__small-data">
            <div className="footer__small-data-logo">Follow Us</div>
            <div className="footer__small-data-description">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </div>
            <div className="footer__small-data-description">
              <img src="src/assets/facebook.svg" alt="" />
              <img src="src/assets/twitter.svg" alt="" />
            </div>
          </div>
          <div className="footer__small-data">
            <div className="footer__small-data-logo">Contact Us</div>
            <div className="footer__small-data-description">
              E-Comm , 4578 Marmora Road, Glasgow D04 89GR
            </div>
          </div>
        </nav>
      </footer>
    </div>
    <script src="src/js/basket.js"></script>
  
    </>)
}