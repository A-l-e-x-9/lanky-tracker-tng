import { useLankyTestingGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const TestingBarrel: React.FC = () => {
  const testGb = useLankyTestingGb()
  return (
    <FactoryCheck
      id={3020}
      name="Lanky's Balloon Barrel"
      region="Testing Room"
      canGetLogic={testGb.in}
      canGetBreak={testGb.out}
    />
  )
}

export default TestingBarrel
