import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { usePlayCastle } from '@renderer/hooks/castle'
import { useShuffledShops } from '@renderer/hooks/settings'
import { useCranky, whatAFunky, useCandy, useSnide, useClimbing } from '@renderer/hooks/kongs'

const Vanilla: React.FC = () => {
  const inStage = usePlayCastle()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasCandy = useCandy()
  const hasClimbing = useClimbing()
  const hasSnide = useSnide()
  return (
    <>
      <ShopGenerator
        baseId={7110}
        baseName="Castle Cranky"
        level="Creepy Castle"
        region="Shops"
        inLogic={hasCranky && inStage}
      />
      <ShopGenerator
        baseId={7120}
        baseName="Castle Funky"
        level="Creepy Castle"
        region="Shops"
        inLogic={hasFunky && inStage && hasClimbing}
        outLogic={hasFunky && inStage}
      />
      <ShopGenerator
        baseId={7130}
        baseName="Castle Candy"
        level="Creepy Castle"
        region="Shops"
        inLogic={hasCandy && inStage}
      />
      <ShopGenerator
        baseId={7140}
        baseName="Turn in Castle Blueprint for"
        level="Creepy Castle"
        region="Shops"
        inLogic={hasSnide && inStage}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const inStage = usePlayCastle()

  return (
    <>
      <ShopGenerator
        baseId={7140}
        baseName="Castle Cranky Location"
        level="Creepy Castle"
        region="Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={7150}
        baseName="Castle Funky Location"
        level="Creepy Castle"
        region="Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={7160}
        baseName="Castle Candy Location"
        level="Creepy Castle"
        region="Shops"
        inLogic={inStage}
      />
      <ShopGenerator
        baseId={7170}
        baseName="Castle Snide Location"
        level="Creepy Castle"
        region="Shops"
        inLogic={inStage}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  const locations = useShuffledShops() ? <Shuffled /> : <Vanilla />
  return <ShopPool>{locations}</ShopPool>
}

export default ShopLocations
