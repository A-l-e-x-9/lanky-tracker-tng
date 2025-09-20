import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { useIslesKremAscent } from '@renderer/hooks/isles'
import { useShuffledShops } from '@renderer/hooks/settings'
import { useCranky, useSnide } from '@renderer/hooks/kongs'

const Vanilla: React.FC = () => {
  const kremAscent = useIslesKremAscent()
  const cranky = useCranky()
  const snide = useSnide()
  return (
  <>
    <ShopGenerator
      baseId={110}
      baseName="Isles Cranky"
      level="DK Isles"
      region="Isles Shops"
      inLogic={cranky}
    />
    <ShopGenerator
      baseId={140}
      baseName="Turn in Isles Blueprint for"
      level="DK Isles"
      region="Isles Shops"
      inLogic={kremAscent && snide}
    />
  </>
  )
}

const Shuffled: React.FC = () => {
  const kremAscent = useIslesKremAscent()
  const cranky = useCranky()
  const snide = useSnide()

  return (
    <>
      <ShopGenerator
        baseId={140}
        baseName="Isles Cranky Location"
        level="DK Isles"
        region="Isles Shops"
        inLogic={cranky}
      />
      <ShopGenerator
        baseId={170}
        baseName="Isles Snide Location"
        level="DK Isles"
        region="Isles Shops"
        inLogic={kremAscent && snide}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  const locations = useShuffledShops() ? <Shuffled /> : <Vanilla />
  return <ShopPool>{locations}</ShopPool>
}

export default ShopLocations
