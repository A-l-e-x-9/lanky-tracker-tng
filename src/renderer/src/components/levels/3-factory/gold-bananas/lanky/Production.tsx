import GBPool from '@renderer/components/pools/GB'
import { useLankyProductionGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const LankyProduction: React.FC = () => {
  const prodGb = useLankyProductionGb()
  return (
  <GBPool>
    <FactoryCheck
      id={3023}
      name="Lanky's Prod Room Handstand"
      region="Prod Room"
      canGetLogic={prodGb.in}
      canGetBreak={prodGb.out}
    />
    </GBPool>
  )
}

export default LankyProduction
