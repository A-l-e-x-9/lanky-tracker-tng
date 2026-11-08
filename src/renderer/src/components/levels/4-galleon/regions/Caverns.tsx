import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CavernArena from '../arenas/VanillaUnderCranky'
import CavernsEnemies from '../enemies/Caverns'
import ChestFairy from '../fairies/Chest'
import CannonGame from '../gold-bananas/chunky/Cannon'
import GalleonChest from '../gold-bananas/chunky/Chest'
import LankyKasplat from '../kasplats/Lanky'
import TinyKasplat from '../kasplats/Tiny'
import MiddleChest from '../breakable/Caves'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const CavernsChecks: React.FC = () => {
const isFairySeed = useKRoolKontracts('Fairies') ? 'foolish' : ''
const isBlueprintSeed = useKRoolKontracts('Blueprints') ? 'foolish' : ''
const isKRoolChallengeSeed = useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge)) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <CannonGame />
    <GalleonChest />
    <MiddleChest />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <ChestFairy />
  </div>
  <div className="grid">
    <CavernArena />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <LankyKasplat />
    <TinyKasplat />
  </div>
  <div className="grid">
    <CavernsEnemies />
  </div>
  </>
)
}

export default CavernsChecks
