import FairyPool from '@renderer/src/components/pools/Fairies'
import VanillaFairy from '@renderer/src/components/pools/VanillaFairy'
import { useTinyFairy } from '@renderer/src/hooks/aztec'
import AztecCheck from '../check'

const DoorFairy: React.FC = () => {
  const door = useTinyFairy()
  return (
    <FairyPool>
      <VanillaFairy>
        <AztecCheck
          id={2081}
          name="Aztec Fairy (Tiny 5-Door Temple)"
          region="5 Door Temple"
          canGetLogic={door.in}
          canGetBreak={door.out}
        />
      </VanillaFairy>
    </FairyPool>
  )
}

export default DoorFairy
