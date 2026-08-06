import { useCamera, useDive } from '@renderer/hooks/kongs'
import KKCheck from './check'

const KremKapture: React.FC = () => {
  const hasFairyCam = useCamera()
  const hasDiving = useDive()
  return (
    <>
      <KKCheck
        id={-1}
        name="Gnawty"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-2}
        name="Gold Gnawty"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-3}
        name="Kritter"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-4}
        name="Stinging Zinger"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-5}
        name="Orange-Throwing Zinger"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-6}
        name="Green Klaptrap"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-7}
        name="Red Klaptrap"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-8}
        name="Purple Klaptrap"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-9}
        name="Klump"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-10}
        name="Klobber"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-11}
        name="Kaboom"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-12}
        name="Puftup"
        canGetLogic={hasFairyCam && hasDiving}
      />
      <KKCheck
        id={-13}
        name="Shuri"
        canGetLogic={hasFairyCam && hasDiving}
      />
      <KKCheck
        id={-14}
        name="Scubi/&quot;Gimpfish&quot;"
        canGetLogic={hasFairyCam && hasDiving}
      />
      <KKCheck
        id={-15}
        name="Mecha-Zinger"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-16}
        name="Mecha-Kritter"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-17}
        name="Domino"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-18}
        name="Red Dice"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-19}
        name="Green Dice"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-20}
        name="Wooden plank/ruler"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-21}
        name="Kosha"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-22}
        name="Spider"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-23}
        name="Purple Bat"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-24}
        name="Big Bug Bash Fly"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-25}
        name="Mushroom Kritter"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-26}
        name="Kritter Skeleton"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-27}
        name="Flame from that damn Chunky 5-Door Igloo check with the wabbit"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-28}
        name="&quot:&quot:&quot:&quot:&quot:&quot:&quot:&quot:&quot:&quot:Ghost&quot:&quot:&quot:&quot:&quot:&quot:&quot:&quot:&quot:&quot: Kritter in a sheet"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-29}
        name="DK's blonde Kasplat"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-30}
        name="Diddy's ginger Kasplat"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-31}
        name="Lanky's blue-haired Kasplat"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-32}
        name="Tiny's purple-haired Kasplat"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-33}
        name="Chunky's green-haired Kasplat"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-34}
        name="White Kop (the classic)"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-35}
        name="Orange Kop (disables Tag Anywhere)"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-36}
        name="Green Kop (disables the Z Button)"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-37}
        name="Blue Kop (disables the A Button)"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={-38}
        name="Black Kop (slams you with a 10-second instakill Kroc)"
        canGetLogic={hasFairyCam}
      />
   </>
  )
}

export default KremKapture
