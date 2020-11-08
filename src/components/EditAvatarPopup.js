import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      isOpen={ props.isOpen ? 'popup_is-opened' : '' }
      onClose={ props.onClose }
      title='Обновить аватар'
      name='avatar'
      children={
        <>
          <input id="avatarlink" type="url" name="link" className="popup__input popup__input_type_avatar"
                 placeholder="Ссылка на аватар" required/>
          <span id="avatarlink-error" className="error"/>
          <button type="submit" className="button popup__button popup__button_add-avatar" disabled>Сохранить
          </button>
        </>
      }
    />
  )
}

export default EditAvatarPopup;
