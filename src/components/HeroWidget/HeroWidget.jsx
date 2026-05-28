import styles from './HeroWidget.module.css'

export default function HeroWidget({ data, city }) {
  if (!data) return null

  return (
    <div className={styles.hero}>
      <h2 className={styles.city}>{city}</h2>
      <p className={styles.temp}>{data.temp}</p>
      <p className={styles.condition}>{data.condition}</p>
      <div className={styles.details}>
        <span>💧 {data.humidity}</span>
        <span>💨 {data.wind}</span>
      </div>
    </div>
  )
}
