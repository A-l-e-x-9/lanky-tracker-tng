import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import TempleDirt from '../dirt/Temple'
import Chunky5Enemies from '../enemies/DoorChunky'
import Diddy5Enemies from '../enemies/DoorDiddy'
import Dk5Enemies from '../enemies/DoorDk'
import Lanky5Enemies from '../enemies/DoorLanky'
import Tiny5Enemies from '../enemies/DoorTiny'
import DoorFairy from '../fairies/Door'
import ChunkyDoorTemple from '../gold-bananas/chunky/Door'
import DiddyDoorTemple from '../gold-bananas/diddy/Door'
import DonkeyDoorTemple from '../gold-bananas/dk/Door'
import LankyDoorTemple from '../gold-bananas/lanky/Door'
import TinyDoorTemple from '../gold-bananas/tiny/Door'
import ChunkyKasplat from '../kasplats/Chunky'

const DoorTempleChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <DonkeyDoorTemple />
    <DiddyDoorTemple />
    <LankyDoorTemple />
    <TinyDoorTemple />
    <DoorFairy />
    <ChunkyDoorTemple />
    <TempleDirt />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <Dk5Enemies />
    <Diddy5Enemies />
    <Lanky5Enemies />
    <Tiny5Enemies />
    <ChunkyKasplat />
    <Chunky5Enemies />
  </div>
  </>
)
}

export default DoorTempleChecks
