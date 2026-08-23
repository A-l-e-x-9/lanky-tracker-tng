import CratePool from '@renderer/components/pools/Crates'
import { useArena, useGalleonLighthouseInside, useGalleonCannon, useGalleonSeasickShip, useLanky2DoorShipGb } from '@renderer/hooks/galleon'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { usePunch, useClimbing, useOrange } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'
import TreasureCrates from './Treasure'

const Shuffled: React.FC = () => {
const canReachVanillaArena = useArena()
const canReachLighthouse = useGalleonLighthouseInside()
const canReachCannonGame = useGalleonCannon()
const canReachChunkyShip = useGalleonSeasickShip()
const hasPrimatePunch = usePunch()
const hasClimbing = useClimbing()
const canReachLankys2DS = useLanky2DoorShipGb()
const hasOranges = useOrange()
  return (
    <CratePool>
      <TreasureCrates />
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
        id={24013}
        name="Shuffled Melon Crate: In a chest in Lanky's 2DS"
        region="Shipyard Outskirts"
        canGetLogic={canReachLankys2DS.in}
        canGetBreak={canReachLankys2DS.out}
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

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
