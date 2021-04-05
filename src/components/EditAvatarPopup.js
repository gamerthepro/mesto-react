import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

	const {linkRef} = useRef();

	const handleSubmit = e => {
		e.preventDefault();
		onUpdateAvatar({avatar: linkRef.current.value});
	}

	return (
		<PopupWithForm
			title="Обновить аватар"
			name={"avatar"}
			textBtn="Сохранить"
			isOpen={isOpen}
			onClose={onClose}>

			<input className="popup__input popup__input_edit_name popup__input_avatar"
				name="avatar"
				type="url"
				placeholder="Ссылка на картинку"
				required
				id="url-avatar"
				autoComplete="off"
				defaultValue=""
				ref={linkRef}
				/>
			<span className="popup__error" id="url-avatar-error"></span>
		</PopupWithForm>
	)
}

export default EditAvatarPopup;