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
    slug:"nansen",name:"Nansen Points Calculator",shortName:"Nansen",category:"Points",description:"Calculate official-rate NXP from perps volume and combine it with staking, subscription, referral and quest points.",
    benefits:[{label:"official trading rate",tone:"emerald"},{label:"NXP breakdown",tone:"sky"},{label:"weekly planning",tone:"violet"}],status:"live",accent:"#8cffc1",logoUrl:"/logos/nansen.svg",logoIconUrl:"/logos/nansen.svg",localUrl:"http://localhost:3004",productionUrl:"https://nansen-points-calculator-brelgino.vercel.app/",referralUrl:"https://app.nansen.ai/points",docsUrl:"https://academy.nansen.ai/articles/2294471-points-from-trading"
  },
  {
    slug:"predictfun",name:"Predict Points Estimator",shortName:"Predict.fun",category:"Prediction Markets",description:"Compare weekly prediction-market activity across trading, open interest, useful liquidity and market breadth.",
    benefits:[{label:"liquidity scenario",tone:"emerald"},{label:"open interest",tone:"sky"},{label:"weekly PP model",tone:"violet"}],status:"live",accent:"#b6ff5c",logoUrl:"/logos/predictfun.svg",logoIconUrl:"/logos/predictfun.svg",localUrl:"http://localhost:3005",productionUrl:"https://predictfun-points-estimator-brelgino.vercel.app/",referralUrl:"https://predict.fun/",docsUrl:"https://predict.fun/points"
  },
  {
    slug:"dreamcash",name:"Dreamcash XP Calculator",shortName:"Dreamcash",category:"Perps",description:"Calculate Season 1 XP using the published Mobile and WebApp volume rates and your Founder multiplier.",
    benefits:[{label:"official XP rates",tone:"orange"},{label:"mobile vs web",tone:"sky"},{label:"multiplier model",tone:"violet"}],status:"live",accent:"#ffef5a",logoUrl:"/logos/dreamcash.svg",logoIconUrl:"/logos/dreamcash.svg",localUrl:"http://localhost:3006",productionUrl:"https://dreamcash-xp-calculator-brelgino.vercel.app/",referralUrl:"https://app.dreamcash.net/",docsUrl:"https://docs.dreamcash.xyz/season-1"
  },
  {
    slug:"abstract",name:"Abstract XP Estimator",shortName:"Abstract",category:"Points",description:"Model weekly Abstract ecosystem activity across apps, transactions, badges and your Portal multiplier.",
    benefits:[{label:"app breadth",tone:"emerald"},{label:"badge scenarios",tone:"violet"},{label:"weekly XP",tone:"sky"}],status:"live",accent:"#74f5a5",logoUrl:"/logos/abstract.svg",logoIconUrl:"/logos/abstract.svg",localUrl:"http://localhost:3007",productionUrl:"https://abstract-xp-estimator-brelgino.vercel.app/",referralUrl:"https://www.abs.xyz/rewards",docsUrl:"https://docs.abs.xyz/portal/overview"
  },
  {
    slug:"dyli",name:"DYLI Rewards Estimator",shortName:"DYLI",category:"NFT Activity",description:"Build a collector activity scenario from purchases, marketplace orders, Dabble plays and quests.",
    benefits:[{label:"collector score",tone:"violet"},{label:"Dabble activity",tone:"orange"},{label:"quest model",tone:"sky"}],status:"live",accent:"#ff6bd6",logoUrl:"/logos/dyli.svg",logoIconUrl:"/logos/dyli.svg",localUrl:"http://localhost:3008",productionUrl:"https://dyli-rewards-estimator-brelgino.vercel.app/",referralUrl:"https://www.dyli.io/rewards",docsUrl:"https://docs.dyli.io/"
  },
  {
    slug:"risex",name:"RISEx Points Estimator",shortName:"RISEx",category:"Perps",description:"Compare Ignite Season 1 contribution from trading, liquidity, position management and active referrals.",
    benefits:[{label:"trading score",tone:"orange"},{label:"LP scenario",tone:"emerald"},{label:"referral activity",tone:"violet"}],status:"live",accent:"#ff7247",logoUrl:"/logos/risex.svg",logoIconUrl:"/logos/risex.svg",localUrl:"http://localhost:3009",productionUrl:"https://risex-points-estimator-brelgino.vercel.app/",referralUrl:"https://rise.trade/points",docsUrl:"https://blog.risechain.com/rise-points-season-1-ignite-everything-you-need-to-know/"
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
