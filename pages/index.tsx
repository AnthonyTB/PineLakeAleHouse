import Styles from "../styles/Home.module.css";
import { getHeroText, getHomeSections } from "../lib/api";
import Hero from "../Components/Home/Hero";
import HomeSection from "../Components/Home/HomeSection";
import { IHomeSection } from "../interfaces";

interface IProps {
  HeroText: string;
  HomeSections: IHomeSection[];
}

export default function Home({ HeroText, HomeSections }: IProps) {
  return (
    <div className={Styles.container}>
      <Hero Text={HeroText} />
      {HomeSections.map(
        ({ Heading, Body, Image, Button_Path, Button_Label }, Idx: number) => {
          return (
            <HomeSection
              key={`Home Section ${Idx}`}
              Heading={Heading}
              Body={Body}
              Image={Image ? Image.url : null}
              ButtonPath={Button_Path ? Button_Path : null}
              ButtonLabel={Button_Label ? Button_Label : null}
            />
          );
        }
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const HeroText = await getHeroText(process.env.CMS_ENDPOINT);
  const HomeSections = await getHomeSections(process.env.CMS_ENDPOINT);

  return {
    props: {
      HeroText,
      HomeSections,
    },
  };
}
