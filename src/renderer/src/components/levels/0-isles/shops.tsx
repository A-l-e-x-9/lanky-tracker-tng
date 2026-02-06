import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { useIslesKremAscent } from '@renderer/hooks/isles'
import { useCranky, useSnide } from '@renderer/hooks/kongs'

const Vanilla: React.FC = () => {
  const kremAscent = useIslesKremAscent()
  const cranky = useCranky()
  const snide = useSnide()
  const shuffledShops = useDonkStore(useShallow((state) => state.shuffledIslesShops.islesSwitchUp))
  if (shuffledShops) {
  return (
  <>
    <ShopGenerator
      baseId={110}
      baseName="Isles Cranky"
      level="DK Isles"
      region="Shops"
      inLogic={kremAscent && cranky}
    />
    <ShopGenerator
      baseId={140}
      baseName="Turn in Isles Blueprint for"
      level="DK Isles"
      region="Shops"
      inLogic={snide}
    />
  </>
  )
  } else {
  return (
  <>
    <ShopGenerator
      baseId={110}
      baseName="Isles Cranky"
      level="DK Isles"
      region="Shops"
      inLogic={cranky}
    />
    <ShopGenerator
      baseId={140}
      baseName="Turn in Isles Blueprint for"
      level="DK Isles"
      region="Shops"
      inLogic={kremAscent && snide}
    />
  </>
  )
  }
}

const ShopLocations: React.FC = () => {
  return <ShopPool><Vanilla /></ShopPool>
}

export default ShopLocations
