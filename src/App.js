import Header from "./components/Header";
import Main from "./components/Main";
import CharacterList from "./components/CharacterList";
import Search from "./components/Search";
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
