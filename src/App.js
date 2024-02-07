import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import MyFooter from "./components/MyFooter";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import Setting from "./components/Settings";
import TVShows from "./components/TVShows";
import UserProfileEdit from "./components/UserProfileEdit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column vh-100">
        <header>
          <CustomNavbar />
        </header>
        <main className="flex-grow-1 bg-primary ">
          <Routes>
            <Route element={<Search />} path="/Movies"></Route>
            <Route element={<TVShows />} path="/TVShows"></Route>
            <Route
              element={<MovieDetails />}
              path="/MovieDetails/:MovieId"
            ></Route>
            <Route element={<Home />} path="/"></Route>
            <Route element={<UserProfileEdit />} path="/UserProfile"></Route>
            <Route element={<Setting />} path="/Setting"></Route>
            <Route element={<NotFound />} path="*" />
          </Routes>
        </main>
        <footer className="mt-auto">
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
