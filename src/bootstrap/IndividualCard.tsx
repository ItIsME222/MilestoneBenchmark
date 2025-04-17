interface Props {
  id: string;
  imageURL: string;
  title: string;
  buttonText: string;
  description: string;
  price: string;
  onClick: () => void;
}

function Card(props: Props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.imageURL}
          className="card-img-top h-64 w-64"
          alt="product"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">{props.price}</p>
          <button className="btn btn-primary" onClick={props.onClick}>
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
