import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useGeneralFairy, useAztecBack } from '@renderer/hooks/aztec'
import { useCamera } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  const isBreathing = useGeneralFairy()
  const hasCam = useCamera()
  const canReachBack = useAztecBack()
  return (
    <FairyPool>
      <AztecCheck
        id={42003}
        name="Shuffled Fairy: At the oasis"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={42004}
        name="Shuffled Fairy: Behind the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={42007}
        name="Shuffled Fairy: At the Totem"
        region="Aztec Main Area"
        canGetLogic={canReachBack.in && hasCam}
        canGetBreak={canReachBack.out && hasCam}
      />
      <AztecCheck
        id={42008}
        name="Shuffled Fairy: At the Gong Tower"
        region="Aztec Main Area"
        canGetLogic={canReachBack.in && hasCam}
        canGetBreak={canReachBack.out && hasCam}
      />
    </FairyPool>
  )
}

const AztecMainFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default AztecMainFairies
