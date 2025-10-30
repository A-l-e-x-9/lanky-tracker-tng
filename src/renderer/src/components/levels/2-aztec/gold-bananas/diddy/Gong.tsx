import GBPool from '@renderer/components/pools/GB'
import { useDiddyGongGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const RamGongs: React.FC = () => {
  const gongGb = useDiddyGongGb()
  return (
  <GBPool>
    <AztecCheck
      id={2011}
      name="Diddy's Gongs"
      region="Aztec Main Area"
      canGetLogic={gongGb.in}
      canGetBreak={gongGb.out}
    />
    </GBPool>
  )
}

export default RamGongs
