import FairyPool from '@renderer/src/components/pools/Fairies'
import VanillaFairy from '@renderer/src/components/pools/VanillaFairy'
import { useRaftersFairy } from '@renderer/src/hooks/forest'
import ForestCheck from '../check'

const RaftersFairy: React.FC = () => {
  const rafters = useRaftersFairy()
  return (
    <FairyPool>
      <VanillaFairy>
        <ForestCheck
          id={5080}
          name="Forest Fairy (Dark Rafters)"
          region="Forest Mills"
          canGetLogic={rafters.in}
          canGetBreak={rafters.out}
        />
      </VanillaFairy>
    </FairyPool>
  )
}

export default RaftersFairy
