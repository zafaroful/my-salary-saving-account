function CostRow({ name, color, amount, pct, label }) {
  return (
    <div className="row">
      <div className="row__head">
        <span className="row__dot" style={{ backgroundColor: color }} />
        <span className="row__name">{name}</span>
        <span className="row__amount">RM{amount.toFixed(2)}</span>
      </div>
      <div className="row__bar">
        <div
          className="row__bar-fill"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      {label && <p className="row__caption">{label}</p>}
    </div>
  )
}

export default CostRow