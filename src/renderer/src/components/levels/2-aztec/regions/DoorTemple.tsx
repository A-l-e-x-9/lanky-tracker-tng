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
import { Diddy5DTBalloon, Lanky5DTBalloon, Chunky5DTBalloons } from '../balloons/5DT'

const DoorTempleChecks: React.FC = () => {
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <DonkeyDoorTemple />
    <Dk5Enemies />
    <DiddyDoorTemple />
    <Diddy5DTBalloon />
    <Diddy5Enemies />
    <LankyDoorTemple />
    <Lanky5DTBalloon />
    <Lanky5Enemies />
    <TinyDoorTemple />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <DoorFairy />
  </div>
  <div className="grid">
    <Tiny5Enemies />
    <ChunkyDoorTemple />
    <Chunky5DTBalloons />
    <TempleDirt />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <ChunkyKasplat />
  </div>
  <div className="grid">
    <Chunky5Enemies />
  </div>
  </>
)
}

export default DoorTempleChecks
