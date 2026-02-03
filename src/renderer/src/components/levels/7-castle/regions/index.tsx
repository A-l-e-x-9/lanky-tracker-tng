import BananaMedalPool from '@renderer/components/pools/BananaMedals'
import BossCheck from '../boss'
import ChunkyMedal from '../medals/ChunkyMedal'
import DiddyMedal from '../medals/DiddyMedal'
import DkMedal from '../medals/DkMedal'
import LankyMedal from '../medals/LankyMedal'
import TinyMedal from '../medals/TinyMedal'
import ShopLocations from '../shops'
import BallroomChecks from './Ballroom'
import MuseumChecks from './Museum'
import RoomsChecks from './Rooms'
import SurroundingsChecks from './Surroundings'
import TreeChecks from './Tree'
import UndergroundChecks from './Underground'
import ShuffledArenas from '../arenas/Shuffled'
import ShuffledCrates from '../crates/Shuffled'
import ShuffledDirt from '../dirt/Shuffled'
import ShuffledFairies from '../fairies/Shuffled'

const CastleRegionChecks: React.FC = () => (
<>
  <p className="not-available"><strong>WARNING:</strong> If you don't have Climbing and you attempt to do any check in the Crypt area, you won't be able to get back up without killing your Kong, pause-exiting/re-entering, or abusing high-grabs on the gravestones with Tiny and Chunky.</p>
  <div className="grid">
    <BananaMedalPool>
      <DkMedal />
      <DiddyMedal />
      <LankyMedal />
      <TinyMedal />
      <ChunkyMedal />
    </BananaMedalPool>
  </div>
    <TreeChecks />
    <SurroundingsChecks />
    <MuseumChecks />
    <BallroomChecks />
    <RoomsChecks />
    <UndergroundChecks />
  <div className="grid">
    <ShopLocations />
    <BossCheck />
    <ShuffledArenas />
    <ShuffledCrates />
    <ShuffledDirt />
    <ShuffledFairies />
  </div>
</>
)

export default CastleRegionChecks
