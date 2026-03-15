import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import BarnInsideCrate from '../crates/BarnInside'
import BarnOutsideCrate from '../crates/BarnOutside'
import RaftersCrate from '../crates/Rafters'
import MillsGrassDirt from '../dirt/MillsGrass'
import MillsEnemies from '../enemies/Mills'
import BarnFairy from '../fairies/Barn'
import RaftersFairy from '../fairies/Rafters'
import ChunkyMill from '../gold-bananas/chunky/Mill'
import DarkRafters from '../gold-bananas/diddy/Rafters'
import MillWinch from '../gold-bananas/diddy/Winch'
import DkBarn from '../gold-bananas/dk/Barn'
import DkMill from '../gold-bananas/dk/Mill'
import LankyMill from '../gold-bananas/lanky/Mill'
import SpiderBoss from '../gold-bananas/tiny/Spider'
import DkKasplat from '../kasplats/Dk'
import MillBackKeg from '../boulders/MillBackKeg'
import MillFrontKeg1 from '../boulders/MillFrontKeg1'
import MillFrontKeg2 from '../boulders/MillFrontKeg2'

const MillsChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <MillsGrassDirt />
    <RaftersCrate />
    <DarkRafters />
    <MillWinch />
    <DkMill />
    <ChunkyMill />
    <MillBackKeg />
    <MillFrontKeg1 />
    <MillFrontKeg2 />
    <BarnOutsideCrate />
    <DkBarn />
    <BarnInsideCrate />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <RaftersFairy />
    <BarnFairy />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <LankyMill />
    <SpiderBoss />
    <MillsEnemies />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DkKasplat />
  </div>
  </>
)
}

export default MillsChecks
