import { useCamera, useDive } from '@renderer/hooks/kongs'
import KKCheck from './check'

const KremKapture: React.FC = () => {
  const hasFairyCam = useCamera()
  const hasDiving = useDive()
  return (
    <>
      <KKCheck
        id={9000}
        name="Gnawty"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9001}
        name="Gold Gnawty"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9002}
        name="Kritter"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9003}
        name="Stinging Zinger"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9004}
        name="Orange-Throwing Zinger"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9005}
        name="Green Klaptrap"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9006}
        name="Red Klaptrap"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9007}
        name="Purple Klaptrap"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9008}
        name="Klump"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9009}
        name="Klobber"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9010}
        name="Kaboom"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9011}
        name="Puftup"
        canGetLogic={hasFairyCam && hasDiving.in}
        canGetBreak={hasFairyCam && hasDiving.out}
      />
      <KKCheck
        id={9012}
        name="Shuri"
        canGetLogic={hasFairyCam && hasDiving.in}
        canGetBreak={hasFairyCam && hasDiving.out}
      />
      <KKCheck
        id={9013}
        name="Scubi/&quot;Gimpfish&quot;"
        canGetLogic={hasFairyCam && hasDiving.in}
        canGetBreak={hasFairyCam && hasDiving.out}
      />
      <KKCheck
        id={9014}
        name="Mecha-Zinger"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9015}
        name="Mecha-Kritter"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9016}
        name="Domino"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9017}
        name="Red Dice"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9018}
        name="Green Dice"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9019}
        name="Wooden plank/ruler"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9020}
        name="Kosha"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9021}
        name="Spider"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9022}
        name="Purple Bat"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9023}
        name="Big Bug Bash Fly"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9024}
        name="Mushroom Kritter"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9025}
        name="Kritter Skeleton"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9026}
        name="Flame from that damn Chunky 5-Door Igloo check with the wabbit"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9027}
        name="&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;Ghost&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot; Kritter in a sheet"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9028}
        name="DK's blonde Kasplat"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9029}
        name="Diddy's ginger Kasplat"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9030}
        name="Lanky's blue-haired Kasplat"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9031}
        name="Tiny's purple-haired Kasplat"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9032}
        name="Chunky's green-haired Kasplat"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9033}
        name="White Kop (the classic)"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9034}
        name="Orange Kop (disables Tag Anywhere)"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9035}
        name="Green Kop (disables the Z Button)"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9036}
        name="Blue Kop (disables the A Button)"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9037}
        name="Black Kop (slams you with a 10-second instakill Kroc)"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9038}
        name="Currently unknown enemy"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9039}
        name="Currently unknown enemy"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9040}
        name="Currently unknown enemy"
        canGetLogic={hasFairyCam}
      />
      <KKCheck
        id={9041}
        name="Currently unknown enemy"
        canGetLogic={hasFairyCam}
      />
   </>
  )
}

export default KremKapture
