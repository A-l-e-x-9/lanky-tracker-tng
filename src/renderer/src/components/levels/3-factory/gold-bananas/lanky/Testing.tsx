import GBPool from '@renderer/components/pools/GB'
import { useLankyTestingGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const TestingBarrel: React.FC = () => {
  const testGb = useLankyTestingGb()
  return (
  <GBPool>
    <FactoryCheck
      id={3020}
      name="Lanky's Balloon Barrel"
      region="Testing Room"
      canGetLogic={testGb.in}
      canGetBreak={testGb.out}
    />
    </GBPool>
  )
}

export default TestingBarrel
