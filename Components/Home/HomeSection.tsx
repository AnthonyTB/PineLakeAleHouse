import Button from "../Button";

interface IProps {
  Heading: string;
  Image?: string | null;
  Body: string;
  ButtonPath?: string | null;
  ButtonLabel?: string | null;
}

const HomeSection: React.FC<IProps> = ({
  Heading,
  Image,
  Body,
  ButtonPath,
  ButtonLabel,
}) => {
  return (
    <div className="h-screen bg-customBlack text-white">
      <h2>{Heading}</h2>
      <p>{Body}</p>
      {ButtonLabel && ButtonPath ? (
        <Button Label={ButtonLabel} Path={ButtonPath} isPrimary={true} />
      ) : null}
    </div>
  );
};

export default HomeSection;
