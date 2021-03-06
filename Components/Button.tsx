import Link from "next/link";

interface IProps {
  Label: string;
  Path: string;
  isPrimary: boolean;
}

const PrimaryCSS = "";
const SecondaryCSS = "";

const Button: React.FC<IProps> = ({ Label, Path, isPrimary }) => (
  <Link href={Path}>
    <a>{Label}</a>
  </Link>
);

export default Button;
