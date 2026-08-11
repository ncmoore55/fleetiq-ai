import { useState } from 'react'
import './App.css'
import VehicleCard from "./components/VehicleCard"
import type { Vehicle, VehicleSearchCriteria } from "./types/vehicle"
import { searchVehicles } from "./services/vehicleService"
import VehicleSearchForm from "./components/VehicleSearchForm"

// main applicaion components
function App() {
  const [searchResults, setSearchResults] = useState<Vehicle[]>([])
  const [hasSearched, setHasSearched] = useState(false)

// handles the vehicle search form submission
async function handleSearch(searchCriteria: VehicleSearchCriteria) {
  const data = await searchVehicles(searchCriteria)

  setSearchResults(data)
  setHasSearched(true)

  console.log(data)
}

return (
<div>
  <h1>FleetIQ AI</h1>
 
  <p>Search for vehicles available at auction.</p>

  <h2>Find a vehicle</h2>

<VehicleSearchForm onSearch={handleSearch} />

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
