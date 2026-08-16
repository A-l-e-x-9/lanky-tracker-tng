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
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
const isBeanSeed = useDonkStore(useShallow((state) => state.winCondition.theBean)) ? 'foolish' : ''
const beanInRotation = useDonkStore(useShallow((state) => state.settings.poolBean)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <OwlRace />
    <RabbitRace />
    <AnthillBanana />
  </div>
  <div className={`grid ${isBeanSeed && beanInRotation}`}>
    <AnthillBean />
  </div>
  <div className="grid">
    <OwlCrate />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <LankyKasplat />
  </div>
  <div className="grid">
    <OwlEnemies />
  </div>
  </>
)
}

export default OwlChecks
