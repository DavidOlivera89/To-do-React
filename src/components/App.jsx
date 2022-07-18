import React from 'react'
import Header from './Header'
import MainSection from './MainSection'
import { reducer } from '../stores/reducer'
import { TodoProvider } from '../TodoProvider'

const initialState = {
  todos: [
    {
      text: 'React Hooks',
      completed: false,
      id: 'b967afe24b23'
    },
    {
      text: 'Hacer compras en el super',
      completed: true,
      id: '43286487fhsdjasd'
    },
    {
      text: 'Lavar el auto',
      completed: false,
      id: '54937fhajd'
    },
    {
      text: 'Sacar el turno',
      completed: true,
      id: '43242341aaaaa'
    },
    {
      text: 'Limpiar el patio',
      completed: true,
      id: 'b967afe24a13'
    }
  ],
  visibilityFilter: 'All'
}
const App = () => (
  <TodoProvider initialState={initialState} reducer={reducer}>
    <div>
      <Header />
      <MainSection />
    </div>
  </TodoProvider>
)

export default App
