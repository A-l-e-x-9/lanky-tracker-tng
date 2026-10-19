import GBPool from '@renderer/components/pools/GB'
import { useDkTunnelGb, useQuicksandPortal } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const QuicksandTunnel: React.FC = () => {
  const tunnelGb = useDkTunnelGb()
  const DKPortal = useQuicksandPortal()
  return (
  <GBPool>
    <AztecCheck
      id={2002}
      name="DK's Quicksand Tunnel Bonus Barrel"
      region="Aztec Caves"
      canGetLogic={tunnelGb.in || DKPortal.in}
      canGetBreak={tunnelGb.out || DKPortal.out}
    />
    </GBPool>
  )
}

export default QuicksandTunnel
