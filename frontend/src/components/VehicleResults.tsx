import VehicleCard from "./VehicleCard"

import type { Vehicle } from "../types/vehicle"


// Defines the information VehicleResults receives from its parent component
type VehicleResultsProps = {
  vehicles: Vehicle[]
  hasSearched: boolean
}


// Displays the vehicles returned from a search
function VehicleResults({ vehicles, hasSearched }: VehicleResultsProps) {
  return (
    <>
      {/* Displays the search results when vehicles are found */}
      {vehicles.length > 0 && (
        <div>
          <h2>Search Results</h2>

          <p>
            {vehicles.length} {vehicles.length === 1 ? "vehicle" : "vehicles"} found
          </p>

          {vehicles.map((vehicle, index) => (
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

      {/* Displays a message when a search returns no vehicles */}
      {hasSearched && vehicles.length === 0 && (
        <p>No vehicles found matching your search.</p>
      )}
    </>
  )
}

export default VehicleResults