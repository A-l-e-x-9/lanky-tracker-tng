import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useArena, useGalleonLighthouseInside, useGalleonCannon, useGalleonCavernTop, useGalleonLighthousePlatform, useKevin, useLankyGoldGb, useGalleonOutskirts, useDiddyGoldGb, useGalleonSeasickShip, useLighthouseDirt, useLanky2DoorShipGb, useGalleonTreasureRoom } from '@renderer/hooks/galleon'
import { useShuffleCrate } from '@renderer/hooks/settings'
import { usePunch, useClimbing, useDive, useLanky, useAnyGun, useOrange } from '@renderer/hooks/kongs'
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
const canReachLankys2DS = useLanky2DoorShipGb()
const canReachTreasureRoom = useGalleonTreasureRoom()
const hasDiving = useDive()
const hasLanky = useLanky()
const hasAnyGun = useAnyGun()
const hasOranges = useOrange()
  return (
    <CratePool>
      <GalleonCheck
        id={24000}
        name="Shuffled Melon Crate: Under Cranky's"
        region="Galleon Caves"
        canGetLogic={canReachVanillaArena.in}
        canGetBreak={canReachVanillaArena.out}
      />
      <GalleonCheck
        id={24001}
        name="Shuffled Melon Crate: Bottom of the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouse.in}
        canGetBreak={canReachLighthouse.out}
      />
      <GalleonCheck
        id={24002}
        name="Shuffled Melon Crate: Vanilla Crate (near Funky's)"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
      />
      <GalleonCheck
        id={24003}
        name="Shuffled Melon Crate: In front of the cannonball"
        region="Galleon Caves"
        canGetLogic={canReachCannonGame.in}
        canGetBreak={canReachCannonGame.out}
      />
      <GalleonCheck
        id={24004}
        name="Shuffled Melon Crate: Behind the cannonball"
        region="Galleon Caves"
        canGetLogic={canReachCannonGame.in}
        canGetBreak={canReachCannonGame.out}
      />
      <GalleonCheck
        id={24005}
        name="Shuffled Melon Crate: Next to the cannon"
        region="Galleon Caves"
        canGetLogic={canReachCannonGame.in}
        canGetBreak={canReachCannonGame.out}
      />
      <GalleonCheck
        id={24006}
        name="Shuffled Melon Crate: 4-way tunnel intersection"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={24007}
        name="Shuffled Melon Crate: Tunnel to Chunky's chests, far"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={24008}
        name="Shuffled Melon Crate: Tunnel to Chunky's chests, close"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={24009}
        name="Shuffled Melon Crate: Tunnel to Chunky's chests, alcove"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={24010}
        name="Shuffled Melon Crate: At Chunky's chests"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={24011}
        name="Shuffled Melon Crate: Behind Chunky's GB chest"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={24012}
        name="Shuffled Melon Crate: Behind the cannon wreck"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={24013}
        name="Shuffled Melon Crate: In a chest in Lanky's 2DS"
        region="Shipyard Outskirts"
        canGetLogic={canReachLankys2DS.in}
        canGetBreak={canReachLankys2DS.out}
      />
      <GalleonCheck
        id={24014}
        name="Shuffled Melon Crate: Left of Cranky's"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={24015}
        name="Shuffled Melon Crate: In front of Cranky's"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={24016}
        name="Shuffled Melon Crate: Near vanilla Warp 3 in the cave"
        region="Galleon Caves"
        canGetLogic={canReachTinysKasplat.in}
        canGetBreak={canReachTinysKasplat.out}
      />
      <GalleonCheck
        id={24017}
        name="Shuffled Melon Crate: Near Diddy's barrel on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={24018}
        name="Shuffled Melon Crate: Near DK's pad on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={24019}
        name="Shuffled Melon Crate: Next to the ladder on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={24020}
        name="Shuffled Melon Crate: Under the Enguarde box"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasLanky && hasDiving.in}
        canGetBreak={canReachLighthouseOuter.out && hasLanky && hasDiving.out}
      />
      <GalleonCheck
        id={24021}
        name="Shuffled Melon Crate: In the alcove locked by an Enguarde icon"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasLanky && hasDiving.in}
        canGetBreak={canReachLighthouseOuter.out && hasLanky && hasDiving.out}
      />
      <GalleonCheck
        id={24022}
        name="Shuffled Melon Crate: In front of the Mermaid's house"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasLanky && hasDiving.in}
        canGetBreak={canReachLighthouseOuter.out && hasLanky && hasDiving.out}
      />
      <GalleonCheck
        id={24023}
        name="Shuffled Melon Crate: Underneath Diddy's barrel on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={24025}
        name="Shuffled Melon Crate: Behind Snide's"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={24026}
        name="Shuffled Melon Crate: On top of Tiny's foghorn"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in && hasLanky && hasDiving.in}
        canGetBreak={canReachShipyard.out && hasLanky && hasDiving.out}
      />
      <GalleonCheck
        id={24027}
        name="Shuffled Melon Crate: On the bottom, around the 5DS, in a shipwreck that has no vanilla bananas"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in && hasLanky && hasDiving.in}
        canGetBreak={canReachShipyard.out && hasLanky && hasDiving.out}
      />
      <GalleonCheck
        id={24028}
        name="Shuffled Melon Crate: Bottom of the &quot;cactus&quot;"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in && hasLanky && hasDiving.in}
        canGetBreak={canReachShipyard.out && hasLanky && hasDiving.out}
      />
      <GalleonCheck
        id={24029}
        name="Shuffled Melon Crate: At the grate the Mechfish comes out of"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in && hasLanky && hasDiving.in}
        canGetBreak={canReachShipyard.out && hasLanky && hasDiving.out}
      />
      <GalleonCheck
        id={24030}
        name="Shuffled Melon Crate: Top of Lanky's gold tower"
        region="Treasure Room"
        canGetLogic={canReachLankyGold.in}
        canGetBreak={canReachLankyGold.out}
      />
      <GalleonCheck
        id={24031}
        name="Shuffled Melon Crate: Underwater in the gold room"
        region="Treasure Room"
        canGetLogic={canReachTreasureRoom.in && hasDiving.in && hasLanky}
        canGetBreak={canReachTreasureRoom.out && hasDiving.out && (hasAnyGun || hasOranges)}
      />
      <GalleonCheck
        id={24032}
        name="Shuffled Melon Crate: Vanilla Warp 1, in the cave"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={24033}
        name="Shuffled Melon Crate: Vanilla Warp 1, on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={24034}
        name="Shuffled Melon Crate: Vanilla Warp 2, in the cave"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={24035}
        name="Shuffled Melon Crate: Vanilla Warp 2, near the 2DS"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
      />
      <GalleonCheck
        id={24036}
        name="Shuffled Melon Crate: Vanilla Warp 3, in the cave"
        region="Galleon Caves"
        canGetLogic={canReachTinysKasplat.in}
        canGetBreak={canReachTinysKasplat.out}
      />
      <GalleonCheck
        id={24037}
        name="Shuffled Melon Crate: Vanilla Warp 3, at Snide's"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={24038}
        name="Shuffled Melon Crate: Vanilla Warp 4, in the shipyard"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
      />
      <GalleonCheck
        id={24039}
        name="Shuffled Melon Crate: Vanilla Warp 4, on Diddy's gold tower"
        region="Treasure Room"
        canGetLogic={canReachDiddyGold.in}
        canGetBreak={canReachDiddyGold.out}
      />
      <GalleonCheck
        id={24040}
        name="Shuffled Melon Crate: Vanilla Warp 5, on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in}
        canGetBreak={canReachLighthouseOuter.out}
      />
      <GalleonCheck
        id={24041}
        name="Shuffled Melon Crate: Vanilla Warp 5, in the shipyard"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
      />
      <GalleonCheck
        id={24042}
        name="Shuffled Melon Crate: Left of Chunky's ship exit"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in}
        canGetBreak={canReachChunkyShip.out}
      />
      <GalleonCheck
        id={24043}
        name="Shuffled Melon Crate: In front of Chunky's ship exit"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in}
        canGetBreak={canReachChunkyShip.out}
      />
      <GalleonCheck
        id={24044}
        name="Shuffled Melon Crate: Right of Chunky's ship exit"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in}
        canGetBreak={canReachChunkyShip.out}
      />
      <GalleonCheck
        id={24045}
        name="Shuffled Melon Crate: In the corner of Chunky's ship"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in}
        canGetBreak={canReachChunkyShip.out}
      />
      <GalleonCheck
        id={24046}
        name="Shuffled Melon Crate: Behind the pyramid of non-spinning barrels"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in && hasPrimatePunch}
        canGetBreak={canReachChunkyShip.out && hasPrimatePunch}
      />
      <GalleonCheck
        id={24047}
        name="Shuffled Melon Crate: Behind the spinning barrels"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in && hasPrimatePunch}
        canGetBreak={canReachChunkyShip.out && hasPrimatePunch}
      />
      <GalleonCheck
        id={24048}
        name="Shuffled Melon Crate: Bottom left of the lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouse.in}
        canGetBreak={canReachLighthouse.out}
      />
      <GalleonCheck
        id={24049}
        name="Shuffled Melon Crate: Back right of the lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouse.in}
        canGetBreak={canReachLighthouse.out}
      />
      <GalleonCheck
        id={24050}
        name="Shuffled Melon Crate: Bottom back of the Whomp's Fortress ripoff area"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouse.in && hasClimbing}
        canGetBreak={canReachLighthouse.out && hasClimbing}
      />
      <GalleonCheck
        id={24051}
        name="Shuffled Melon Crate: Top of the Whomp's Fortress ripoff area"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouse.in && hasClimbing}
        canGetBreak={canReachLighthouse.out && hasClimbing}
      />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrate() ? <Shuffled /> : null)
export default ShuffledCrates
