import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useAztecTinyTemple, useTinyTempleIce } from '@renderer/hooks/aztec'
import { useDive } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canGoInTinyTemple = useAztecTinyTemple()
const canGetPastTTIce = useTinyTempleIce()
const hasDiving = useDive()
return (
    <KasplatPool>
      <AztecCheck
        id={52013}
        name="Shuffled Kasplat: At Tiny's Prison"
        region="Tiny Temple"
        canGetLogic={canGoInTinyTemple.in && canGetPastTTIce.in && hasDiving.in}
        canGetBreak={canGoInTinyTemple.out && canGetPastTTIce.out && hasDiving.out}
      />
      <AztecCheck
        id={52016}
        name="Shuffled Kasplat: At Tiny's barrel in the Tiny Temple"
        region="Tiny Temple"
        canGetLogic={canGoInTinyTemple.in}
        canGetBreak={canGoInTinyTemple.out}
      />
    </KasplatPool>
  )
}

const TTKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default TTKasplats
