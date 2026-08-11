import { useState } from "react"
import type { FormEvent } from "react"

import type { VehicleSearchCriteria } from "../types/vehicle"


// Defines the information the VehicleSearchForm receives from its parent component
type VehicleSearchFormProps = {
  onSearch: (searchCriteria: VehicleSearchCriteria) => void
}


// Handles the vehicle search form and keeps track of the user's input
function VehicleSearchForm({ onSearch }: VehicleSearchFormProps) {
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [maximumMileage, setMaximumMileage] = useState("")

  // Packages the user's input and sends it to the parent component
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const searchCriteria: VehicleSearchCriteria = {
      make,
      model,
      year,
      maximumMileage,
    }

    onSearch(searchCriteria)
  }

  return (
    <form onSubmit={handleSubmit}>
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
  )
}

export default VehicleSearchForm