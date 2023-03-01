import React from 'react'

const ServiceProviders = ({ providers }) => {
    return (
        <>
            <div className="provider-container">
                {providers.map((provider) => {
                    const { id, name } = provider;
                    return (
                        <div className='provider-box' key={id}>
                            <div>
                                <p className='provider-user'>{name}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="provider-img">
                                <img src="https://img.icons8.com/ios-glyphs/26/null/iphone.png" alt='' />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ServiceProviders