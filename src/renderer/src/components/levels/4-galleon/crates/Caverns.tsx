import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useArena, useGalleonLighthouseInside, useGalleonCannon, useGalleonCavernTop, useGalleonLighthousePlatform, useLankyGoldGb, useGalleonOutskirts, useDiddyGoldGb, useGalleonSeasickShip, useLanky2DoorShipGb, useGalleonTreasureRoom } from '@renderer/hooks/galleon'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { usePunch, useClimbing, useDive, useLanky, useAnyGun, useOrange } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachVanillaArena = useArena()
const canReachLighthouse = useGalleonLighthouseInside()
const canReachCannonGame = useGalleonCannon()
const canReachTinysKasplat = useGalleonCavernTop()
const canReachLighthouseOuter = useGalleonLighthousePlatform()
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
        id={24032}
        name="Shuffled Melon Crate: Vanilla Warp 1, in the cave"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={24034}
        name="Shuffled Melon Crate: Vanilla Warp 2, in the cave"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={24036}
        name="Shuffled Melon Crate: Vanilla Warp 3, in the cave"
        region="Galleon Caves"
        canGetLogic={canReachTinysKasplat.in}
        canGetBreak={canReachTinysKasplat.out}
      />
    </CratePool>
  )
}

const CavernCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default CavernCrates
