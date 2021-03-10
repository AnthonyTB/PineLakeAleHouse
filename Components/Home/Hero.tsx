import Image from "next/image";

interface IProps {
  Text: string;
}

const Hero: React.FC<IProps> = ({ Text }) => {
  return (
    <header className="h-screen flex justify-center items-center">
      <Image
        className="z-0"
        src="/images/home-bg.jfif"
        alt="Burger background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <h1 className="text-customRed w-1/2 text-7xl z-10 relative font-black">
        {Text}
      </h1>
    </header>
  );
};

export default Hero;
