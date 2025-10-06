import { useChunkyHunkyGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const TunnelBarrel: React.FC = () => {
  const hunkyGb = useChunkyHunkyGb()
  return (
    <AztecCheck
      id={2042}
      name="Hunky Chunky Caged Bonus Barrel"
      region="Aztec Caves"
      canGetLogic={hunkyGb.in}
      canGetBreak={hunkyGb.out}
    />
  )
}

export default TunnelBarrel
