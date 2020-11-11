import React from 'react'
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm
      isOpen={ props.isOpen ? 'popup_is-opened' : '' }
      onClose={ props.onClose }
      onSubmit={ handleSubmit }
      title='Обновить аватар'
      name='avatar'
      children={
        <>
          <input ref={avatarRef} id="avatarlink" type="url" name="link" className="popup__input popup__input_type_avatar"
                 placeholder="Ссылка на аватар" required/>
          <span id="avatarlink-error" className="error"/>
          <button type="submit" className="button popup__button popup__button_add-avatar popup__button_valid">Сохранить
          </button>
        </>
      }
    />
  )
}

export default EditAvatarPopup;
