import BossPool from '@renderer/components/pools/Bosses'
import {
  useGalleonCavernTop,
  useGalleonLighthouseArea,
  useGalleonOutskirts
} from '@renderer/hooks/galleon'
import { useDive } from '@renderer/hooks/kongs'
import GalleonCheck from './check'

const BossCheck: React.FC = () => {
  const lighthouseArea = useGalleonLighthouseArea()
  const outskirts = useGalleonOutskirts()
  const top = useGalleonCavernTop()
  const dive = useDive()
  return (
    <BossPool>
      <GalleonCheck
        id={4105}
        name="Galleon Boss"
        region="Bosses"
        canGetLogic={top.in || (dive && (lighthouseArea || outskirts))}
        canGetBreak={top.out}
      />
    </BossPool>
  )
}

export default BossCheck
