import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useChunkyVaseGb, useAztecBack } from '@renderer/hooks/aztec'
import { useCamera } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const canReachVases = useChunkyVaseGb()
  const canReachBack = useAztecBack()
  return (
    <FairyPool>
      <AztecCheck
        id={42002}
        name="Shuffled Fairy: Vase room"
        region="Aztec Caves"
        canGetLogic={canReachVases.in && hasCam}
        canGetBreak={canReachVases.out && hasCam}
      />
      <AztecCheck
        id={42005}
        name="Shuffled Fairy: On the path to Cranky's"
        region="Aztec Caves"
        canGetLogic={canReachBack.in && hasCam}
        canGetBreak={canReachBack.out && hasCam}
      />
      <AztecCheck
        id={42006}
        name="Shuffled Fairy: At Chunky's Bonus Barrel"
        region="Aztec Caves"
        canGetLogic={canReachBack.in && hasCam}
        canGetBreak={canReachBack.out && hasCam}
      />
    </FairyPool>
  )
}

const CaveFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default CaveFairies
