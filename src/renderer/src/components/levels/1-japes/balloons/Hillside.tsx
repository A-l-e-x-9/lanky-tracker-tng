import BalloonPool from '@renderer/components/pools/Balloons'
import { useBananaportAll } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useJapesMine, useJapesHive } from '@renderer/hooks/japes'
import { useAnyGun } from '@renderer/hooks/kongs'

const HillsideBalloons: React.FC = () => {
const canReachMtn = useJapesMine()
const canReachHive = useJapesHive()
const hasAllBananaports = useBananaportAll()
const hasAGun = useAnyGun()
  return (
    <BalloonPool>
      <JapesCheck
        id={16902}
        name="DK balloon in front of Snide"
        region="Japes Hillside"
        canGetLogic={canReachMtn.in && hasAGun}
        canGetBreak={canReachMtn.out && hasAGun}
      />
      <JapesCheck
        id={16903}
        name="Diddy balloon on top of his mine"
        region="Japes Hillside"
        canGetLogic={(canReachMtn.in || (canReachHive.in && hasAllBananaports)) && hasAGun} //You don't actually need to be on top of the mountain to get this one, but for "in logic", it helps. :D
        canGetBreak={canReachMtn.out && hasAGun}
      />
    </BalloonPool>
  )
}

export default HillsideBalloons
