import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import MushInteriorEnemies from '../enemies/MushInterior'
import ChunkyFace from '../gold-bananas/chunky/Face'
import MushroomCannon from '../gold-bananas/dk/Mushroom'
import MushroomSlam from '../gold-bananas/lanky/Slam'
import ZingerBounce from '../gold-bananas/lanky/Zinger'
import MushroomBarrel from '../gold-bananas/tiny/Mushroom'
import DiddyKasplat from '../kasplats/Diddy'

const MushInteriorChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <MushroomCannon />
    <MushroomBarrel />
    <MushroomSlam />
    <ZingerBounce />
    <ChunkyFace />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DiddyKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <MushInteriorEnemies />
  </div>
  </>
)
}

export default MushInteriorChecks
