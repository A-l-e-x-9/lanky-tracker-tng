import { useDkTunnelGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const QuicksandTunnel: React.FC = () => {
  const tunnelGb = useDkTunnelGb()
  return (
    <AztecCheck
      id={2002}
      name="DK's Quicksand Tunnel Bonus Barrel"
      region="Aztec Caves"
      canGetLogic={tunnelGb.in}
      canGetBreak={tunnelGb.out}
    />
  )
}

export default QuicksandTunnel
