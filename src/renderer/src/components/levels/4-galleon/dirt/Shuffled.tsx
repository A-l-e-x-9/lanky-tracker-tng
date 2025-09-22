import RainbowCoinPool from '@renderer/src/components/pools/RainbowCoins'
import { useGeneralDirt } from '@renderer/src/hooks/galleon'
import { useShuffleDirt } from '@renderer/src/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralDirt()
  return (
    <RainbowCoinPool>
      <GalleonCheck id={4270} name="Galleon Dirt Location #1" canGetLogic={thing} />
      <GalleonCheck id={4271} name="Galleon Dirt Location #2" canGetLogic={thing} />
    </RainbowCoinPool>
  )
}

const ShuffledDirtLocations: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirtLocations
