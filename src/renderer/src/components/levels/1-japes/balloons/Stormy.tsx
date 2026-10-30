import BalloonPool from '@renderer/components/pools/Balloons'
import JapesCheck from '../check'
import { useJapesKongGates, useJapesRambi } from '@renderer/hooks/japes'
import { useAnyGun } from '@renderer/hooks/kongs'

const StormyBalloons: React.FC = () => {
const canReachStormyZone = useJapesKongGates()
const hasRambi = useJapesRambi()
const hasAGun = useAnyGun()
  return (
    <BalloonPool>
      <JapesCheck
        id={16904}
        name="DK balloon in front of Cranky"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasAGun}
        canGetBreak={canReachStormyZone.out && hasAGun}
      />
      <JapesCheck
        id={16905}
        name="Lanky balloon over his Kasplat"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasAGun}
        canGetBreak={canReachStormyZone.out && hasAGun}
      />
      <JapesCheck
        id={16906}
        name="Lanky balloon by the hut blocking the switch to his timed cage GB"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasAGun}
        canGetBreak={canReachStormyZone.out && hasAGun}
      />
      <JapesCheck
        id={16907}
        name="Tiny balloon by the hut blocking the switch to her timed cage GB"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasAGun}
        canGetBreak={canReachStormyZone.out && hasAGun}
      />
      <JapesCheck
        id={16908}
        name="Tiny balloon by the Banana Fairy"
        region="Stormy Area"
        canGetLogic={hasRambi.in && hasAGun}
        canGetBreak={hasRambi.out && hasAGun}
      />
      <JapesCheck
        id={16909}
        name="Chunky balloon 0 in the Rambi cave"
        region="Stormy Area"
        canGetLogic={hasRambi.in && hasAGun}
        canGetBreak={hasRambi.out && hasAGun}
      />
      <JapesCheck
        id={16910}
        name="Chunky balloon 1 in the Rambi cave"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={16911}
        name="Chunky Balloon 2 in the Rambi cave"
        region="Stormy Area"
        canGetLogic={hasRambi.in && hasAGun}
        canGetBreak={hasRambi.out && hasAGun}
      />
    </BalloonPool>
  )
}

export default StormyBalloons
