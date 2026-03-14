import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CactusCrate from '../crates/Cactus'
import Mechfish from '../gold-bananas/diddy/Mech'
import FreeSeal from '../gold-bananas/dk/Blast'
import SealRace from '../gold-bananas/dk/Race'
import Lanky2Ship from '../gold-bananas/lanky/Switch'
import TinySub from '../gold-bananas/tiny/Sub'
import Tiny2Ship from '../gold-bananas/tiny/Switch'
import ChunkyKasplat from '../kasplats/Chunky'

const OutskirtsChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <Lanky2Ship />
    <Tiny2Ship />
    <FreeSeal />
    <SealRace />
    <Mechfish />
    <CactusCrate />
    <TinySub />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <ChunkyKasplat />
  </div>
  </>
)
}

export default OutskirtsChecks
