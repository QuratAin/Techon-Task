import React from 'react'
import ServiceProviders from './ServiceProviders'
const PaymentOptions = ({ providers }) => {
    const handleClick = () => {
        console.log('hello');
    }
    return (
        <>
            <div className='payment-boxes'>
                <div className="box">
                    <div className='payment-img'>
                        <img src="https://img.icons8.com/metro/26/null/data-in-both-directions.png" alt='' />
                    </div>
                    <div>
                        <h5>Transfer to someone</h5>
                        <p>156 contacts</p>
                    </div>
                </div>
                <div className="box active">
                    <div className='payment-img active'>
                        <img src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/26/null/external-qr-code-protection-and-security-kmg-design-detailed-outline-kmg-design.png" alt='' />
                    </div>
                    <div>
                        <h5>Pay for utilities</h5>
                        <p>98 service providers</p>
                    </div>
                </div>
            </div>
            <h5 className='service-prv'>Service Providers</h5>
            <div className="payment-boxes">
                <div className="box">
                    <div>
                        <p className='provider-user'>Mobile Networks</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="provider-img">
                        <img src="https://img.icons8.com/ios-glyphs/26/null/iphone.png" alt='' />
                    </div>
                </div>
                <div className="box">
                    <div>
                        <p className='provider-user'>Mobile Networks</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="provider-img">
                        <img src="https://img.icons8.com/ios-glyphs/26/null/iphone.png" alt='' />
                    </div>
                </div>
                <div className="box">
                    <div>
                        <p className='provider-user'>Mobile Networks</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="provider-img">
                        <img src="https://img.icons8.com/ios-glyphs/26/null/iphone.png" alt='' />
                    </div>
                </div>
                <div className="box">
                    <div>
                        <p className='provider-user'>Mobile Networks</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="provider-img">
                        <img src="https://img.icons8.com/ios-glyphs/26/null/iphone.png" alt='' />
                    </div>
                </div>
                <div className="box">
                    <div>
                        <p className='provider-user'>Mobile Networks</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="provider-img">
                        <img src="https://img.icons8.com/ios-glyphs/26/null/iphone.png" alt='' />
                    </div>
                </div>
                <div className="box">
                    <div>
                        <p className='provider-user'>Mobile Networks</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="provider-img">
                        <img src="https://img.icons8.com/ios-glyphs/26/null/iphone.png" alt='' />
                    </div>
                </div>
                <div className="box">
                    <div>
                        <p className='provider-user'>Mobile Networks</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="provider-img">
                        <img src="https://img.icons8.com/ios-glyphs/26/null/iphone.png" alt='' />
                    </div>
                </div>
                <div className="box">
                    <div>
                        <p className='provider-user'>Mobile Networks</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="provider-img">
                        <img src="https://img.icons8.com/ios-glyphs/26/null/iphone.png" alt='' />
                    </div>
                </div>
            </div>
            <button className='all-providers' onClick={handleClick}>...See all providers</button>
        </>
    )
}

export default PaymentOptions