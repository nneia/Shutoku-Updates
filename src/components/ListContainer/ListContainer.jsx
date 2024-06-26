import "./ListContainer.css";
import "../../styles/index.css";
import tatsumi from "../../assets/imgs/tatsumi1-img1.jpg";
import daikoku from "../../assets/imgs/daikoku-img1.jpg";
import heiwajima from "../../assets/imgs/heiwajima-img1.jpg";
import shibaura from "../../assets/imgs/shibaura-img1.jpg";
import hakozaki from "../../assets/imgs/hakozaki-img1.jpg";
import umihotaru from "../../assets/imgs/umihotaru-img1.jpg";
import nav from "../../assets/icons/directions.jpg";

const linkToPA = "https://maps.app.goo.gl/caxDBY1KC52nDLj97";

const ListContainer = ({ openItem, openModal, currentViewMap }) => (
  <div
    className={`list-container ${currentViewMap === "list" ? "display" : ""}`}
  >
    <div className="list-item">
      <img src={tatsumi} alt="" className="list-img" onClick={openItem} />
      <div className="list-info">
        <h2 className="list-title" onClick={openItem}>
          Tatsumi 1 PA (IN)
        </h2>
        <div className="list-status-box">
          <p className="list-status">Open</p>
          <div className="list-status-icon open"></div>
        </div>
        <div className="list-controls">
          <p className="list-update" onClick={openModal}>
            Update Status
          </p>
          <a href={linkToPA} target="_blank" rel="noopener noreferrer">
            <div className="list-nav">
              <img src={nav} alt="" className="nav-icon" />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="list-item">
      <img src={daikoku} alt="" className="list-img" onClick={openItem} />
      <div className="list-info">
        <h2 className="list-title" onClick={openItem}>
          Daikoku PA
        </h2>
        <div className="list-status-box">
          <p className="list-status">Open</p>
          <div className="list-status-icon open"></div>
        </div>
        <div className="list-controls">
          <p className="list-update" onClick={openModal}>
            Update Status
          </p>
          <div className="list-nav">
            <img src={nav} alt="" className="nav-icon" />
          </div>
        </div>
      </div>
    </div>
    <div className="list-item">
      <img src={heiwajima} alt="" className="list-img" onClick={openItem} />
      <div className="list-info">
        <h2 className="list-title" onClick={openItem}>
          Heiwajima PA (OUT)
        </h2>
        <div className="list-status-box">
          <p className="list-status">Open</p>
          <div className="list-status-icon open"></div>
        </div>
        <div className="list-controls">
          <p className="list-update" onClick={openModal}>
            Update Status
          </p>
          <div className="list-nav">
            <img src={nav} alt="" className="nav-icon" />
          </div>
        </div>
      </div>
    </div>
    <div className="list-item">
      <img src={shibaura} alt="" className="list-img" onClick={openItem} />
      <div className="list-info">
        <h2 className="list-title" onClick={openItem}>
          Shibaura PA
        </h2>
        <div className="list-status-box">
          <p className="list-status">Open</p>
          <div className="list-status-icon open"></div>
        </div>
        <div className="list-controls">
          <p className="list-update" onClick={openModal}>
            Update Status
          </p>
          <div className="list-nav">
            <img src={nav} alt="" className="nav-icon" />
          </div>
        </div>
      </div>
    </div>
    <div className="list-item">
      <img src={hakozaki} alt="" className="list-img" onClick={openItem} />
      <div className="list-info">
        <h2 className="list-title" onClick={openItem}>
          Hakozaki PA
        </h2>
        <div className="list-status-box">
          <p className="list-status">Open</p>
          <div className="list-status-icon open"></div>
        </div>
        <div className="list-controls">
          <p className="list-update" onClick={openModal}>
            Update Status
          </p>
          <div className="list-nav">
            <img src={nav} alt="" className="nav-icon" />
          </div>
        </div>
      </div>
    </div>
    <div className="list-item">
      <img src={umihotaru} alt="" className="list-img" onClick={openItem} />
      <div className="list-info">
        <h2 className="list-title" onClick={openItem}>
          Umihotaru PA
        </h2>
        <div className="list-status-box">
          <p className="list-status">Open</p>
          <div className="list-status-icon open"></div>
        </div>
        <div className="list-controls">
          <p className="list-update" onClick={openModal}>
            Update Status
          </p>
          <div className="list-nav">
            <img src={nav} alt="" className="nav-icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ListContainer;
