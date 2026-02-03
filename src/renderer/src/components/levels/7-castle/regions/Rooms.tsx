import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import LibraryEnemies from '../enemies/Library'
import DkLibrary from '../gold-bananas/dk/Library'
import LankyTower from '../gold-bananas/lanky/Tower'

const RoomsChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <DkLibrary />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <LibraryEnemies />
    <LankyTower />
  </div>
  </>
)
}

export default RoomsChecks
