import PopupWithForm from './PopupWithForm';
import React from 'react';
import { CurrentUserContext } from '../contexts/CurentUserContext';

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(event) {
    event.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={ props.isOpen ? 'popup_is-opened' : '' }
      onClose={ props.onClose }
      onSubmit={ handleSubmit }
      title='Редактировать профиль'
      name='profile'
      children={
        <>
          <input value={name || ''} onChange={ handleChangeName } id="user" type="text" name="user" className="popup__input popup__input_type_user"
                 placeholder="Имя" required minLength="2" maxLength="30"/>
          <span id="user-error" className="error"/>
          <input value={description || ''} onChange={ handleChangeDescription } id="about" type="text" name="about" className="popup__input popup__input_type_about"
                 placeholder="О себе" required minLength="2" maxLength="30"/>
          <span id="about-error" className="error"/>
          <button type="submit"
                  className="button popup__button popup__button_save popup__button_valid">Сохранить
          </button>
        </>
      }
    />
  )
}

export default EditProfilePopup;
