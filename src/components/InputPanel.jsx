function InputPanel({ values, locked, onChange }) {
  const fields = [
    { key: "salary", label: "Gross monthly salary" },
    { key: "rent", label: "Rent per month" },
    { key: "transport", label: "Transport per month" },
    { key: "food", label: "Food per month" },
  ]

  return (
    <section className="card input-card">
      {fields.map((f) => (
        <label key={f.key} className="field">
          <span className="field__label">
            {f.label}
            {locked && <span className="field__locked">Locked</span>}
          </span>
          <span className={`field__control${locked ? " field__control--locked" : ""}`}>
            <span className="field__prefix">RM</span>
            <input
              className="field__input"
              type="number"
              min="0"
              step="1"
              inputMode="decimal"
              value={values[f.key]}
              disabled={locked}
              onChange={(e) => onChange(f.key, e.target.value)}
              aria-label={f.label}
            />
          </span>
        </label>
      ))}
    </section>
  )
}

export default InputPanel