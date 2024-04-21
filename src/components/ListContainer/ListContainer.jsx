import "./ListContainer.css";
const linkToPA = "https://maps.app.goo.gl/caxDBY1KC52nDLj97";

const ListContainer = ({ openItem, openModal }) => (
  <div class="list-container">
    <div class="list-item">
      <img
        src="src/assets/imgs/tatsumi1-img1.jpg"
        alt=""
        class="list-img"
        onClick={openItem}
      />
      <div class="list-info">
        <h2 class="list-title" onClick={openItem}>
          Tatsumi 1 PA (IN)
        </h2>
        <div class="list-status-box">
          <p class="list-status">Open</p>
          <div class="list-status-icon open"></div>
        </div>
        <div class="list-controls">
          <p class="list-update" onClick={openModal}>
            Update Status
          </p>
          <a href={linkToPA} target="_blank">
            <div class="list-nav">
              <img
                src="src/assets/icons/directions.jpg"
                alt=""
                class="nav-icon"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="list-item">
      <img src="src/assets/imgs/daikoku-img1.jpg" alt="" class="list-img" />
      <div class="list-info">
        <h2 class="list-title">Daikoku PA</h2>
        <div class="list-status-box">
          <p class="list-status">Open</p>
          <div class="list-status-icon open"></div>
        </div>
        <div class="list-controls">
          <p class="list-update">Update Status</p>
          <div class="list-nav">
            <img
              src="src/assets/icons/directions.jpg"
              alt=""
              class="nav-icon"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="list-item">
      <img src="src/assets/imgs/heiwajima-img1.jpg" alt="" class="list-img" />
      <div class="list-info">
        <h2 class="list-title">Heiwajima PA (OUT)</h2>
        <div class="list-status-box">
          <p class="list-status">Open</p>
          <div class="list-status-icon open"></div>
        </div>
        <div class="list-controls">
          <p class="list-update">Update Status</p>
          <div class="list-nav">
            <img
              src="src/assets/icons/directions.jpg"
              alt=""
              class="nav-icon"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="list-item">
      <img src="src/assets/imgs/shibaura-img1.jpg" alt="" class="list-img" />
      <div class="list-info">
        <h2 class="list-title">Shibaura PA</h2>
        <div class="list-status-box">
          <p class="list-status">Open</p>
          <div class="list-status-icon open"></div>
        </div>
        <div class="list-controls">
          <p class="list-update">Update Status</p>
          <div class="list-nav">
            <img
              src="src/assets/icons/directions.jpg"
              alt=""
              class="nav-icon"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="list-item">
      <img src="src/assets/imgs/hakozaki-img1.jpg" alt="" class="list-img" />
      <div class="list-info">
        <h2 class="list-title">Hakozaki PA</h2>
        <div class="list-status-box">
          <p class="list-status">Open</p>
          <div class="list-status-icon open"></div>
        </div>
        <div class="list-controls">
          <p class="list-update">Update Status</p>
          <div class="list-nav">
            <img
              src="src/assets/icons/directions.jpg"
              alt=""
              class="nav-icon"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="list-item">
      <img src="src/assets/imgs/umihotaru-img1.jpg" alt="" class="list-img" />
      <div class="list-info">
        <h2 class="list-title">Umihotaru PA</h2>
        <div class="list-status-box">
          <p class="list-status">Open</p>
          <div class="list-status-icon open"></div>
        </div>
        <div class="list-controls">
          <p class="list-update">Update Status</p>
          <div class="list-nav">
            <img
              src="src/assets/icons/directions.jpg"
              alt=""
              class="nav-icon"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ListContainer;
