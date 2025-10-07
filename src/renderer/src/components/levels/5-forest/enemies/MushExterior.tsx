import DropPool from '@renderer/components/pools/Drops'
import { useDefeatKlump, useDefeatZinger } from '@renderer/hooks/enemies'
import { useForestMushroomRoof, usePlayForest } from '@renderer/hooks/forest'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

const MushExteriorEnemies: React.FC = () => {
  const inStage = usePlayForest()
  const roof = useForestMushroomRoof()
  const klump = useDefeatKlump()
  const zinger = useDefeatZinger()
  const anyKong = useAnyKong()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <ForestCheck
        id={5326}
        name="Enemy 0 at the Yellow Tunnel"
        region="Forest Area 3"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5313}
        name="Enemy at Low Warp 5"
        region="Forest Area 3"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5314}
        name="Enemy Between Bounce Tag and Cranky's"
        region="Forest Area 3"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5315}
        name="Enemy at Giant Shroom's Rocketbarrel"
        region="Forest Area 3"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5316}
        name="Enemy between Rocketbarrel and Yellow Tunnel"
        region="Forest Area 3"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5317}
        name="Enemy Near Cranky's"
        region="Forest Area 3"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5332}
        name="Enemy at Pink Tunnel Bouncy Tag Barrel"
        region="Forest Area 3"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5318}
        name="Enemy at Rear Tag"
        region="Forest Area 3"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5333}
        name="Enemy Near DK Pad"
        region="Forest Area 3"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5319}
        name="Enemy Near Face Puzzle Entrance"
        region="Forest Area 3"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5320}
        name="Enemy Near Battle Arena"
        region="Forest Area 3"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5321}
        name="Enemy Near High Warp 5"
        region="Forest Area 3"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <ForestCheck
        id={5322}
        name="Enemy at Top Of Mushroom"
        region="Forest Area 3"
        canGetLogic={inStage && roof.in && klump}
        canGetBreak={inStage && roof.out && klump}
      />
      <ForestCheck
        id={5426}
        name="Photo of Enemy 0 at the Yellow Tunnel"
        region="Forest Area 3"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <ForestCheck
        id={5413}
        name="Photo of Enemy Near Low Warp 5"
        region="Forest Area 3"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <ForestCheck
        id={5414}
        name="Photo of Enemy Between Bounce Tag and Cranky's"
        region="Forest Area 3"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <ForestCheck
        id={5415}
        name="Photo of Enemy at Giant Shroom's Rocketbarrel"
        region="Forest Area 3"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <ForestCheck
        id={5416}
        name="Photo of Enemy between Rocketbarrel and Yellow Tunnel"
        region="Forest Area 3"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5417}
        name="Photo of Enemy Near Cranky's"
        region="Forest Area 3"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5432}
        name="Photo of Enemy at Pink Tunnel Bouncy Tag Barrel"
        region="Forest Area 3"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5418}
        name="Photo of Enemy at Rear Tag"
        region="Forest Area 3"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5433}
        name="Photo of Enemy Near DK Pad"
        region="Forest Area 3"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5419}
        name="Photo of Enemy Near Face Puzzle Entrance"
        region="Forest Area 3"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5420}
        name="Photo of Enemy Near Battle Arena"
        region="Forest Area 3"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5421}
        name="Photo of Enemy Near High Warp 5"
        region="Forest Area 3"
        canGetLogic={inStage && hasFairyCam}
      />
      <ForestCheck
        id={5422}
        name="Photo of Enemy at Top Of Mushroom"
        region="Forest Area 3"
        canGetLogic={inStage && roof.in && klump && hasFairyCam}
        canGetBreak={inStage && roof.out && klump && hasFairyCam}
      />
    </DropPool>
  )
}

export default MushExteriorEnemies
