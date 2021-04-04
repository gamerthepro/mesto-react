import React from 'react';

const Card = ({card, onCardClick}) => {

	const handleClick = () => {
		onCardClick({
			link: card.link,
			name: card.name,
		})
	}


   return(
		<section className="element-template">
			<li className="element">
				<button className="element__delete" type="button"></button>
				<img className="element__image" src={card.link} onClick={handleClick} alt="Фото в ленте mesto"/>
				<div className="element__block">
					<h2 className="element__title">{card.name}</h2>
					<div className="element__wrap_like">
						<button className="element__like" type="button"></button>
						<div className="element__like_count">{card.likes.length}</div>
					</div>
				</div>
			</li>
		</section>
	);
}

export default Card;