import { Band } from "../types/band";

export const bands: Band[] = [
  {
    id: 1,
    name: "AOP",
    logo: "/images/bands/aop.png",
    genre: "J-Pop",
    members: [
      { name: "Hirose Yuuki (vocals)", image: "/images/member/AOP/Hirose_Yuuki.png"},
      { name: "Asahi Yuuna (vocals)", image: "/images/member/AOP/Asahi_Yuuna.png" },
      { name: "Kudo Hinaki (vocals)", image: "/images/member/AOP/Kudo_Hinaki.png" },
      { name: "Tsutsumi Yukina (vocals)", image: "/images/member/AOP/Tsutsumi_Yukina.png" },
      { name: "Harusaki Non (vocals)", image: "/images/member/AOP/Harusaki_Non.png" },
      { name: "Hoshiki Seena (vocals)", image: "/images/member/AOP/Hoshiki_Seena.png" },
    ],
    songs: ["Zenryoku Batankyū", "Maboroshi Wing", "Kimi-shi ayauku mo chikau yore"],
  },
  {
    id: 2,
    name: "YOASOBI",
    logo: "/images/bands/yoasobi.png",
    genre: "J-Pop",
    members: [
      { name: "Ayase (Composer)", image: "/images/member/YOASOBI/Ayase.png" },
      { name: "ikura (Vocals)", image: "/images/member/YOASOBI/ikura.png" },
    ],
    songs: ["夜に駆ける (Yoru Ni Kakeru)", "怪物 (Monster)","群青 (Gunjou)"],
  },
  {
    id: 3,
    name: "King Gnu",
    logo: "/images/bands/kinggnu.png",
    genre: "Rock",
    members: [
      { name: "Daiki Tsuneta (Guitar and vocals)", image: "/images/member/King_Gnu/Daiki_Tsuneta.png" },
      { name: "Yū Seki (Vocals and keyboards)", image: "/images/member/King_Gnu/Yu_Seki.png" },
      { name: "Kazuki Arai (Bass)", image: "/images/member/King_Gnu/Kazuki_Arai.png" },
      { name: "Satoru Iguchi (Drums and sampler)", image: "/images/member/King_Gnu/Satoru_Iguchi.png" },
    ],
    songs: ["SPECIALZ", "AIZO", "SAKAYUME"],
  },
  {
    id: 4,
    name: "Creepy Nuts",
    logo: "/images/bands/creepy_nuts.jpg",
    genre: "Hip-hop",
    members: [
      { name: "DJ Matsunaga (DJ and Track Maker)", image: "/images/member/Creepy_Nuts/DJ_Matsunaga.jpg" },
      { name: "R-Shitei (Rapper and MC)", image: "/images/member/Creepy_Nuts/R_Shitei.jpg" },
    ],
    songs: ["Bling-Bang-Bang-Born", "Otonoke", "Nidone"],
  },
];