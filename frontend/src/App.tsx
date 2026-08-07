import { useState } from 'react'
import './App.css'


type searchResults = {
  make: string
  model: string
  year: string
  maximumMileage: string
}

// main applicaion components
function App() {
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [maximumMileage, setMaximumMileage] = useState('')
  const [searchResults, setSearchResults] = useState<searchResults[]>([])

  // handles the vehicle search form submission
  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // Create a vehicle search objects from the user's input
    const searchCriteria = {
      make,
      model,
      year,
      maximumMileage,
    }

    // send the vehicle search criteria to the FastAPI backend
    const response = await fetch("http://127.0.0.1:8000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchCriteria),
    })

    // read the JSON response returned by the backend
    const data = await response.json()

    setSearchResults(data)

    console.log(data)
}

  return (
  <div>
    {/* main title page for heading 1 */}
    <h1>FleetIQ AI</h1>

    {/* Brief description of the application's purpose */}
    <p>Search for vehicles available at auction.</p>

    {/* Search section */}
    <h2>Find a vehicle</h2>

    {/* this is the vehicle search form */}
  <form onSubmit={handleSearch}>

    <label>Make</label>
    <input
      placeholder="Enter Vehicle Make"
      value={make}
      onChange={(event) => setMake(event.target.value)}
    />

      <label>Model</label>
      <input
        placeholder="Enter Vehicle Model"
        value={model}
        onChange={(event) => setModel(event.target.value)}
      />

      <label>Year</label>
      <input 
        placeholder="e.g. 2022"
        value={year}
        onChange={(event) => setYear(event.target.value)}
      />

      <label>Maximum Mileage</label>
      <input 
        placeholder="e.g. 75,000" 
        value={maximumMileage}
        onChange={(event) => setMaximumMileage(event.target.value)}
      />

      <button>Search Vehicles</button>

  </form>

{/* Displays each vehicle returned by the backend */}
{searchResults.length > 0 && (
  <div>
    <h2>Search Results</h2>
    <p>Vehicle search completed successfully.</p>

    {searchResults.map((vehicle, index) => (
      <div key={index} className="vehicle-card">
        <h3>
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
        <p>Maximum Mileage: {vehicle.maximumMileage}</p>
      </div>
    ))}
  </div>
)}

  </div>
  )
}

export default App
