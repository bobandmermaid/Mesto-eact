import React from 'react';
import { CurrentUserContext } from '../contexts/CurentUserContext';

function Card(props) {
  const card = props.card;
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `place-card__delete-icon ${isOwn ? 'place-card__delete-icon_visible' : ''}`
  );

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `place-card__like-icon ${isLiked ? 'place-card__like-icon_liked' : ''}`
  );

  function handleClick() {
    props.onCardClick(card.link, card.name);
  }

  function handleLikeClick() {
    props.onCardLike(card)
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card)
  }

  return (
    <div className="place-card" key={ card._id }>
      <div className="place-card__image" style={{ backgroundImage: `url(${ card.link })` }}
      onClick={ handleClick } />
      <button onClick={ handleDeleteClick } className={ `${ cardDeleteButtonClassName }` } type="button"/>
      <div className="place-card__description">
        <h3 className="place-card__name">{ card.name }</h3>
        <div className="place-card__like-container">
          <button className={ `${ cardLikeButtonClassName }` } onClick={ handleLikeClick } />
          <div className="place-card__like-counter">{ card.likes.length }</div>
        </div>
      </div>
    </div>
  )
}

export default Card;
