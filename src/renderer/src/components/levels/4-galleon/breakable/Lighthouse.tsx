import BreakablePool from '@renderer/components/pools/Breakable'
import { useLankyChestGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../check'

const EnguardeChests: React.FC = () => {
const canDo = useLankyChestGb()
  return (
    <BreakablePool>
      <GalleonCheck
        id={46701}
        name="Chest to the left of Enguarde's crate"
        region="Lighthouse Area"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
      <GalleonCheck
        id={46702}
        name="Chest to the right of Enguarde's crate"
        region="Lighthouse Area"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
      <GalleonCheck
        id={46703}
        name="Chest next to &quot;The Hole&quot;"
        region="Lighthouse Area"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
      <GalleonCheck
        id={46704}
        name="Chest near the Lighthouse platform's base"
        region="Lighthouse Area"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </BreakablePool>
  )
}

export default EnguardeChests
