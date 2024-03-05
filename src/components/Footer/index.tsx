import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./footer.css"
const Footer = () => {
    return (
        <div id="footer">

        <div className='container'>
            <div className="footer">
                <h1>BOOKShop</h1>
                <div className="footer-nav">
                    <a href="">Способ оплаты</a>
                    <a href="">Условия доставки</a>
                    <a href="">Правила покупки</a>
                    </div>

<div className="footer-fan">
    <a href="">FAQ</a>
    <a href="">О нас</a>
    </div>

<div className="footer-sab">
    <h1 style={{
        fontSize: "18px"
    }}>Связаться с нами:</h1>
    <a href="">+996 222 533 735</a>
    <a href="">+996 222 533 735</a>
    <a href="">+996 222 533 735</a>

<div className="icons-footer">
<InstagramIcon/>
<InstagramIcon/>
<InstagramIcon/>
<InstagramIcon/>
</div>
</div>

<div className="footer-ban">
    <h1 style={{
        fontSize: "18px"
    }}>Адрес</h1>
    <p style={{
        letterSpacing: "1px"
    }}>Lorem ipsum dolor sit amet, consectetur <br />
     adipiscing elit. Varius in dolor viverra feugiat <br />
      neque, sed in. Mattis volutpat malesuada <br />
       velit parturient aliquam, est. Mauris vitae velit <br />
        laoreet faucibus nec amet velit.</p>
</div>

</div>
</div>

</div>

    );
};

export default Footer;