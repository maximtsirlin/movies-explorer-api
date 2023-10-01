import './AboutMe.css';

function AboutMe() {
  return (
    <section className='me'>
      <div className='me__container'>
        <h2 className='me__title'>Студент</h2>
        <div className='me__block'>
          <div className='me__info'>
            <div className='me__texts'>
              <h3 className='me__name'>Максим</h3>
              <p className='me__about'>Web developer</p>
              <p className='me__text'>
              Меня зовут Максим мне 33 года. Я работаю с компьютерной графикой и дизайном, всегда хотел углубиться в код и понять как это работает. Теперь кажется открылось много новых возможностей, хочу дальше изучать код и внедрять его в проекты, пока еще не определился в каком направлении именно это будет но есть много идей а для этого нужно продолжать. 
              </p>
            </div>
            <div className='me__links'>
              <a
                className='me__link'
                href='https://github.com/maximtsirlin'
                target='_blank'
                rel="noreferrer">Github
              </a>
            </div>
          </div>
          <div className='me__image' />
        </div>
      </div>
    </section>
  )
}

export default AboutMe;