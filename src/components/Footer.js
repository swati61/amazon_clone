import React from "react";
import "../css/Footer.css";

function Footer() {
  function onScrollBackToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <div className="footer">
        <a aria-label="Back to top">
          <div>
            <span
              className="navFooterBackToTopText"
              onClick={onScrollBackToTop}
            >
              Back to top
            </span>
          </div>
        </a>
      </div>
      <div className="navLeftFooter">
        <div className="navFooterVerticalColumn navAccessibility">
          <div className="navFooterVerticalRow navAccessibility">
            <div className="navFooterLinkCol navAccessibility">
              <div className="navFooterColHead">Get to Know Us</div>
              <ul>
                <li className="nav_first">
                  <a
                    href="https://www.aboutamazon.in/?utm_source=gateway&amp;utm_medium=footer"
                    className="nav_a"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://amazon.jobs" className="nav_a">
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://press.aboutamazon.in/?utm_source=gateway&amp;utm_medium=footer"
                    className="nav_a"
                  >
                    Press Releases
                  </a>
                </li>
                <li>
                  <a
                    href="/gp/browse.html?node=8872558031&amp;ref_=footer_cares"
                    className="nav_a"
                  >
                    Amazon Cares
                  </a>
                </li>
                <li className="nav_last ">
                  <a
                    href="/gp/browse.html?node=4594605031&amp;ref_=footer_smile"
                    className="nav_a"
                  >
                    Gift a Smile
                  </a>
                </li>
              </ul>
            </div>
            <div className="navFooterLinkCol navAccessibility">
              <div className="navFooterColHead">Connect with Us</div>
              <ul>
                <li className="nav_first">
                  <a
                    href="http://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&amp;token=2075D5EAC7BB214089728E2183FD391706D41E94&amp;6"
                    className="nav_a"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&amp;token=A309DFBFCB1E37A808FF531934855DC817F130B6&amp;6"
                    className="nav_a"
                  >
                    Twitter
                  </a>
                </li>
                <li className="nav_last ">
                  <a
                    href="http://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&amp;token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&amp;source=standards"
                    className="nav_a"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="navFooterLinkCol navAccessibility">
              <div className="navFooterColHead">Make Money with Us</div>
              <ul>
                <li className="nav_first">
                  <a
                    href="/b/?node=2838698031&amp;ld=AZINSOANavDesktopFooter&amp;ref_=nav_footer_sell"
                    className="nav_a"
                  >
                    Sell on Amazon
                  </a>
                </li>
                <li>
                  <a
                    href="https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT"
                    className="nav_a"
                  >
                    Sell under Amazon Accelerator
                  </a>
                </li>
                <li>
                  <a
                    href="https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&amp;ref=AZIN_Footer_V1"
                    className="nav_a"
                  >
                    Amazon Global Selling
                  </a>
                </li>
                <li>
                  <a
                    href="https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&amp;utm_medium=footer&amp;utm_source=GW&amp;ref_=footer_assoc"
                    className="nav_a"
                  >
                    Become an Affiliate
                  </a>
                </li>
                <li>
                  <a
                    href="http://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter"
                    className="nav_a"
                  >
                    Fulfilment by Amazon
                  </a>
                </li>
                <li>
                  <a
                    href="https://advertising.amazon.in/?ref=Amz.in"
                    className="nav_a"
                  >
                    Advertise Your Products
                  </a>
                </li>
                <li className="nav_last ">
                  <a href="https://www.amazonpay.in/merchant" className="nav_a">
                    Amazon Pay on Merchants
                  </a>
                </li>
              </ul>
            </div>
            <div className="navFooterLinkCol navAccessibility">
              <div className="navFooterColHead">Let Us Help You</div>
              <ul>
                <li className="nav_first">
                  <a
                    href="/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&amp;ref_=footer_covid"
                    className="nav_a"
                  >
                    COVID-19 and Amazon
                  </a>
                </li>
                <li>
                  <a
                    href="/gp/css/homepage.html?ref_=footer_ya"
                    className="nav_a"
                  >
                    Your Account
                  </a>
                </li>
                <li>
                  <a
                    href="/gp/css/returns/homepage.html?ref_=footer_hy_f_4"
                    className="nav_a"
                  >
                    Returns Centre
                  </a>
                </li>
                <li>
                  <a
                    href="/gp/help/customer/display.html?nodeId=201083470&amp;ref_=footer_swc"
                    className="nav_a"
                  >
                    100% Purchase Protection
                  </a>
                </li>
                <li>
                  <a
                    href="/gp/browse.html?node=6967393031&amp;ref_=footer_mobapp"
                    className="nav_a"
                  >
                    Amazon App Download
                  </a>
                </li>
                <li>
                  <a
                    href="/gp/BIT/theamazonapp/ref=footer_assistant_download_copy"
                    className="nav_a"
                  >
                    Amazon Assistant Download
                  </a>
                </li>
                <li className="nav_last ">
                  <a
                    href="/gp/help/customer/display.html?nodeId=200507590&amp;ref_=footer_gw_m_b_he"
                    className="nav_a"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
