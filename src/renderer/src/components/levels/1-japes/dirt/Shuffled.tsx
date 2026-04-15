import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import LowlandDirt from './Lowlands'
import HillsideDirt from './Hillside'
import MineDirt from './Mine'
import HiveDirt from './Hive'
import StormyDirt from './Stormy

const ShuffledDirt: React.FC = () => {
  return (
    <RainbowCoinPool>
      <LowlandDirt />
      <HillsideDirt />
      <MineDirt />
      <HiveDirt />
      <StormyDirt />
    </RainbowCoinPool>
  )
}

export default ShuffledDirt
