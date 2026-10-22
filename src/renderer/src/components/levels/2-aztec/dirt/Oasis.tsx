import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { useGeneralDirt, useAztecFront, useQuicksandPortal } from '@renderer/hooks/aztec'
import AztecCheck from '../check'

const OasisDirt: React.FC = () => {
  const thing = useGeneralDirt()
  const canReachOasis = useAztecFront()
  const qsPortal = useQuicksandPortal()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <AztecCheck
          id={2070}
          name="Oasis Dirt"
          region="Aztec Main Area"
          canGetLogic={thing.in && (canReachOasis.in || qsPortal.in)}
          canGetBreak={thing.out && (canReachOasis.out || qsPortal.out)}
        />
      </VanillaDirt>
    </RainbowCoinPool>
  )
}

export default OasisDirt
