import GBPool from '@renderer/components/pools/GB'
import { useChunkyVaseGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const VaseBanana: React.FC = () => {
  const vaseGb = useChunkyVaseGb()
  return (
  <GBPool>
    <AztecCheck
      id={2040}
      name="Chunky's Vases"
      region="Aztec Caves"
      canGetLogic={vaseGb.in}
      canGetBreak={vaseGb.out}
    />
    </GBPool>
  )
}

export default VaseBanana
