import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useGeneralThing } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const FunkyArena: React.FC = () => {
const canDo = useGeneralThing()
return (
  <ArenaPool>
    <VanillaArena>
      <JapesCheck
        id={1090}
        name="Japes Arena (Near Funky)"
        region="Japes Hillside"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaArena>
  </ArenaPool>
)
}

export default FunkyArena
