import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useTinyFairy, useDk5DoorGb, useDiddy5DoorGb, useLanky5DoorGb, useChunky5DoorGb } from '@renderer/hooks/aztec'
import { useCamera } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const vanillaFairy1 = useTinyFairy()
  const canGoInDK5DT = useDk5DoorGb()
  const canGoInDiddy5DT = useDiddy5DoorGb()
  const canGoInLanky5DT = useLanky5DoorGb()
  const canGoInChunky5DT = useChunky5DoorGb()
  return (
    <FairyPool>
      <AztecCheck
        id={42000}
        name="Shuffled Fairy: Vanilla Location #1 (Tiny's 5DT room)"
        region="5 Door Temple"
        canGetLogic={vanillaFairy1.in}
        canGetBreak={vanillaFairy1.out}
      />
      <AztecCheck
        id={42009}
        name="Shuffled Fairy: Inside DK's 5DT room"
        region="5 Door Temple"
        canGetLogic={canGoInDK5DT.in && hasCam}
        canGetBreak={canGoInDK5DT.out && hasCam}
      />
      <AztecCheck
        id={42010}
        name="Shuffled Fairy: Inside Diddy's 5DT room"
        region="5 Door Temple"
        canGetLogic={canGoInDiddy5DT.in && hasCam}
        canGetBreak={canGoInDiddy5DT.out && hasCam}
      />
      <AztecCheck
        id={42011}
        name="Shuffled Fairy: Inside Lanky's 5DT room"
        region="5 Door Temple"
        canGetLogic={canGoInLanky5DT.in && hasCam}
        canGetBreak={canGoInLanky5DT.out && hasCam}
      />
      <AztecCheck
        id={42012}
        name="Shuffled Fairy: Inside Chunky's 5DT room"
        region="5 Door Temple"
        canGetLogic={canGoInChunky5DT.in && hasCam}
        canGetBreak={canGoInChunky5DT.out && hasCam}
      />
    </FairyPool>
  )
}

const FDTFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default FDTFairies
