import './index.css'

const Footer = () => {
    return (
        <footer className="pageFooter">
            <div className="footerWrapper">
                <div className="PageFooterColLogo">
                    <h3 className="pageFooterLogo">
                        Med Health</h3>
                </div>
                    <div className="PageFooterCol">
                        <p>Home</p>
                        <p>Services</p>
                        <p>About</p>
                    </div>
               
                <div className="PageFooterCol">
                    <p>Appoinments</p>
                     <p>Contact</p>
                    <p>Customer Care</p>

                </div>
            </div>
            <div className="footerCopy">
                <p> &copy; 2022 Med-Health</p>
            </div>
        </footer>
    )
}


export default Footer;