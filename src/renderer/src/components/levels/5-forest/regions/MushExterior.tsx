import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import MushroomArena from '../arenas/Mushroom'
import MushExteriorEnemies from '../enemies/MushExterior'
import MushroomTop from '../gold-bananas/diddy/Top'
import ForestBlast from '../gold-bananas/dk/Blast'
import ChunkyKasplat from '../kasplats/Chunky'
import TinyKasplat from '../kasplats/Tiny'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const MushExteriorChecks: React.FC = () => {
const isBlueprintSeed = useKRoolKontracts('Blueprints') ? 'foolish' : ''
const isKRoolChallengeSeed = useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge)) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <ForestBlast />
    <MushroomTop />
    <MushroomArena />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <TinyKasplat />
    <ChunkyKasplat />
  </div>
  <div className="grid">
    <MushExteriorEnemies />
  </div>
  </>
)
}

export default MushExteriorChecks
