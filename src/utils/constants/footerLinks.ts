interface FooterLink {
  id: number;
  title: string;
  links: {
    id: number;
    name: string;
    url: string;
  }[];
}

const footerLinks: FooterLink[] = [
  {
    id: 1,
    title: "ONLINE SHOPPING",
    links: [
      { id: 1, name: "Men", url: "/category/men's%20clothing" },
      { id: 2, name: "Women", url: "/category/women's%20clothing" },
      { id: 3, name: "Electronics", url: "/category/electronics" },
      { id: 4, name: "JeWellery", url: "/category/jewelery" },
    ],
  },
  {
    id: 3,
    title: "USEFUL LINKS",
    links: [
      { id: 1, name: "Blog", url: "/blog" },
      { id: 2, name: "Careers", url: "/careers" },
      { id: 3, name: "Site Map", url: "/site-map" },
      { id: 4, name: "Corporate Information", url: "/corporate-information" },
      { id: 5, name: "Whitehat", url: "/whitehat" },
      { id: 6, name: "Cleartrip", url: "/cleartrip" },
    ],
  },
  {
    id: 4,
    title: "CUSTOMER POLICIES",
    links: [
      { id: 1, name: "Contact Us", url: "/contact-us" },
      { id: 2, name: "FAQ", url: "/faq" },
      { id: 3, name: "Terms Of Use", url: "/terms-of-use" },
      { id: 4, name: "Track Orders", url: "/track-orders" },
      { id: 5, name: "Shipping", url: "/shipping" },
      { id: 6, name: "Cancellation & Returns", url: "/returns" },
      { id: 7, name: "Privacy Policy", url: "/privacy-policy" },
      { id: 8, name: "Grievance Officer", url: "/grievance-officer" },
    ],
  },
];

export default footerLinks;
