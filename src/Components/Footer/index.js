import './index.css'

const Footer = () =>{
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                       <p className="brand"> Med Health</p>
                    </div>
                    <div className="col-sm">
                        <p>Home</p>
                        <p>Services</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                    <div className="col-sm">
                        <p>Appoinments</p>
                        <p>Location</p>
                        <p>Customer Care</p>
                        
                        <p> &copy; 2022 Med-Health</p>
                    </div>
                </div>
            </div> 
        </footer>
    )
}


export default Footer;