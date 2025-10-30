import GBPool from '@renderer/components/pools/GB'
import { useDiddyLighthouseGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const DiddyLighthouse: React.FC = () => {
  const shipGb = useDiddyLighthouseGb()
  return (
  <GBPool>
    <GalleonCheck
      id={4010}
      name="Top of the Lighthouse"
      region="Lighthouse Area"
      canGetLogic={shipGb.in}
      canGetBreak={shipGb.out}
    />
    </GBPool>
  )
}

export default DiddyLighthouse
