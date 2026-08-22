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
        id={24002}
        name="Shuffled Melon Crate: Vanilla Crate (near Funky's)"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
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
        id={24035}
        name="Shuffled Melon Crate: Vanilla Warp 2, near the 2DS"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
      />
      <GalleonCheck
        id={24038}
        name="Shuffled Melon Crate: Vanilla Warp 4, in the shipyard"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
      />
      <GalleonCheck
        id={24041}
        name="Shuffled Melon Crate: Vanilla Warp 5, in the shipyard"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
      />
    </CratePool>
  )
}

const OutskirtCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default OutskirtCrates
