
function ResortCard({resort}) {

    function onSavedClick() {
        alert("clicked")
    }

    return <div className="resort-card">
        <div className="resort-poster">
            <img src={resort.url} alt={resort.name}></img>  
            <div className="resort-overlay">
                <button className="saved-btn" onClick={onSavedClick}>
                    🔖
                </button>
            </div>
        </div>
        <div className="resort-info">
            <h3>{resort.name}</h3>
            <p>{resort.location}</p>
        </div>
    </div>
}

export default ResortCard