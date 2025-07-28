import Image from "next/image";
import tteldIcon from "../../public/activate/activate-tteld-icon.svg";
import evoeldIcon from "../../public/activate/activate-Evo-icon.svg";
import zippyeldIcon from "../../public/activate/activate-Zippy-icon.svg";
import ontimeldIcon from "../../public/activate/activate-ontime-icon.svg";

export const platforms = [
  {
    name: "TT ELD",
    icon: <Image src={tteldIcon} alt="tteld icon" width={32} height={32} />,
    url: "https://app.tteld.com/",
  },
  {
    name: "EVO ELD",
    icon: <Image src={evoeldIcon} alt="evoeld icon" width={32} height={32} />,
    url: "https://dash.evoeld.com/",
  },
  {
    name: "ZIPPY ELD",
    icon: (
      <Image src={zippyeldIcon} alt="zippyeld icon" width={32} height={32} />
    ),
    url: "https://dash.zippyeld.com/",
  },
  {
    name: "ONTIME ELD",
    icon: (
      <Image src={ontimeldIcon} alt="ontimeeld icon" width={32} height={32} />
    ),
    url: "https://dash.ontime-logs.com/",
  },
];
