import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useLighthouseDirt, useGalleonLighthousePlatform, useKevin, canReachChunkyShip } from '@renderer/hooks/galleon'
import { useShockwave } from '@renderer/hooks/kongs'
import { useShuffleDirt } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const canDoVanillaDirt = useLighthouseDirt()
const canReachLighthouseOuter = useGalleonLighthousePlatform()
const hasShockwave = useShockwave()
const canReachKevin = useKevin()
const canReachChunkyShip = useGalleonSeasickShip()
  return (
    <RainbowCoinPool>
      <GalleonCheck
        id={34001}
        name="Shuffled Dirt Patch: Vanilla Dirt (bottom of the Lighthouse)"
        region="Lighthouse Area"
        canGetLogic={canDoVanillaDirt.in}
        canGetBreak={canDoVanillaDirt.out}
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
        id={34033}
        name="Shuffled Dirt Patch: Vanilla Warp 1, on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasShockwave}
        canGetBreak={canReachLighthouseOuter.out && hasShockwave}
      />
      <GalleonCheck
        id={34037}
        name="Shuffled Dirt Patch: Vanilla Warp 3, at Snide's"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasShockwave}
        canGetBreak={canReachLighthouseOuter.out && hasShockwave}
      />
      <GalleonCheck
        id={34040}
        name="Shuffled Dirt Patch: Vanilla Warp 5, on the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseOuter.in && hasShockwave}
        canGetBreak={canReachLighthouseOuter.out && hasShockwave}
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

const LighthouseDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default LighthouseDirt
