import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import {
  useGalleonHighTide,
  useGalleonLighthouseArea,
  useGalleonOutskirts,
  usePlayGalleon
} from '@renderer/hooks/galleon'
import { useShuffledShops } from '@renderer/hooks/settings'
import { useCranky, whatAFunky, useCandy, useSnide } from '@renderer/hooks/kongs'

const Vanilla: React.FC = () => {
  const inStage = usePlayGalleon()
  const outskirts = useGalleonOutskirts()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasCandy = useCandy()

  return (
    <>
      <ShopGenerator
        baseId={4110}
        baseName="Galleon Cranky"
        level="Galleon"
        region="Galleon Shops"
        inLogic={hasCranky && inStage}
      />
      <ShopGenerator
        baseId={4120}
        baseName="Galleon Funky"
        level="Galleon"
        region="Galleon Shops"
        inLogic={hasFunky && outskirts}
      />
      <ShopGenerator
        baseId={4130}
        baseName="Galleon Candy"
        level="Galleon"
        region="Galleon Shops"
        inLogic={hasCandy && outskirts}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const inStage = usePlayGalleon()
  const outskirts = useGalleonOutskirts()
  const lighthouseArea = useGalleonLighthouseArea()
  const highTide = useGalleonHighTide()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasCandy = useCandy()
  const hasSnide = useSnide()

  return (
    <>
      <ShopGenerator
        baseId={4140}
        baseName="Galleon Cranky Location"
        level="Galleon"
        region="Galleon Shops"
        inLogic={hasCranky && inStage}
      />
      <ShopGenerator
        baseId={4150}
        baseName="Galleon Funky Location"
        level="Galleon"
        region="Galleon Shops"
        inLogic={hasFunky && outskirts}
      />
      <ShopGenerator
        baseId={4160}
        baseName="Galleon Candy Location"
        level="Galleon"
        region="Galleon Shops"
        inLogic={hasCandy && outskirts}
      />
      <ShopGenerator
        baseId={4170}
        baseName="Galleon Snide Location"
        level="Galleon"
        region="Galleon Shops"
        inLogic={hasSnide && lighthouseArea && highTide}
        outLogic={hasSnide && lighthouseArea}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  const locations = useShuffledShops() ? <Shuffled /> : <Vanilla />
  return <ShopPool>{locations}</ShopPool>
}

export default ShopLocations
