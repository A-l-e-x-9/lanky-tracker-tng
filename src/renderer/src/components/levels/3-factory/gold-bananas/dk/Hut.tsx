import { useDkHutGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const PowerHut: React.FC = () => {
  const hutGb = useDkHutGb()
  return (
    <FactoryCheck
      id={3002}
      name="DK's Prod Room Power Hut"
      region="Storage and Arcade Area"
      canGetLogic={hutGb.in}
      canGetBreak={hutGb.out}
    />
  )
}

export default PowerHut
