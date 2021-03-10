interface IProps {
  Item: string;
  Description: string | undefined;
  Price: number | undefined;
}

const MenuItem: React.FC<IProps> = ({ Item, Description, Price }) => {
  return (
    <li>
      <h4>{Item}</h4>
      {Description ? <p>{Description}</p> : null}
      {Price ? <p>{Price}</p> : null}
    </li>
  );
};

export default MenuItem;
