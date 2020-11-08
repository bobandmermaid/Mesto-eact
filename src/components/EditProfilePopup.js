import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      isOpen={ props.isOpen ? 'popup_is-opened' : '' }
      onClose={ props.onClose }
      title='Редактировать профиль'
      name='profile'
      children={
        <>
          <input id="user" type="text" name="user" className="popup__input popup__input_type_user"
                 placeholder="Имя" required minLength="2" maxLength="30"/>
          <span id="user-error" className="error"/>
          <input id="about" type="text" name="about" className="popup__input popup__input_type_about"
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
