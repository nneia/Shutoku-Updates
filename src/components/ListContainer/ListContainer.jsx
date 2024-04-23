import "./ListContainer.css";
import tatsumi from "../../assets/imgs/tatsumi1-img1.jpg";

const linkToPA = "https://maps.app.goo.gl/caxDBY1KC52nDLj97";

const ListContainer = ({ openItem, openModal }) => (
  <div className="list-container">
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
              <img
                src="src/assets/icons/directions.jpg"
                alt=""
                className="nav-icon"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="list-item">
      <img
        src="../../assets/imgs/daikoku1-img1.jpg"
        alt=""
        className="list-img"
      />
      <div className="list-info">
        <h2 className="list-title">Daikoku PA</h2>
        <div className="list-status-box">
          <p className="list-status">Open</p>
          <div className="list-status-icon open"></div>
        </div>
        <div className="list-controls">
          <p className="list-update">Update Status</p>
          <div className="list-nav">
            <img
              src="src/assets/icons/directions.jpg"
              alt=""
              className="nav-icon"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="list-item">
      <img
        src="src/assets/imgs/heiwajima-img1.jpg"
        alt=""
        className="list-img"
      />
      <div className="list-info">
        <h2 className="list-title">Heiwajima PA (OUT)</h2>
        <div className="list-status-box">
          <p className="list-status">Open</p>
          <div className="list-status-icon open"></div>
        </div>
        <div className="list-controls">
          <p className="list-update">Update Status</p>
          <div className="list-nav">
            <img
              src="src/assets/icons/directions.jpg"
              alt=""
              className="nav-icon"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="list-item">
      <img
        src="src/assets/imgs/shibaura-img1.jpg"
        alt=""
        className="list-img"
      />
      <div className="list-info">
        <h2 className="list-title">Shibaura PA</h2>
        <div className="list-status-box">
          <p className="list-status">Open</p>
          <div className="list-status-icon open"></div>
        </div>
        <div className="list-controls">
          <p className="list-update">Update Status</p>
          <div className="list-nav">
            <img
              src="src/assets/icons/directions.jpg"
              alt=""
              className="nav-icon"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="list-item">
      <img
        src="src/assets/imgs/hakozaki-img1.jpg"
        alt=""
        className="list-img"
      />
      <div className="list-info">
        <h2 className="list-title">Hakozaki PA</h2>
        <div className="list-status-box">
          <p className="list-status">Open</p>
          <div className="list-status-icon open"></div>
        </div>
        <div className="list-controls">
          <p className="list-update">Update Status</p>
          <div className="list-nav">
            <img
              src="src/assets/icons/directions.jpg"
              alt=""
              className="nav-icon"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="list-item">
      <img
        src="src/assets/imgs/umihotaru-img1.jpg"
        alt=""
        className="list-img"
      />
      <div className="list-info">
        <h2 className="list-title">Umihotaru PA</h2>
        <div className="list-status-box">
          <p className="list-status">Open</p>
          <div className="list-status-icon open"></div>
        </div>
        <div className="list-controls">
          <p className="list-update">Update Status</p>
          <div className="list-nav">
            <img
              src="src/assets/icons/directions.jpg"
              alt=""
              className="nav-icon"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ListContainer;
