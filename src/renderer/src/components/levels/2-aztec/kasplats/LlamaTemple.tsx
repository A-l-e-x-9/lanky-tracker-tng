import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useLlamaLavaKasplat, useAztecLlamaTemple } from '@renderer/hooks/aztec'
import { useGrape } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const lankyVanillaKasplat = useLlamaLavaKasplat()
const canGoInLlamaTemple = useAztecLlamaTemple()
const hasGrapes = useGrape()
return (
    <KasplatPool>
      <AztecCheck
        id={52002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (the lava pedestal GB)"
        region="Llama Temple"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
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
    </KasplatPool>
  )
}

const LlamaKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default LlamaKasplats
