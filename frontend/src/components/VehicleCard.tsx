// displays an individual vehicle search result
type VehicleCardProps = {
    make: string
    model: string
    year: string
    maximumMileage: string
}

function VehicleCard({ make, model, year, maximumMileage }: VehicleCardProps) {
    return (
        <div className="vehicle-card">
            <h3>
                {year} {make} {model}
            </h3>
            <p>
                Maximum Mileage: {Number(maximumMileage).toLocaleString()} miles
            </p>
        </div>
    )
}

export default VehicleCard

