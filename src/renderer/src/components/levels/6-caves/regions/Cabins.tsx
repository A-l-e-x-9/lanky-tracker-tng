import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CabinArena from '../arenas/DKRotatingCabin'
import CabinsEnemies from '../enemies/Cabins'
import CabinFairy from '../fairies/Cabin'
import ChunkyCabin from '../gold-bananas/chunky/Cabin'
import DiddyCandleCabin from '../gold-bananas/diddy/Candle'
import DiddyGauntletCabin from '../gold-bananas/diddy/Gauntlet'
import DkGauntletCabin from '../gold-bananas/dk/Gauntlet'
import RotatingCabin from '../gold-bananas/dk/Rotate'
import SprintCabin from '../gold-bananas/lanky/Cabin'
import TinyCabin from '../gold-bananas/tiny/Cabin'
import TinyKasplat from '../kasplats/Tiny'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const CabinsChecks: React.FC = () => {
const isFairySeed = useKRoolKontracts('Fairies') ? 'foolish' : ''
const isBlueprintSeed = useKRoolKontracts('Blueprints') ? 'foolish' : ''
const isKRoolChallengeSeed = useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge)) ? 'foolish' : ''
const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies)) ? '' : 'foolish'
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <DkGauntletCabin />
    <ChunkyCabin />
    <DiddyGauntletCabin />
    <TinyCabin />
    <DiddyCandleCabin />
  </div>
  <div className={`grid ${isFairySeed && fairiesInRotation}`}>
    <CabinFairy />
  </div>
  <div className="grid">
    <RotatingCabin />
    <CabinArena />
    <SprintCabin />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <TinyKasplat />
  </div>
  <div className="grid">
    <CabinsEnemies />
  </div>
  </>
)
}

export default CabinsChecks
