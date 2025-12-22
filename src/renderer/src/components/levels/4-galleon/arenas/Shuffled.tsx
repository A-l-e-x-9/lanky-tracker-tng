import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useArena, useGalleonLighthouseInside, useGalleonCannon, useGalleonCavernTop, useGalleonLighthousePlatform, useKevin, useLankyGoldGb, useGalleonOutskirts, useDiddyGoldGb, useGalleonSeasickShip } from '@renderer/hooks/galleon'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { usePunch, useClimbing } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachVanillaArena = useArena()
const canReachLighthouse = useGalleonLighthouseInside()
const canReachCannonGame = useGalleonCannon()
const canReachTinysKasplat = useGalleonCavernTop()
const canReachLighthouseOuter = useGalleonLighthousePlatform()
const canReachKevin = useKevin()
const canReachLankyGold = useLankyGoldGb()
const canReachShipyard = useGalleonOutskirts()
const canReachDiddyGold = useDiddyGoldGb()
const canReachChunkyShip = useGalleonSeasickShip()
const hasPrimatePunch = usePunch()
const hasClimbing = useClimbing()
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
        id={14001}
        name="Shuffled Battle Arena: Bottom of the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouse.in}
        canGetBreak={canReachLighthouse.out}
      />
      <GalleonCheck
        id={14003}
        name="Shuffled Battle Arena: In front of the cannonball"
        region="Galleon Caves"
        canGetLogic={canReachCannonGame.in}
        canGetBreak={canReachCannonGame.out}
      />
      <GalleonCheck
        id={14004}
        name="Shuffled Battle Arena: Behind the cannonball"
        region="Galleon Caves"
        canGetLogic={canReachCannonGame.in}
        canGetBreak={canReachCannonGame.out}
      />
      <GalleonCheck
        id={14005}
        name="Shuffled Battle Arena: Next to the cannon"
        region="Galleon Caves"
        canGetLogic={canReachCannonGame.in}
        canGetBreak={canReachCannonGame.out}
      />
      <GalleonCheck
        id={14006}
        name="Shuffled Battle Arena: 4-way tunnel intersection"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14007}
        name="Shuffled Battle Arena: Tunnel to Chunky's chests, far"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14008}
        name="Shuffled Battle Arena: Tunnel to Chunky's chests, close"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14009}
        name="Shuffled Battle Arena: Tunnel to Chunky's chests, alcove"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14010}
        name="Shuffled Battle Arena: At Chunky's chests"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14011}
        name="Shuffled Battle Arena: Behind Chunky's GB chest"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14012}
        name="Shuffled Battle Arena: Behind the cannon wreck"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14014}
        name="Shuffled Battle Arena: Left of Cranky's"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14015}
        name="Shuffled Battle Arena: In front of Cranky's"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14016}
        name="Shuffled Battle Arena: Near vanilla Warp 3 in the cave"
        region="Galleon Caves"
        canGetLogic={canReachTinysKasplat.in}
        canGetBreak={canReachTinysKasplat.out}
      />
      <GalleonCheck
        id={14017}
        name="Shuffled Battle Arena: Near Diddy's barrel on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={14018}
        name="Shuffled Battle Arena: Near DK's pad on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={14019}
        name="Shuffled Battle Arena: Next to the ladder on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={14023}
        name="Shuffled Battle Arena: Underneath Diddy's barrel on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={14024}
        name="Shuffled Battle Arena: Kevin's platform"
        region="Lighthouse Area"
        canGetLogic={canReachKevin.in}
        canGetBreak={canReachKevin.out}
      />
      <GalleonCheck
        id={14030}
        name="Shuffled Battle Arena: Top of Lanky's gold tower"
        region="Treasure Room"
        canGetLogic={canReachLankyGold.in}
        canGetBreak={canReachLankyGold.out}
      />
      <GalleonCheck
        id={14032}
        name="Shuffled Battle Arena: Vanilla Warp 1, in the cave"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14033}
        name="Shuffled Battle Arena: Vanilla Warp 1, on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={14034}
        name="Shuffled Battle Arena: Vanilla Warp 2, in the cave"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14035}
        name="Shuffled Battle Arena: Vanilla Warp 2, near the 2DS"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
      />
      <GalleonCheck
        id={14036}
        name="Shuffled Battle Arena: Vanilla Warp 3, in the cave"
        region="Galleon Caves"
        canGetLogic={canReachTinysKasplat.in}
        canGetBreak={canReachTinysKasplat.out}
      />
      <GalleonCheck
        id={14037}
        name="Shuffled Battle Arena: Vanilla Warp 3, at Snide's"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={14038}
        name="Shuffled Battle Arena: Vanilla Warp 4, in the shipyard"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
      />
      <GalleonCheck
        id={14039}
        name="Shuffled Battle Arena: Vanilla Warp 4, on Diddy's gold tower"
        region="Treasure Room"
        canGetLogic={canReachDiddyGold.in}
        canGetBreak={canReachDiddyGold.out}
      />
      <GalleonCheck
        id={14040}
        name="Shuffled Battle Arena: Vanilla Warp 5, on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={14041}
        name="Shuffled Battle Arena: Vanilla Warp 5, in the shipyard"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
      />
      <GalleonCheck
        id={14042}
        name="Shuffled Battle Arena: Left of Chunky's ship exit"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in}
        canGetBreak={canReachChunkyShip.out}
      />
      <GalleonCheck
        id={14043}
        name="Shuffled Battle Arena: In front of Chunky's ship exit"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in}
        canGetBreak={canReachChunkyShip.out}
      />
      <GalleonCheck
        id={14044}
        name="Shuffled Battle Arena: Right of Chunky's ship exit"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in}
        canGetBreak={canReachChunkyShip.out}
      />
      <GalleonCheck
        id={14045}
        name="Shuffled Battle Arena: In the corner of Chunky's ship"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in}
        canGetBreak={canReachChunkyShip.out}
      />
      <GalleonCheck
        id={14046}
        name="Shuffled Battle Arena: Behind the pyramid of non-spinning barrels"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in && hasPrimatePunch}
        canGetBreak={canReachChunkyShip.out && hasPrimatePunch}
      />
      <GalleonCheck
        id={14047}
        name="Shuffled Battle Arena: Behind the spinning barrels"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in && hasPrimatePunch}
        canGetBreak={canReachChunkyShip.out && hasPrimatePunch}
      />
      <GalleonCheck
        id={14048}
        name="Shuffled Battle Arena: Bottom left of the lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouse.in}
        canGetBreak={canReachLighthouse.out}
      />
      <GalleonCheck
        id={14049}
        name="Shuffled Battle Arena: Back right of the lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouse.in}
        canGetBreak={canReachLighthouse.out}
      />
      <GalleonCheck
        id={14050}
        name="Shuffled Battle Arena: Bottom back of the Whomp's Fortress ripoff area"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouse.in && hasClimbing}
        canGetBreak={canReachLighthouse.out && hasClimbing}
      />
      <GalleonCheck
        id={14051}
        name="Shuffled Battle Arena: Top of the Whomp's Fortress ripoff area"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouse.in && hasClimbing}
        canGetBreak={canReachLighthouse.out && hasClimbing}
      />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default ShuffledArenas
