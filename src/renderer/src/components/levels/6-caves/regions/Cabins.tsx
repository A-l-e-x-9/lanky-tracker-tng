import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CabinArena from '../arenas/Cabin'
import CabinsEnemies from '../enemies/Cabins'
import CabinFairy from '../fairies/Cabin'
import ChunkyCabin from '../gold-bananas/chunky/Cabin'
import DiddyCandleCabin from '../gold-bananas/diddy/Candle'
import DiddyGauntletCabin from '../gold-bananas/diddy/Gauntlet'
import DkGauntletCabin from '../gold-bananas/dk/Gauntlet'
import RotatingCabin from '../gold-bananas/dk/Rotate'
import SprintCabin from '../gold-bananas/lanky/Cabin'
import TinyCabin from '../gold-bananas/tiny/Cabin'
import TinyKasplat from '../kasplats/Tiny'

const CabinsChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className={`grid ${isKremKaptureSeed}`}>
    <DkGauntletCabin />
  </div>
  <div className="grid">
    <ChunkyCabin />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <DiddyGauntletCabin />
    <TinyCabin />
    <DiddyCandleCabin />
  </div>
  <div className="grid">
    <CabinFairy />
    <RotatingCabin />
    <CabinArena />
    <SprintCabin />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <TinyKasplat />
    <CabinsEnemies />
  </div>
  </>
)
}

export default CabinsChecks
