import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useBarnKasplat, useKevin, useCannonKasplat, useVineKasplat, useCactusKasplat, useGalleonLighthousePlatform, useChunkySeasickGb, useGalleonLighthouseInside, useDiddyMechGb, useLankyGoldGb } from '@renderer/hooks/forest'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useClimbing, usePunch } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
const DKVanillaKasplat = useBarnKasplat()
const diddyVanillaKasplat = useKevin()
const lankyVanillaKasplat = useCannonKasplat()
const tinyVanillaKasplat = useVineKasplat()
const chunkyVanillaKasplat = useCactusKasplat()
const isBreathing = useGeneralThing()
const canReachLighthouseBase = useGalleonLighthousePlatform()
const canGoInLighthouse = useGalleonLighthouseInside()
const mechfishAgenda = useDiddyMechGb()
const canDoLankyGoldTower = useLankyGoldGb()
const canDoChunkyShip = useChunkySeasickGb()
const hasClimbing = useClimbing()
const hasPrimatePunch = usePunch()
  return (
    <KasplatPool>
      <ForestCheck
        id={55000}
        name="Shuffled Kasplat: DK's Vanilla Location (behind the Thornvine Barn)"
        region="Forest Area 1"
        canGetLogic={DKVanillaKasplat.in}
        canGetBreak={DKVanillaKasplat.out}
      />
      <ForestCheck
        id={55001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (Lighthouse alcove)"
        region="Lighthouse Area"
        canGetLogic={diddyVanillaKasplat.in}
        canGetBreak={diddyVanillaKasplat.out}
      />
      <ForestCheck
        id={55002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (the cannon game room)"
        region="Galleon Caves"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
      />
      <ForestCheck
        id={55003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (near vanilla warp 3 in the cave)"
        region="Galleon Caves"
        canGetLogic={tinyVanillaKasplat.in}
        canGetBreak={tinyVanillaKasplat.out}
      />
      <ForestCheck
        id={55004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (the &quot;cactus&quot;)"
        region="Shipyard Outskirts"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <ForestCheck
        id={55005}
        name="Shuffled Kasplat: Base of the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseBase.in}
        canGetBreak={canReachLighthouseBase.out}
      />
      <ForestCheck
        id={55006}
        name="Shuffled Kasplat: At the vanilla Battle Arena"
        region="Galleon Caves"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <ForestCheck
        id={55007}
        name="Shuffled Kasplat: In front of Cranky's"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={55008}
        name="Shuffled Kasplat: Top of the Whomp's Fortress ripoff area"
        region="Lighthouse Area"
        canGetLogic={canGoInLighthouse.in && hasClimbing}
        canGetBreak={canGoInLighthouse.out && hasClimbing}
      />
      <ForestCheck
        id={55009}
        name="Shuffled Kasplat: Inside the Mechfish"
        region="Shipyard Outskirts"
        canGetLogic={mechfishAgenda.in}
        canGetBreak={mechfishAgenda.out}
      />
      <ForestCheck
        id={55010}
        name="Shuffled Kasplat: On Lanky's gold tower"
        region="Treasure Room"
        canGetLogic={canDoLankyGoldTower.in}
        canGetBreak={canDoLankyGoldTower.out}
      />
      <ForestCheck
        id={55011}
        name="Shuffled Kasplat: Inside Chunky's ship"
        region="Lighthouse Area"
        canGetLogic={canDoChunkyShip.in}
        canGetBreak={canDoChunkyShip.out}
      />
      <ForestCheck
        id={55012}
        name="Shuffled Kasplat: Just above the cave to Chunky's chests"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={55013}
        name="Shuffled Kasplat: At the vanilla level start"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <ForestCheck
        id={55014}
        name="Shuffled Kasplat: In Chunky's right chest"
        region="Galleon Caves"
        canGetLogic={isBreathing.in && hasPrimatePunch}
        canGetBreak={isBreathing.out && hasPrimatePunch}
      />
      <ForestCheck
        id={55015}
        name="Shuffled Kasplat: Also on the &quot;cactus&quot;"
        region="Shipyard Outskirts"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
