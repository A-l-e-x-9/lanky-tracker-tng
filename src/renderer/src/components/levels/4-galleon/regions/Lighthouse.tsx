import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import VanillaLighthouseDirt from '../dirt/VanillaLighthouse'
import LighthouseEnemies from '../enemies/Lighthouse'
import SeasickShip from '../gold-bananas/chunky/Seasick'
import DiddyLighthouse from '../gold-bananas/diddy/Lighthouse'
import DkLighthouse from '../gold-bananas/dk/Lighthouse'
import { EnguardeChest as EnguardeBananaChest } from '../gold-bananas/lanky/Chest'
import MermaidReward from '../gold-bananas/tiny/Mermaid'
import DiddyKasplat from '../kasplats/Diddy'
import EnguardeChests from '../breakable/Lighthouse'

const LighthouseChecks: React.FC = () => {
const [isBlueprintSeed, isKRoolChallengeSeed] = useDonkStore(useShallow((state) => [state.winCondition.blueprints, state.winCondition.kRoolChallenge])) ? 'foolish' : ''
const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints)) ? '' : 'foolish'
return (
  <>
  <div className="grid">
    <DkLighthouse />
    <VanillaLighthouseDirt />
    <DiddyLighthouse />
    <EnguardeChests />
    <EnguardeBananaChest />
    <MermaidReward />
    <SeasickShip />
  </div>
    <div className={`grid ${((isBlueprintSeed || isKRoolChallengeSeed) && kasplatsInRotation)}`}>
    <DiddyKasplat />
  </div>
  <div className="grid">
    <LighthouseEnemies />
  </div>
  </>
)
}

export default LighthouseChecks
