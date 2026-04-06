import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import DKIslandDirt from './DKIsland'
import KremIslandDirt from './KremIsland'
import OuterDirt from './OuterRim'
import JapesForestDirt from './JapesForest'
import CavesHelmDirt from './CavesHelm'

const ShuffledDirt: React.FC = () => {
  return (
    <RainbowCoinPool>
      <DKIslandDirt />
      <KremIslandDirt />
      <OuterDirt />
      <JapesForestDirt />
      <CavesHelmDirt />
    </RainbowCoinPool>
  )
}

export default ShuffledDirt
