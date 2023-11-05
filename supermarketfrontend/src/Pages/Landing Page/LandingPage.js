<<<<<<< HEAD
import './LandingPage.css';
import Button from '../../Components/Button/Button';
import Navbar from '../../Components/Navbar/Navbar';
import landimg from '../../Assets/LandingPageIMG.png';
=======
import "./LandingPage.css";
import Button from "../../Components/Button/Button";
import Navbar from "../../Components/Navbar/Navbar";
import landimg from "../../Assets/LandingPageIMG.png";
>>>>>>> dev

function LandingPage() {
  return (
    <div className='Landing'>
      <div className='TopSection'>
        <Navbar />
      </div>

<<<<<<< HEAD
      <div className='MidSection'>
        {/* <div className="img"> */}
        <img className='img1' src={landimg} />
        {/* </div> */}
        <div className='text-overlay1'>One step closer to your doorstep</div>
        <div className='text-overlay2'>
          Fresh Harvest Grocery Your Food Paradise
        </div>
        <div className='btnLand'>
          <Button buttonName='Buy Now' type='submit' />
=======
      <div className="MidSection">
        <img className="img1" src={landimg} />
        <div className="text-overlay1">One step closer to your doorstep</div>
        <div className="text-overlay2">
          Fresh Harvest Grocery Your Food Paradise
        </div>
        <div className="btnLand">
          <Button buttonName="Buy Now" type="submit" />
>>>>>>> dev
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
