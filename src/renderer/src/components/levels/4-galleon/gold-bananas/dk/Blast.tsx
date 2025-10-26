import GBPool from '@renderer/components/pools/GB'
import { useDkBlastGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const FreeSeal: React.FC = () => {
  const blastGb = useDkBlastGb()
  return (
  <GBPool>
    <GalleonCheck
      id={4002}
      name="Freeing the Seal"
      region="Shipyard Outskirts"
      canGetLogic={blastGb.in}
      canGetBreak={blastGb.out}
    />
    </GBPool>
  )
}

export default FreeSeal
