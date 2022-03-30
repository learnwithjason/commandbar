import { nanoid } from "nanoid";
import { formatISO } from "../../components/utils";
import { Company } from "../types";

const companies: Company[] = [
  {
    id: "MFx7N8NQJFOV5e7yTGyBQ",
    name: "The Krusty Krab",
    stageId: "5",
    contactEmail: "eugene@krustykrabs.com",
    contactName: "Eugene H. Krabs",
    notes: [
      {
        id: nanoid(),
        text: "Close to giving up here. Mr. Krabs will not stop penny-pinching. We've already gone from $50k to $10k ...",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Retail"],
    annualContractValue: 10000,
    logoURL: "https://staticassets.commandbar.com/showcase/krusty-krab.jpeg",
  },
  {
    id: "0CdnnZ-9gIP4TgQo8T2nX",
    name: "GameStop",
    stageId: "5",
    contactEmail: "roaringkitty@wsb.com",
    contactName: "Roaring Kitty",
    notes: [
      {
        id: nanoid(),
        text: "Why does this man call himself Roaring Kitty?",
        updatedAt: formatISO(new Date()),
      },
      {
        id: nanoid(),
        text: "After all the times they bought back my old consoles and games for pennies, they are getting absolutely 0 discount.",
        updatedAt: formatISO(new Date()),
      },
      {
        id: nanoid(),
        text: "Creed apparently made over $1M riding the GME wave. Go figure.",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Entertainment"],
    annualContractValue: 42069,
    logoURL: "https://staticassets.commandbar.com/showcase/gamestop.png",
  },
  {
    id: "6ceGtjdiPqc3FiKtsur4O",
    name: "Stark Industries",
    stageId: "6",
    contactEmail: "tony@starkindustries.com",
    contactName: "Tony Stark",
    notes: [
      {
        id: nanoid(),
        text: "Reminder to offer a lifetime supply of free paper if Tony lets Michael meet Spiderman.",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Technology"],
    annualContractValue: 50000,
    logoURL:
      "https://staticassets.commandbar.com/showcase/stark-industries.png",
  },
  {
    id: "rWi0oXecycPPGlHJucEHs",
    name: "Wayne Enterprises, Inc.",
    stageId: "6",
    contactEmail: "bruce@wayneenterprisesinc.com",
    contactName: "Bruce Wayne",
    notes: [
      {
        id: nanoid(),
        text: "Do not let Michael join any calls that Alfred is on. Almost 100% guarantee he breaks out his offensive British accent.",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["R&D", "VIP"],
    annualContractValue: 100000,
    logoURL:
      "https://staticassets.commandbar.com/showcase/wayne-enterprises.png",
  },
  {
    id: "d1aF3rxUGoKDA03Wiman1",
    name: "Iron Bank of Braavos",
    stageId: "1",
    contactEmail: "tycho@ironbankofbraavos.com",
    contactName: "Tycho Nestoris",
    notes: [
      {
        id: nanoid(),
        text: "I thought they would try to pay in gold, but they said they're comfortable using Stripe. Did not see that coming.",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Finance"],
    annualContractValue: 50000,
    logoURL:
      "https://staticassets.commandbar.com/showcase/iron-bank-braavos.png",
  },
  {
    id: "CXoEenzQAul06-Aeij_Ll",
    name: "Monsters, Inc.",
    stageId: "6",
    contactEmail: "james@monstersinc.com",
    contactName: 'James P. "Sulley" Sullivan',
    notes: [
      {
        id: nanoid(),
        text: "50% discount since they're giving us free renewable electricity. Still don't really understand how they generate their power.",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Energy"],
    annualContractValue: 10000,
    logoURL: "https://staticassets.commandbar.com/showcase/monsters-inc.png",
  },
  {
    id: "ItTyBih2sa79gh7VWSaZB",
    name: "Bluth Company",
    stageId: "1",
    contactEmail: "michael@bluth.com",
    contactName: "Michael Bluth",
    notes: [
      {
        id: nanoid(),
        text: "Do not know much yet, but their corporate structure is a bit funky. Gob says he is CEO, but Michael's email signature says CEO ...",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Construction"],
    annualContractValue: 50000,
    logoURL: "https://staticassets.commandbar.com/showcase/bluth-company.jpeg",
  },
  {
    id: "RYqEEksfj8LxcnXfD_w9f",
    name: "Pawnee Parks & Recreation",
    stageId: "2",
    contactEmail: "tom@entertainment720.com",
    contactName: "Tom Haverford",
    notes: [
      {
        id: nanoid(),
        text: "Michael and Tom really hit it off last time.",
        updatedAt: formatISO(new Date()),
      },
      {
        id: nanoid(),
        text: "Unclear if their demand is sustainable -- why does a Parks department need so much paper?",
        updatedAt: formatISO(new Date()),
      },
      {
        id: nanoid(),
        text: "Apparently they make a ton of flyers.",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Government"],
    annualContractValue: 10000,
    logoURL: "https://staticassets.commandbar.com/showcase/pawnee-p-and-r.png",
  },
  {
    id: "0QYl_JHP3SZkNr4SbP7O-",
    name: "Kim's Convenience",
    stageId: "3",
    contactEmail: "janet@kims.com",
    contactName: "Janet Kim",
    notes: [
      {
        id: nanoid(),
        text: "Think we're close to closing here.",
        updatedAt: formatISO(new Date()),
      },
      {
        id: nanoid(),
        text: "I really feel for Janet. Every time we've met, her dad shouts at her to take care of something. I get stressed just listening.",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Retail"],
    annualContractValue: 5000,
    logoURL:
      "https://staticassets.commandbar.com/showcase/kims-convenience.png",
  },
  {
    id: "ai46vK2dHkr0SWnAKMbOj",
    name: "Pearson Specter Litt",
    stageId: "1",
    contactEmail: "harvey@pearsonspecterlitt.com",
    contactName: "Harvey Specter",
    notes: [
      {
        id: nanoid(),
        text: "If they didn't use so much paper, there is no way I would have another meeting with them. Would I say Harvey is pleasant, kind, or even okay to be around? Absolutely not.",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Professional Services"],
    annualContractValue: 50000,
    logoURL:
      "https://staticassets.commandbar.com/showcase/pearson-specter-litt.png",
  },
  {
    id: "AhRbdE9E-QUaIkk3QiBYD",
    name: "Pied Piper",
    stageId: "3",
    contactEmail: "richard@piedpiper.com",
    contactName: "Richard Hendricks",
    notes: [
      {
        id: nanoid(),
        text: "No clue why they want to order so much paper. Business School Ryan says it's not unusual for tech companies to flex their spend in weird ways.",
        updatedAt: formatISO(new Date()),
      },
      {
        id: nanoid(),
        text: "Quick update: I kid you not, they're not even doing an RFP. Verbatim '$50K is a rounding error to us'.",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Technology"],
    annualContractValue: 50000,
    logoURL: "https://staticassets.commandbar.com/showcase/pied-piper.jpeg",
  },
  {
    id: "dRqjKQyfxeVqkwklZAYo9",
    name: "Rent a Swag",
    stageId: "2",
    contactEmail: "tom@rentaswag.com",
    contactName: "Tom Haverford",
    notes: [
      {
        id: nanoid(),
        text: "Apparently Tom's business partner Jean Ralphio wants to buy paper from us so he can meet 'the legendary' Michael Scott. You can't make this stuff up.",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Retail"],
    annualContractValue: 50000,
    logoURL: "https://staticassets.commandbar.com/showcase/rent-a-swag.png",
  },
  {
    id: "gduWOGE_bH9dYKWoCUSdU",
    name: "The Derek Zoolander Center",
    stageId: "1",
    contactEmail: "derek@zoolandercenter.com",
    contactName: "Derek Zoolander",
    notes: [
      {
        id: nanoid(),
        text: "Blue Steel completely blew me away. I've seen it so many times in his Male Model of the Year shoots, but seeing it in person is a life-changing event. 10/10 would recommend.",
        updatedAt: formatISO(new Date()),
      },
      {
        id: nanoid(),
        text: "Also talks seem to be going well so far. They like that we use renewable energy. Shout out Monster Inc.",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Philanthropy"],
    annualContractValue: 50000,
    logoURL:
      "https://staticassets.commandbar.com/showcase/derek-zoolander.jpeg",
  },
  {
    id: "6EDvml-61PHLGZEW8rZTc",
    name: "Theranos",
    stageId: "4",
    contactEmail: "elizabeth@theranos.com",
    contactName: "Elizabeth Holmes",
    notes: [
      {
        id: nanoid(),
        text: "Seriously sketchy vibes. They wouldn't let us enter their facilities. Not even to deliver. Darryl said they just left it at the gate.",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Health"],
    annualContractValue: 15000,
    logoURL: "https://staticassets.commandbar.com/showcase/theranos.png",
  },
  {
    id: "dynA6j-STLk2hLiC5R5jR",
    name: "Juicero",
    stageId: "7",
    contactEmail: "jeff@juicero.com",
    contactName: "Jeff Dunn",
    notes: [
      {
        id: nanoid(),
        text: "This contract is definitionally 'at risk' from what I've heard about their finances.",
        updatedAt: formatISO(new Date()),
      },
      {
        id: nanoid(),
        text: "Pam just told me their smoothie packets work without the product ... RIP",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Retail"],
    annualContractValue: 30000,
    logoURL: "https://staticassets.commandbar.com/showcase/juicero.jpeg",
  },
  {
    id: "nLMRSN-0ip0oI9jLTDbYL",
    name: "Lehman Brothers",
    stageId: "6",
    contactEmail: "richard@lehmanbros.com",
    contactName: "Richard Fuld",
    notes: [
      {
        id: nanoid(),
        text: "Probably should not say this, but we have not delivered a ream of paper here in over 10 years. And they have not missed a payment. I wonder how these guys manage to stay afloat.",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Finance"],
    annualContractValue: 250000,
    logoURL: "https://staticassets.commandbar.com/showcase/lehman-bros.svg",
  },
  {
    id: "1yjvoe-kPTv9TGvpA9z5z",
    name: "Quibi",
    stageId: "2",
    contactEmail: "jeffrey@quibi.com",
    contactName: "Jeffrey Katzenberg",
    notes: [
      {
        id: nanoid(),
        text: "Jeff has not responded to an email in the last year or so. Hope he's doing okay.",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Entertainment"],
    annualContractValue: 30000,
    logoURL: "https://staticassets.commandbar.com/showcase/quibi.jpeg",
  },
  {
    id: "wo25pG-YkhOUiTycEze0m",
    name: "Myspace",
    stageId: "4",
    contactEmail: "tom@myspace.com",
    contactName: "Tom Anderson",
    notes: [
      {
        id: nanoid(),
        text: "Never thought I'd get to meet my (and everyone's) first Myspace friend ... definitely did not think I'd meet him to talk about paper",
        updatedAt: formatISO(new Date()),
      },
      {
        id: nanoid(),
        text: "With that said, the trial is going well",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Entertainment"],
    annualContractValue: 30000,
    logoURL: "https://staticassets.commandbar.com/showcase/myspace.jpeg",
  },
  {
    id: "mH1g0l-J3BPxIV9uCRJLE",
    name: "Yik Yak",
    stageId: "1",
    contactEmail: "tyler@yikyak.com",
    contactName: "Tyler Droll",
    notes: [
      {
        id: nanoid(),
        text: "Might be missing the point of Yik Yak, but should they be looking to buy this much paper?",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Social Media"],
    annualContractValue: 50000,
    logoURL: "https://staticassets.commandbar.com/showcase/yik-yak.png",
  },
  {
    id: "Jhx0Pn-N1H5yinkwXt4IM",
    name: "Vine",
    stageId: "7",
    contactEmail: "dom@vine.com",
    contactName: "Dom Hoffman",
    notes: [
      {
        id: nanoid(),
        text: "This lead is pretty much dead.",
        updatedAt: formatISO(new Date()),
      },
      {
        id: nanoid(),
        text: "Andy says Twitter might bring them back if they buy TikTok? The man seriously spends too much time on a capella TikTok",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Social Media"],
    annualContractValue: 10000,
    logoURL: "https://staticassets.commandbar.com/showcase/vine.png",
  },
  {
    id: "jCdnnZ-9gIP4TgQo8T2nX",
    name: "Blockbuster",
    stageId: "6",
    contactEmail: "wayne@blockbuster.com",
    contactName: "Wayne Huizenga",
    notes: [
      {
        id: nanoid(),
        text: "Had to get them a discount for old time's sake. I still tear up thinking about those Friday nights looking for a DVD to rent.",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Entertainment"],
    annualContractValue: 1000,
    logoURL: "https://staticassets.commandbar.com/showcase/blockbuster.png",
  },
  {
    id: "4Okqoer1hct1FYPgVmZxq",
    name: "Hooli",
    stageId: "7",
    contactEmail: "gavin@hooli.com",
    contactName: "Gavin Belson",
    notes: [
      {
        id: nanoid(),
        text: "Big contract, can't lose this one.",
        updatedAt: formatISO(new Date()),
      },
      {
        id: nanoid(),
        text: "Never joke again about Gavin (I don't even know how I offended him). Did not go over well. Think I lost this one.",
        updatedAt: formatISO(new Date()),
      },
    ],
    labels: ["Technology"],
    annualContractValue: 100000,
    logoURL: "https://staticassets.commandbar.com/showcase/hooli.jpeg",
  },
];

export default companies;
