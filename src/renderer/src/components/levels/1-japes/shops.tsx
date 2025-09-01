import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { useJapesKongGates, usePlayJapes } from '@renderer/hooks/japes'
import { useShuffledShops, useBananaportAll } from '@renderer/hooks/settings'
import { useCranky, whatAFunky, useSnide, useClimbing } from '@renderer/hooks/kongs'

const Vanilla: React.FC = () => {
  const kongGates = useJapesKongGates()
  const climbing = useClimbing()
  const bananaport = useBananaportAll()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()

  return (
    <>
      <ShopGenerator
        baseId={1110}
        baseName="Japes Cranky"
        level="Japes"
        region="Japes Shops"
        inLogic={kongGates && hasCranky}
      />
      <ShopGenerator
        baseId={1120}
        baseName="Japes Funky"
        level="Japes"
        region="Japes Shops"
        inLogic={playJapes && (climbing || bananaport) && hasFunky}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const playJapes = usePlayJapes()
  const kongGates = useJapesKongGates()
  const climbing = useClimbing()
  const bananaport = useBananaportAll()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasSnide = useSnide()

  return (
    <>
      <ShopGenerator
        baseId={1140}
        baseName="Japes Cranky Location"
        level="Japes"
        region="Japes Shops"
        inLogic={hasCranky && (kongGates || (climbing || bananaport))}
      />
      <ShopGenerator
        baseId={1150}
        baseName="Japes Funky Location"
        level="Japes"
        region="Japes Shops"
        inLogic={hasFunky && (kongGates || (climbing || bananaport))}
      />
      <ShopGenerator
        baseId={1170}
        baseName="Japes Snide Location"
        level="Japes"
        region="Japes Shops"
        inLogic={hasSnide && (kongGates || (climbing || bananaport))}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  const locations = useShuffledShops() ? <Shuffled /> : <Vanilla />
  return <ShopPool>{locations}</ShopPool>
}

export default ShopLocations
