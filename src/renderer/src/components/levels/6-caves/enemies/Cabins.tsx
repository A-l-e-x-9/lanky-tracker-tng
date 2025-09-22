import DropPool from '@renderer/components/pools/Drops'
import { useCavesLankyCabin, usePlayCaves } from '@renderer/hooks/caves'
import { useDefeatKosha, useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const CabinsEnemies: React.FC = () => {
  const inStage = usePlayCaves()
  const lankyCabin = useCavesLankyCabin()
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  const kosha = useDefeatKosha()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <CavesCheck
        id={6302}
        name="Caves Enemy: Outside 5 Door Cabin"
        region="Cabins Area"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <CavesCheck
        id={6303}
        name="Caves Enemy: Waterfall Lanky Cabin"
        region="Cabins Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6307}
        name="Caves Enemy: Lanky Cabin Headphones"
        region="Cabins Area"
        canGetLogic={inStage && anyKong && kosha.in}
        canGetBreak={inStage && anyKong && kosha.out}
      />
      <CavesCheck
        id={6317}
        name="Caves Enemy: Lanky Cabin Inside Near Pad and Barrel"
        region="Cabins Area"
        canGetLogic={lankyCabin.in && kosha.in}
        canGetBreak={lankyCabin.out && kosha.out}
      />
      <CavesCheck
        id={6402}
        name="Caves Enemy Photo: Outside 5 Door Cabin"
        region="Cabins Area"
        canGetLogic={inStage && hasFairyCam}
      />
      <CavesCheck
        id={6403}
        name="Caves Enemy Photo: Waterfall Lanky Cabin"
        region="Cabins Area"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <CavesCheck
        id={6407}
        name="Caves Enemy Photo: Lanky Cabin Headphones"
        region="Cabins Area"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <CavesCheck
        id={6417}
        name="Caves Enemy Photo: Lanky Cabin Inside Near Pad and Barrel"
        region="Cabins Area"
        canGetLogic={lankyCabin.in && hasFairyCam}
        canGetBreak={lankyCabin.out && hasFairyCam}
      />
    </DropPool>
  )
}

export default CabinsEnemies

/*Major Alex edit: According to the Plandomizer, this enemy is not eligible for Dropsanity. Not sure I buy that, so keeping it here for posterity instead of outright deleting the entry.
      <CavesCheck
        id={6318}
        name="Caves Enemy: Lanky Cabin Inside Near Switch"
        region="Cabins Area"
        canGetLogic={lankyCabin.in && kosha}
        canGetBreak={lankyCabin.out && kosha}
      />*/
