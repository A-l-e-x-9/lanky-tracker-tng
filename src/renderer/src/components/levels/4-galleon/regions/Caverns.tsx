import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CavernArena from '../arenas/Cavern'
import CavernsEnemies from '../enemies/Caverns'
import ChestFairy from '../fairies/Chest'
import CannonGame from '../gold-bananas/chunky/Cannon'
import GalleonChest from '../gold-bananas/chunky/Chest'
import LankyKasplat from '../kasplats/Lanky'
import TinyKasplat from '../kasplats/Tiny'

const CavernsChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <CannonGame />
    <GalleonChest />
    <ChestFairy />
    <CavernArena />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <LankyKasplat />
    <TinyKasplat />
    <CavernsEnemies />
  </div>
  </>
)
}

export default CavernsChecks
