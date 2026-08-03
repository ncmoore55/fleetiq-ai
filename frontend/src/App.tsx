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
      <input placeholder="Enter Vehicle Make"></input>
      <label>Model</label>
      <input placeholder="Enter Vehicle Model"></input>
      <label>Year</label>
      <input placeholder="Enter Vehicle Year"></input>
      <label>Maximum Mileage</label>
      <input placeholder="Enter Vehicle Mileage"></input>
      <button>Search Vehicles</button>
    </form>
  </div>
  )
}

export default App
