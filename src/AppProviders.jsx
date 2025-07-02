import { TodoProvider } from "./Contexts/TodoContext"
import { FilterProvider } from "./Contexts/FilterContext"
import { ThemeProvider } from "./Contexts/ThemeContext"

const AppProviders = ({ children }) => (
  <ThemeProvider>
    <FilterProvider>
      <TodoProvider>{children}</TodoProvider>
    </FilterProvider>
  </ThemeProvider>
)

export default AppProviders
