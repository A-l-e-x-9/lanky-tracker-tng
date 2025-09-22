import RainbowCoinPool from '@renderer/src/components/pools/RainbowCoins'
import { useGeneralDirt } from '@renderer/src/hooks/factory'
import { useShuffleDirt } from '@renderer/src/hooks/settings'
import FactoryCheck from '../check'

const Shuffled: React.FC = () => {
  const dirt = useGeneralDirt()
  return (
    <RainbowCoinPool>
      <FactoryCheck id={3270} name="Factory Dirt Location #1" canGetLogic={dirt} />
      <FactoryCheck id={3271} name="Factory Dirt Location #2" canGetLogic={dirt} />
    </RainbowCoinPool>
  )
}

const ShuffledDirtLocations: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirtLocations
