import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useForestMushroomRoof, useForestMushroomTop } from '@renderer/hooks/forest'
import { useShuffledArenas } from '@renderer/hooks/settings'
import ForestCheck from '../check'
import { useClimbing, useRocket, useChunky, useTwirl } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const hasClimbing = useClimbing()
const hasJetbarrel = useRocket()
const hasChunky = useChunky()
const isHinaKagiyama = useTwirl()
const canReachTopOfShroom = useForestMushroomRoof()
const canGetNearTopOfShroom = useForestMushroomTop()
  return (
    <ArenaPool>
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Vanilla Arena (at the top of the Giant Mushroom)"
        region="Forest Area 3"
        canGetLogic={canReachVanillaArena.in}
        canGetBreak={canReachVanillaArena.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near the yellow tunnel"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Vanilla Warp 3, bottom of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Vanilla Warp 5, bottom of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: At the ladder to DK's Baboon Blast pad"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && (hasClimbing || hasJetbarrel)}
        canGetBreak={isBreathing.out && (hasChunky || isHinaKagiyama)}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Near DK's Baboon Blast pad"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Above ladder past DK's Baboon Blast pad"
        region="Forest Area 3"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Top of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={canReachTopOfShroom.in}
        canGetBreak={canReachTopOfShroom.out}
      />
      <ForestCheck
        id={15000}
        name="Shuffled Battle Arena: Vanilla Warp 5, top of the Giant Mushroom"
        region="Forest Area 3"
        canGetLogic={canGetNearTopOfShroom.in}
        canGetBreak={canGetNearTopOfShroom.out}
      />
    </ArenaPool>
  )
}

const MushExteriorArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default MushExteriorArenas
