import KasplatPool from '@renderer/components/pools/Kasplats'
import { useDiddyGoldGb, useKevin, useChunkySeasickGb, useGalleonLighthouseInside, useDiddyMechGb, useLankyGoldGb } from '@renderer/hooks/galleon'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useClimbing, usePunch } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'
import CavernKasplats from './Caverns'

const Shuffled: React.FC = () => {
const DKVanillaKasplat = useDiddyGoldGb()
const diddyVanillaKasplat = useKevin()
const canGoInLighthouse = useGalleonLighthouseInside()
const mechfishAgenda = useDiddyMechGb()
const canDoLankyGoldTower = useLankyGoldGb()
const canDoChunkyShip = useChunkySeasickGb()
const hasClimbing = useClimbing()
  return (
    <KasplatPool>
      <CavernKasplats />
      <GalleonCheck
        id={54000}
        name="Shuffled Kasplat: DK's Vanilla Location (on Diddy's gold pile)"
        region="Treasure Room"
        canGetLogic={DKVanillaKasplat.in}
        canGetBreak={DKVanillaKasplat.out}
      />
      <GalleonCheck
        id={54001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (Kevin)"
        region="Lighthouse Area"
        canGetLogic={diddyVanillaKasplat.in}
        canGetBreak={diddyVanillaKasplat.out}
      />
      <GalleonCheck
        id={54008}
        name="Shuffled Kasplat: Top of the Whomp's Fortress ripoff area"
        region="Lighthouse Area"
        canGetLogic={canGoInLighthouse.in && hasClimbing}
        canGetBreak={canGoInLighthouse.out && hasClimbing}
      />
      <GalleonCheck
        id={54009}
        name="Shuffled Kasplat: Inside the Mechfish"
        region="Shipyard Outskirts"
        canGetLogic={mechfishAgenda.in}
        canGetBreak={mechfishAgenda.out}
      />
      <GalleonCheck
        id={54010}
        name="Shuffled Kasplat: On Lanky's gold tower"
        region="Treasure Room"
        canGetLogic={canDoLankyGoldTower.in}
        canGetBreak={canDoLankyGoldTower.out}
      />
      <GalleonCheck
        id={54011}
        name="Shuffled Kasplat: Inside Chunky's ship"
        region="Lighthouse Area"
        canGetLogic={canDoChunkyShip.in}
        canGetBreak={canDoChunkyShip.out}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
