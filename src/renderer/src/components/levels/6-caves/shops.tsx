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
  return (
    <ShopPool>
      <ShopGenerator
        baseId={6110}
        baseName="Caves Cranky"
        level="Crystal Caves"
        region="Shops"
        inLogic={hasCranky && inStage.in && !angery}
        outLogic={hasCranky && (inStage.out || angery)}
      />
      <ShopGenerator
        baseId={6120}
        baseName="Caves Funky"
        level="Crystal Caves"
        region="Shops"
        inLogic={hasFunky && inStage.in && !angery}
        outLogic={hasFunky && (inStage.out || angery)}
      />
      <ShopGenerator
        baseId={6130}
        baseName="Caves Candy"
        level="Crystal Caves"
        region="Shops"
        inLogic={hasCandy && inStage.in && !angery}
        outLogic={hasCandy && (inStage.out || angery)}
      />
      <ShopGenerator
        baseId={6140}
        baseName="Turn in Caves Blueprint for"
        level="Crystal Caves"
        region="Shops"
        inLogic={hasSnide && inStage.in}
        outLogic={hasSnide && inStage.out} //Snide is in a "safe zone", so no Angry Caves check
      />
    </ShopPool>
  )
}

export default ShopLocations
