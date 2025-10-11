import DropPool from '@renderer/components/pools/Drops'
import { useDefeatKlump } from '@renderer/hooks/enemies'
import { useGalleonLighthousePlatform, useSlamGalleon } from '@renderer/hooks/galleon'
import { useDk } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const LighthouseEnemies: React.FC = () => {
  const lighthouse = useGalleonLighthousePlatform()
  const klump = useDefeatKlump()
  const dk = useDk()
  const canSlam = useSlamGalleon()
  return (
    <DropPool>
      <GalleonCheck
        id={4307}
        name="Enemy 0 Inside the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={lighthouse.in && dk && canSlam && klump}
        canGetBreak={lighthouse.out && dk && canSlam && klump}
      />
      <GalleonCheck
        id={4308}
        name="Enemy 1 Inside the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={lighthouse.in && dk && canSlam && klump}
        canGetBreak={lighthouse.out && dk && canSlam && klump}
      />
    </DropPool>
  )
}

export default LighthouseEnemies
