import { usePoolBananaMedals, useIslesBananaMedals } from '@renderer/hooks/settings'

const BananaMedalPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolBananaMedals() ? <>{children}</> : null

export const IslesMedalPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  useIslesBananaMedals() ? <>{children}</> : null

export default BananaMedalPool
