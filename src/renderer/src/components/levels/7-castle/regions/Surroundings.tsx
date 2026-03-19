import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GreenhouseArena from '../arenas/Greenhouse'
import TopFloorDirt from '../dirt/TopFloor'
import SurroundingsEnemies from '../enemies/Surroundings'
import ChunkyShed from '../gold-bananas/chunky/Shed'
import CastleTop from '../gold-bananas/diddy/Top'
import LankyGreenhouse from '../gold-bananas/lanky/Greenhouse'
import TinyTrash from '../gold-bananas/tiny/Trash'
import LankyKasplat from '../kasplats/Lanky'
import TinyKasplat from '../kasplats/Tiny'

const SurroundingsChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <LankyGreenhouse />
    <GreenhouseArena />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <TinyTrash />
    <ChunkyShed />
  </div>
  <div className="grid">
    <CastleTop />
    <TopFloorDirt />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <LankyKasplat />
    <TinyKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <SurroundingsEnemies />
  </div>
  </>
)
}

export default SurroundingsChecks
