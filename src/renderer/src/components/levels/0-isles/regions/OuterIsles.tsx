import CabinIsleDirt from '../dirt/CabinIsle'
import SmallIslandFairy from '../fairies/SmallIsland'
import PoundX from '../gold-bananas/chunky/PoundX'
import FeatherCage from '../gold-bananas/tiny/FeatherCage'
import FairyReward from '../gold-bananas/tiny/FairyReward'
import ReturnFairies from '../gold-bananas/tiny/ReturnFairies'

const OuterIslesChecks: React.FC = () => (
  <>
    <FeatherCage />
    <PoundX />
    <SmallIslandFairy />
    <CabinIsleDirt />
    <FairyReward />
    <ReturnFairies />
  </>
)

export default OuterIslesChecks
