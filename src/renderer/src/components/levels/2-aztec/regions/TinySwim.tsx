import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import VultureArena from '../arenas/Vulture'
import TinySwimEnemies from '../enemies/TinySwim'
import FreeTiny from '../gold-bananas/diddy/FreeTiny'
import VultureShoot from '../gold-bananas/lanky/Vulture'
import TinyKlaptrap from '../gold-bananas/tiny/Klaptrap'
import TinyCage from '../gold-bananas/diddy/TinyCage'

const TinySwimChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <TinyKlaptrap />
    <TinyCage />
    <FreeTiny />
    <VultureShoot />
    <VultureArena />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <TinySwimEnemies />
  </div>
  </>
)
}

export default TinySwimChecks
