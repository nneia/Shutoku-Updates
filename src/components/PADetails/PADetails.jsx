import "./PADetails.css";

const PADetails = ({ goBack, openModal }) => {
  const linkToPA = "https://maps.app.goo.gl/caxDBY1KC52nDLj97";

  return (
    <div className="pa-container">
      <div className="back-btn" onClick={goBack}>
        <svg
          className="arrow-back"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
        >
          <path
            fill="none"
            stroke="#2e2e2e"
            strokeWidth="17"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M89.9 9.6L36.5 62.9 91 117.4"
          ></path>
        </svg>
        <p>Back</p>
      </div>
      <div className="pa-banner">
        <img
          src="src/assets/imgs/tatsumi1-img1.jpg"
          alt=""
          className="pa-img"
        />
        <img
          src="src/assets/imgs/tatsumi1-img2.jpg"
          alt=""
          className="pa-img"
        />
      </div>
      <div className="pa-info-box">
        <h1 className="pa-title">Tatsumi PA (IN)</h1>
        <div className="pa-status-box">
          <p className="pa-status">Open</p>
          <div className="pa-status-icon open"></div>
        </div>
        <div className="pa-controlls-container">
          <p className="pa-update-btn" onClick={openModal}>
            Update Status
          </p>
          <a href={linkToPA} target="_blank" rel="noopener noreferrer">
            <img
              className="pa-directions"
              src="src/assets/icons/directions.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="votes-box">
          <p className="votes-header">
            Recent votes (<span className="votes-counter">12</span>)
          </p>
          <div className="votes-container">
            <img
              src="src/assets/imgs/heiwajima-img1.jpg"
              alt=""
              className="votes-img"
            />
          </div>
        </div>
        <div className="notes-box">
          <p className="notes-header">Notes</p>
          <p className="notes-placeholder">There is nothing here yet...</p>
          <div className="notes-user">
            <img
              src="src/assets/imgs/daikoku-img1.jpg"
              alt=""
              className="notes-img"
            />
            <div className="notes-comment-wrap">
              <p className="notes-comment">Police made an announcement</p>
              <p className="notes-time">21:39</p>
            </div>
          </div>
        </div>
        <div className="tweets-box">
          <p className="tweets-header">Related Tweets</p>
          <div className="tweets-feed">
            <div className="tweet"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PADetails;
