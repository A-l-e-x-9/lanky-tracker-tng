import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GongCrate from '../crates/Gongs'
import LlamaOutsideCrate from '../crates/LlamaOutside'
import TotemEnemies from '../enemies/Totem'
import RamGongs from '../gold-bananas/diddy/Gong'
import VultureRace from '../gold-bananas/diddy/Vulture'
import BeetleRace from '../gold-bananas/tiny/Beetle'

const TotemChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <RamGongs />
    <VultureRace />
    <BeetleRace />
    <LlamaOutsideCrate />
    <GongCrate />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <TotemEnemies />
  </div>
  </>
)
}

export default TotemChecks
