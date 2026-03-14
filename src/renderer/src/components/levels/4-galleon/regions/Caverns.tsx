import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CavernArena from '../arenas/Cavern'
import CavernsEnemies from '../enemies/Caverns'
import ChestFairy from '../fairies/Chest'
import CannonGame from '../gold-bananas/chunky/Cannon'
import GalleonChest from '../gold-bananas/chunky/Chest'
import LankyKasplat from '../kasplats/Lanky'
import TinyKasplat from '../kasplats/Tiny'

const CavernsChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <CannonGame />
    <GalleonChest />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <ChestFairy />
  </div>
  <div className="grid">
    <CavernArena />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <LankyKasplat />
    <TinyKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <CavernsEnemies />
  </div>
  </>
)
}

export default CavernsChecks
