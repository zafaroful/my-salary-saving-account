import SplitBar from './SplitBar.jsx'

function MoneyLeftPanel({ moneyLeft, week, segments, outcome }) {
  const isNegative = moneyLeft < 0
  const moneyText = `${isNegative ? "-" : ""}RM${Math.abs(moneyLeft).toFixed(2)}`

  return (
    <section className="card hero-card">
      <p className="hero-card__label">Money left</p>
      <p className={`hero-card__figure${isNegative ? ' hero-card__figure--negative' : ''}`}>
        {moneyText}
      </p>
      <p className="hero-card__week">Week {week} of 4 this month</p>
      <SplitBar segments={segments} />
      <ul className="legend">
        <li className="legend__item">
          <span className="legend__dot" style={{ backgroundColor: 'var(--row-rent)' }} /> Rent
        </li>
        <li className="legend__item">
          <span className="legend__dot" style={{ backgroundColor: 'var(--row-transport)' }} /> Transport
        </li>
        <li className="legend__item">
          <span className="legend__dot" style={{ backgroundColor: 'var(--row-food)' }} /> Food
        </li>
        <li className="legend__item">
          <span className="legend__dot" style={{ backgroundColor: 'var(--row-events)' }} /> Life events
        </li>
      </ul>
      {outcome && (
        <p className={`outcome outcome--${outcome.type}`}>{outcome.text}</p>
      )}
    </section>
  )
}

export default MoneyLeftPanel