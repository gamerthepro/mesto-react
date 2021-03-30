import React, {useState} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";



const App = () => {

	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);

	//Открыть и редактировать аватар
	const handleEditAvatarClick = () => {
		setIsEditAvatarPopupOpen(true);
	}

	//Открыть и редактировать проыиль
	const handleEditProfileClick = () => {
		setIsEditProfilePopupOpen(true);
	}

	//Открыть и добавить карточку с местом
	const handleAddPlaceClick = () => {
		setIsAddPlacePopupOpen(true);
	}

	const handleCardClick = (card) => {
		setSelectedCard(card);
	}

	const closeAllPopups = () => {
		setIsEditAvatarPopupOpen(false);
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setSelectedCard(null);
	}

	return (
		<body className="page">
			<div className="page__container">
				<Header/>
				<Main
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
					onEditProfile={handleEditProfileClick}
					onCardClick={handleCardClick}
				/><Footer/>

				<PopupWithForm
               title={"Вы уверены?"}
               name={"delete_card"}
               textBtn={"Да"}
               isOpen={false}
               onClose={closeAllPopups}
            ></PopupWithForm>

				<PopupWithForm
               title={"Обновить аватар"}
               name={"type_avatar"}
               textBtn={"Сохранить"}
               isOpen={isEditAvatarPopupOpen}
               onClose={closeAllPopups}>

					<input className="popup__input popup__input_edit_name popup__input_avatar"
						name="avatar"
						type="url"
						placeholder="Ссылка на картинку"
						required
						id="url-avatar"
						autocomplete="off"/>
					<span className="popup__error" id="url-avatar-error"></span>
					</PopupWithForm>

				<PopupWithForm
               title={"Редактировать профиль"}
               name={"type_edit"}
					textBtn={"Сохранить"}
               isOpen={isEditProfilePopupOpen}
               onClose={closeAllPopups}>
							
					<input className="popup__input popup__input_edit_name" 
						id='name-input' 
						type="text" 
						minlength="2"
						maxlength="40"
						autocomplete="off"
						name="porfolioName"
						value="Жак-Ив Кусто"
						placeholder="Имя"
						novalidate
						required/>
					<span className='popup__error' id='name-input-error'></span>
					<input className="popup__input popup__input_edit_job" 
						id='job-input'
						type="text"
						minlength="2"
						maxlength="200"
						name="porfolioJob"
						value="Исследователь океана"
						placeholder="О себе"
						novalidate
						required/>
					<span className='popup__error' id='job-input-error'></span>
				</PopupWithForm>

				<PopupWithForm
               title={"Новое место"}
               name={"type_add"}
               textBtn={"Создать"}
               isOpen={isAddPlacePopupOpen}
               onClose={closeAllPopups}>

					<input className="popup__input popup__input_edit_name popup__input_img_name" 
						id='name-img'  
						placeholder="Название" 
						type="text" 
						name="name" 
						value="" 
						minlength="2"
						maxlength="30"
						novalidate 
						required/>
					<span className='popup__error' id='name-img-error'></span>
					<input className="popup__input popup__input_img_link" 
						id='img-link' 
						placeholder="Ссылка на картинку" 
						type="url" 
						name="link" 
						value="" 
						novalidate 
						required/>
					<span className='popup__error' id='img-link-error'></span>
				</PopupWithForm>

				<ImagePopup>
					card={selectedCard}
               isOpen={selectedCard !== null}
               onClose={closeAllPopups}
				</ImagePopup>


			</div>

		</body>
	);
}

export default App;