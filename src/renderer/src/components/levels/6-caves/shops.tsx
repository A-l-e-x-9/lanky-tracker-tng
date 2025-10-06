import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { usePlayCaves, useCanAccessSnide } from '@renderer/hooks/caves'
import { useCranky, whatAFunky, useCandy } from '@renderer/hooks/kongs'
import { useShuffledShops } from '@renderer/hooks/settings'

const Vanilla: React.FC = () => {
  const inStage = usePlayCaves()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasCandy = useCandy()
  const hasSnide = useCanAccessSnide()
  return (
    <>
      <ShopGenerator
        baseId={6110}
        baseName="Caves Cranky"
        level="Crystal Caves"
        region="Shops"
        inLogic={hasCranky && inStage}
      />
      <ShopGenerator
        baseId={6120}
        baseName="Caves Funky"
        level="Crystal Caves"
        region="Shops"
        inLogic={hasFunky && inStage}
      />
      <ShopGenerator
        baseId={6130}
        baseName="Caves Candy"
        level="Crystal Caves"
        region="Shops"
        inLogic={hasCandy && inStage}
      />
      <ShopGenerator
        baseId={6140}
        baseName="Turn in Caves Blueprint for"
        level="Crystal Caves"
        region="Shops"
        inLogic={hasSnide}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const inStage = usePlayCaves()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasCandy = useCandy()
  const hasSnide = useCanAccessSnide()

  return (
    <>
      <ShopGenerator
        baseId={6140}
        baseName="Caves Cranky Location"
        level="Crystal Caves"
        region="Shops"
        inLogic={hasCranky && inStage}
      />
      <ShopGenerator
        baseId={6150}
        baseName="Caves Funky Location"
        level="Crystal Caves"
        region="Shops"
        inLogic={hasFunky && inStage}
      />
      <ShopGenerator
        baseId={6160}
        baseName="Caves Candy Location"
        level="Crystal Caves"
        region="Shops"
        inLogic={hasCandy && inStage}
      />
      <ShopGenerator
        baseId={6170}
        baseName="Caves Snide Location"
        level="Crystal Caves"
        region="Shops"
        inLogic={hasSnide}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  const locations = useShuffledShops() ? <Shuffled /> : <Vanilla />
  return <ShopPool>{locations}</ShopPool>
}

export default ShopLocations
