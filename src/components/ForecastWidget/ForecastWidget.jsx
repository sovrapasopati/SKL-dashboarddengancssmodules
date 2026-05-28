import styles from './ForecastWidget.module.css'

export default function ForecastWidget({ forecast }) {
  if (!forecast) return null

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Prakiraan Cuaca</h3>
      <div className={styles.list}>
        {forecast.map((item, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.day}>{item.day}</p>
            <p className={styles.temp}>{item.temp}</p>
            <p className={styles.cond}>{item.cond}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
