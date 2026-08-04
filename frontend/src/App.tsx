import { useState } from 'react'
import './App.css'


// main applicaion components
function App() {
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [maximumMileage, setMaximumMileage] = useState('')

  return (
  <div>
    {/* main title page for heading 1 */}
    <h1>FleetIQ AI</h1>

    {/* Brief description of the application's purpose */}
    <p>Search for vehicles available at auction.</p>

    {/* Search section */}
    <h2>Find a vehicle</h2>

    {/* this is the vehicle search form */}
  <form>
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
  </div>
  )
}

export default App
