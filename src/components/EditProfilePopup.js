import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup ({isOpen, onClose, onUpdateUser}) {

	const currentUser = React.useContext(CurrentUserContext);

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onUpdateUser({
			name,
			about: description,
		});
	}

	useEffect(() => {
		setName(currentUser.name);
		setDescription(currentUser.about);
	}, [currentUser]);

	return (
		<PopupWithForm
               title="Редактировать профиль"
               name={"edit"}
					textBtn="Сохранить"
               isOpen={isOpen}
               onClose={onClose}
					onSubmit={handleSubmit}
					>	
					<input className="popup__input popup__input_edit_name" 
						id='name-input' 
						type="text" 
						minLength="2"
						maxLength="40"
						autoComplete="off"
						name="name"
						placeholder="Имя"
						noValidate
						required
						value={name || ''}
						onChange={e => setName(e.target.value)}
						/>
					<span className='popup__error' id='name-input-error'></span>
					<input className="popup__input popup__input_edit_job" 
						id='job-input'
						type="text"
						minLength="2"
						maxLength="200"
						name="about"
						placeholder="О себе"
						noValidate
						required
						value={description || ''}
						onChange={e => setDescription(e.target.value)}
						/>
					<span className='popup__error' id='job-input-error'></span>
				</PopupWithForm>
	)
}

export default EditProfilePopup;