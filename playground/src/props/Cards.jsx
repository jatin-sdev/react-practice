function Card(props) {
  return (
    <div className="border-1 p-4 rounded shadow m-3">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}
export default Card;
