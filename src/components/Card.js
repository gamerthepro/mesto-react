import React from 'react';

const Card = ({card, onCardClick}) => {

   const handleClick = () => {
      onCardClick(card);
   }

   return(
		<template className="element-template">
			<li className="element">
				<button className="element__delete" type="button"></button>
				<img className="element__image" src={card.link} alt="Фото в ленте mesto"/>
				<div className="element__block">
					<h2 className="element__title"></h2>
					<div className="element__wrap_like">
						<button className="element__like" type="button"></button>
						<div className="element__like_count"></div>
					</div>
				</div>
			</li>
		</template>
	);
}

export default Card