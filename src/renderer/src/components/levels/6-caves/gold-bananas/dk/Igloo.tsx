import GBPool from '@renderer/components/pools/GB'
import { useDkIglooGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const DkIgloo: React.FC = () => {
  const iglooGb = useDkIglooGb()
  return (
  <GBPool>
    <CavesCheck
      id={6002}
      name="DK's 5 Door Igloo"
      region="Caves Igloo"
      canGetLogic={iglooGb.in}
      canGetBreak={iglooGb.out}
    />
    </GBPool>
  )
}

export default DkIgloo
