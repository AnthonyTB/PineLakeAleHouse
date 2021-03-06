import MenuItem from "./MenuItem";

import { IMenuItem } from "./MenuItem";

interface IProps {
  Name: string;
  Description?: string;
  MenuItems: IMenuItem[];
}

const MenuSection: React.FC<IProps> = ({ Name, Description, MenuItems }) => {
  return (
    <div>
      <ul></ul>
    </div>
  );
};

export default MenuSection;
