import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeLink(event) {
    setLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onAddPlace({ name, link });
  }

  return (
    <PopupWithForm
      isOpen={ props.isOpen ? 'popup_is-opened' : '' }
      onClose={ props.onClose }
      onSubmit={ handleSubmit }
      title='Новое место'
      name='card'
      children={
        <>
          <input onChange={ handleChangeName } id="name" type="text" name="name" className="popup__input popup__input_type_name"
                 placeholder="Название" required minLength="2" maxLength="30"/>
          <span id="name-error" className="error"/>
          <input onChange={ handleChangeLink } id="link" type="url" name="link" className="popup__input popup__input_type_link-url"
                 placeholder="Ссылка на картинку" required/>
          <span id="link-error" className="error"/>
          <button type="submit" className="button popup__button popup__button_add popup__button_valid">+</button>
        </>
      }
    />
  )
}

export default AddPlacePopup;
