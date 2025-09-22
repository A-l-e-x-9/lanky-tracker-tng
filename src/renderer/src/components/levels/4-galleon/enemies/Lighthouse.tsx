import DropPool from '@renderer/src/components/pools/Drops'
import { useDefeatKlump } from '@renderer/src/hooks/enemies'
import { useGalleonLighthousePlatform, useSlamGalleon } from '@renderer/src/hooks/galleon'
import { useDk, useCamera } from '@renderer/src/hooks/kongs'
import GalleonCheck from '../check'

const LighthouseEnemies: React.FC = () => {
  const lighthouse = useGalleonLighthousePlatform()
  const klump = useDefeatKlump()
  const dk = useDk()
  const canSlam = useSlamGalleon()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <GalleonCheck
        id={4307}
        name="Galleon Enemy: Lighthouse 0"
        region="Lighthouse Area"
        canGetLogic={lighthouse.in && dk && canSlam && klump}
        canGetBreak={lighthouse.out && dk && canSlam && klump}
      />
      <GalleonCheck
        id={4308}
        name="Galleon Enemy: Lighthouse 1"
        region="Lighthouse Area"
        canGetLogic={lighthouse.in && dk && canSlam && klump}
        canGetBreak={lighthouse.out && dk && canSlam && klump}
      />
      <GalleonCheck
        id={4407}
        name="Galleon Enemy Photo: Lighthouse 0"
        region="Lighthouse Area"
        canGetLogic={lighthouse.in && dk && canSlam && klump && hasFairyCam}
        canGetBreak={lighthouse.out && dk && canSlam && klump && hasFairyCam}
      />
      <GalleonCheck
        id={4408}
        name="Galleon Enemy Photo: Lighthouse 1"
        region="Lighthouse Area"
        canGetLogic={lighthouse.in && dk && canSlam && klump && hasFairyCam}
        canGetBreak={lighthouse.out && dk && canSlam && klump && hasFairyCam}
      />
    </DropPool>
  )
}

export default LighthouseEnemies
