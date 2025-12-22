import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGeneralDirt, useArena, useGalleonLighthouseInside, useGalleonCannon, useGalleonCavernTop, useGalleonLighthousePlatform, useKevin, useLankyGoldGb, useGalleonOutskirts, useDiddyGoldGb, useGalleonSeasickShip, useLighthouseDirt } from '@renderer/hooks/galleon'
import { useShuffleDirt } from '@renderer/hooks/settings'
import { useShockwave, usePunch, useClimbing } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralDirt()
const hasShockwave = useShockwave()
const canDoVanillaDirt = useLighthouseDirt()
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
    <RainbowCoinPool>
      <GalleonCheck
        id={34000}
        name="Shuffled Dirt Patch: Under Cranky's"
        region="Galleon Caves"
        canGetLogic={canReachVanillaArena.in && hasShockwave}
        canGetBreak={canReachVanillaArena.out && hasShockwave}
      />
      <GalleonCheck
        id={34001}
        name="Shuffled Dirt Patch: Vanilla Dirt (bottom of the Lighthouse)"
        region="Lighthouse Area"
        canGetLogic={canDoVanillaDirt.in}
        canGetBreak={canDoVanillaDirt.out}
      />
      <GalleonCheck
        id={34003}
        name="Shuffled Dirt Patch: In front of the cannonball"
        region="Galleon Caves"
        canGetLogic={canReachCannonGame.in && hasShockwave}
        canGetBreak={canReachCannonGame.out && hasShockwave}
      />
      <GalleonCheck
        id={34004}
        name="Shuffled Dirt Patch: Behind the cannonball"
        region="Galleon Caves"
        canGetLogic={canReachCannonGame.in && hasShockwave}
        canGetBreak={canReachCannonGame.out && hasShockwave}
      />
      <GalleonCheck
        id={34005}
        name="Shuffled Dirt Patch: Next to the cannon"
        region="Galleon Caves"
        canGetLogic={canReachCannonGame.in && hasShockwave}
        canGetBreak={canReachCannonGame.out && hasShockwave}
      />
      <GalleonCheck
        id={34006}
        name="Shuffled Dirt Patch: 4-way tunnel intersection"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={34007}
        name="Shuffled Dirt Patch: Tunnel to Chunky's chests, far"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={34008}
        name="Shuffled Dirt Patch: Tunnel to Chunky's chests, close"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={34009}
        name="Shuffled Dirt Patch: Tunnel to Chunky's chests, alcove"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={34010}
        name="Shuffled Dirt Patch: At Chunky's chests"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={34011}
        name="Shuffled Dirt Patch: Behind Chunky's GB chest"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={34012}
        name="Shuffled Dirt Patch: Behind the cannon wreck"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={34014}
        name="Shuffled Dirt Patch: Left of Cranky's"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={34015}
        name="Shuffled Dirt Patch: In front of Cranky's"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={34016}
        name="Shuffled Dirt Patch: Near vanilla Warp 3 in the cave"
        region="Galleon Caves"
        canGetLogic={canReachTinysKasplat.in && hasShockwave}
        canGetBreak={canReachTinysKasplat.out && hasShockwave}
      />
      <GalleonCheck
        id={34017}
        name="Shuffled Dirt Patch: Near Diddy's barrel on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasShockwave}
        canGetBreak={canReachLighthouseOuter.out && hasShockwave}
      />
      <GalleonCheck
        id={34018}
        name="Shuffled Dirt Patch: Near DK's pad on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasShockwave}
        canGetBreak={canReachLighthouseOuter.out && hasShockwave}
      />
      <GalleonCheck
        id={34019}
        name="Shuffled Dirt Patch: Next to the ladder on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasShockwave}
        canGetBreak={canReachLighthouseOuter.out && hasShockwave}
      />
      <GalleonCheck
        id={34023}
        name="Shuffled Dirt Patch: Underneath Diddy's barrel on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasShockwave}
        canGetBreak={canReachLighthouseOuter.out && hasShockwave}
      />
      <GalleonCheck
        id={34024}
        name="Shuffled Dirt Patch: Kevin's platform"
        region="Lighthouse Area"
        canGetLogic={canReachKevin.in && hasShockwave}
        canGetBreak={canReachKevin.out && hasShockwave}
      />
      <GalleonCheck
        id={34025}
        name="Shuffled Dirt Patch: Behind Snide's"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasShockwave}
        canGetBreak={canReachLighthouseOuter.out && hasShockwave}
      />
      <GalleonCheck
        id={34030}
        name="Shuffled Dirt Patch: Top of Lanky's gold tower"
        region="Treasure Room"
        canGetLogic={canReachLankyGold.in && hasShockwave}
        canGetBreak={canReachLankyGold.out && hasShockwave}
      />
      <GalleonCheck
        id={34032}
        name="Shuffled Dirt Patch: Vanilla Warp 1, in the cave"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={34033}
        name="Shuffled Dirt Patch: Vanilla Warp 1, on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasShockwave}
        canGetBreak={canReachLighthouseOuter.out && hasShockwave}
      />
      <GalleonCheck
        id={34034}
        name="Shuffled Dirt Patch: Vanilla Warp 2, in the cave"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={34035}
        name="Shuffled Dirt Patch: Vanilla Warp 2, near the 2DS"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in && hasShockwave}
        canGetBreak={canReachShipyard.out && hasShockwave}
      />
      <GalleonCheck
        id={34036}
        name="Shuffled Dirt Patch: Vanilla Warp 3, in the cave"
        region="Galleon Caves"
        canGetLogic={canReachTinysKasplat.in && hasShockwave}
        canGetBreak={canReachTinysKasplat.out && hasShockwave}
      />
      <GalleonCheck
        id={34037}
        name="Shuffled Dirt Patch: Vanilla Warp 3, at Snide's"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasShockwave}
        canGetBreak={canReachLighthouseOuter.out && hasShockwave}
      />
      <GalleonCheck
        id={34038}
        name="Shuffled Dirt Patch: Vanilla Warp 4, in the shipyard"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in && hasShockwave}
        canGetBreak={canReachShipyard.out && hasShockwave}
      />
      <GalleonCheck
        id={34039}
        name="Shuffled Dirt Patch: Vanilla Warp 4, on Diddy's gold tower"
        region="Treasure Room"
        canGetLogic={canReachDiddyGold.in && hasShockwave}
        canGetBreak={canReachDiddyGold.out && hasShockwave}
      />
      <GalleonCheck
        id={34040}
        name="Shuffled Dirt Patch: Vanilla Warp 5, on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasShockwave}
        canGetBreak={canReachLighthouseOuter.out && hasShockwave}
      />
      <GalleonCheck
        id={34041}
        name="Shuffled Dirt Patch: Vanilla Warp 5, in the shipyard"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in && hasShockwave}
        canGetBreak={canReachShipyard.out && hasShockwave}
      />
      <GalleonCheck
        id={34042}
        name="Shuffled Dirt Patch: Left of Chunky's ship exit"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in && hasShockwave}
        canGetBreak={canReachChunkyShip.out && hasShockwave}
      />
      <GalleonCheck
        id={34043}
        name="Shuffled Dirt Patch: In front of Chunky's ship exit"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in && hasShockwave}
        canGetBreak={canReachChunkyShip.out && hasShockwave}
      />
      <GalleonCheck
        id={34044}
        name="Shuffled Dirt Patch: Right of Chunky's ship exit"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in && hasShockwave}
        canGetBreak={canReachChunkyShip.out && hasShockwave}
      />
      <GalleonCheck
        id={34045}
        name="Shuffled Dirt Patch: In the corner of Chunky's ship"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in && hasShockwave}
        canGetBreak={canReachChunkyShip.out && hasShockwave}
      />
      <GalleonCheck
        id={34046}
        name="Shuffled Dirt Patch: Behind the pyramid of non-spinning barrels"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in && hasPrimatePunch && hasShockwave}
        canGetBreak={canReachChunkyShip.out && hasPrimatePunch && hasShockwave}
      />
      <GalleonCheck
        id={34047}
        name="Shuffled Dirt Patch: Behind the spinning barrels"
        region="Lighthouse Area"
        canGetLogic={canReachChunkyShip.in && hasPrimatePunch && hasShockwave}
        canGetBreak={canReachChunkyShip.out && hasPrimatePunch && hasShockwave}
      />
      <GalleonCheck
        id={34048}
        name="Shuffled Dirt Patch: Bottom left of the lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouse.in && hasShockwave}
        canGetBreak={canReachLighthouse.out && hasShockwave}
      />
      <GalleonCheck
        id={34049}
        name="Shuffled Dirt Patch: Back right of the lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouse.in && hasShockwave}
        canGetBreak={canReachLighthouse.out && hasShockwave}
      />
      <GalleonCheck
        id={34050}
        name="Shuffled Dirt Patch: Bottom back of the Whomp's Fortress ripoff area"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouse.in && hasClimbing && hasShockwave}
        canGetBreak={canReachLighthouse.out && hasClimbing && hasShockwave}
      />
      <GalleonCheck
        id={34051}
        name="Shuffled Dirt Patch: Top of the Whomp's Fortress ripoff area"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouse.in && hasClimbing && hasShockwave}
        canGetBreak={canReachLighthouse.out && hasClimbing && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const ShuffledDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirt
