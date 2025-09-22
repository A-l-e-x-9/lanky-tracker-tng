import { useDiddyMechGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Mechfish: React.FC = () => {
  const mechGb = useDiddyMechGb()
  return (
    <GalleonCheck
      id={4012}
      name="The Mechfish Agenda"
      region="Shipyard Outskirts"
      canGetLogic={mechGb.in}
      canGetBreak={mechGb.out}
    />
  )
}

export default Mechfish
