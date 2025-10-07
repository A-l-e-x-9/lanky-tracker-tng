import { useTinyProductionGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const TinyProduction: React.FC = () => {
  const prodGb = useTinyProductionGb()
  return (
    <FactoryCheck
      id={3033}
      name="Tiny's Twirling Bonus Barrel"
      region="Prod Room"
      canGetLogic={prodGb.in}
      canGetBreak={prodGb.out}
    />
  )
}

export default TinyProduction
