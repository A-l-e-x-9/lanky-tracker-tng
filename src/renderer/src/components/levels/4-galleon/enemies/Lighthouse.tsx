import DropPool from '@renderer/components/pools/Drops'
import { useDefeatToughEnemy } from '@renderer/hooks/enemies'
import { useGalleonLighthousePlatform, useSlamGalleon, usePortalInLighthouse, useWhompsFortressPortal } from '@renderer/hooks/galleon'
import { useDk } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const LighthouseEnemies: React.FC = () => {
  const lighthouse = useGalleonLighthousePlatform()
  const klump = useDefeatToughEnemy()
  const dk = useDk()
  const canSlam = useSlamGalleon()
  const DKPortal1 = usePortalInLighthouse()
  const DKPortal2 = useWhompsFortressPortal()
  return (
    <DropPool>
      <GalleonCheck
        id={4307}
        name="Enemy 0 Inside the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={((lighthouse.in && dk && canSlam) || DKPortal1 || DKPortal2) && klump}
        canGetBreak={((lighthouse.out && dk && canSlam) || DKPortal1 || DKPortal2) && klump}
      />
      <GalleonCheck
        id={4308}
        name="Enemy 1 Inside the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={((lighthouse.in && dk && canSlam) || DKPortal1 || DKPortal2) && klump}
        canGetBreak={((lighthouse.out && dk && canSlam) || DKPortal1 || DKPortal2) && klump}
      />
    </DropPool>
  )
}

export default LighthouseEnemies
