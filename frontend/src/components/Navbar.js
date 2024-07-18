import {Link} from 'react-router-dom'
import logo from './p2.jpeg'
const Navbar = () => {
    return (
        <header>
            <div className='container'>
                
                <img src={logo} alt="Logo" className="logo" /> {/* Image element */}
                    <h1 className='heading'>Patient Management App</h1>
                
            </div>
        </header>
      );
}
 
export default Navbar;