import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GongCrate from '../crates/Gongs'
import LlamaOutsideCrate from '../crates/LlamaOutside'
import TotemEnemies from '../enemies/Totem'
import RamGongs from '../gold-bananas/diddy/Gong'
import VultureRace from '../gold-bananas/diddy/Vulture'
import BeetleRace from '../gold-bananas/tiny/Beetle'
import TotemBalloons from '../balloons/Totem'

const TotemChecks: React.FC = () => {
return (
  <>
    <RamGongs />
    <VultureRace />
    <BeetleRace />
    <LlamaOutsideCrate />
    <GongCrate />
    <TotemBalloons />
    <TotemEnemies />
  </>
)
}

export default TotemChecks
