import ResortCard from "../components/ResortCard"
import {useState} from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")

    const resorts = [
        {id: 1, name: "Massanutten Resort", location: "Virginia"},
        {id: 2, name: "Timberline Mountain", location: "West Virginia"},
        {id: 3, name: "Snowshoe Mountain Resort", location: "West Virginia"},
    ]

    const handleSearch = () => {

    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="search for ski resort..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="resorts-grid">
            {resorts.map((resort) => (
                <ResortCard resort={resort} key={resort.id} />
            ))}
        </div> 
    </div>
}

export default Home