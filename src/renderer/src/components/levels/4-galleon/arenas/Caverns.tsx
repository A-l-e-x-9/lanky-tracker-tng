import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useGalleonCavernTop, useArena, useGalleonCannon } from '@renderer/hooks/galleon'
import { useShuffledArenas } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachTinysKasplat = useGalleonCavernTop()
const canReachVanillaArena = useArena()
const canReachCannonGame = useGalleonCannon()
  return (
    <ArenaPool>
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Vanilla Arena (under Cranky)"
        region="Galleon Caves"
        canGetLogic={canReachVanillaArena.in}
        canGetBreak={canReachVanillaArena.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: 4-way tunnel intersection"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Tunnel to Chunky's chests, far"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Tunnel to Chunky's chests, close"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Tunnel to Chunky's chests, alcove"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: At Chunky's chests"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Behind Chunky's GB chest"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Behind the cannon wreck"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Left of Cranky's"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: In front of Cranky's"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: In front of the cannonball"
        region="Galleon Caves"
        canGetLogic={canReachCannonGame.in}
        canGetBreak={canReachCannonGame.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Behind the cannonball"
        region="Galleon Caves"
        canGetLogic={canReachCannonGame.in}
        canGetBreak={canReachCannonGame.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Next to the cannon"
        region="Galleon Caves"
        canGetLogic={canReachCannonGame.in}
        canGetBreak={canReachCannonGame.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Near vanilla Warp 3 in the cave"
        region="Galleon Caves"
        canGetLogic={canReachTinysKasplat.in}
        canGetBreak={canReachTinysKasplat.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Vanilla Warp 1, in the cave"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Vanilla Warp 2, in the cave"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Vanilla Warp 3, in the cave"
        region="Galleon Caves"
        canGetLogic={canReachTinysKasplat.in}
        canGetBreak={canReachTinysKasplat.out}
      />
    </ArenaPool>
  )
}

const CavernArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default CavernArenas
