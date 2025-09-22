import DropPool from '@renderer/src/components/pools/Drops'
import BlastArena from './arenas/Blast'
import BossCheck from './boss'
import EnemyLocations from './enemies'
import EndOfHelmFairies from './fairies/End'
import MedalLocations from './medals'

const HelmChecks: React.FC = () => {
  return (
    <div className="grid">
      <BlastArena />
      <MedalLocations />
      <BossCheck />
      <EndOfHelmFairies />
      <DropPool>
        <EnemyLocations />
      </DropPool>
    </div>
  )
}

export default HelmChecks
