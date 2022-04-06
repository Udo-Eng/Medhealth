import './Header.css'

const Header = () => {
    return (
        <header>
            <p className="logo">Med-Health</p>
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="#">Home</a></li>
                    <li className="navbar-item"><a href="#">About</a></li>
                    <li className="navbar-item" ><a href="#">Services</a></li>
                </ul> 
            <button className="cta">Login</button>
        </header>
    )
}

export default  Header;