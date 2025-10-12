import BananaMedalPool, { IslesMedalPool } from '@renderer/components/pools/BananaMedals'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ArenaLocations from './arenas'
import CrateLocations from './crates'
import DirtLocations from './dirt'
import EnemyLocations from './enemies'
import FairyLocations from './fairies'
import ChunkyBananas from './gold-bananas/chunky'
import DiddyBananas from './gold-bananas/diddy'
import DkBananas from './gold-bananas/dk'
import LankyBananas from './gold-bananas/lanky'
import TinyBananas from './gold-bananas/tiny'
import JetpacCheck from './jetpac'
import KasplatLocations from './kasplats'
import IslesRegionChecks from './regions'
import ShopLocations from './shops'
import ChunkyMedal from './medals/ChunkyMedal'
import DiddyMedal from './medals/DiddyMedal'
import DkMedal from './medals/DkMedal'
import LankyMedal from './medals/LankyMedal'
import TinyMedal from './medals/TinyMedal'
import BoulderLocations from './boulders'
import WrinklyDoors from './wrinkly'

const ClassicChecks: React.FC = () => (
  <div className="grid">
    <DkBananas />
    <DiddyBananas />
    <LankyBananas />
    <TinyBananas />
    <ChunkyBananas />
    <KasplatLocations />
    <CrateLocations />
    <DirtLocations />
    <FairyLocations />
    <ArenaLocations />
    <BananaMedalPool>
      <IslesMedalPool>
        <DkMedal />
        <DiddyMedal />
        <LankyMedal />
        <TinyMedal />
        <ChunkyMedal />
      </IslesMedalPool>
    </BananaMedalPool>
    <BoulderLocations />
    <WrinklyDoors />
    <ShopLocations />
    <JetpacCheck />
    <EnemyLocations />
  </div>
)

const IsleChecks: React.FC = () => {
  const grp = useDonkStore(useShallow((state) => state.ui.groupByRegion))
  return grp ? <IslesRegionChecks /> : <ClassicChecks />
}

export default IsleChecks
