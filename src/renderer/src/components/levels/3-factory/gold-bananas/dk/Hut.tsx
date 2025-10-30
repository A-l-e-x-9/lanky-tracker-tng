import GBPool from '@renderer/components/pools/GB'
import { useDkHutGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const PowerHut: React.FC = () => {
  const hutGb = useDkHutGb()
  return (
  <GBPool>
    <FactoryCheck
      id={3002}
      name="DK's Prod Room Power Hut"
      region="Storage and Arcade Area"
      canGetLogic={hutGb.in}
      canGetBreak={hutGb.out}
    />
    </GBPool>
  )
}

export default PowerHut
