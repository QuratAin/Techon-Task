import React, { useState } from 'react';
import PaymentOptions from '../components/PaymentOptions';
import RecentPayments from '../components/RecentPayments';
import ServiceProviders from '../components/ServiceProviders';
import data from '../data';

const Payments = () => {
    const [payments, setPayments] = useState(data);
    const [providers, setProviders] = useState(data);

    return (
        <>
            <section className="component-section section">
                <h4 className='component-heading'>Payment</h4>
                <section className='section payment-component'>
                    <div className='payment-options'>
                        <h5>Payment options</h5>
                        <PaymentOptions providers={providers} />
                    </div>
                    <div className="recent-payments">
                        <h5>Recent payments</h5>
                        <RecentPayments payments={payments} />
                    </div>
                </section>
            </section>
        </>
    )
}

export default Payments