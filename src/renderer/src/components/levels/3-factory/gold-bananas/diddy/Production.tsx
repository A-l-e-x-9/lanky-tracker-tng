import GBPool from '@renderer/components/pools/GB'
import { useDiddyProductionGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const DiddyProduction: React.FC = () => {
  const prodGb = useDiddyProductionGb()
  return (
  <GBPool>
    <FactoryCheck
      id={3013}
      name="Diddy's Prod Room Bounce"
      region="Prod Room"
      canGetLogic={prodGb.in}
      canGetBreak={prodGb.out}
    />
    </GBPool>
  )
}

export default DiddyProduction
