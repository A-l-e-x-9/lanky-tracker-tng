import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { useJapesKongGates, usePlayJapes } from '@renderer/hooks/japes'
import { useShuffledShops, useBananaportAll } from '@renderer/hooks/settings'
import { useCranky, whatAFunky, useSnide, useClimbing } from '@renderer/hooks/kongs'

const Vanilla: React.FC = () => {
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
        baseId={1110}
        baseName="Japes Cranky"
        level="Jungle Japes"
        region="Shops"
        inLogic={kongGates && hasCranky}
      />
      <ShopGenerator
        baseId={1120}
        baseName="Japes Funky"
        level="Jungle Japes"
        region="Shops"
        inLogic={playJapes && (climbing || bananaport) && hasFunky}
      />
      <ShopGenerator
        baseId={1140}
        baseName="Turn in Japes Blueprint for"
        level="Jungle Japes"
        region="Shops"
        inLogic={playJapes && (climbing || bananaport) && hasSnide}
      />

    </>
  )
}

const Shuffled: React.FC = () => {
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
        level="Jungle Japes"
        region="Shops"
        inLogic={hasCranky && (kongGates || (climbing || bananaport))}
      />
      <ShopGenerator
        baseId={1150}
        baseName="Japes Funky Location"
        level="Jungle Japes"
        region="Shops"
        inLogic={hasFunky && (kongGates || (climbing || bananaport))}
      />
      <ShopGenerator
        baseId={1170}
        baseName="Japes Snide Location"
        level="Jungle Japes"
        region="Shops"
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
