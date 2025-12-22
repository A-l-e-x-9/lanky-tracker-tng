import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useArena, useGalleonLighthouseInside } from '@renderer/hooks/galleon'
import { useShuffledArenas, useBananaportAll } from '@renderer/hooks/settings'
import {  } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachVanillaArena = useArena()
const canReachLighthouse = useGalleonLighthouseInside()
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
        name="Shuffled Battle Arena: Prod Room lower area"
        region="Prod Room"
        canGetLogic={prodRoomOn.in || hasAllBananaports}
        canGetBreak={prodRoomOn.out || hasAllBananaports}
      />
      <GalleonCheck
        id={14011}
        name="Shuffled Battle Arena: Under conveyors to Tiny's Prod Room GB"
        region="Prod Room"
        canGetLogic={upperProd.in}
        canGetBreak={upperProd.out}
      />
      <GalleonCheck
        id={14012}
        name="Shuffled Battle Arena: The platform past Tiny's Prod Room GB"
        region="Prod Room"
        canGetLogic={canDoTinyProd.in}
        canGetBreak={canDoTinyProd.out}
      />
      <GalleonCheck
        id={14013}
        name="Shuffled Battle Arena: On a vent platform near the elevators"
        region="Prod Room"
        canGetLogic={upperProd.in && isHinaKagiyama}
        canGetBreak={upperProd.out}
      />
      <GalleonCheck
        id={14014}
        name="Shuffled Battle Arena: Corner of the Storage Room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14015}
        name="Shuffled Battle Arena: In front of Cranky's"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14016}
        name="Shuffled Battle Arena: In front of Candy's"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14017}
        name="Shuffled Battle Arena: Corner of Chunky's dark room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <GalleonCheck
        id={14018}
        name="Shuffled Battle Arena: Bench in the arcade room"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasAllBananaports)}
      />
      <GalleonCheck
        id={14019}
        name="Shuffled Battle Arena: Next to the arcade game"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasAllBananaports)}
      />
      <GalleonCheck
        id={14020}
        name="Shuffled Battle Arena: Near Snide's"
        region="Factory Start Area"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <GalleonCheck
        id={14021}
        name="Shuffled Battle Arena: Near Snide's, hidden"
        region="Factory Start Area"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <GalleonCheck
        id={14022}
        name="Shuffled Battle Arena: Right hallway"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <GalleonCheck
        id={14023}
        name="Shuffled Battle Arena: At DK's number game"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <GalleonCheck
        id={14024}
        name="Shuffled Battle Arena: Under the stairs to Tiny's dartboard"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <GalleonCheck
        id={14026}
        name="Shuffled Battle Arena: Under Lanky's Testing Bonus Barrel"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <GalleonCheck
        id={14027}
        name="Shuffled Battle Arena: Left of the entrance to Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <GalleonCheck
        id={14028}
        name="Shuffled Battle Arena: Left of Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <GalleonCheck
        id={14029}
        name="Shuffled Battle Arena: Right of Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <GalleonCheck
        id={14030}
        name="Shuffled Battle Arena: Right of the entrance to Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <GalleonCheck
        id={14037}
        name="Shuffled Battle Arena: In Tiny's car race room"
        region="R&D Room"
        canGetLogic={canReachCar.in}
        canGetBreak={canReachCar.out}
      />
      <GalleonCheck
        id={14038}
        name="Shuffled Battle Arena: Also in Tiny's car race room"
        region="R&D Room"
        canGetLogic={canReachCar.in}
        canGetBreak={canReachCar.out}
      />
      <GalleonCheck
        id={14039}
        name="Shuffled Battle Arena: In front of DK's R&D level"
        region="R&D Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <GalleonCheck
        id={14040}
        name="Shuffled Battle Arena: Under the grate that doesn't have the vanilla Arena"
        region="R&D Room"
        canGetLogic={canReachVanillaArena.in}
        canGetBreak={canReachVanillaArena.out}
      />
      <GalleonCheck
        id={14041}
        name="Shuffled Battle Arena: Vanilla Warp 1, level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14042}
        name="Shuffled Battle Arena: Vanilla Warp 1, in storage"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14043}
        name="Shuffled Battle Arena: Vanilla Warp 2, level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14044}
        name="Shuffled Battle Arena: Vanilla Warp 2, R&D-side"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasClimbing}
        canGetBreak={canReachTesting.out && hasClimbing}
      />
      <GalleonCheck
        id={14045}
        name="Shuffled Battle Arena: Vanilla Warp 3, in front of Snide's"
        region="Factory Start Area"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14046}
        name="Shuffled Battle Arena: Vanilla Warp 3, at Snide's"
        region="Factory Start Area"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <GalleonCheck
        id={14047}
        name="Shuffled Battle Arena: Vanilla Warp 4, bottom of the Prod Room"
        region="Prod Room"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={14048}
        name="Shuffled Battle Arena: Vanilla Warp 4, top of the Prod Room"
        region="Prod Room"
        canGetLogic={upperProd.in}
        canGetBreak={upperProd.out}
      />
      <GalleonCheck
        id={14049}
        name="Shuffled Battle Arena: Vanilla Warp 5, in the arcade"
        region="Storage and Arcade Area"
        canGetLogic={isBreathing.in && (hasClimbing || hasAllBananaports)}
        canGetBreak={isBreathing.out && (hasClimbing || hasAllBananaports)}
      />
      <GalleonCheck
        id={14050}
        name="Shuffled Battle Arena: Vanilla Warp 5, at Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <GalleonCheck
        id={14051}
        name="Shuffled Battle Arena: At the bend in the crusher's path"
        region="Prod Room"
        canGetLogic={canDoCrusher.in}
        canGetBreak={canDoCrusher.out}
      />
      <GalleonCheck
        id={14052}
        name="Shuffled Battle Arena: Inside DK's power hut"
        region="Storage and Arcade Area"
        canGetLogic={canReachHut.in && hasCoconuts}
        canGetBreak={canReachHut.out && hasCoconuts}
      />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default ShuffledArenas
