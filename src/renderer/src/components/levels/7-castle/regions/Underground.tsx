import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import MausoleumCrate from '../crates/Mausoleum'
import UndergroundEnemies from '../enemies/Underground'
import ChunkyCrypt from '../gold-bananas/chunky/Crypt'
import DiddyCrypt from '../gold-bananas/diddy/Crypt'
import DiddyDungeon from '../gold-bananas/diddy/Dungeon'
import DkDungeon from '../gold-bananas/dk/Dungeon'
import DkMinecart from '../gold-bananas/dk/Minecart'
import LankyDungeon from '../gold-bananas/lanky/Dungeon'
import LankyMausoleum from '../gold-bananas/lanky/Mausoleum'
import TinyChasm from '../gold-bananas/tiny/Chasm'
import TinyMausoleum from '../gold-bananas/tiny/Mausoleum'
import ChunkyKasplat from '../kasplats/Chunky'
import DiddyKasplat from '../kasplats/Diddy'
import UpperCaveEnemies from '../enemies/UpperCave'

const UndergroundChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className={`grid ${isKremKaptureSeed}`}>
    <DiddyKasplat />
  </div>
  <div className="grid">
    <DkMinecart />
    <DiddyCrypt />
    <ChunkyCrypt />
    <MausoleumCrate />
    <LankyMausoleum />
    <TinyMausoleum />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <UndergroundEnemies />
  </div>
  <div className="grid">
    <TinyChasm />
    <DkDungeon />
    <DiddyDungeon />
    <LankyDungeon />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <ChunkyKasplat />
    <UpperCaveEnemies />
  </div>
  </>
)
}

export default UndergroundChecks
