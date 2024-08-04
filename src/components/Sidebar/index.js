import './index.css';
import { IoIosArrowDown } from "react-icons/io";



const Sidebar = () => {
    return (
        <div className='aside-div'>
            <aside>
                <ul className='dash-list'>
                    <li className='dash-list-item-0'>Dashboard</li>
                    <li className='dash-list-item'>Inventory</li>
                    <li className='dash-list-item'>Order</li>
                    <li className='dash-list-item'>Returns</li>
                    <li className='dash-list-item'>Customers</li>
                    <li className='dash-list-item'>Shipping</li>
                    <li className='dash-list-item'>Integrations</li>
                    <div className='dash-list-div'>
                        <li className='dash-list-item'>Calculators</li>
                        <IoIosArrowDown className='icon' />
                    </div>
                    <div className='dash-list-div'>
                        <li className='dash-list-item'>Reports</li>
                        <IoIosArrowDown className='icon' />
                    </div>
                    <div className='dash-list-div'>
                        <li className='dash-list-item'>Account</li>
                        <IoIosArrowDown className='icon' />
                    </div>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar