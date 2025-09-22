import RainbowCoinPool from '@renderer/src/components/pools/RainbowCoins'
import { useGeneralDirt } from '@renderer/src/hooks/aztec'
import { useShuffleDirt } from '@renderer/src/hooks/settings'
import AztecCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralDirt()
  return (
    <RainbowCoinPool>
      <AztecCheck
        id={2270}
        name="Aztec Dirt Location #1"
        canGetLogic={thing.in}
        canGetBreak={thing.out}
      />
      <AztecCheck
        id={2271}
        name="Aztec Dirt Location #2"
        canGetLogic={thing.in}
        canGetBreak={thing.out}
      />
    </RainbowCoinPool>
  )
}

const ShuffledDirtLocations: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirtLocations
