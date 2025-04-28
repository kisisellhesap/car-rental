import { FC } from "react";
import Hero from "../components/hero";
import Filter from "../components/Filter";
import List from "../components/list";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <Filter />

      <List />
    </div>
  );
};

export default Home;
