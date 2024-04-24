import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import GoogleMap from "./components/Map/Map.jsx";
import ListContainer from "./components/ListContainer/ListContainer.jsx";
import PADetails from "./components/PADetails/PADetails.jsx";
import UpdateStatusModal from "./components/Modals/UpdateStatus.jsx";
import MobileControls from "./components/MobileControls/MobileControls.jsx";

function App() {
  const [currentView, setCurrentView] = useState("list"); // Controls list | details
  const [currentViewMap, setCurrentViewMap] = useState("map"); // Controls map | list
  const [isModalOpen, setModalOpen] = useState(false); // Controls modal visibility

  const toggleView = () => {
    setCurrentView(currentView === "list" ? "details" : "list");
  };

  const changeViewMap = view => {
    setCurrentViewMap(view);
  };

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <>
      <NavBar />
      <div className="content-container">
        {currentViewMap === "map" && (
          <GoogleMap openItem={toggleView} changeViewMap={changeViewMap} />
        )}
        {currentViewMap === "list" &&
          (currentView === "list" ? (
            <ListContainer openItem={toggleView} openModal={toggleModal} />
          ) : (
            <PADetails goBack={toggleView} openModal={toggleModal} />
          ))}
        <UpdateStatusModal Open={isModalOpen} Close={toggleModal} />
      </div>
      <MobileControls changeViewMap={changeViewMap} selected={currentViewMap} />
      {/*Sending the changeViewMap function to MobileControlls component*/}
    </>
  );
}

export default App;
