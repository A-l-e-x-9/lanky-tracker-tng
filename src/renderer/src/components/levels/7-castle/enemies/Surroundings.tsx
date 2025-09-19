import DropPool from '@renderer/components/pools/Drops'
import { usePlayCastle } from '@renderer/hooks/castle'
import { useDefeatKosha } from '@renderer/hooks/enemies'
import { useAnyKong, useClimbing, useCamera } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const SurroundingsEnemies: React.FC = () => {
  const inStage = usePlayCastle()
  const anyKong = useAnyKong()
  const kosha = useDefeatKosha()
  const hasClimbing = useClimbing()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <CastleCheck
        id={7300}
        name="Castle Enemy: Near Bridge 0"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7301}
        name="Castle Enemy: Near Bridge 1"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7302}
        name="Castle Enemy: Wooden Extrusion 0"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && kosha.in}
        canGetBreak={inStage && anyKong && kosha.out}
      />
      <CastleCheck
        id={7303}
        name="Castle Enemy: Wooden Extrusion 1"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && kosha.in}
        canGetBreak={inStage && anyKong && kosha.out}
      />
      <CastleCheck
        id={7304}
        name="Castle Enemy: Near Shed"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7305}
        name="Castle Enemy: Near Library"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7306}
        name="Castle Enemy: Near Tower"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && kosha.in}
        canGetBreak={inStage && anyKong && kosha.out}
      />
      <CastleCheck
        id={7307}
        name="Castle Enemy: Museum Steps"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7308}
        name="Castle Enemy: Near Low Caves"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && hasClimbing}
        canGetBreak={inStage && anyKong}
      />
      <CastleCheck
        id={7309}
        name="Castle Enemy: Path to Low Kasplat"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && hasClimbing}
        canGetBreak={inStage && anyKong}
      />
      <CastleCheck
        id={7310}
        name="Castle Enemy: Low Boss Portal"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && hasClimbing}
        canGetBreak={inStage && anyKong}
      />
      <CastleCheck
        id={7311}
        name="Castle Enemy: Path to Dungeon"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7312}
        name="Castle Enemy: Near Headphones"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong}
      />
      <CastleCheck
        id={7400}
        name="Castle Enemy Photo: Near Bridge 0"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7401}
        name="Castle Enemy Photo: Near Bridge 1"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7402}
        name="Castle Enemy Photo: Wooden Extrusion 0"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7403}
        name="Castle Enemy Photo: Wooden Extrusion 1"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7404}
        name="Castle Enemy Photo: Near Shed"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7405}
        name="Castle Enemy Photo: Near Library"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7406}
        name="Castle Enemy Photo: Near Tower"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7407}
        name="Castle Enemy Photo: Museum Steps"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7408}
        name="Castle Enemy Photo: Near Low Caves"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && hasClimbing && hasFairyCam}
        canGetBreak={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7409}
        name="Castle Enemy Photo: Path to Low Kasplat"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && hasClimbing && hasFairyCam}
        canGetBreak={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7410}
        name="Castle Enemy Photo: Low Boss Portal"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && hasClimbing && hasFairyCam}
        canGetBreak={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7411}
        name="Castle Enemy Photo: Path to Dungeon"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <CastleCheck
        id={7412}
        name="Castle Enemy Photo: Near Headphones"
        region="Castle Surroundings"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
    </DropPool>
  )
}

export default SurroundingsEnemies
