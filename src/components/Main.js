import React, {useState, useEffect} from 'react';
import api from "../utils/api";
import Card from "./Card";

const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) => {

	const [userName, setUserName] = useState('');
	const [userDescription, setUserDescription] = useState('');
	const [userAvatar, setUserAvatar] = useState('');
	const [cards, setCards] = useState([]);

	const errorApi = err => {
			console.error(err);
			};
		useEffect(() => {
			api
			.getUserInfoServ()
			.then(data => {
				setUserName(data.name)
				setUserDescription(data.about)
				setUserAvatar(data.avatar)
			})
			.catch(errorApi)
		}, [])
		useEffect(() => {
			api
			.getCardList()
			.then(data => {
				setCards(data)
			})
			.catch(errorApi)
	}, [])

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
					{cards.map((item) => {
                  return <Card
                     key={item._id}
                     card={item}
                     onCardClick={onCardClick}
                  />
               })}
				</ul>
			</section>
		</main>
	);
}

export default Main;