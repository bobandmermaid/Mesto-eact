import React from 'react';
import Header from './Header';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import Preloader from './Preloader';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurentUserContext'

function App() {

  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    link: ''
  });

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(link) {
    setSelectedCard({
      isOpen: true,
      link: link
    });
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({
      isOpen: false,
      link: ''
    })
  }

  React.useEffect(() => {
    api.getUsersInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch(err => console.log(err));
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <div className="root">
      <CurrentUserContext.Provider value={ currentUser }>
        <Header/>
        <Main
          cards={ cards }
          onCardClick={handleCardClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <Preloader/>
      </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
