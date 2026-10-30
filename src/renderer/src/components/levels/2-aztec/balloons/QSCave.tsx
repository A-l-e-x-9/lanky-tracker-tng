import BalloonPool from '@renderer/components/pools/Balloons'
import AztecCheck from '../check'
import { useAztecBackTunnel } from '@renderer/hooks/aztec'
import { useAnyGun } from '@renderer/hooks/kongs'

const QSCaveBalloons: React.FC = () => {
const canReachQSTunnel = useAztecBackTunnel()
const hasAGun = useAnyGun()
  return (
    <BalloonPool>
      <AztecCheck
        id={26905}
        name="Diddy balloon in DK's quicksand cave"
        region="Aztec Caves"
        canGetLogic={canReachQSTunnel.in && hasAGun}
        canGetBreak={canReachQSTunnel.out && hasAGun}
      />
    </BalloonPool>
  )
}

export default QSCaveBalloons
