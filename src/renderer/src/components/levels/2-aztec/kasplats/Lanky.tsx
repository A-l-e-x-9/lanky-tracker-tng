import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useLlamaLavaKasplat } from '@renderer/hooks/aztec'
import AztecCheck from '../check'

const LankyKasplat: React.FC = () => {
  const lava = useLlamaLavaKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <AztecCheck
          id={2052}
          name="Kasplat at the Lava Pedestals"
          region="Llama Temple"
          canGetLogic={lava.in}
          canGetBreak={lava.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default LankyKasplat
