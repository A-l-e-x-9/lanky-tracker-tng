import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useBlockKasplat } from '@renderer/hooks/factory'
import { useMini } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const chunkyVanillaKasplat = useBlockKasplat()
const hasMiniMonkey = useMini()
  return (
    <KasplatPool>
      <FactoryCheck
        id={53004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (at the Block Tower)"
        region="Testing Room"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <FactoryCheck
        id={53010}
        name="Shuffled Kasplat: Window shopping from Snide's room"
        region="Testing Room"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <FactoryCheck
        id={53013}
        name="Shuffled Kasplat: At Tiny's dartboard"
        region="Testing Room"
        canGetLogic={chunkyVanillaKasplat.in && hasMiniMonkey}
        canGetBreak={chunkyVanillaKasplat.out && hasMiniMonkey}
      />
    </KasplatPool>
  )
}

const TestingKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default TestingKasplats
