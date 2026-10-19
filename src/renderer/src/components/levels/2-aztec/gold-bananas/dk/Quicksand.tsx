import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GBPool from '@renderer/components/pools/GB'
import { useDkTunnelGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const QuicksandTunnel: React.FC = () => {
  const tunnelGb = useDkTunnelGb()
  const DKPortal = useDonkStore(useShallow((state) => state.shuffledAztecPortals.quicksandTunnelPortal))
  return (
  <GBPool>
    <AztecCheck
      id={2002}
      name="DK's Quicksand Tunnel Bonus Barrel"
      region="Aztec Caves"
      canGetLogic={tunnelGb.in || DKPortal}
      canGetBreak={tunnelGb.out || DKPortal}
    />
    </GBPool>
  )
}

export default QuicksandTunnel
