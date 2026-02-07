import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { usePlayCaves, useCanAccessSnide } from '@renderer/hooks/caves'
import { useCranky, whatAFunky, useCandy } from '@renderer/hooks/kongs'
import { useAngryCaves } from '@renderer/hooks/settings'

const ShopLocations: React.FC = () => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasCandy = useCandy()
  const hasSnide = useCanAccessSnide()
  const [inSnideCave] = useDonkStore(useShallow((state) => [state.shuffledCavesCranky.cavesCrankySnide || state.shuffledCavesFunky.cavesFunkySnide || state.shuffledCavesCandy.cavesCandySnide]))
  const [outOfSnideCave] = useDonkStore(useShallow((state) => [state.shuffledCavesSnide.cavesSnideCranky || state.shuffledCavesSnide.cavesSnideFunky || state.shuffledCavesSnide.cavesSnideCandy]))
  return (
    <ShopPool>
      <ShopGenerator
        baseId={6110}
        baseName="Caves Cranky"
        level="Crystal Caves"
        region="Shops"
        inLogic={hasCranky && (inSnideCave ? inStage.in : inStage.in && !angery)}
        outLogic={hasCranky && (inSnideCave ? inStage.out : (inStage.out || angery))}
      />
      <ShopGenerator
        baseId={6120}
        baseName="Caves Funky"
        level="Crystal Caves"
        region="Shops"
        inLogic={hasFunky && (inSnideCave ? inStage.in : inStage.in && !angery)}
        outLogic={hasFunky && (inSnideCave ? inStage.out : (inStage.out || angery))}
      />
      <ShopGenerator
        baseId={6130}
        baseName="Caves Candy"
        level="Crystal Caves"
        region="Shops"
        inLogic={hasCandy && (inSnideCave ? inStage.in : inStage.in && !angery)}
        outLogic={hasCandy && (inSnideCave ? inStage.out : (inStage.out || angery))}
      />
      <ShopGenerator
        baseId={6140}
        baseName="Turn in Caves Blueprint for"
        level="Crystal Caves"
        region="Shops"
        inLogic={hasSnide && (outOfSnideCave ? inStage.in && !angery : inStage.in)}
        outLogic={hasSnide && (outOfSnideCave ? (inStage.out || angery) : inStage.out)} //Snide is in a "safe zone", so no Angry Caves check for his vanilla location
      />
    </ShopPool>
  )
}

export default ShopLocations
