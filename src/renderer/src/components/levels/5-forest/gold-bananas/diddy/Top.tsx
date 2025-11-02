import GBPool from '@renderer/components/pools/GB'
import { useDiddyTopGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const MushroomTop: React.FC = () => {
  const topGb = useDiddyTopGb()
  return (
  <GBPool>
    <ForestCheck
      id={5010}
      name="Bonus Barrel above the Mushroom"
      region="Forest Area 3"
      canGetLogic={topGb.in}
      canGetBreak={topGb.out}
    />
    </GBPool>
  )
}

export default MushroomTop
