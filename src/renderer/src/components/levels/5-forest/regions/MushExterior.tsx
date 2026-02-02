import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import MushroomArena from '../arenas/Mushroom'
import MushExteriorEnemies from '../enemies/MushExterior'
import MushroomTop from '../gold-bananas/diddy/Top'
import ForestBlast from '../gold-bananas/dk/Blast'
import ChunkyKasplat from '../kasplats/Chunky'
import TinyKasplat from '../kasplats/Tiny'

const MushExteriorChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <ForestBlast />
    <MushroomTop />
    <MushroomArena />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <TinyKasplat />
    <ChunkyKasplat />
    <MushExteriorEnemies />
  </div>
  </>
)
}

export default MushExteriorChecks
