import BalloonPool from '@renderer/components/pools/Balloons'
import FactoryCheck from '../check'
import { useFactoryProductionEnabled, useFactoryProductionTop } from '@renderer/hooks/factory'
import { useAnyGun } from '@renderer/hooks/kongs'

const ProdRoomBalloons: React.FC = () => {
const prodRoomOn = useFactoryProductionEnabled()
const upperProd = useFactoryProductionTop()
const hasAGun = useAnyGun()
  return (
    <BalloonPool>
      <FactoryCheck
        id={36907}
        name="Lanky's balloon in DK's crusher"
        region="Prod Room"
        canGetLogic={prodRoomOn.in && hasAGun}
        canGetBreak={prodRoomOn.out && hasAGun}
      />
      <FactoryCheck
        id={36908}
        name="Lanky's balloon at Prod Room's Troff 'n' Scoff portal"
        region="Prod Room"
        canGetLogic={upperProd.in && hasAGun}
        canGetBreak={upperProd.out && hasAGun}
      />
    </BalloonPool>
  )
}

export default ProdRoomBalloons
