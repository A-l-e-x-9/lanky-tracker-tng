import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import MuseumEnemies from '../enemies/Museum'
import BoulderCheck from '../boulder'
import ChunkyMuseum from '../gold-bananas/chunky/Museum'

const MuseumChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <BoulderCheck />
    <ChunkyMuseum />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <MuseumEnemies />
  </div>
  </>
)
}

export default MuseumChecks
