import { usePoolToughBananas } from '@renderer/src/hooks/settings'

const ToughGoldenBanana: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolToughBananas() ? <>{children}</> : null

export default ToughGoldenBanana
