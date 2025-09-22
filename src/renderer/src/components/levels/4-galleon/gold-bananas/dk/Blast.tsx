import { useDkBlastGb } from '@renderer/src/hooks/galleon'
import GalleonCheck from '../../check'

const FreeSeal: React.FC = () => {
  const blastGb = useDkBlastGb()
  return (
    <GalleonCheck
      id={4002}
      name="Galleon DK Free the Seal"
      region="Shipyard Outskirts"
      canGetLogic={blastGb.in}
      canGetBreak={blastGb.out}
    />
  )
}

export default FreeSeal
