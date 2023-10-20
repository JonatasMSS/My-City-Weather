import { Intro } from "../components/main/Intro";
import { SearchBar } from "../components/main/SearchBar";
import { ListAnim } from "../components/main/anim/ListAnim";

export default function Home() {
  return (
    <ListAnim>
      <Intro />
      <SearchBar />
    </ListAnim>
  );
}
