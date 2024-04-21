import "./UpdateStatus.css";

const UpdateStatusModal = ({ Open, Close }) => {
  if (!Open) return null;
  return (
    <>
      <div className="modal-shade"></div>
      <div className="modal-upd">
        <div className="upd-options">
          <div className="option bg-green">
            <p className="option-txt">Open</p>
          </div>
          <div className="option bg-red">
            <p className="option-txt">Closed</p>
          </div>
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Notes"
          className="update-input"
        ></textarea>

        <p className="update-btn">Confirm</p>
        <svg
          onClick={Close}
          className="cancel"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
        >
          <g fill="none" stroke-width="25">
            <path d="M11 10l107 108"></path>
            <path d="M11 118L118 10" opacity=".9"></path>
          </g>
        </svg>
      </div>
    </>
  );
};

export default UpdateStatusModal;
