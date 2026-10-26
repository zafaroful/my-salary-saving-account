function EventRow({ week, name, amount, pct, color }) {
  return (
    <div className="row">
      <div className="row__head">
        <span className="row__dot" style={{ backgroundColor: color }} />
        <span className="row__name">
          Week {week}: {name}
        </span>
        <span className="row__amount">RM{amount.toFixed(2)}</span>
      </div>
      <div className="row__bar">
        <div
          className="row__bar-fill"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

export default EventRow