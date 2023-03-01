import { IoIosNotificationsOutline } from 'react-icons/io';
import { BiAddToQueue } from 'react-icons/bi';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='first-container'>
                <h4></h4>
                <div className='first-cnt-right'>
                    <input className='form-input' type="text" placeholder='Type to search...' />
                    <div className="notification">
                        <IoIosNotificationsOutline className='noti-icon' />
                    </div>
                    <img src="https://img.icons8.com/color/48/null/circled-user-female-skin-type-7--v1.png" alt="" />
                </div>
            </div>
            <div className="second-container">
                <div className='btn-container'>
                    <button className='btn active'>Make a payment</button>
                    <button className='btn'>Private transfer</button>
                    <button className='btn'>Exchange</button>
                </div>
                <div className="template">
                    <BiAddToQueue className='template-icon' />
                    <p>Add new template</p>
                </div>
            </div>

        </nav>
    );
};
export default Navbar;
