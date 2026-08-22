import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useArena, useGalleonLighthouseInside, useGalleonCannon, useGalleonCavernTop, useGalleonLighthousePlatform, useLankyGoldGb, useGalleonOutskirts, useDiddyGoldGb, useGalleonSeasickShip, useLanky2DoorShipGb, useGalleonTreasureRoom } from '@renderer/hooks/galleon'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { usePunch, useClimbing, useDive, useLanky, useAnyGun, useOrange } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'
import TreasureCrates from './Treasure'

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
        id={24039}
        name="Shuffled Melon Crate: Vanilla Warp 4, on Diddy's gold tower"
        region="Treasure Room"
        canGetLogic={canReachDiddyGold.in}
        canGetBreak={canReachDiddyGold.out}
      />
    </CratePool>
  )
}

const TreasureCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default TreasureCrates
