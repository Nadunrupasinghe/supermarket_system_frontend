import './LandingPage.css';
import Button from '../../Components/Button/Button';
import Navbar from '../../Components/Navbar/Navbar';
import landimg from '../../Assets/LandingPageIMG.png';

function LandingPage() {
  return (
    <div className='Landing'>
      <div className='TopSection'>
        <Navbar />
      </div>

      <div className='MidSection'>
        <img className='imge' src={landimg} />
        <div className='text-overlay1'>One step closer to your doorstep</div>
        <div className='text-overlay2'>
          Fresh Harvest Grocery Your Food Paradise
        </div>
        <div className='btnLand'>
          <Button buttonName='Buy Now' type='submit' />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
