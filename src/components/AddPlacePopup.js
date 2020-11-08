import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      isOpen={ props.isOpen ? 'popup_is-opened' : '' }
      onClose={ props.onClose }
      title='Новое место'
      name='card'
      children={
        <>
          <input id="name" type="text" name="name" className="popup__input popup__input_type_name"
                 placeholder="Название" required minLength="2" maxLength="30"/>
          <span id="name-error" className="error"/>
          <input id="link" type="url" name="link" className="popup__input popup__input_type_link-url"
                 placeholder="Ссылка на картинку" required/>
          <span id="link-error" className="error"/>
          <button type="submit" className="button popup__button popup__button_add" disabled>+</button>
        </>
      }
    />
  )
}

export default AddPlacePopup;
