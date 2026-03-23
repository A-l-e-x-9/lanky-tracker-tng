import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import OwlCrate from '../crates/Owl'
import OwlEnemies from '../enemies/Owl'
import OwlRace from '../gold-bananas/diddy/Owl'
import RabbitRace from '../gold-bananas/lanky/Race'
import AnthillBanana from '../gold-bananas/tiny/AnthillBanana'
import AnthillBean from '../gold-bananas/tiny/AnthillBean'
import LankyKasplat from '../kasplats/Lanky'

const OwlChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
const isBeanSeed = useDonkStore(useShallow((state) => state.winCondition.theBean)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <OwlRace />
    <RabbitRace />
    <AnthillBanana />
  </div>
  <div className={`grid ${isBeanSeed}`}>
    <AnthillBean />
  </div>
  <div className="grid">
    <OwlCrate />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <LankyKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <OwlEnemies />
  </div>
  </>
)
}

export default OwlChecks
