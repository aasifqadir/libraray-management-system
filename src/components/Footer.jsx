import '../styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top-left">
                <p>TUE, APR 5, 2023{}</p>
                <p>UPDATED 11:45 IST</p>
            </div>
            <div className="top-right">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
            </div>
        </div>
    );
}

export default Footer;