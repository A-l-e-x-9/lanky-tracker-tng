import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CabinIsleDirt from '../dirt/CabinIsle'
import SmallIslandFairy from '../fairies/SmallIsland'
import PoundX from '../gold-bananas/chunky/PoundX'
import FeatherCage from '../gold-bananas/tiny/FeatherCage'
import ReturnFairies from '../gold-bananas/tiny/ReturnFairies'

const OuterIslesChecks: React.FC = () => {
const isFairySeed = useDonkStore(useShallow((state) => [state.winCondition.fairies && !state.settings.poolFairies])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <FeatherCage />
    <PoundX />
    <CabinIsleDirt />
    <ReturnFairies />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <SmallIslandFairy />
  </div>
  </>
)
}

export default OuterIslesChecks
