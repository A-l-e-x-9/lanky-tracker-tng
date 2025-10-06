import { useChunkyVaseGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const VaseBanana: React.FC = () => {
  const vaseGb = useChunkyVaseGb()
  return (
    <AztecCheck
      id={2040}
      name="Chunky's Vases"
      region="Aztec Caves"
      canGetLogic={vaseGb.in}
      canGetBreak={vaseGb.out}
    />
  )
}

export default VaseBanana
