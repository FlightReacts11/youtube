import "../index.css";

function PlayerSummaryContent({image, strengths, weaknesses, color, rating, firstname, lastname, position, icon = []}) {
    return (
        <div className="summary-container">
            <div className="summary-left">
                <div className="top-card" style={{ borderColor: color }}>
                    <img className="top-image" src={image} />
                    <div className="card-icons">
                        {icon.map((icons, index) => (
                            <img key={index} className="card-icon" src={icons} />
                        ))}
                    </div>
                    <div className="bottom-card">
                        <div className="rating-and-overall" style={{ backgroundColor: color }}>
                            <h3 className="rating">{rating}</h3>
                            <h3 className="overall">OVR</h3>
                        </div>
                        <div className="player-name">
                            <h3 className="first-name">{firstname}</h3>
                            <h3 className="last-name">{lastname}</h3>
                        </div>
                        <h3 className="position">{position}</h3>
                    </div>
                </div>
            </div>

            <div className="summary-right">
                <div className="strengths-col">
                    <div className="summary-section-header">
                        <div className="summary-section-bar strengths-bar"></div>
                        <span className="summary-section-label">Strengths</span>
                    </div>
                    <ul className="summary-list">
                        {strengths.map((strength, index) => (
                            <li key={index} className="summary-item" style={{ color: strength.color }}>
                                <span className="summary-bullet">●</span>
                                <span className="summary-text">{strength.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="weaknesses-col">
                    <div className="summary-section-header">
                        <div className="summary-section-bar weaknesses-bar"></div>
                        <span className="summary-section-label">Weaknesses</span>
                    </div>
                    <ul className="summary-list">
                        {weaknesses.map((weakness, index) => (
                            <li key={index} className="summary-item" style={{ color: weakness.color }}>
                                <span className="summary-bullet">●</span>
                                <span className="summary-text">{weakness.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PlayerSummaryContent