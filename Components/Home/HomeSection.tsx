import Button from "../Button";

interface IProps {
  Heading: string;
  Image?: string;
  Body: string;
  ButtonPath?: string;
  ButtonLabel?: string;
}

const HomeSection: React.FC<IProps> = ({
  Heading,
  Image,
  Body,
  ButtonPath,
  ButtonLabel,
}) => {
  return (
    <header>
      <h2>{Heading}</h2>
      <p>{Body}</p>
      {ButtonLabel && ButtonPath ? (
        <Button Label={ButtonLabel} Path={ButtonPath} isPrimary={true} />
      ) : null}
    </header>
  );
};

export default HomeSection;
