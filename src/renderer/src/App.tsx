import Checklist from './Checklist'
import MoveTable from './components/moves/MoveTable'
import Bosses from './components/settings/Bosses'
import Ending from './components/settings/Ending'
import LevelTable from './components/settings/LevelTable'
import RuntimeSettings from './components/settings/RuntimeSettings'
import SwitchsanitySelector from './components/settings/Switchsanity'
import { currentMonth } from './assets/month-changer'

const App = (): JSX.Element => {
const isItOctober = currentMonth === 9 ? 'font-changer' : ''
  return (
    <>
      <main>
        <article className={isItOctober}>
          <MoveTable />
          <LevelTable />
          <Bosses />
          <Ending />
          <RuntimeSettings />
          <SwitchsanitySelector />
        </article>
        <Checklist />
      </main>
    </>
  )
}

export default App
