import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurentUserContext';
// import { SemipolarLoading } from 'react-loadingg';
function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  // if(!currentUser) {
  //   return (
  //     <SemipolarLoading color="#fff" />
  //   )
  // }

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
        {props.cards.slice(0, 50).map((item) => (
          <Card
            key={ item._id }
            card={ item }
            onCardDelete={ props.onCardDelete }
            onCardClick={ props.onCardClick }
            onCardLike={ props.onCardLike }
          />
          ))}
      </div>
    </>
  )
}

export default Main;
