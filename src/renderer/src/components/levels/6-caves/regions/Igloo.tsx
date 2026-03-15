import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import KoshaDirt from '../dirt/Kosha'
import IglooEnemies from '../enemies/Igloo'
import IglooFairy from '../fairies/Igloo'
import TransparentIgloo from '../gold-bananas/chunky/ClearIgloo'
import ChunkyIgloo from '../gold-bananas/chunky/Igloo'
import DiddyIgloo from '../gold-bananas/diddy/Igloo'
import DkIgloo from '../gold-bananas/dk/Igloo'
import LankyIgloo from '../gold-bananas/lanky/Igloo'
import TinyIgloo from '../gold-bananas/tiny/Igloo'
import MonkeyportIgloo from '../gold-bananas/tiny/Port'
import ChunkyKasplat from '../kasplats/Chunky'

const IglooChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <DkIgloo />
    <DiddyIgloo />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <LankyIgloo />
  </div>
  <div className="grid">
    <TinyIgloo />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <IglooFairy />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <ChunkyIgloo />
  </div>
  <div className="grid">
    <MonkeyportIgloo />
    <TransparentIgloo />
    <KoshaDirt />
  </div>
  <div className={`grid ${isKremKaptureSeed} ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <ChunkyKasplat />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <IglooEnemies />
  </div>
  </>
)
}

export default IglooChecks
