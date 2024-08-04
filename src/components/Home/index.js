import './index.css';
import Sidebar from '../Sidebar';

const Home = () => {
    return (
        <div className='home-bg'>
            <Sidebar />
            <div className='home-cont'>
                <div className='home-cont-top'>
                    <h2 className='top-head'>Dashboard</h2>
                </div>
                <div className='home-cont-bottom'>
                    <div className='home-cont-1'>
                        <h1 className='bottom-head'>Sales vs Orders</h1>
                    </div>
                    <div className='home-cont-2'>
                        <h1 className='bottom-head'>Portion of Sales</h1>
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default Home