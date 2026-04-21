import KasplatPool from '@renderer/components/pools/Kasplats'
import { useChunkyKasplat, useDk5DoorGb } from '@renderer/hooks/aztec'
import AztecCheck from '../check'
import CaveKasplats from './Cave'
import AztecMainKasplats from './AztecMain'
import TTKasplats from './TinyTemple'
import LlamaKasplats from './LlamaTemple'

const ShuffledKasplats: React.FC = () => {
const chunkyVanillaKasplat = useChunkyKasplat()
const canDoDK5DT = useDk5DoorGb()
  return (
    <KasplatPool>
      <CaveKasplats />
      <AztecMainKasplats />
      <TTKasplats />
      <LlamaKasplats />
      <AztecCheck
        id={52004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (in his 5DT room)"
        region="5 Door Temple"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
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
