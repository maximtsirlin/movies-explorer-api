import { Link } from 'react-router-dom';
import './Navigation.css';


function Navigation(props) {

    return (
    <div className={props.isOpen ? 'navigation navigation_open' : 'navigation navigation_hidden'}>
            <div className='navigation__container'>
                <button
                    className='navigation__close'
                    type='button'
                    onClick={props.closeMenu} />
                
                <Link className='navigation__link' to='/'>Главная</Link>
                <Link className='navigation__link' to='/movies/all'>Фильмы</Link>
                <Link className='navigation__link' to='/movies/saved-movies'>Сохранённые фильмы</Link>
                <Link
                    className='navigation__account'
                    to='/profile'
                   >
                    Аккаунт
                    <div className='navigation__icon' />
                </Link>
            </div>
        </div>
    )
}

export default Navigation;