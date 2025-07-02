import { useContext } from "react"
import { FilterContext } from "../Contexts/FilterContext"

const FilterButtons = () => {
  const { filter, setFilter } = useContext(FilterContext)
  return (
    <div className="flex gap-3">
      {["all", "active", "completed"].map(f => (
        <button
  key={f}
  onClick={() => setFilter(f)}
  className={`px-5 py-2 text-lg font-semibold rounded ${
    filter === f ? "bg-blue-500 text-white" : "bg-gray-300"
  }`}
>
  {f.charAt(0).toUpperCase() + f.slice(1)}
</button>

      ))}
    </div>
  )
}

export default FilterButtons
