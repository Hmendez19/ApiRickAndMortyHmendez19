import Header from "./components/Header";
import Search from "./components/Search";
import Main from "./components/Main";
import CharacterList from "./components/CharacterList";
function App() {
  return (
    <>
      <Header />
      <Main className="bg-dark">
         <Search />
         <CharacterList />
      </Main>
    </>
  );
}

export default App;
