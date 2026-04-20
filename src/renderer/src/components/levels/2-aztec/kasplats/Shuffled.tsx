import KasplatPool from '@renderer/components/pools/Kasplats'
import { useLlamaLavaKasplat, useChunkyKasplat, useAztecLlamaTemple, useDk5DoorGb } from '@renderer/hooks/aztec'
import { useGrape } from '@renderer/hooks/kongs'
import AztecCheck from '../check'
import CaveKasplats from './Cave'
import AztecMainKasplats from './AztecMain'
import TTKasplats from './TinyTemple'

const ShuffledKasplats: React.FC = () => {
const lankyVanillaKasplat = useLlamaLavaKasplat()
const chunkyVanillaKasplat = useChunkyKasplat()
const canGoInLlamaTemple = useAztecLlamaTemple()
const canDoDK5DT = useDk5DoorGb()
const hasGrapes = useGrape()
  return (
    <KasplatPool>
      <CaveKasplats />
      <AztecMainKasplats />
      <TTKasplats />
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
        id={52012}
        name="Shuffled Kasplat: Behind the Llama"
        region="Llama Temple"
        canGetLogic={canGoInLlamaTemple.in}
        canGetBreak={canGoInLlamaTemple.out}
      />
      <AztecCheck
        id={52015}
        name="Shuffled Kasplat: A contestant on Match Game '64"
        region="Llama Temple"
        canGetLogic={canGoInLlamaTemple.in && hasGrapes}
        canGetBreak={canGoInLlamaTemple.out && hasGrapes}
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
