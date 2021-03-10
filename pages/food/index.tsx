import MenuSection from "../../Components/Food/MenuSection";
import { IMenuSection } from "../../interfaces";
import { getFood } from "../../lib/api";

interface IProps {
  Food: IMenuSection[];
}

const Food: React.FC<IProps> = ({ Food }) => {
  return (
    <div>
      <ul>
        {Food.map(
          ({ name, Description, menu_items }: IMenuSection, Idx: number) => (
            <MenuSection
              key={`Menu Section ${Idx}`}
              Name={name}
              Description={Description}
              MenuItems={menu_items}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default Food;

export async function getServerSideProps() {
  const Food = await getFood(process.env.CMS_ENDPOINT);

  return {
    props: {
      Food,
    },
  };
}
