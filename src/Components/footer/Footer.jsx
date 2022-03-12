import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <h1>E-COMMERCE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae
          maiores vitae id consequuntur debitis cupiditate. Omnis, cum tenetur
          nemo magni incidunt sed, eos assumenda dicta architecto voluptates
          reprehenderit voluptas.
        </p>
        <div className="socialIcon">
          <FacebookIcon />
          <InstagramIcon style={{ paddingLeft: 20 }} />
          <PinterestIcon style={{ paddingLeft: 20 }} />
        </div>
      </div>
      <div className="center">
        <h2 align="center">Useful links</h2>
        <ul className="footerList">
          <li className="footerListItem">Home</li>
          <li className="footerListItem">Cart</li>
          <li className="footerListItem">Man Fashion</li>
          <li className="footerListItem">Woman Fashion</li>
          <li className="footerListItem">Accessories</li>
          <li className="footerListItem">My Account</li>
          <li className="footerListItem">Order Tracking</li>
          <li className="footerListItem">Wishlist</li>
          <li className="footerListItem">Terms</li>
        </ul>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <p><FmdGoodIcon style={{paddingRight:20, verticalAlign: "middle"}} /> Lorem Street, East Town 658 </p>
        <p><PhoneIcon style={{paddingRight:20, verticalAlign: "middle"}} />+2 8422177120</p>
        <p><EmailIcon style={{paddingRight:20, verticalAlign: "middle"}} />lorem@gmail.com</p>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt=""/>
      </div>
    </div>
  );
}
