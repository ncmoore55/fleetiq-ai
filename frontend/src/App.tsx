import { useState } from 'react'
import './App.css'
import type { Vehicle, VehicleSearchCriteria } from "./types/vehicle"
import { searchVehicles } from "./services/vehicleService"
import VehicleSearchForm from "./components/VehicleSearchForm"
import VehicleResults from "./components/VehicleResults"

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

<VehicleResults
  vehicles={searchResults}
  hasSearched={hasSearched}
/>  
  </div>
  )
}

export default App