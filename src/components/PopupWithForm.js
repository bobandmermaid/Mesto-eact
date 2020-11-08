import close from '../images/close.svg';

function PopupWithForm(props) {
  return (
    <div className={ `popup popup_type_${ props.name } ${ props.isOpen }` }>
      <div className="popup__content">
        <img src={ close } alt=""
             className={ `popup__close popup__close_type_${ props.name }` }
             onClick={ props.onClose }
        />
        <h3 className="popup__title">{ props.title }</h3>
        <form className="popup__form" name={ props.name } noValidate>
          { props.children }
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
