import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { useFactoryTesting, usePlayFactory } from '@renderer/hooks/factory'
import { useShuffledShops } from '@renderer/hooks/settings'
import { useCranky, whatAFunky, useCandy, useSnide } from '@renderer/hooks/kongs'

const Vanilla: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasCandy = useCandy()
  const hasSnide = useSnide()
  return (
    <>
      <ShopGenerator
        baseId={3110}
        baseName="Factory Cranky"
        level="Frantic Factory"
        region="Shops"
        inLogic={hasCranky && inStage.in}
        outLogic={hasCranky && inStage.out}
      />
      <ShopGenerator
        baseId={3120}
        baseName="Factory Funky"
        level="Frantic Factory"
        region="Shops"
        inLogic={hasFunky && inStage.in}
        outLogic={hasFunky && inStage.out}
      />
      <ShopGenerator
        baseId={3130}
        baseName="Factory Candy"
        level="Frantic Factory"
        region="Shops"
        inLogic={hasCandy && inStage.in}
        outLogic={hasCandy && inStage.out}
      />
      <ShopGenerator
        baseId={3140}
        baseName="Turn in Factory Blueprint for"
        level="Frantic Factory"
        region="Shops"
        inLogic={hasSnide && testing}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasCandy = useCandy()
  const hasSnide = useSnide()

  return (
    <>
      <ShopGenerator
        baseId={3140}
        baseName="Factory Cranky Location"
        level="Frantic Factory"
        region="Shops"
        inLogic={hasCranky && inStage.in}
        outLogic={hasCranky && inStage.out}
      />
      <ShopGenerator
        baseId={3150}
        baseName="Factory Funky Location"
        level="Frantic Factory"
        region="Shops"
        inLogic={hasFunky && inStage.in}
        outLogic={hasFunky && inStage.out}
      />
      <ShopGenerator
        baseId={3160}
        baseName="Factory Candy Location"
        level="Frantic Factory"
        region="Shops"
        inLogic={hasCandy && inStage.in}
        outLogic={hasCandy && inStage.out}
      />
      <ShopGenerator
        baseId={3170}
        baseName="Factory Snide Location"
        level="Frantic Factory"
        region="Shops"
        inLogic={hasSnide && testing}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  const locations = useShuffledShops() ? <Shuffled /> : <Vanilla />
  return <ShopPool>{locations}</ShopPool>
}

export default ShopLocations
