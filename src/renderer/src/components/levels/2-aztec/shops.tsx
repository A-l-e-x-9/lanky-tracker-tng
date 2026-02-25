import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { useAztecBack, useAztecFront } from '@renderer/hooks/aztec'
import { useCranky, whatAFunky, useCandy, useSnide } from '@renderer/hooks/kongs'

const Vanilla: React.FC = () => {
  const aztecFront = useAztecFront()
  const aztecBack = useAztecBack()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasCandy = useCandy()
  const hasSnide = useSnide()
  const [crankyNoSwitch, funkyCranky, snideCranky] = useDonkStore(useShallow((state) => [state.shuffledAztecCranky.aztecCrankyNoSwitch, state.shuffledAztecFunky.aztecFunkyCranky, state.shuffledAztecSnide.aztecSnideCranky]))
  const [crankyCandy, funkyCandy, snideCandy] = useDonkStore(useShallow((state) => [state.shuffledAztecCranky.aztecCrankyCandy, state.shuffledAztecFunky.aztecFunkyCandy, state.shuffledAztecSnide.aztecSnideCandy]))
  const [candyCranky, candyFunky, candySnide] = useDonkStore(useShallow((state) => [state.shuffledAztecCandy.aztecCandyCranky, state.shuffledAztecCandy.aztecCandyFunky, state.shuffledAztecCandy.aztecCandySnide]))
  return (
    <>
      <ShopGenerator
        baseId={2110}
        baseName="Aztec Cranky"
        level="Angry Aztec"
        region={crankyNoSwitch ? "Aztec Caves" : "Aztec Main Area"}
        inLogic={hasCranky && (crankyCandy ? aztecFront.in : aztecBack.in)}
        outLogic={hasCranky && (crankyCandy ? aztecFront.out : aztecBack.out)}
      />
      <ShopGenerator
        baseId={2120}
        baseName="Aztec Funky"
        level="Angry Aztec"
        region={funkyCranky ? "Aztec Caves" : "Aztec Main Area"}
        inLogic={hasFunky && (funkyCandy ? aztecFront.in : aztecBack.in)}
        outLogic={hasFunky && (funkyCandy ? aztecFront.out : aztecBack.out)}
      />
      <ShopGenerator
        baseId={2130}
        baseName="Aztec Candy"
        level="Angry Aztec"
        region={candyCranky ? "Aztec Caves" : "Aztec Main Area"}
        inLogic={hasCandy && ((candyCranky || candyFunky || candySnide) ? aztecBack.in : aztecFront.in)}
        outLogic={hasCandy && ((candyCranky || candyFunky || candySnide) ? aztecBack.out : aztecFront.out)}
      />
      <ShopGenerator
        baseId={2140}
        baseName="Turn in Aztec Blueprint for"
        level="Angry Aztec"
        region={snideCranky ? "Aztec Caves" : "Aztec Main Area"}
        inLogic={hasSnide && (snideCandy ? aztecFront.in : aztecBack.in)}
        outLogic={hasSnide && (snideCandy ? aztecFront.out : aztecBack.out)}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  return <ShopPool><Vanilla /></ShopPool>
}

export default ShopLocations
