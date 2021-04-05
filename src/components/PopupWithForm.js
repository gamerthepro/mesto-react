import React from 'react';

const PopupWithForm = ({title, name, children, isOpen, textBtn, onClose, onSubmit}) => {

   const popupIsVisible = isOpen ? 'popup__open' : '';

	return(
		<div className={`popup popup_type_${name} ${popupIsVisible}`}>
		<div className="popup__container">
			<button className="popup__close popup__close_edit" type="button" aria-label="Закрыть" onClick={onClose}></button>
			<h2 className="popup__title">{title}</h2>
			<form className={`popup__form popup__form_${name}`} onSubmit={onSubmit} noValidate>
				{children}
				<button className="popup__save" type="submit">{textBtn}</button>
			</form>
		</div>
	</div>
	);
}

export default PopupWithForm;