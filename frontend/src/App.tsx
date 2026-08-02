import './App.css'


// main applicaion component 
function App() {
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
      <input></input>
      <label>Model</label>
      <input></input>
      <label>year</label>
      <input></input>
      <label>Maximum Mileage</label>
      <input></input>
      <button>Search Vehicles</button>
    </form>
  </div>
  )
}

export default App
