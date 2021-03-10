import { IMenuItem } from "../../interfaces";
import MenuItem from "./MenuItem";

interface IProps {
  Name: string;
  Description?: string;
  MenuItems: IMenuItem[];
}

const MenuSection: React.FC<IProps> = ({ Name, Description, MenuItems }) => {
  return (
    <div>
      <h3>{Name}</h3>
      {Description ? <p>{Description}</p> : null}
      <ul>
        {MenuItems.map(
          ({ Item, Description, Price }: IMenuItem, Idx: number) => (
            <MenuItem
              key={`Menu Item Section ${Idx}`}
              Item={Item}
              Description={Description}
              Price={Price}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default MenuSection;
