import React from 'react';
import { CurrentUserContext } from '../contexts/CurentUserContext';
import Card from './Card';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <div className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo" onClick={ props.onEditAvatar }
               style={{ backgroundImage: `url(${ currentUser.avatar })` }}/>
          <div className="user-info__data">
            <h1 className="user-info__name">{ currentUser.name }</h1>
            <p className="user-info__job">{ currentUser.about }</p>
            <button className="user-info__edit" onClick={ props.onEditProfile }>Edit</button>
          </div>
          <button className="button user-info__button" onClick={ props.onAddPlace }>+</button>
        </div>
      </div>
      <div className="places-list root__section">
        {props.cards.map((item) => (
          <Card
            onCardClick={ props.onCardClick }
            card={ item }
          />
          ))}
      </div>
    </>
  )
}

export default Main;
