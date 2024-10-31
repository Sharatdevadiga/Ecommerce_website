import { Link } from "react-router-dom";

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

function CustomLink({ to, children }: CustomLinkProps) {
  return (
    <Link
      className="block w-full min-w-[200px] max-w-[350px] rounded-lg px-4 py-2.5 text-center font-bold text-white transition-all duration-300 bg-gradient-pink-RO hover:bg-gradient-orange-RP active:scale-95 lg:min-w-[250px]"
      to={to}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
