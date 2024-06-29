import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="foot-panel1">
                Back to top
            </div>

            <div className="foot-panel2">
                <ul>
                    <h3>Get to know Us</h3>
                    <li>Careers</li>
                    <li>Blogs</li>
                    <li>About Amazon</li>
                    <li>Investor Relations</li>
                    <li>Amazon Devices</li>
                    <li>Amazon Science</li>
                </ul>

                <ul>
                    <h3>Connect Us</h3>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>

                <ul>
                    <h3>Make Money with Us</h3>
                    <li>Sell on Amazon</li>
                    <li>Sell under Amazon Accelerator</li>
                    <li>Protect and Build Your Brand</li>
                    <li>Amazon Global Selling</li>
                    <li>Become an Affiliate</li>
                    <li>Fulfilment by Amazon</li>
                    <li>Advertise Your Products</li>
                    <li>Amazon Pay on Merchants</li>
                </ul>

                <ul>
                    <h3>Let Us Help You</h3>
                    <li>COVID-19 and Amazon</li>
                    <li>Your Account</li>
                    <li>Returns Centre</li>
                    <li>100% Purchase Protection</li>
                    <li>Amazon App Download</li>
                    <li>Help</li>
                </ul>
            </div>

            <div className="foot-panel3">
                <div className="logof">
                    <img src="https://m.media-amazon.com/images/G/31/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936311_.png" alt="Logo" />
                </div>
                <button className="ibtn"><i className="fas fa-globe"></i>  <b> English</b></button>
            </div>
            {/* <div className="amz-fot">
                <ul>
                    <li>Australia</li>
                    <li>Brazil</li>
                    <li>Canada</li>
                    <li>China</li>
                    <li>France</li>
                    <li>Germany</li>
                    <li>Italy</li>
                    <li>Japan</li>
                    <li>Mexico</li>
                    <li>Netherlands</li>
                    <li>Poland</li>
                    <li>Singapore</li>
                    <li>Spain</li>
                    <li>Turkey</li>
                    <li>United Arab Emirates</li>
                </ul>
                <ul>
                    <li>United Kingdom</li>
                    <li>United States</li>
                </ul>
            </div> */}

            <div className="foot-panel4">
                <ul>
                    <p> AbeBooks</p>
                    <li> Books, art</li>
                    <li> & collectibles</li>
                </ul>
                <ul>
                    <p>Amazon Web Services</p>
                    <li> Scalable Cloud</li>
                    <li> Computing Services</li>
                </ul>
                <ul>
                    <p>Audible</p>
                    <li>Download</li>
                    <li>Audio Books</li>
                </ul>
                <ul>
                    <p> IMDb</p>
                    <li> Movies, TV</li>
                    <li> & Celebrities</li>
                </ul>
                <ul>
                    <p> Shopbop</p>
                    <li>Designer</li>
                    <li> Fashion Brands</li>
                </ul>
                <ul>
                    <p> Amazon Business</p>
                    <li> Everything For</li>
                    <li> Your Business</li>
                </ul>
                <ul>
                    <p>Prime Now</p>
                    <li>2-Hour Delivery</li>
                    <li>on Everyday Items</li>
                </ul>
                <ul>
                    <p> Amazon Prime Music</p>
                    <li> 100 million songs, ad-free</li>
                    <li> Over 15 million podcast episodes</li>
                </ul>
                <div className="copyright">
                    <p>Conditions of Use Privacy Notice Your Ads Privacy Choices</p>
                    <p>@ 1996-2023, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
