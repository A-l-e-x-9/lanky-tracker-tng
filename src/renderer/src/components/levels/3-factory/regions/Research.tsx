import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import RNDArena from '../arenas/Research'
import RNDEnemies from '../enemies/Research'
import ToyMonster from '../gold-bananas/chunky/Kaiju'
import ChargeTest from '../gold-bananas/diddy/Charge'
import PianoGame from '../gold-bananas/lanky/Piano'
import CarRace from '../gold-bananas/tiny/Race'
import LankyKasplat from '../kasplats/Lanky'

const RNDChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
return (
  <>
  <div className="grid">
    <PianoGame />
    <RNDArena />
    <CarRace />
  </div>
  <div className={`grid ${isKremKaptureSeed}`}>
    <ChargeTest />
    <ToyMonster />
    <LankyKasplat />
    <RNDEnemies />
  </div>
  </>
)
}

export default RNDChecks
