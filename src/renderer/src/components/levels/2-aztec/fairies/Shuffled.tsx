import FairyPool from '@renderer/components/pools/Fairies'
import { useGeneralFairy, useChunkyVaseGb, useAztecBack, useDk5DoorGb, useDiddy5DoorGb, useLanky5DoorGb, useChunky5DoorGb, useAztecLlamaTemple, useAztecTinyTemple, useTinyTempleIce } from '@renderer/hooks/aztec'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera, useGrape, useDive } from '@renderer/hooks/kongs'
import AztecCheck from '../check'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const hasDiving = useDive()
  const hasGrapes = useGrape()
  const isBreathing = useGeneralFairy()
  const vanillaFairy1 = useTinyFairy()
  const vanillaFairy2 = useLlamaFairy()
  const canReachVases = useChunkyVaseGb()
  const canReachBack = useAztecBack()
  const canGoInDK5DT = useDk5DoorGb()
  const canGoInDiddy5DT = useDiddy5DoorGb()
  const canGoInLanky5DT = useLanky5DoorGb()
  const canGoInChunky5DT = useChunky5DoorGb()
  const canGoInLlamaTemple = useAztecLlamaTemple()
  const canGoInTinyTemple = useAztecTinyTemple()
  const iceMelted = useTinyTempleIce()
  return (
    <FairyPool>
      <AztecCheck
        id={12000}
        name="Shuffled Fairy: Vanilla Location #1 (Tiny's 5DT room)"
        region="5 Door Temple"
        canGetLogic={vanillaFairy1.in}
        canGetBreak={vanillaFairy1.out}
      />
      <AztecCheck
        id={12001}
        name="Shuffled Fairy: Vanilla Location #2 (Llama Temple)"
        region="Llama Temple"
        canGetLogic={vanillaFairy2.in}
        canGetBreak={vanillaFairy2.out}
      />
      <AztecCheck
        id={12002}
        name="Shuffled Fairy: Vase room"
        region="Aztec Caves"
        canGetLogic={canReachVases.in && hasCam}
        canGetBreak={canReachVases.out && hasCam}
      />
      <AztecCheck
        id={12003}
        name="Shuffled Fairy: At the oasis"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12004}
        name="Shuffled Fairy: Behind the Tiny Temple"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={12005}
        name="Shuffled Fairy: On the path to Cranky's"
        region="Aztec Caves"
        canGetLogic={canReachBack.in && hasCam}
        canGetBreak={canReachBack.out && hasCam}
      />
      <AztecCheck
        id={12006}
        name="Shuffled Fairy: At Chunky's Bonus Barrel"
        region="Aztec Caves"
        canGetLogic={canReachBack.in && hasCam}
        canGetBreak={canReachBack.out && hasCam}
      />
      <AztecCheck
        id={12007}
        name="Shuffled Fairy: At the Totem"
        region="Aztec Main Area"
        canGetLogic={canReachBack.in && hasCam}
        canGetBreak={canReachBack.out && hasCam}
      />
      <AztecCheck
        id={12008}
        name="Shuffled Fairy: At the Gong Tower"
        region="Aztec Main Area"
        canGetLogic={canReachBack.in && hasCam}
        canGetBreak={canReachBack.out && hasCam}
      />
      <AztecCheck
        id={12009}
        name="Shuffled Fairy: Inside DK's 5DT room"
        region="5 Door Temple"
        canGetLogic={canGoInDK5DT.in && hasCam}
        canGetBreak={canGoInDK5DT.out && hasCam}
      />
      <AztecCheck
        id={12010}
        name="Shuffled Fairy: Inside Diddy's 5DT room"
        region="5 Door Temple"
        canGetLogic={canGoInDiddy5DT.in && hasCam}
        canGetBreak={canGoInDiddy5DT.out && hasCam}
      />
      <AztecCheck
        id={12011}
        name="Shuffled Fairy: Inside Lanky's 5DT room"
        region="5 Door Temple"
        canGetLogic={canGoInLanky5DT.in && hasCam}
        canGetBreak={canGoInLanky5DT.out && hasCam}
      />
      <AztecCheck
        id={12012}
        name="Shuffled Fairy: Inside Chunky's 5DT room"
        region="5 Door Temple"
        canGetLogic={canGoInChunky5DT.in && hasCam}
        canGetBreak={canGoInChunky5DT.out && hasCam}
      />
      <AztecCheck
        id={12013}
        name="Shuffled Fairy: Over the Swimming Pool"
        region="Llama Temple"
        canGetLogic={canGoInLlamaTemple.in && hasCam}
        canGetBreak={canGoInLlamaTemple.out && hasCam}
      />
      <AztecCheck
        id={12014}
        name="Shuffled Fairy: Playing Match Game and doing BLANK"
        region="Llama Temple"
        canGetLogic={canGoInLlamaTemple.in && hasGrapes && hasCam}
        canGetBreak={canGoInLlamaTemple.out && hasGrapes && hasCam}
      />
      <AztecCheck
        id={12015}
        name="Shuffled Fairy: Over the Tiny Temple's pool"
        region="Tiny Temple"
        canGetLogic={canGoInTinyTemple.in && hasCam}
        canGetBreak={canGoInTinyTemple.out && hasCam}
      />
      <AztecCheck
        id={12016}
        name="Shuffled Fairy: At Tiny's cage"
        region="Tiny Temple"
        canGetLogic={canGoInTinyTemple.in && iceMelted && hasDiving.in && hasCam}
        canGetBreak={canGoInTinyTemple.out && iceMelted && hasDiving.out && hasCam}
      />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
