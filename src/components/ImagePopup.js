const ImagePopup = ({card, isOpen, onClose}) => {

	let popupIsVisible = isOpen ? 'popup__open' : '';

	return (
		<div className={`popup popup_type_image ${popupIsVisible}`}>
			<figure className="popup__container popup__container_image">
				<button className="popup__close popup__close_image" type="button" aria-label="Закрыть" onClick={onClose}></button>
				<img className="popup__img" src={card && card.link} alt={card && card.name}/>
				<figcaption className="popup__caption">{card && card.name}</figcaption>
			</figure>
		</div>
	);
}

export default ImagePopup