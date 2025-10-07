import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useRaftersFairy } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const RaftersFairy: React.FC = () => {
  const rafters = useRaftersFairy()
  return (
    <FairyPool>
      <VanillaFairy>
        <ForestCheck
          id={5080}
          name="Fairy in the Dark Rafters"
          region="Forest Area 1"
          canGetLogic={rafters.in}
          canGetBreak={rafters.out}
        />
      </VanillaFairy>
    </FairyPool>
  )
}

export default RaftersFairy
