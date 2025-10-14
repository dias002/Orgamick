import icon1 from '../../img/Group 1.svg'
import icon2 from '../../img/Group 2.svg'
import Cards from '../../components/cards';
import React, { Component } from 'react'


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items:[
            {
              id: 1,
                title: "Product 1",
                price: 10.00,
                imageUrl: "/img/Image-1.jpg"
            },
            {
              id: 2,
                title: "Product 2",
                price: 15.00,
                imageUrl: "/img/Image-2.jpg"
            },
            {
              id: 3,
                title: "Product 3",
                price: 20.00,
                imageUrl: "/img/Image-3.jpg"
            }
          ]
        };
      }
  render() {
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
                <Cards items={this.state.items} />

                <div className="btn">
                    <button>Learn more</button>
                </div>
            </div>
      </div>
    )
  }
}


export default Home;    