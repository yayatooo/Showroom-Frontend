import HomePage from "../home/page";
import { MenuBar } from "../ui/MenuBar";

export default function Home() {
  return (
    <div className="container">
      <MenuBar />
      <HomePage />
    </div>
  );
}
