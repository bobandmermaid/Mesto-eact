function Card(props) {
  const card = props.card;

  function handleClick() {
    props.onCardClick(card.link);
  }

  return (
    <div className="place-card">
      <div className="place-card__image" style={{ backgroundImage: `url(${ card.link })` }}
      onClick={ handleClick }
      >
        <button className="place-card__delete-icon"></button>
      </div>
      <div className="place-card__description">
        <h3 className="place-card__name">{ card.name }</h3>
        <div className="place-card__like-container">
          <button className="place-card__like-icon"></button>
          <div className="place-card__like-counter">{ card.likes.length }</div>
        </div>
      </div>
    </div>
  )
}

export default Card;
