import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) { 
  const listItem = stats.map(statsItem => (
    <li className={css.item} key={statsItem.id}>
                    <span className={css.label}>{statsItem.label}</span>
                    <span className={css.percentage}>{statsItem.percentage}%</span>
    </li>)
  )
  
  return (
    <section className={css.statistics}>
      {title && (<h2 className={css.title}>{title}</h2>)}

        <ul className={css.statList}>
          {listItem}
      </ul>
    </section>
       )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.any.isRequired),
}

