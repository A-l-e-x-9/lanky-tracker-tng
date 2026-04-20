import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useAztecTinyTemple, useTinyTempleIce } from '@renderer/hooks/aztec'
import { useCamera, useDive } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const hasDiving = useDive()
  const canGoInTinyTemple = useAztecTinyTemple()
  const iceMelted = useTinyTempleIce()
  return (
    <FairyPool>
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

const TTFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default TTFairies
