import { usePoolBananaMedals, useIslesBananaMedals, useHalfMedals } from '@renderer/hooks/settings'

const BananaMedalPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolBananaMedals() ? <>{children}</> : null

export const IslesMedalPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  useIslesBananaMedals() ? <>{children}</> : null

export const HalfMedalPool: React.FC<React.PropsWithChildren> = ({ children }) =>
  useHalfMedals() ? <>{children}</> : null

export default BananaMedalPool
