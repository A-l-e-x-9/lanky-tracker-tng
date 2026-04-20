import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useOasisKasplat, useLlamaLavaKasplat, useChunkyKasplat, useAztecBack, useAztecLlamaTemple, useAztecTinyTemple, useTinyTempleIce, useDk5DoorGb } from '@renderer/hooks/aztec'
import { useDive, useVine, useClimbing, useRocket, useDiddy, useTiny, useGrape } from '@renderer/hooks/kongs'
import AztecCheck from '../check'
import CaveKasplats from './Cave'

const ShuffledKasplats: React.FC = () => {
const diddyVanillaKasplat = useOasisKasplat()
const lankyVanillaKasplat = useLlamaLavaKasplat()
const chunkyVanillaKasplat = useChunkyKasplat()
const isBreathing = useGeneralThing()
const canEnterBack = useAztecBack()
const canGoInLlamaTemple = useAztecLlamaTemple()
const canGoInTinyTemple = useAztecTinyTemple()
const canGetPastTTIce = useTinyTempleIce()
const canDoDK5DT = useDk5DoorGb()
const hasDiving = useDive()
const hasVines = useVine()
const hasClimbing = useClimbing()
const hasJetbarrel = useRocket()
const hasDiddy = useDiddy()
const hasTiny = useTiny()
const hasGrapes = useGrape()
  return (
    <KasplatPool>
      <CaveKasplats />
      <AztecCheck
        id={52001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (on top of the Tiny Temple)"
        region="Aztec Main Area"
        canGetLogic={diddyVanillaKasplat.in}
        canGetBreak={diddyVanillaKasplat.out}
      />
      <AztecCheck
        id={52002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (the lava pedestal GB)"
        region="Llama Temple"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
      />
      <AztecCheck
        id={52004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (in his 5DT room)"
        region="5 Door Temple"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <AztecCheck
        id={52006}
        name="Shuffled Kasplat: On the oasis"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={52007}
        name="Shuffled Kasplat: On top of the Llama's cage"
        region="Aztec Main Area"
        canGetLogic={isBreathing.in && hasClimbing && (hasVines || hasJetbarrel)}
        canGetBreak={isBreathing.out && (hasDiddy || hasTiny)}
      />
      <AztecCheck
        id={52010}
        name="Shuffled Kasplat: Back top of the 5-Door Temple"
        region="Aztec Main Area"
        canGetLogic={canEnterBack.in}
        canGetBreak={canEnterBack.out}
      />
      <AztecCheck
        id={52011}
        name="Shuffled Kasplat: Platform near Snide's"
        region="Aztec Main Area"
        canGetLogic={canEnterBack.in}
        canGetBreak={canEnterBack.out}
      />
      <AztecCheck
        id={52012}
        name="Shuffled Kasplat: Behind the Llama"
        region="Llama Temple"
        canGetLogic={canGoInLlamaTemple.in}
        canGetBreak={canGoInLlamaTemple.out}
      />
      <AztecCheck
        id={52013}
        name="Shuffled Kasplat: At Tiny's Prison"
        region="Tiny Temple"
        canGetLogic={canGoInTinyTemple.in && canGetPastTTIce.in && hasDiving.in}
        canGetBreak={canGoInTinyTemple.out && canGetPastTTIce.out && hasDiving.out}
      />
      <AztecCheck
        id={52014}
        name="Shuffled Kasplat: Behind Diddy's gongs"
        region="Aztec Main Area"
        canGetLogic={canEnterBack.in}
        canGetBreak={canEnterBack.out}
      />
      <AztecCheck
        id={52015}
        name="Shuffled Kasplat: A contestant on Match Game '64"
        region="Llama Temple"
        canGetLogic={canGoInLlamaTemple.in && hasGrapes}
        canGetBreak={canGoInLlamaTemple.out && hasGrapes}
      />
      <AztecCheck
        id={52016}
        name="Shuffled Kasplat: At Tiny's barrel in the Tiny Temple"
        region="Tiny Temple"
        canGetLogic={canGoInTinyTemple.in}
        canGetBreak={canGoInTinyTemple.out}
      />
      <AztecCheck
        id={52017}
        name="Shuffled Kasplat: Inside DK's 5DT room"
        region="5 Door Temple"
        canGetLogic={canDoDK5DT.in}
        canGetBreak={canDoDK5DT.out}
      />
    </KasplatPool>
  )
}

export default ShuffledKasplats
