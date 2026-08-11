import type { Vehicle, VehicleSearchCriteria } from "../types/vehicle"

// Sends vehicle search criteria to the FleetIQ backend
// and returns the matching vehicles.
export async function searchVehicles(
  searchCriteria: VehicleSearchCriteria
): Promise<Vehicle[]> {
  const response = await fetch("http://127.0.0.1:8000/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(searchCriteria),
  })

  const data: Vehicle[] = await response.json()

  return data
}