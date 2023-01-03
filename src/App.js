import Route from "./components/Route";
import SideBar from "./components/SideBar";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <div className=" flex">
      <SideBar />

      <div className="flex items-center justify-center w-full">
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
}

export default App;
