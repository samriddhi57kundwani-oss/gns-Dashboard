function Summary({ predictions }) {
    if (!predictions) return null;
  
    return (
      <div className="summary">
        <h3>Model Summary</h3>
        <p><b>Short-Term Trend:</b> {predictions.summary.short_trend}</p>
        <p><b>Long-Term Trend:</b> {predictions.summary.long_trend}</p>
      </div>
    );
  }
  
  export default Summary;
  