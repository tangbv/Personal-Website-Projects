import ResortCard from "../components/ResortCard"
import {useState, useEffect } from "react"
import {searchResort, getSkiResorts} from "../services/api"
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")
    const [resorts, setResorts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSkiResorts = async () => {
            try {
                const skiResorts = await getSkiResorts()
                setResorts(skiResorts)
            } catch (err) {
                console.log(err)
                setError("Failed to load ski resorts...")
            }
            finally {
                setLoading(false)
            }
        }

        loadSkiResorts()
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
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
            {resorts.map((resort) => 
                (
                    <ResortCard resort={resort} key={resort.id} />
                )
            )}
        </div> 
    </div>
}

export default Home