import Styles from "../styles/Home.module.css";
import { getHomeSections } from "../lib/api";

export default function Home() {
  getHomeSections();
  return (
    <div className={Styles.container}>
      <h1>hello</h1>
    </div>
  );
}
