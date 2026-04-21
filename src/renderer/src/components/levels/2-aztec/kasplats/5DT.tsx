import KasplatPool from '@renderer/components/pools/Kasplats'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import AztecCheck from '../check'
import { useChunkyKasplat, useDk5DoorGb } from '@renderer/hooks/aztec'

const Shuffled: React.FC = () => {
const chunkyVanillaKasplat = useChunkyKasplat()
const canDoDK5DT = useDk5DoorGb()
return (
    <KasplatPool>
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

const FDTKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default FDTKasplats
