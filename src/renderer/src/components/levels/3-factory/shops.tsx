import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { useFactoryTesting, usePlayFactory } from '@renderer/hooks/factory'
import { useCranky, whatAFunky, useCandy, useSnide } from '@renderer/hooks/kongs'

const Vanilla: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasCandy = useCandy()
  const hasSnide = useSnide()
  const [crankyFunky, crankySnide] = useDonkStore(useShallow((state) => [state.shuffledFactoryCranky.factoryCrankyFunky, state.shuffledFactoryCranky.factoryCrankySnide]))
  const [funkyCranky, funkyCandy] = useDonkStore(useShallow((state) => [state.shuffledFactoryFunky.factoryFunkyCranky, state.shuffledFactoryFunky.factoryFunkyCandy]))
  const [candyFunky, candySnide] = useDonkStore(useShallow((state) => [state.shuffledFactoryCandy.factoryCandyFunky, state.shuffledFactoryCandy.factoryCandySnide]))
  const [snideCranky, snideCandy] = useDonkStore(useShallow((state) => [state.shuffledFactorySnide.factorySnideCranky, state.shuffledFactorySnide.factorySnideCandy]))
  return (
    <>
      <ShopGenerator
        baseId={3110}
        baseName="Factory Cranky"
        level="Frantic Factory"
        region="Shops"
        inLogic={hasCranky && ((crankyFunky || crankySnide) ? testing.in : inStage.in)}
        outLogic={hasCranky && ((crankyFunky || crankySnide) ? testing.out : inStage.out)}
      />
      <ShopGenerator
        baseId={3120}
        baseName="Factory Funky"
        level="Frantic Factory"
        region="Shops"
        inLogic={hasFunky && ((funkyCranky || funkyCandy) ? inStage.in : testing.in)}
        outLogic={hasFunky && ((funkyCranky || funkyCandy) ? inStage.out : testing.out)}
      />
      <ShopGenerator
        baseId={3130}
        baseName="Factory Candy"
        level="Frantic Factory"
        region="Shops"
        inLogic={hasCandy && ((candyFunky || candySnide) ? testing.in : inStage.in)}
        outLogic={hasCandy && ((candyFunky || candySnide) ? testing.out : inStage.out)}
      />
      <ShopGenerator
        baseId={3140}
        baseName="Turn in Factory Blueprint for"
        level="Frantic Factory"
        region="Shops"
        inLogic={hasSnide && ((snideCranky || snideCandy) ? inStage.in : testing.in)}
        outLogic={hasSnide && ((snideCranky || snideCandy) ? inStage.out : testing.out)}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  return <ShopPool><Vanilla /></ShopPool>
}

export default ShopLocations
