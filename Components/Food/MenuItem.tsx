export interface IMenuItem {
  Name: string;
  Description?: string;
  Price?: number;
}

const MenuItem: React.FC<IMenuItem> = ({ Name, Description, Price }) => {
  return <li></li>;
};

export default MenuItem;
