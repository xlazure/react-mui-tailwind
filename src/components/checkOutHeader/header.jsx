import orangeLogo from "../../assets/Small_Logo_RGB_2.png";
import cart from "../../assets/e-shop.svg";
import data from "../../assets/shape.svg";
import summary from "../../assets/summary.svg";
import deliveryAndPayment from "../../assets/shape2.svg";

export default function CheckOutHeader() {
  return (
    <header className="bg-black w-100 py-2.5 px-4 text-white flex justify-between">
      <img src={orangeLogo} alt="logo" width={28} height={28} />{" "}
      <div className="checkout-steps flex w-3/4 justify-between">
        <div id="cart" className="self-center ">
          <img src={cart} alt="cart" />
        </div>
        <div id="your-data" className="self-center">
          <img src={data} alt="data" />
        </div>
        <div id="delivery-and-payment" className="self-center">
          <img src={deliveryAndPayment} alt="delivery-and-payment" />
        </div>
        <div id="summary" className="self-center">
          <img src={summary} alt="summary" />
        </div>
      </div>
    </header>
  );
}
