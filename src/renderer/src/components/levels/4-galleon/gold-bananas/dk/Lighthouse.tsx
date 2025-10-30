import GBPool from '@renderer/components/pools/GB'
import { useDkLighthouseGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const DkLighthouse: React.FC = () => {
  const lighthouseGb = useDkLighthouseGb()
  return (
  <GBPool>
    <GalleonCheck
      id={4001}
      name="Inside the Lighthouse"
      region="Lighthouse Area"
      canGetLogic={lighthouseGb.in}
      canGetBreak={lighthouseGb.out}
    />
    </GBPool>
  )
}

export default DkLighthouse
