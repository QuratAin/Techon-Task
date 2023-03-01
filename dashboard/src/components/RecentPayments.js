import React from 'react'

const RecentPayments = ({ payments }) => {
    return (
        <>
            {payments.map((payment) => {
                const { id, name, age } = payment;
                return (
                    <div className='recent-payment-box' key={id}>
                        <div className="-recent-payment-img">
                            <img src="https://img.icons8.com/color/60/null/circled-user-female-skin-type-7--v1.png" alt='' />
                        </div>
                        <div>
                            <p className='recent-payment-user'>{name}</p>
                            <p>-${age}</p>
                        </div>
                    </div>
                )
            })}
            <button className='all-trans'>...See all transactions</button>
        </>
    )
}

export default RecentPayments