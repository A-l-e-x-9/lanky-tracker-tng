import { useDkHutGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const PowerHut: React.FC = () => {
  const hutGb = useDkHutGb()
  return (
    <FactoryCheck
      id={3002}
      name="Factory DK Power Hut"
      region="Storage And Arcade"
      canGetLogic={hutGb.in}
      canGetBreak={hutGb.out}
    />
  )
}

export default PowerHut
