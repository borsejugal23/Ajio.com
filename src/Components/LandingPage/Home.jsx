import  {  CarouselFadeExample,Img1,Mulitimg } from "./HomeSlider"
// import Header from "./Navbar"
// import Navbar from "./Navbar"
import Midimg from "../Pictures/Screenshot 2023-03-30 193945.png"
import { Footer } from "./Footer"
import Navbar from "./Navbar"

export const Home=()=>{
   const styles={
    overflow_x: "hidden",
    overflow_y: "hidden",
   }
return <div style={{styles}}>
<Navbar/>
<br/>
<CarouselFadeExample/>
<Img1/>
<Mulitimg/>
<img id="outersideimg"src={Midimg} alt="error" />
<Footer/>
</div>
}
