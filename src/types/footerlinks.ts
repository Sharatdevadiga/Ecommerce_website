interface Link {
  id: number;
  name: string;
  url: string;
}

interface FooterLink {
  id: number;
  title: string;
  links: Link[];
}

export default FooterLink;
