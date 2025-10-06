
import logo from '../img/Logo.svg';
import search from '../img/search.svg';
import cart from '../img/cart.svg';
import '../App.css';
function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    Organick
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Pages <span></span></li>
                    <li>Shop</li>
                    <li>Projects</li>
                    <li>News</li>
                </ul>
                <div className="buttons">
                    <div className="searchInput">
                        <input type="text"/>
                        <button className='searchBtn'><img src={search} alt="search" /></button>
                    </div>
                    <button className="cart">
                        <div className="cartBtn">
                            <img src={cart} alt="cart" />
                        </div>
                        <p>Cart (0)</p>
                    </button>
                </div>
            </nav>

        </header>
    )
}
export default Header;