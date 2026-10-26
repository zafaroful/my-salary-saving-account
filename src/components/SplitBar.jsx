function SplitBar({ segments }) {
  return (
    <div className="split-bar" role="img" aria-label="Share of money spent so far">
      {segments.length === 0 ? (
        <div className="split-bar__empty" />
      ) : (
        segments.map((s) => (
          <div
            key={s.key}
            className="split-bar__segment"
            style={{ width: `${s.pct}%`, backgroundColor: s.color }}
            title={s.label}
          />
        ))
      )}
    </div>
  )
}

export default SplitBar