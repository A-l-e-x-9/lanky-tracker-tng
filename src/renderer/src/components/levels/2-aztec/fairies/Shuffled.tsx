import FairyPool from '@renderer/components/pools/Fairies'
import { useTinyFairy, useLlamaFairy, useDk5DoorGb, useDiddy5DoorGb, useLanky5DoorGb, useChunky5DoorGb, useAztecLlamaTemple, useAztecTinyTemple, useTinyTempleIce } from '@renderer/hooks/aztec'
import { useCamera, useGrape, useDive } from '@renderer/hooks/kongs'
import AztecCheck from '../check'
import CaveFairies from './Cave'
import AztecMainFairies from './AztecMain'

const ShuffledFairies: React.FC = () => {
  const hasCam = useCamera()
  const hasDiving = useDive()
  const hasGrapes = useGrape()
  const vanillaFairy1 = useTinyFairy()
  const vanillaFairy2 = useLlamaFairy()
  const canGoInDK5DT = useDk5DoorGb()
  const canGoInDiddy5DT = useDiddy5DoorGb()
  const canGoInLanky5DT = useLanky5DoorGb()
  const canGoInChunky5DT = useChunky5DoorGb()
  const canGoInLlamaTemple = useAztecLlamaTemple()
  const canGoInTinyTemple = useAztecTinyTemple()
  const iceMelted = useTinyTempleIce()
  return (
    <FairyPool>
      <CaveFairies />
      <AztecMainFairies />
      <AztecCheck
        id={42000}
        name="Shuffled Fairy: Vanilla Location #1 (Tiny's 5DT room)"
        region="5 Door Temple"
        canGetLogic={vanillaFairy1.in}
        canGetBreak={vanillaFairy1.out}
      />
      <AztecCheck
        id={42001}
        name="Shuffled Fairy: Vanilla Location #2 (Llama Temple)"
        region="Llama Temple"
        canGetLogic={vanillaFairy2.in}
        canGetBreak={vanillaFairy2.out}
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
      <AztecCheck
        id={42013}
        name="Shuffled Fairy: Over the Swimming Pool"
        region="Llama Temple"
        canGetLogic={canGoInLlamaTemple.in && hasCam}
        canGetBreak={canGoInLlamaTemple.out && hasCam}
      />
      <AztecCheck
        id={42014}
        name="Shuffled Fairy: Playing Match Game and doing BLANK"
        region="Llama Temple"
        canGetLogic={canGoInLlamaTemple.in && hasGrapes && hasCam}
        canGetBreak={canGoInLlamaTemple.out && hasGrapes && hasCam}
      />
      <AztecCheck
        id={42015}
        name="Shuffled Fairy: Over the Tiny Temple's pool"
        region="Tiny Temple"
        canGetLogic={canGoInTinyTemple.in && hasCam}
        canGetBreak={canGoInTinyTemple.out && hasCam}
      />
      <AztecCheck
        id={42016}
        name="Shuffled Fairy: At Tiny's cage"
        region="Tiny Temple"
        canGetLogic={canGoInTinyTemple.in && iceMelted && hasDiving.in && hasCam}
        canGetBreak={canGoInTinyTemple.out && iceMelted && hasDiving.out && hasCam}
      />
    </FairyPool>
  )
}

export default ShuffledFairies
