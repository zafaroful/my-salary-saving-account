function Controls({ canAdvance, week, onNextWeek, onStartAgain }) {
  const nextNumber = Math.min(week + 1, 4)

  return (
    <div className="controls">
      <button
        type="button"
        className="btn btn--primary"
        onClick={onNextWeek}
        disabled={!canAdvance}
      >
        {week >= 4 ? 'Month finished' : `Next week (Week ${nextNumber} of 4)`}
      </button>
      <button type="button" className="btn btn--secondary" onClick={onStartAgain}>
        Start again
      </button>
    </div>
  )
}

export default Controls