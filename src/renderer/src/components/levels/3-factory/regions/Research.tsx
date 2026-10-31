import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import RNDArena from '../arenas/Research'
import RNDEnemies from '../enemies/Research'
import ToyMonster from '../gold-bananas/chunky/Kaiju'
import ChargeTest from '../gold-bananas/diddy/Charge'
import PianoGame from '../gold-bananas/lanky/Piano'
import CarRace from '../gold-bananas/tiny/Race'
import LankyKasplat from '../kasplats/Lanky'
import RNDBalloons from '../balloons/RND'

const RNDChecks: React.FC = () => {
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <PianoGame />
    <ChargeTest />
    <ToyMonster />
    <RNDArena />
    <CarRace />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <LankyKasplat />
  </div>
  <div className="grid">
    <RNDBalloons />
    <RNDEnemies />
  </div>
  </>
)
}

export default RNDChecks
