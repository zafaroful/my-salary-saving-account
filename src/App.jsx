import { useState, useEffect } from 'react'
import InputPanel from './components/InputPanel.jsx'
import MoneyLeftPanel from './components/MoneyLeftPanel.jsx'
import CostRow from './components/CostRow.jsx'
import EventRow from './components/EventRow.jsx'
import Controls from './components/Controls.jsx'

const EXAMPLE = { salary: '2800', rent: '800', transport: '200', food: '600' }
const STORAGE_KEY = 'kl-salary-month-run'

const COST_ROWS = [
  { key: 'rent', name: 'Rent', color: 'var(--row-rent)' },
  { key: 'transport', name: 'Transport', color: 'var(--row-transport)' },
  { key: 'food', name: 'Food', color: 'var(--row-food)' },
]

const LIFE_EVENTS = [
  { name: 'tyre', amount: 180 },
  { name: 'kenduri', amount: 100 },
  { name: 'phone screen', amount: 250 },
  { name: 'Shopee 11.11', amount: 120 },
  { name: 'parking saman', amount: 50 },
  { name: 'no surprise this week', amount: 0 },
]

function toNumber(value) {
  if (value === '' || value === null || value === undefined) return NaN
  return Number(value)
}

function readStoredRun() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    if (
      data &&
      data.values &&
      typeof data.values === 'object' &&
      typeof data.week === 'number' &&
      Array.isArray(data.events)
    ) {
      return {
        values: {
          salary: String(data.values.salary ?? EXAMPLE.salary),
          rent: String(data.values.rent ?? EXAMPLE.rent),
          transport: String(data.values.transport ?? EXAMPLE.transport),
          food: String(data.values.food ?? EXAMPLE.food),
        },
        week: data.week,
        events: data.events,
        locked: Boolean(data.locked),
      }
    }
    return null
  } catch {
    return null
  }
}

function App() {
  const stored = readStoredRun()
  const [values, setValues] = useState(stored ? stored.values : EXAMPLE)
  const [week, setWeek] = useState(stored ? stored.week : 0)
  const [events, setEvents] = useState(stored ? stored.events : [])
  const [locked, setLocked] = useState(stored ? stored.locked : false)
  const [dark, setDark] = useState(() => {
    try {
      return window.localStorage.getItem('kl-salary-month-theme') === 'dark'
    } catch {
      return false
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ values, week, events, locked }),
      )
    } catch {
      // storage unavailable; the run simply will not persist
    }
  }, [values, week, events, locked])

  useEffect(() => {
    try {
      window.localStorage.setItem('kl-salary-month-theme', dark ? 'dark' : 'light')
    } catch {
      // storage unavailable; the theme simply will not persist
    }
  }, [dark])

  const salary = toNumber(values.salary)
  const rent = toNumber(values.rent)
  const transport = toNumber(values.transport)
  const food = toNumber(values.food)

  const inputsValid =
    Number.isFinite(salary) &&
    salary > 0 &&
    Number.isFinite(rent) &&
    rent >= 0 &&
    Number.isFinite(transport) &&
    transport >= 0 &&
    Number.isFinite(food) &&
    food >= 0

  const rentSpent = (Number.isFinite(rent) ? rent / 4 : 0) * week
  const transportSpent = (Number.isFinite(transport) ? transport / 4 : 0) * week
  const foodSpent = (Number.isFinite(food) ? food / 4 : 0) * week
  const eventsSpent = events.reduce((sum, e) => sum + e.amount, 0)
  const totalSpent = rentSpent + transportSpent + foodSpent + eventsSpent
  const moneyLeft = (Number.isFinite(salary) ? salary : 0) - totalSpent

  const ranOut = moneyLeft < 0
  const reachedEnd = week >= 4
  const canAdvance = inputsValid && !ranOut && !reachedEnd

  const spentByCategory = [
    { key: 'rent', label: 'Rent', color: 'var(--row-rent)', amount: rentSpent },
    { key: 'transport', label: 'Transport', color: 'var(--row-transport)', amount: transportSpent },
    { key: 'food', label: 'Food', color: 'var(--row-food)', amount: foodSpent },
    { key: 'events', label: 'Life events', color: 'var(--row-events)', amount: eventsSpent },
  ]

  const segments = spentByCategory
    .filter((c) => c.amount > 0)
    .map((c) => ({ ...c, pct: (c.amount / totalSpent) * 100 }))

  const costTotals = {
    rent: Number.isFinite(rent) ? rent : 0,
    transport: Number.isFinite(transport) ? transport : 0,
    food: Number.isFinite(food) ? food : 0,
  }

  const maxRowAmount = Math.max(
    costTotals.rent,
    costTotals.transport,
    costTotals.food,
    ...events.map((e) => e.amount),
    1,
  )

  const costPct = (key) => (costTotals[key] / maxRowAmount) * 100

  let outcome = null
  if (ranOut) {
    outcome = { type: 'ranout', text: `Ran out in week ${week}` }
  } else if (reachedEnd) {
    outcome = { type: 'madeit', text: `Made it with RM${moneyLeft.toFixed(2)} left` }
  }

  function handleChange(key, value) {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  function handleNextWeek() {
    if (!canAdvance) return
    const event = LIFE_EVENTS[Math.floor(Math.random() * LIFE_EVENTS.length)]
    setLocked(true)
    setEvents((prev) => [...prev, { week: week + 1, name: event.name, amount: event.amount }])
    setWeek((prev) => prev + 1)
  }

  function handleStartAgain() {
    setValues(EXAMPLE)
    setWeek(0)
    setEvents([])
    setLocked(false)
  }

  const weekNumbers = [1, 2, 3, 4]

  return (
    <main className={`app${dark ? ' app--dark' : ''}`}>
      <header className="app-header">
        <div className="app-header__top">
          <h1 className="app-header__title">
            <svg
              className="app-header__icon"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              role="presentation"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M12 7v10M9.5 9.5h5M9.5 14.5h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            KL Salary Month
          </h1>
          <div className="app-header__actions">
            <span className="pill">Sample data</span>
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setDark((d) => !d)}
              aria-pressed={dark}
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        </div>
        <p className="app-header__line">Can you survive a month in KL on your salary?</p>
      </header>

      <InputPanel values={values} locked={locked} onChange={handleChange} />

      <MoneyLeftPanel moneyLeft={moneyLeft} week={week} segments={segments} outcome={outcome} />

      <section className="card rows-card">
        {COST_ROWS.map((r) => {
          const taken = r.key === 'rent' ? rentSpent : r.key === 'transport' ? transportSpent : foodSpent
          const total = costTotals[r.key]
          const quarters = total > 0 ? Math.round((taken / total) * 4) : 0
          return (
            <CostRow
              key={r.key}
              name={r.name}
              color={r.color}
              amount={costTotals[r.key]}
              pct={costPct(r.key)}
              label={`${quarters} of 4 weeks taken this month`}
            />
          )
        })}
        {events.map((e) => (
          <EventRow
            key={e.week}
            week={e.week}
            name={e.name}
            amount={e.amount}
            pct={(e.amount / maxRowAmount) * 100}
            color="var(--row-events)"
          />
        ))}
        {events.length === 0 && (
          <p className="rows-card__empty">No weeks played yet.</p>
        )}
      </section>

<section className="card weeks-card">
        <p className="weeks-card__title">Weeks played</p>
        {weekNumbers.map((n) => {
          const played = events.find((e) => e.week === n)
          return (
            <div key={n} className={`week-block${played ? '' : ' week-block--empty'}`}>
              <p className="week-block__title">Week {n}</p>
              {played ? (
                <>
                  <CostRow
                    name="Rent"
                    color="var(--row-rent)"
                    amount={Number.isFinite(rent) ? rent / 4 : 0}
                    pct={((Number.isFinite(rent) ? rent / 4 : 0) / maxRowAmount) * 100}
                  />
                  <CostRow
                    name="Transport"
                    color="var(--row-transport)"
                    amount={Number.isFinite(transport) ? transport / 4 : 0}
                    pct={((Number.isFinite(transport) ? transport / 4 : 0) / maxRowAmount) * 100}
                  />
                  <CostRow
                    name="Food"
                    color="var(--row-food)"
                    amount={Number.isFinite(food) ? food / 4 : 0}
                    pct={((Number.isFinite(food) ? food / 4 : 0) / maxRowAmount) * 100}
                  />
                  <EventRow
                    week={n}
                    name={played.name}
                    amount={played.amount}
                    pct={(played.amount / maxRowAmount) * 100}
                    color="var(--row-events)"
                  />
                </>
              ) : (
                <p className="week-block__empty">Not played yet.</p>
              )}
            </div>
          )
        })}
      </section>

      <Controls canAdvance={canAdvance} week={week} onNextWeek={handleNextWeek} onStartAgain={handleStartAgain} />
    </main>
  )
}

export default App