import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGeneralDirt, useArena, useGalleonCannon, useGalleonCavernTop } from '@renderer/hooks/galleon'
import { useShockwave } from '@renderer/hooks/kongs'
import { useShuffleDirt } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralDirt()
const canReachVanillaArena = useArena()
const hasShockwave = useShockwave()
const canReachCannonGame = useGalleonCannon()
const canReachTinysKasplat = useGalleonCavernTop()
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
        id={34032}
        name="Shuffled Dirt Patch: Vanilla Warp 1, in the cave"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={34034}
        name="Shuffled Dirt Patch: Vanilla Warp 2, in the cave"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={34036}
        name="Shuffled Dirt Patch: Vanilla Warp 3, in the cave"
        region="Galleon Caves"
        canGetLogic={canReachTinysKasplat.in && hasShockwave}
        canGetBreak={canReachTinysKasplat.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const CavernDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default CavernDirt
