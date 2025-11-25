import DropPool from '@renderer/components/pools/Drops'
import { usePlayCastle } from '@renderer/hooks/castle'
import { useDefeatKosha } from '@renderer/hooks/enemies'
import { useAnyKong, useClimbing } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const SurroundingsEnemies: React.FC = () => {
  const inStage = usePlayCastle()
  const anyKong = useAnyKong()
  const kosha = useDefeatKosha()
  const hasClimbing = useClimbing()
  return (
    <DropPool>
      <CastleCheck
        id={7300}
        name="Enemy Near Folding Bridge Over Moat"
        region="Creepy Castle Main"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <CastleCheck
        id={7301}
        name="Enemy Near Bottom Wooden Extrusion"
        region="Creepy Castle Main"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <CastleCheck
        id={7302}
        name="Enemy on Bottom Wooden Extrusion"
        region="Creepy Castle Main"
        canGetLogic={inStage.in && anyKong && kosha.in}
        canGetBreak={inStage.out && anyKong && kosha.out}
      />
      <CastleCheck
        id={7303}
        name="Enemy on Wooden Extrusion Near Cranky's"
        region="Creepy Castle Main"
        canGetLogic={inStage.in && anyKong && kosha.in}
        canGetBreak={inStage.out && anyKong && kosha.out}
      />
      <CastleCheck
        id={7304}
        name="Enemy Between Museum and Shed"
        region="Creepy Castle Main"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <CastleCheck
        id={7305}
        name="Enemy Near Library Switch"
        region="Creepy Castle Main"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <CastleCheck
        id={7306}
        name="Enemy Near Snide's"
        region="Creepy Castle Main"
        canGetLogic={inStage.in && anyKong && kosha.in}
        canGetBreak={inStage.out && anyKong && kosha.out}
      />
      <CastleCheck
        id={7307}
        name="Enemy Between Cranky's and Museum"
        region="Creepy Castle Main"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <CastleCheck
        id={7308}
        name="Enemy at Crypt Entrance"
        region="Creepy Castle Main"
        canGetLogic={inStage.in && anyKong && hasClimbing}
        canGetBreak={inStage.out && anyKong}
      />
      <CastleCheck
        id={7309}
        name="Enemy Near Low Kasplat"
        region="Creepy Castle Main"
        canGetLogic={inStage.in && anyKong && hasClimbing}
        canGetBreak={inStage.out && anyKong}
      />
      <CastleCheck
        id={7310}
        name="Enemy Near Lowest Troff 'n' Scoff Door"
        region="Creepy Castle Main"
        canGetLogic={inStage.in && anyKong && hasClimbing}
        canGetBreak={inStage.out && anyKong}
      />
      <CastleCheck
        id={7311}
        name="Enemy Near Steps to Dungeon"
        region="Creepy Castle Main"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <CastleCheck
        id={7312}
        name="Enemy Between Tree and Ladder to Headphones"
        region="Creepy Castle Main"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
    </DropPool>
  )
}

export default SurroundingsEnemies
