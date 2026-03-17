import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import DropPool from '@renderer/components/pools/Drops'
import BlastArena from './arenas/Blast'
import BossCheck from './boss'
import EnemyLocations from './enemies'
import EndOfHelmFairies from './fairies/End'
import MedalLocations from './medals'
import ShuffledArenas from './arenas/Shuffled'
import ShuffledCrates from './crates/Shuffled'
import ShuffledDirt from './dirt/Shuffled'
import ShuffledFairies from './fairies/Shuffled'

const HelmChecks: React.FC = () => {
const isKremKaptureSeed = useDonkStore(useShallow((state) => state.winCondition.kremlingKapture)) ? 'foolish' : ''
const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies)) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
  return (
  <>
    <div className="grid">
      <BlastArena />
      <MedalLocations />
      <BossCheck />
    </div>
    <div className={`grid ${isFairySeed && fairiesInRotation}`}>
      <EndOfHelmFairies />
    </div>
    <div className={`grid ${isKremKaptureSeed}`}>
      <DropPool>
        <EnemyLocations />
      </DropPool>
    </div>
    <div className="grid">
      <ShuffledArenas />
      <ShuffledCrates />
      <ShuffledDirt />
    </div>
    <div className={`grid ${isFairySeed && fairiesInRotation}`}>
      <ShuffledFairies />
    </div>
  </>
  )
}

export default HelmChecks
