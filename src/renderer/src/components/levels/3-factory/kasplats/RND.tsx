import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useResearchKasplat } from '@renderer/hooks/factory'
import { useTrombone } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const lankyVanillaKasplat = useResearchKasplat()
const hasTrombone = useTrombone()
  return (
    <KasplatPool>
      <FactoryCheck
        id={53002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (guarding R&D secrets)"
        region="R&D Room"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
      />
      <FactoryCheck
        id={53012}
        name="Shuffled Kasplat: By the car race entrance"
        region="R&D Room"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
      />
      <FactoryCheck
        id={53016}
        name="Shuffled Kasplat: Ripping his hair out while playing Lanky's damn piano game"
        region="R&D Room"
        canGetLogic={lankyVanillaKasplat.in && hasTrombone}
        canGetBreak={lankyVanillaKasplat.out && hasTrombone}
      />
    </KasplatPool>
  )
}

const RNDKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default RNDKasplats
