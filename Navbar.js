import{Link} from 'react-router-dom'
const Navbar = () => {
    
    return (
        <nav className="navbar">
            <h1>The Gemini Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
               <Link className="create" to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;