import DropPool from '@renderer/components/pools/Drops'
import { useDefeatToughEnemy, useDefeatZinger } from '@renderer/hooks/enemies'
import { useForestMushroomRoof, usePlayForest, useForestDay, useForestNight } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const MushExteriorEnemies: React.FC = () => {
  const inStage = usePlayForest()
  const roof = useForestMushroomRoof()
  const klump = useDefeatToughEnemy()
  const zinger = useDefeatZinger()
  const isDay = useForestDay()
  const isNight = useForestNight()
  return (
    <DropPool>
      <ForestCheck
        id={5323}
        name="Enemy 0 in the Yellow Tunnel"
        region="Forest Area 3"
        canGetLogic={inStage.in && (isDay.in || (isNight.in && klump))}
        canGetBreak={inStage.out && (isDay.out || (isNight.out && klump))}
      />
      <ForestCheck
        id={5324}
        name="Enemy at Low Warp 5"
        region="Forest Area 3"
        canGetLogic={inStage.in && (isDay.in || (isNight.in && klump))}
        canGetBreak={inStage.out && (isDay.out || (isNight.out && klump))}
      />
      <ForestCheck
        id={5325}
        name="Enemy Between Bounce Tag and Cranky's"
        region="Forest Area 3"
        canGetLogic={inStage.in && (isDay.in || (isNight.in && klump))}
        canGetBreak={inStage.out && (isDay.out || (isNight.out && klump))}
      />
      <ForestCheck
        id={5326}
        name="Enemy at Giant Shroom's Rocketbarrel"
        region="Forest Area 3"
        canGetLogic={inStage.in && (isDay.in || (isNight.in && klump))}
        canGetBreak={inStage.out && (isDay.out || (isNight.out && klump))}
      />
      <ForestCheck
        id={5327}
        name="Enemy between Rocketbarrel and Yellow Tunnel"
        region="Forest Area 3"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={inStage.out && zinger.out}
      />
      <ForestCheck
        id={5328}
        name="Enemy Near Cranky's"
        region="Forest Area 3"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={inStage.out && zinger.out}
      />
      <ForestCheck
        id={5329}
        name="Enemy at Pink Tunnel Bouncy Tag Barrel"
        region="Forest Area 3"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={inStage.out && zinger.out}
      />
      <ForestCheck
        id={5330}
        name="Enemy at Rear Tag"
        region="Forest Area 3"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={inStage.out && zinger.out}
      />
      <ForestCheck
        id={5331}
        name="Enemy Near DK Pad"
        region="Forest Area 3"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={inStage.out && zinger.out}
      />
      <ForestCheck
        id={5332}
        name="Enemy Near Face Puzzle Entrance"
        region="Forest Area 3"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={inStage.out && zinger.out}
      />
      <ForestCheck
        id={5333}
        name="Enemy Near Battle Arena"
        region="Forest Area 3"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={inStage.out && zinger.out}
      />
      <ForestCheck
        id={5334}
        name="Enemy Near High Warp 5"
        region="Forest Area 3"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={inStage.out && zinger.out}
      />
      <ForestCheck
        id={5335}
        name="Enemy at Top Of Mushroom"
        region="Forest Area 3"
        canGetLogic={inStage.in && roof.in && ((isDay.in && klump) || isNight.in)}
        canGetBreak={inStage.out && roof.out && ((isDay.out && klump) || isNight.out)}
      />
    </DropPool>
  )
}

export default MushExteriorEnemies
