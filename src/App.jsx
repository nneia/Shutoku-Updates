import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import GoogleMap from "./components/Map/Map.jsx";
import ListContainer from "./components/ListContainer/ListContainer.jsx";
import PADetails from "./components/PADetails/PADetails.jsx";
import UpdateStatusModal from "./components/Modals/UpdateStatus.jsx";
import MobileControls from "./components/MobileControls/MobileControls.jsx";

function App() {
  const [currentView, setCurrentView] = useState("list"); // 'list' or 'details'
  const toggleView = () => {
    setCurrentView(currentView === "list" ? "details" : "list"); // Change to details view
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <>
      <NavBar />
      <div className="content-container">
        <GoogleMap openItem={toggleView} />
        {currentView === "list" ? (
          <ListContainer openItem={toggleView} openModal={toggleModal} />
        ) : (
          <PADetails goBack={toggleView} openModal={toggleModal} />
        )}
        <UpdateStatusModal Open={isModalOpen} Close={toggleModal} />
      </div>
      <MobileControls />
    </>
  );
}

export default App;
