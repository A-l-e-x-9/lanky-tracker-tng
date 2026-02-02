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
return (
  <>
  <div className="grid">
    <OwlRace />
    <RabbitRace />
    <AnthillBanana />
    <AnthillBean />
    <OwlCrate />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <LankyKasplat />
    <OwlEnemies />
  </div>
  </>
)
}

export default OwlChecks
