import Checklist from './Checklist'
import MoveTable from './components/moves/MoveTable'
import Bosses from './components/settings/Bosses'
import Ending from './components/settings/Ending'
import LevelTable from './components/settings/LevelTable'
import RuntimeSettings from './components/settings/RuntimeSettings'
import SwitchsanitySelector from './components/settings/Switchsanity'

const App = (): JSX.Element => {
  return (
    <>
      <main>
        <article>
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
