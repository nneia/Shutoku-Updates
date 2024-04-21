import "./PADetails.css";

const PADetails = ({ goBack, openModal }) => {
  const linkToPA = "https://maps.app.goo.gl/caxDBY1KC52nDLj97";

  return (
    <div class="pa-container">
      <div class="back-btn" onClick={goBack}>
        <svg
          class="arrow-back"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
        >
          <path
            fill="none"
            stroke="#2e2e2e"
            stroke-width="17"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="M89.9 9.6L36.5 62.9 91 117.4"
          ></path>
        </svg>
        <p>Back</p>
      </div>
      <div class="pa-banner">
        <img src="src/assets/imgs/tatsumi1-img1.jpg" alt="" class="pa-img" />
        <img src="src/assets/imgs/tatsumi1-img2.jpg" alt="" class="pa-img" />
      </div>
      <div class="pa-info-box">
        <h1 class="pa-title">Tatsumi PA (IN)</h1>
        <div class="pa-status-box">
          <p class="pa-status">Open</p>
          <div class="pa-status-icon open"></div>
        </div>
        <div class="pa-controlls-container">
          <p class="pa-update-btn" onClick={openModal}>
            Update Status
          </p>
          <a href={linkToPA} target="_blank">
            <img class="pa-directions" src="src/assets/icons/directions.jpg" />
          </a>
        </div>
        <div class="votes-box">
          <p class="votes-header">
            Recent votes (<span class="votes-counter">12</span>)
          </p>
          <div class="votes-container">
            <img
              src="src/assets/imgs/heiwajima-img1.jpg"
              alt=""
              class="votes-img"
            />
          </div>
        </div>
        <div class="notes-box">
          <p class="notes-header">Notes</p>
          <p class="notes-placeholder">There is nothing here yet...</p>
          <div class="notes-user">
            <img
              src="src/assets/imgs/daikoku-img1.jpg"
              alt=""
              class="notes-img"
            />
            <div class="notes-comment-wrap">
              <p class="notes-comment">Police made an announcement</p>
              <p class="notes-time">21:39</p>
            </div>
          </div>
        </div>
        <div class="tweets-box">
          <p class="tweets-header">Related Tweets</p>
          <div class="tweets-feed">
            <div class="tweet"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PADetails;
