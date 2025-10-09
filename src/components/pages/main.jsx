import icon1 from '../../img/Group 1.svg'
import icon2 from '../../img/Group 2.svg'
import Image from '../../img/Image.jpg'
import Image1 from '../../img/Image-1.jpg'
import Image2 from '../../img/Image-2.jpg'
import Image3 from '../../img/Image-3.jpg'
import Image4 from '../../img/Image-4.jpg'
import Image5 from '../../img/Image-5.jpg'
import Image6 from '../../img/Image-6.jpg'
import Image7 from '../../img/Image-7.jpg'
import Image8 from '../../img/Image-8.jpg'



function Home() {
    return (
        <div>
            <div className="header-banner">
            <div className="bannerTitle">
                <h3>100% Natural Food</h3>
                <h1>Choose the best <br/>
                    healthier way<br/>
                    of life</h1>
                <button>Explore Now</button>
            </div>
            </div>  
            <div className="discounts_block">
                <div className="block1">
                    <p>Natural!!</p>
                    <h2>Get Garden <br /> Fresh Fruits</h2>
                </div>
                <div className="block2">
                    <p>Offer!!</p>
                    <h2>Get 10% off<br/>
                    on Vegetables</h2>
                </div>
            </div>
            <div className="aboutUs_block">
                <div className="title ">
                    <h3>About Us</h3>
                    <h1>We Believe in Working
                    Accredited Farmers</h1>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <div className="title_blocks">
                        <div className="block">
                            <div className="img">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="text">
                                <h2>Organic Foods Only</h2>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>  
                        <div className="block">
                             <div className="img">
                                <img src={icon2} alt="" />
                            </div>
                            <div className="text">
                                <h2>Quality Standards</h2>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>
                    <button>Shop Now</button>
                </div>
            </div>
            <div className="products">
                <h3>Categories </h3>
                <h1>Our Products</h1>
                <div className="cards">
                    <div className="card">
                        <img src={Image} alt="" />
                    </div>
                    <div className="card">
                        <img src={Image2} alt="" />
                    </div>
                    <div className="card">
                        <img src={Image3} alt="" />
                    </div>
                    <div className="card">
                        <img src={Image4} alt="" />
                    </div>
                    <div className="card">
                        <img src={Image5} alt="" />
                    </div>
                    <div className="card">
                        <img src={Image6} alt="" />
                    </div>
                    <div className="card">
                        <img src={Image7} alt="" />
                    </div>
                    <div className="card">
                        <img src={Image8} alt="" />
                    </div>

                </div>
                <div className="btn">
                    <button>Learn more</button>
                </div>
            </div>
        </div>
    );
}
export default Home;    