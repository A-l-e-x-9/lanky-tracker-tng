import { useLankyProductionGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const LankyProduction: React.FC = () => {
  const prodGb = useLankyProductionGb()
  return (
    <FactoryCheck
      id={3023}
      name="Lanky's Prod Room Handstand"
      region="Prod Room"
      canGetLogic={prodGb.in}
      canGetBreak={prodGb.out}
    />
  )
}

export default LankyProduction
