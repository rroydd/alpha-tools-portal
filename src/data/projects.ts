export type ProjectStatus = "live" | "draft";

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  benefits: {
    label: string;
    tone: "emerald" | "orange" | "sky" | "violet";
  }[];
  status: ProjectStatus;
  accent: string;
  logoUrl: string;
  logoIconUrl: string;
  localUrl: string;
  productionUrl: string;
  referralUrl: string;
  docsUrl: string;
};

export const projects: Project[] = [
  {
    slug:"nansen",name:"Nansen Points Calculator",shortName:"Nansen",category:"Points",description:"Calculate official-rate NXP, check the live public tier, track farming costs and model a dollar allocation.",
    benefits:[{label:"official trading rate",tone:"emerald"},{label:"live tier check",tone:"sky"},{label:"allocation scenario",tone:"violet"}],status:"live",accent:"#00FFA7",logoUrl:"/logos/nansen.png",logoIconUrl:"/logos/nansen.png",localUrl:"http://localhost:3004",productionUrl:"https://nansen-points-calculator-brelgino.vercel.app/",referralUrl:"https://nsn.ai/brelgin",docsUrl:"https://docs.nansen.ai/api/points"
  },
  {
    slug:"predictfun",name:"Predict Points Estimator",shortName:"Predict.fun",category:"Prediction Markets",description:"Model weekly prediction-market activity, inspect live wallet data and test editable token-allocation conditions.",
    benefits:[{label:"live wallet data",tone:"emerald"},{label:"fee tracking",tone:"sky"},{label:"allocation scenario",tone:"violet"}],status:"live",accent:"#FA4D56",logoUrl:"/logos/predictfun.png",logoIconUrl:"/logos/predictfun.png",localUrl:"http://localhost:3005",productionUrl:"https://predictfun-points-estimator-brelgino.vercel.app/",referralUrl:"https://predict.fun?ref=5D64A",docsUrl:"https://dev.predict.fun/get-positions-by-address-32675934e0"
  },
  {
    slug:"dreamcash",name:"Dreamcash XP Calculator",shortName:"Dreamcash",category:"Perps",description:"Calculate Season 1 XP with published rates, inspect Hyperliquid fills and fees, and model a dollar allocation.",
    benefits:[{label:"official XP rates",tone:"orange"},{label:"live fills & fees",tone:"sky"},{label:"allocation scenario",tone:"violet"}],status:"live",accent:"#39BDF8",logoUrl:"/logos/dreamcash.svg",logoIconUrl:"/logos/dreamcash.svg",localUrl:"http://localhost:3006",productionUrl:"https://dreamcash-xp-calculator-brelgino.vercel.app/",referralUrl:"https://www.dreamcash.xyz/share?code=0PWE34",docsUrl:"https://docs.dreamcash.xyz/season-1"
  },
  {
    slug:"abstract",name:"Abstract XP Estimator",shortName:"Abstract",category:"Points",description:"Check real Portal tier, badges, apps and vote streaks, enter official XP and model a dollar allocation.",
    benefits:[{label:"live Portal profile",tone:"emerald"},{label:"official XP input",tone:"violet"},{label:"allocation scenario",tone:"sky"}],status:"live",accent:"#22D870",logoUrl:"/logos/abstract.png",logoIconUrl:"/logos/abstract.png",localUrl:"http://localhost:3007",productionUrl:"https://abstract-xp-estimator-brelgino.vercel.app/",referralUrl:"https://www.abs.xyz/rewards",docsUrl:"https://docs.abs.xyz/portal/overview"
  },
  {
    slug:"dyli",name:"DYLI Diamonds Calculator",shortName:"DYLI",category:"NFT Activity",description:"Calculate Diamonds with published DYLI rates and inspect live ETH, USDC and activity data on Abstract.",
    benefits:[{label:"published rates",tone:"violet"},{label:"live wallet balances",tone:"orange"},{label:"allocation scenario",tone:"sky"}],status:"live",accent:"#F2C500",logoUrl:"/logos/dyli.png",logoIconUrl:"/logos/dyli.png",localUrl:"http://localhost:3008",productionUrl:"https://dyli-rewards-estimator-brelgino.vercel.app/",referralUrl:"https://www.dyli.io/?code=dr670541",docsUrl:"https://docs.dyli.io/core-features/rewards"
  },
  {
    slug:"risex",name:"RISEx Points Estimator",shortName:"RISEx",category:"Perps",description:"Inspect the official live portfolio API, model Ignite contribution and test a dollar token-allocation scenario.",
    benefits:[{label:"live portfolio API",tone:"orange"},{label:"PnL & collateral",tone:"emerald"},{label:"allocation scenario",tone:"violet"}],status:"live",accent:"#9CFF38",logoUrl:"/logos/risex.svg",logoIconUrl:"/logos/risex.svg",localUrl:"http://localhost:3009",productionUrl:"https://risex-points-estimator-brelgino.vercel.app/",referralUrl:"https://rise.trade/points",docsUrl:"https://developer.rise.trade/reference/accountservice_getportfoliodetails"
  },
  {
    slug: "hibachi",
    name: "Hibachi",
    shortName: "Hibachi",
    category: "Airdrop Calculator",
    description: "See how your Hibachi activity can convert into clearer upside scenarios before you farm harder.",
    benefits: [
      { label: "points reward estimate", tone: "orange" },
      { label: "NFT bonus scenarios", tone: "violet" },
      { label: "farming cost and ROI", tone: "emerald" },
    ],
    status: "live",
    accent: "#fb923c",
    logoUrl: "/logos/hibachi-lockup-clean.png",
    logoIconUrl: "/logos/hibachi-icon.png",
    localUrl: "http://localhost:3000",
    productionUrl: "https://hibachi-airdrop-calculator.vercel.app/",
    referralUrl: "https://hibachi.xyz/r/brelgino",
    docsUrl: "https://hibachi.xyz/",
  },
  {
    slug: "nado",
    name: "Nado",
    shortName: "Nado",
    category: "Airdrop Calculator",
    description: "Model your Nado position and understand which inputs can move your possible allocation the most.",
    benefits: [
      { label: "points value model", tone: "emerald" },
      { label: "Templars NFT multipliers", tone: "violet" },
      { label: "$INK allocation range", tone: "sky" },
    ],
    status: "draft",
    accent: "#34d399",
    logoUrl: "/logos/nado-logo.avif",
    logoIconUrl: "/logos/nado-icon.svg",
    localUrl: "http://localhost:3001",
    productionUrl: "https://nado-point-calculator.vercel.app/",
    referralUrl: "https://app.nado.xyz?join=oIxX08E",
    docsUrl: "https://docs.nado.xyz/",
  },
  {
    slug: "polymarket",
    name: "Polymarket Activity Checker",
    shortName: "Polymarket Checker",
    category: "Prediction Markets",
    description: "Check public Polymarket API volume, fees, wallet activity, builders, and market coverage.",
    benefits: [
      { label: "live volume coverage", tone: "sky" },
      { label: "wallet activity checker", tone: "emerald" },
      { label: "fee and activity model", tone: "violet" },
    ],
    status: "live",
    accent: "#1f6bff",
    logoUrl: "/logos/polymarket-logo.svg",
    logoIconUrl: "/logos/polymarket-mark.svg",
    localUrl: "http://localhost:3002",
    productionUrl: "https://polymarket-activity-checker.vercel.app/",
    referralUrl: "https://polymarket.com/?r=brelgino",
    docsUrl: "https://docs.polymarket.com/api-reference/introduction",
  },
  {
    slug: "opensea",
    name: "OpenSea Activity Estimator",
    shortName: "OpenSea Estimator",
    category: "NFT Activity",
    description: "Model NFT marketplace activity, collection exposure, fees, and speculative allocation scenarios for OpenSea users.",
    benefits: [
      { label: "NFT portfolio score", tone: "sky" },
      { label: "collection diversity", tone: "emerald" },
      { label: "API-ready stats check", tone: "violet" },
    ],
    status: "live",
    accent: "#2081e2",
    logoUrl: "/logos/opensea-logo.svg",
    logoIconUrl: "/logos/opensea-icon.svg",
    localUrl: "http://localhost:3003",
    productionUrl: "https://opensea-activity-estimator.vercel.app/",
    referralUrl: "https://opensea.io/",
    docsUrl: "https://docs.opensea.io/",
  },
];
