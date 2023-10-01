import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <main className='profile'>
      <h1 className='profile__title'>Привет, Виталий!</h1>
      <form className='profile__form'>
        <fieldset className='profile__fieldset'>
          <label className='profile__label' htmlFor='name'>
            Имя
          </label>
          <input
            className='profile__input'
            type='text'
            placeholder='name'
            id='name'
          />
        </fieldset>
        <fieldset className='profile__fieldset'>
          <label className='profile__label' htmlFor='email'>
            E-mail
          </label>
          <input
            className='profile__input'
            type='email'
            placeholder='email'
            id='email'
          />
        </fieldset>
        <div className='profile__links'>
        <button className='profile__btn-edit' type='submit'>
          Редактировать
        </button>
        <Link to='/' className='profile__btn-logout'>
          Выйти из аккаунта
        </Link>
        </div>
      </form>
    </main>
  );
}

export default Profile;