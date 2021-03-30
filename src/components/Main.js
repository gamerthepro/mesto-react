import React, {useState, useEffect} from 'react';
import {api} from "../utils/api";
import profile_img from "../images/image.png";
import Card from "./Card";

const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) => {

	const [userName, setUserName] = useState("Жак-Ив Кусто");
	const [userDescription, setUserDescription] = useState("Исследователь океана");
	const [userAvatar, setUserAvatar] = useState(profile_img);
	const [cards, setCards] = useState([]);




	return (
		<main className="content page__content">
			<section className="profile">
				<div className="profile__list">
					<div className="profile__overlay" onClick={onEditAvatar}>
						<img className="profile__avatar" src={userAvatar} alt="Изображение профиля"/>
					</div>
					<div className="profile__info">
						<h1 className="profile__title">{userName}</h1>
						<button className="profile__button profile__button_open_edit" type="button" onClick={onEditProfile}></button>
						<p className="profile__subtitle">{userDescription}</p>
					</div>
					<div className="profile__add">
						<button className="profile__button profile__button_open_add" type="button" onClick={onAddPlace}></button>
					</div>
				</div>
			</section>
			<section className="elements">
				<ul className="elements__contener">

				</ul>
			</section>
		</main>
	);
}

export default Main