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
        name="Forest Enemy: Yellow Tunnel 0"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5313}
        name="Forest Enemy: Near Low Warp 5"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5314}
        name="Forest Enemy: Near Pink Tunnel Bounce Tag Barrel"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5315}
        name="Forest Enemy: Near Mushroom Rocket Barrel"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5316}
        name="Forest Enemy: b/t Rocket & Yellow Tunnel"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5317}
        name="Forest Enemy: Near Cranky"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5332}
        name="Forest Enemy: Near Pink Tunnel"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5318}
        name="Forest Enemy: Rear Tag"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5418}
        name="Forest Enemy: Near DK Pad"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5319}
        name="Forest Enemy: Near Face Puzzle"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5320}
        name="Forest Enemy: Near Crown"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5321}
        name="Forest Enemy: Near High Warp 5"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5322}
        name="Forest Enemy: Top Of Mushroom"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && roof.in && klump}
        canGetBreak={inStage && roof.out && klump}
      />
      <ForestCheck
        id={5426}
        name="Forest Enemy Photo: Yellow Tunnel 0"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <ForestCheck
        id={5413}
        name="Forest Enemy Photo: Near Low Warp 5"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <ForestCheck
        id={5414}
        name="Forest Enemy Photo: Near Pink Tunnel Bounce Tag Barrel"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <ForestCheck
        id={5415}
        name="Forest Enemy Photo: Near Mushroom Rocket Barrel"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <ForestCheck
        id={5416}
        name="Forest Enemy Photo: b/t Rocket & Yellow Tunnel"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger && hasFairyCam}
      />
      <ForestCheck
        id={5417}
        name="Forest Enemy Photo: Near Cranky"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger && hasFairyCam}
      />
      <ForestCheck
        id={5432}
        name="Forest Enemy Photo: Near Pink Tunnel"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger && hasFairyCam}
      />
      <ForestCheck
        id={5518}
        name="Forest Enemy Photo: Rear Tag"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger && hasFairyCam}
      />
      <ForestCheck
        id={5519}
        name="Forest Enemy Photo: Near DK Pad"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger && hasFairyCam}
      />
      <ForestCheck
        id={5419}
        name="Forest Enemy Photo: Near Face Puzzle"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger && hasFairyCam}
      />
      <ForestCheck
        id={5420}
        name="Forest Enemy Photo: Near Crown"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger && hasFairyCam}
      />
      <ForestCheck
        id={5421}
        name="Forest Enemy Photo: Near High Warp 5"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger && hasFairyCam}
      />
      <ForestCheck
        id={5422}
        name="Forest Enemy Photo: Top Of Mushroom"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && roof.in && klump && hasFairyCam}
        canGetBreak={instage && roof.out && klump && hasFairyCam}
      />
    </DropPool>
  )
}

export default MushExteriorEnemies
