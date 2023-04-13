import './Automation.css';
import { Link } from 'react-router-dom';

function Automation() {
    return (
        <div className='info-block'>
            <p className='automation-more'>The company provides services for the selection, supply and integration of industrial robots and robotic cells on a turnkey basis. Our partners are OMRON, KUKA, FANUK, YASKAVA, DJI, SIEMENS.</p>
            <p className='automation-more'>Our company specializes in the development and production of robotic cells, the main task of which is to apply highly viscous liquid materials to the customer's product. These technologies are most widely used in the automotive industry, machine-building production, and instrument making.</p>
            <p className='automation-more'>The robotic cells of our production allow us to dose any materials with high accuracy and apply it to the customer's parts of any configuration.</p>
            <Link className='button' to='/'>Come back</Link>
        </div>

    )
}

export default Automation;