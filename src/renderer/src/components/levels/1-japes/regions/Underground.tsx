import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import Underground from '../gold-bananas/chunky/Underground'
import ChunkyKasplat from '../kasplats/Chunky'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const UndergroundChecks: React.FC = () => {
const isBlueprintSeed = useKRoolKontracts('Blueprints') ? 'foolish' : ''
const isKRoolChallengeSeed = useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge)) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <Underground />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <ChunkyKasplat />
  </div>
  </>
)
}

export default UndergroundChecks
