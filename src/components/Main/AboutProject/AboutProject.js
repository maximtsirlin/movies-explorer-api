import './AboutProject.css';

function AboutProject() {
  return (
    <section className='project'>
      <div className='project__container'>
        <h2 className='project__title'>О проекте</h2>
        <div className='project__texts'>
          <h3 className='project__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='project__text'>
            Составление плана, работу над бэкендом, вёрстку, 
            добавление функциональности и финальные доработки.
          </p>
          <h3 className='project__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, 
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
        <div className='project__time'>
          <p className='project__one'>1 неделя</p>
          <p className='project__four'>4 недели</p>
          <p className='project__backend'>Back-end</p>
          <p className='project__frontend'>Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;