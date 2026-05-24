import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import StartDirt from './Start'
import StarcadeDirt from './Starcade'
import TestingDirt from './Testing'
import RNDDirt from './RND'
import ProdRoomDirt from './ProdRoom'

const ShuffledDirt: React.FC = () => {
  return (
    <RainbowCoinPool>
      <StartDirt />
      <StarcadeDirt />
      <TestingDirt />
      <RNDDirt />
      <ProdRoomDirt />
    </RainbowCoinPool>
  )
}

export default ShuffledDirt
