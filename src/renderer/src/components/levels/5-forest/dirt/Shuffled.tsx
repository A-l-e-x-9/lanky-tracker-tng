import RainbowCoinPool from '@renderer/src/components/pools/RainbowCoins'
import { useGeneralDirt } from '@renderer/src/hooks/forest'
import { useShuffleDirt } from '@renderer/src/hooks/settings'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
  const dirt = useGeneralDirt()
  return (
    <RainbowCoinPool>
      <ForestCheck id={5270} name="Forest Dirt Location #1" canGetLogic={dirt} />
      <ForestCheck id={5271} name="Forest Dirt Location #2" canGetLogic={dirt} />
    </RainbowCoinPool>
  )
}

const ShuffledDirtLocations: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirtLocations
