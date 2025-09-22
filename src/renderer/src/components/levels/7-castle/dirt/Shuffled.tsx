import RainbowCoinPool from '@renderer/src/components/pools/RainbowCoins'
import { useGeneralDirt } from '@renderer/src/hooks/castle'
import { useShuffleDirt } from '@renderer/src/hooks/settings'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
  const dirt = useGeneralDirt()
  return (
    <RainbowCoinPool>
      <CastleCheck id={7270} name="Castle Dirt Location #1" canGetLogic={dirt} />
      <CastleCheck id={7271} name="Castle Dirt Location #2" canGetLogic={dirt} />
    </RainbowCoinPool>
  )
}

const ShuffledDirtLocations: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirtLocations
