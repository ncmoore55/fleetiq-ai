import { useState } from 'react'
import './App.css'
import VehicleCard from "./components/VehicleCard"
import type { Vehicle } from "./types/vehicle"


// main applicaion components
function App() {
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [maximumMileage, setMaximumMileage] = useState('')
  const [searchResults, setSearchResults] = useState<Vehicle[]>([])
  const [hasSearched, setHasSearched] = useState(false)

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
    setHasSearched(true)

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
      required
    />

      <label>Model</label>
      <input
        placeholder="Enter Vehicle Model"
        value={model}
        onChange={(event) => setModel(event.target.value)}
        required
      />

      <label>Year</label>
      <input 
        type="number"
        min="1900"
        max="2028"
        placeholder="e.g. 2022"
        value={year}
        onChange={(event) => setYear(event.target.value)}
        required
      />

      <label>Maximum Mileage</label>
      <input 
        type="number"
        min="0"
        max="100000"
        placeholder="e.g. 75,000" 
        value={maximumMileage}
        onChange={(event) => setMaximumMileage(event.target.value)}
        required
      />

      <button>Search Vehicles</button>

  </form>

{/* Displays each vehicle returned by the backend */}
{searchResults.length > 0 && (

  <div>
    <h2>Search Results</h2>
    <p>
      {searchResults.length} {searchResults.length == 1 ? "vehicle" : "vehicles"} found
    </p>

    {searchResults.map((vehicle, index) => (
      <VehicleCard
       key={index}
       year={vehicle.year}
       make={vehicle.make}
       model={vehicle.model}
       maximumMileage={vehicle.maximumMileage}
      />
    ))}
  </div>
)}

{/* Displays a message when no vehicles are found */}
{hasSearched && searchResults.length === 0 && (
  <p>No vehicles found matching your search.</p>
)}

  </div>
  )
}

export default App
