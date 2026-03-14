import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CandyCrate from '../crates/Candy'
import DarkRoomDirt from '../dirt/DarkRoom'
import StorageEnemies from '../enemies/Storage'
import ArcadeBarrel from '../gold-bananas/chunky/Arcade'
import DarkRoom from '../gold-bananas/chunky/Dark'
import StorageBarrel from '../gold-bananas/diddy/Storage'
import NintendoCoin from '../gold-bananas/dk/Arcade'
import FactoryBlast from '../gold-bananas/dk/Blast'
import PowerHut from '../gold-bananas/dk/Hut'
import FreeChunky from '../gold-bananas/lanky/FreeChunky'
import TinyVent from '../gold-bananas/tiny/Vent'
import TinyKasplat from '../kasplats/Tiny'
import ChunkyCage from '../gold-bananas/lanky/ChunkyCage'

const StorageChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <PowerHut />
    <StorageBarrel />
    <ChunkyCage />
    <FreeChunky />
    <FactoryBlast />
    <CandyCrate />
    <DarkRoomDirt />
    <DarkRoom />
    <ArcadeBarrel />
    <TinyVent />
    <NintendoCoin />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <TinyKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <StorageEnemies />
  </div>
  </>
)
}

export default StorageChecks
