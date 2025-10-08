import DropPool from '@renderer/components/pools/Drops'
import { useCavesLankyCabin, usePlayCaves } from '@renderer/hooks/caves'
import { useDefeatKosha, useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const CabinsEnemies: React.FC = () => {
  const inStage = usePlayCaves()
  const lankyCabin = useCavesLankyCabin()
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  const kosha = useDefeatKosha()
  return (
    <DropPool>
      <CavesCheck
        id={6302}
        name="Enemy Outside 5 Door Cabin"
        region="Caves Cabins"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <CavesCheck
        id={6303}
        name="Enemy Outside Lanky's Cabin"
        region="Caves Cabins"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6307}
        name="Enemy at Headphones Below Lanky's Cabin"
        region="Caves Cabins"
        canGetLogic={inStage && anyKong && kosha.in}
        canGetBreak={inStage && anyKong && kosha.out}
      />
      <CavesCheck
        id={6317}
        name="Enemy Inside Lanky Cabin, Near the Pad and Barrel"
        region="Caves Cabins"
        canGetLogic={lankyCabin.in && kosha.in}
        canGetBreak={lankyCabin.out && kosha.out}
      />
    </DropPool>
  )
}

export default CabinsEnemies

/*Major Alex edit: According to the Plandomizer, this enemy is not eligible for Dropsanity. Not sure I buy that, so keeping it here for posterity instead of outright deleting the entry.
      <CavesCheck
        id={6318}
        name="Caves Enemy: Lanky Cabin Inside Near Switch"
        region="Caves Cabins"
        canGetLogic={lankyCabin.in && kosha}
        canGetBreak={lankyCabin.out && kosha}
      />*/
