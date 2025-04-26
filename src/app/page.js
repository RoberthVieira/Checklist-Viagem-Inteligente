import SearchBar from "./Components/SearchBar";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main>
      <div className="top">
        <h1>Checklist de Viagem Inteligente</h1>
      </div>
      <SearchBar/>
      <Footer/>
    </main>
  );
}
