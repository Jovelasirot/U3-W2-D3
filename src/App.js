import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import MyFooter from "./components/MyFooter";
import Search from "./components/Search";
import Setting from "./components/Settings";
import TVShows from "./components/TVShows";
import UserProfileEdit from "./components/UserProfileEdit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-primary ">
        <header>
          <CustomNavbar />
        </header>
        <main className="h-100 ">
          <Routes>
            <Route element={<Search />} path="/Movies"></Route>
            <Route element={<TVShows />} path="/TVShows"></Route>
            <Route
              element={<MovieDetails />}
              path="/MovieDetails/:MovieId"
            ></Route>
            <Route element={<Home />} path="/"></Route>
          </Routes>
        </main>

        {/* <UserProfileEdit />  ---- scommenta per vedere userProfile*/}
        {/* <Setting />  ---- scommenta per vedere settings*/}
        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
