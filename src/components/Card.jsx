import React from "react";
function Card(props) {
  const [like, setLike] = React.useState(
    Number(localStorage.getItem(props.id)) || 0
  );

  const clickHandler = event => {
    setLike(like + 1);
  };

  localStorage.setItem(props.id, like);

  return (
    <div className="col-sm-4 mt-5">
      <div className="card">
        <img src={props.imgURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.secondTitle}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                name="increase"
                onClick={clickHandler}
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <i className="fas fa-heart" />
              </button>
            </div>
            <small className="text-muted">{like} Like</small>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
