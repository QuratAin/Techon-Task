import React from 'react'
import { Link } from 'react-router-dom';
import { RxPieChart } from 'react-icons/rx';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BsCreditCard } from 'react-icons/bs';
import { GrTransaction } from 'react-icons/gr';
import { BsArrow90DegLeft } from 'react-icons/bs';
import { TbNotes } from 'react-icons/tb';
import { MdAutoGraph } from 'react-icons/md';
import { GoGraph } from 'react-icons/go';
import { GrAddCircle } from 'react-icons/gr';
import { AiOutlineSetting } from 'react-icons/ai';
const Sidebar = () => {
    return (
        <>
            <nav className='sidebar'>
                <img src="" alt="" />
                <div className='navigation'>
                    <p>Navigation</p>
                    <div className='navigator'>
                        <RxPieChart />
                        <Link to='/' className='link'>Dasboard</Link>
                    </div>
                    <div className='navigator'>
                        <MdOutlineAccountCircle />
                        <Link to='/accounts' className='link'>Accounts</Link>
                    </div>
                    <div className='navigator'>
                        <BsCreditCard />
                        <Link to='/card' className='link'>Cards</Link>
                    </div>
                    <div className='navigator'>
                        <GrTransaction />
                        <Link to='/transactions' className='link'>Transactions</Link>
                    </div>
                    <div className='navigator'>
                        <BsArrow90DegLeft />
                        <Link to='/payment' className='link'>Payment</Link>
                    </div>
                    <div className='navigator'>
                        <TbNotes />
                        <Link to='/invoicing' className='link'>Invoicing</Link>
                    </div>
                    <div className='navigator'>
                        <MdAutoGraph />
                        <Link to='/trading' className='link'>Trading</Link>
                    </div>
                    <div className='navigator'>
                        <GoGraph />
                        <Link to='/reports' className='link'>Reports</Link>
                    </div>
                </div>
                <div className="balances">
                    <p>Balances</p>
                    <div>
                        <div className="balance">
                            <img src="https://img.icons8.com/fluency/30/null/angola-circular.png" alt='' />
                            <p>100,00 USD</p>
                        </div>
                        <div className="balance">
                            <img src="https://img.icons8.com/fluency/30/null/angola-circular.png" alt='' />
                            <p>100,00 USD</p>
                        </div>
                        <div className="balance">
                            <img src="https://img.icons8.com/fluency/30/null/angola-circular.png" alt='' />
                            <p>100,00 USD</p>
                        </div>
                        <div className="balance">
                            <GrAddCircle className='open-balance' />
                            <p>Open a balance</p>
                        </div>
                    </div>
                </div>
                <div className='profile-setting'>
                    <AiOutlineSetting />
                    <p>Profile Settings</p>
                </div>
            </nav>
        </>
    )
}

export default Sidebar