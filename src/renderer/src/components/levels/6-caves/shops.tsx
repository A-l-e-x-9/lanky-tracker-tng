import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { usePlayCaves, useCanAccessSnide } from '@renderer/hooks/caves'
import { useCranky, whatAFunky, useCandy, useSnide } from '@renderer/hooks/kongs'
import { useAngryCaves } from '@renderer/hooks/settings'

const ShopLocations: React.FC = () => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasCandy = useCandy()
  const hasSnide = useSnide()
  const snideCave = useCanAccessSnide()
  const [crankyInSnideCave] = useDonkStore(useShallow((state) => [state.shuffledCavesCranky.cavesCrankySnide]))
  const [funkyInSnideCave] = useDonkStore(useShallow((state) => [state.shuffledCavesFunky.cavesFunkySnide]))
  const [candyInSnideCave] = useDonkStore(useShallow((state) => [state.shuffledCavesCandy.cavesCandySnide]))
  const [outOfSnideCave] = useDonkStore(useShallow((state) => [state.shuffledCavesSnide.cavesSnideCranky || state.shuffledCavesSnide.cavesSnideFunky || state.shuffledCavesSnide.cavesSnideCandy]))
  const [crankyCandy, funkyCandy, candyNoSwitch, snideCandy] = useDonkStore(useShallow((state) => [state.shuffledCavesCranky.cavesCrankyCandy, state.shuffledCavesFunky.cavesFunkyCandy, state.shuffledCavesCandy.cavesCandyNoSwitch, state.shuffledCavesSnide.cavesSnideCandy]))
  return (
    <ShopPool>
      <ShopGenerator
        baseId={6110}
        baseName="Caves Cranky"
        level="Crystal Caves"
        region={crankyCandy ? "Caves Cabins" : "Crystal Caves Main"}
        inLogic={hasCranky && (crankyInSnideCave ? inStage.in && snideCave : inStage.in && !angery)}
        outLogic={hasCranky && (crankyInSnideCave ? inStage.out && snideCave : (inStage.out || angery))}
      />
      <ShopGenerator
        baseId={6120}
        baseName="Caves Funky"
        level="Crystal Caves"
        region={funkyCandy ? "Caves Cabins" : "Crystal Caves Main"}
        inLogic={hasFunky && (funkyInSnideCave ? inStage.in && snideCave : inStage.in && !angery)}
        outLogic={hasFunky && (funkyInSnideCave ? inStage.out && snideCave : (inStage.out || angery))}
      />
      <ShopGenerator
        baseId={6130}
        baseName="Caves Candy"
        level="Crystal Caves"
        region={candyNoSwitch ? "Caves Cabins" : "Crystal Caves Main"}
        inLogic={hasCandy && (candyInSnideCave ? inStage.in && snideCave : inStage.in && !angery)}
        outLogic={hasCandy && (candyInSnideCave ? inStage.out && snideCave : (inStage.out || angery))}
      />
      <ShopGenerator
        baseId={6140}
        baseName="Turn in Caves Blueprint for"
        level="Crystal Caves"
        region={snideCandy ? "Caves Cabins" : "Crystal Caves Main"}
        inLogic={hasSnide && (outOfSnideCave ? inStage.in && !angery : inStage.in && snideCave)}
        outLogic={hasSnide && (outOfSnideCave ? (inStage.out || angery) : inStage.out && snideCave)} //Snide is in a "safe zone", so no Angry Caves check for his vanilla location
      />
    </ShopPool>
  )
}

export default ShopLocations
