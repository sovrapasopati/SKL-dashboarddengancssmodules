import { useState, useRef, useEffect } from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar({ cities, selected, onSelect }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const filtered = cities.filter(c =>
    c.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleSelect(city) {
    onSelect(city)
    setQuery('')
    setOpen(false)
  }

  return (
    <div className={styles.bar} ref={ref}>
      <label className={styles.label}>Cari Kota</label>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="Ketik nama kota..."
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
        />
        {open && query !== '' && filtered.length > 0 && (
          <ul className={styles.list}>
            {filtered.map(city => (
              <li key={city} className={styles.item} onClick={() => handleSelect(city)}>
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
