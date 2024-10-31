import { Link } from "react-router-dom";
import socialLinks from "../../utils/constants/socialLinks";
import footerLinks from "../../utils/constants/footerLinks";

// bg-gradient-to-r from-pink-500 via-red-500 to-orange-600 p-8 text-white
function Footer() {
  return (
    <footer className="flex flex-col items-center gap-12 bg-gray-100 px-4 py-12 opacity-60">
      <div className="flex flex-wrap justify-center gap-16">
        <FooterLinks />
        <ExternalLinks />
        <Assurences />
      </div>
      <p className="text-center text-sm">
        © 2024 www.myntra.com. All rights reserved.© 2024 www.myntra.com. All
        rights reserved.
      </p>
    </footer>
  );
}

function ExternalLinks() {
  return (
    <div className="flex flex-col gap-3">
      {/* APP LINKS */}
      <p className="font-bold">EXPERIENCE THE APP ON MOBILE</p>
      <div className="flex gap-2">
        <Link to="/">
          <img className="h-10 w-32" src="./googlePlay.png" alt="google play" />
        </Link>
        <Link to="/">
          <img className="h-10 w-32" src="./playStore.png" alt="playstore" />
        </Link>
      </div>
      {/* SOCIAL LINKS */}
      <div className="space-y-2 font-bold">
        <p>KEEP IN TOUCH</p>
        <div className="flex gap-2 text-4xl">
          {socialLinks.map((link) => (
            <Link to={link.path} key={link.id}>
              {<link.icon />}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Assurences() {
  return (
    <div className="space-y-4">
      <div className="flex w-72 gap-2">
        <img src="./original.png" className="h-12 w-12" alt="original" />
        <p>
          <span className="font-bold">100% ORIGINAL</span> guarantee for all
          products at myntra.com
        </p>
      </div>
      <div className="flex w-72 gap-2">
        <img src="./return.png" className="h-12 w-12" alt="original" />
        <p>
          <span className="font-bold">Return within 14days</span> of receiving
          your order
        </p>
      </div>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {footerLinks.map((linkGroup) => (
          <div key={linkGroup.id}>
            <p className="font-bold">{linkGroup.title}</p>
            <ul className="list-none">
              {linkGroup.links.map((link) => (
                <li key={link.id}>
                  <a href={link.url} className="">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
