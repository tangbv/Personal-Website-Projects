
function ResortCard({resort}) {

    function onFavoriteClick() {
        alert("clicked")
    }

    return <div className="resort-card">
        <div className="resort-poster">
            <img src={resort.url} alt={resort.name}></img>  
            <div className="resort-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="resort-info">
            <h3>{resort.name}</h3>
            <p>{resort.open_date}</p>
        </div>
    </div>
}

export default ResortCard