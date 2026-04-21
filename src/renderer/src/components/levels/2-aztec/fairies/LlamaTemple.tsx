import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useLlamaFairy, useAztecLlamaTemple } from '@renderer/hooks/aztec'
import { useCamera, useGrape } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const hasGrapes = useGrape()
  const vanillaFairy2 = useLlamaFairy()
  const canGoInLlamaTemple = useAztecLlamaTemple()
  return (
    <FairyPool>
      <AztecCheck
        id={42001}
        name="Shuffled Fairy: Vanilla Location #2 (Llama Temple)"
        region="Llama Temple"
        canGetLogic={vanillaFairy2.in}
        canGetBreak={vanillaFairy2.out}
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
    </FairyPool>
  )
}

const LlamaFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default LlamaFairies
