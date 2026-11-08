import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import BeforeOasisEnemies from '../enemies/BeforeOasis'
import VaseBanana from '../gold-bananas/chunky/Vase'
import DkKasplat from '../kasplats/Dk'
import CircleVase from '../boulders/CircleVase'
import ColonVase from '../boulders/ColonVase'
import PlusVase from '../boulders/PlusVase'
import TriangleVase from '../boulders/TriangleVase'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const BeforeOasisChecks: React.FC = () => {
const isBlueprintSeed = useKRoolKontracts('Blueprints') ? 'foolish' : ''
const isKRoolChallengeSeed = useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge)) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <CircleVase />
    <ColonVase />
    <PlusVase />
    <TriangleVase />
    <VaseBanana />
  </div>
  <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DkKasplat />
  </div>
  <div className="grid">
    <BeforeOasisEnemies />
  </div>
  </>
)
}

export default BeforeOasisChecks
