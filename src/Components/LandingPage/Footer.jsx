import {Link} from "react-router-dom"
import "../styles/Footer 1.css"
export const Footer=()=>{
    return (
    <div className="mc">
    <div id="FooterDiv">
        <div>
            <p>Ajio</p>
            <Link to = "/">Who we Are</Link>
            <Link to = "/">Join Our Team</Link>
            <Link to = "/">Tearms & Condition</Link>
            <Link to = "/">We Respect Your Privacy</Link>
            <Link to = "/">Fees & Payments</Link>
            <Link to = "/">Returns & Refunds Policy</Link>
            <Link to = "/">Promotions Tearms & Condition</Link>
            
        </div>
        <div>
            <p>Help</p>
            <Link to = "/">Track Your Order</Link>
            <Link to = "/"> Frequently Asked Questions </Link>
            <Link to = "/">Returns</Link>
            <Link to = "/">Cancellations</Link>
            <Link to = "/">Payments</Link>
            <Link to = "/">Customer Care</Link>
            <Link to = "/">How Do I Redeem My Coupon</Link>
            
        </div>
        <div>
            <p> Shop by</p>
            <Link to = "/">Men</Link>
            <Link to = "/">Women</Link>
            <Link to = "/">Kids</Link>
            <Link to = "/">Indie</Link>
            <Link to = "/">Stores</Link>
            <Link to = "/">New Arrivals</Link>
            <Link to = "/">Brand Directory</Link>
            
        </div>
        <div>
            <p>Follow us</p>
            <Link to = "/">Facebook</Link>
            <Link to = "/">Instagram-AJIOlife</Link>
            <Link to = "/">Instagram-AJIOLUXE</Link>
            <Link to = "/">Twitter</Link>
            <Link to = "/">Pinterest</Link>
            
            
        </div>
        
    </div>
    <hr  className="bc"/>
    </div>
        )
}