/* The list of tattoos shown in the portfolio, in order.
 *
 * To add a piece: put the photo in images/ (WebP or JPEG, about 1000px wide),
 * then add a line below with its title, where it sits on the body, the file name,
 * and alt text describing the tattoo for people who cannot see the photo.
 * The _ja lines are the same in Japanese, for the Japanese page (ja/index.html);
 * if a piece has none, the Japanese page shows the English wording.
 * The pages build the grid from this list, and the slideshow on the opening screen
 * runs through it in the same order, starting from the Phoenix.
 * pos / pos_wide (optional) choose which part of the photo stays in view on the
 * opening screen, on phones and on wide screens: "left% top%", e.g. "50% 58%".
 * Nothing else needs changing.
 */
window.WABORI_WORKS = [
  { title: "Peony & Butterfly", place: "Back piece", img: "images/peony-butterfly.webp",
    alt: "Peony and butterfly back piece tattoo by Yoso, in colour",
    title_ja: "牡丹と蝶", place_ja: "背中",
    alt_ja: "Yosoによる牡丹と蝶の背中のタトゥー（カラー）" },
  { title: "Phoenix", place: "Back piece", img: "images/phoenix-back.webp",
    alt: "Phoenix back piece tattoo by Yoso, black and grey",
    title_ja: "鳳凰", place_ja: "背中",
    alt_ja: "Yosoによる鳳凰の背中のタトゥー（ブラック＆グレー）",
    pos: "42% 40%", pos_wide: "50% 58%" },
  { title: "Lotus", place: "Back piece", img: "images/lotus-back.webp",
    alt: "Lotus back piece tattoo by Yoso",
    title_ja: "蓮", place_ja: "背中",
    alt_ja: "Yosoによる蓮の背中のタトゥー" },
  { title: "Tao Calligraphy", place: "Back piece", img: "images/tao-back.webp",
    alt: "Back piece tattoo of Chinese calligraphy by Yoso",
    title_ja: "道の書", place_ja: "背中",
    alt_ja: "Yosoによる書（漢字）の背中のタトゥー" },
  { title: "Japanese Back Piece", place: "Back piece", img: "images/japanese-back.webp",
    alt: "Japanese back piece tattoo by Yoso of a mythical figure with a woman's face and flowing hair, black and grey",
    title_ja: "和彫り", place_ja: "背中",
    alt_ja: "Yosoによる和彫りの背中。女性の顔と流れる髪をもつ霊獣（ブラック＆グレー）" },
  { title: "Dragon Head", place: "Sleeve", img: "images/dragon-head.webp",
    alt: "Dragon head sleeve tattoo by Yoso, black ink",
    title_ja: "龍頭", place_ja: "袖",
    alt_ja: "Yosoによる龍の頭の袖のタトゥー（墨一色）" },
  { title: "Phoenix Sleeve", place: "Sleeve", img: "images/phoenix-sleeve.webp",
    alt: "Phoenix sleeve tattoo by Yoso with clouds, black and grey",
    title_ja: "鳳凰と雲", place_ja: "袖",
    alt_ja: "Yosoによる鳳凰と雲の袖のタトゥー（ブラック＆グレー）" },
  { title: "Dragon", place: "Detail", img: "images/dragon.webp",
    alt: "Close-up of a dragon tattoo by Yoso showing the line work",
    title_ja: "龍", place_ja: "部分",
    alt_ja: "Yosoによる龍のタトゥーの部分。線の彫りが見えるクローズアップ" },
  { title: "Tiger", place: "Arm", img: "images/tiger.webp",
    alt: "Tiger tattoo by Yoso on the arm, with clouds and red accents",
    title_ja: "虎", place_ja: "腕",
    alt_ja: "Yosoによる腕の虎のタトゥー。雲と赤のアクセント" },
  { title: "Samurai", place: "Chest", img: "images/samurai.webp",
    alt: "Samurai chest tattoo by Yoso, black and grey",
    title_ja: "侍", place_ja: "胸",
    alt_ja: "Yosoによる侍の胸のタトゥー（ブラック＆グレー）" },
  { title: "Bonji", place: "Chest", img: "images/bonji.webp",
    alt: "Bonji (Sanskrit seed syllable) chest tattoo by Yoso, black ink",
    title_ja: "梵字", place_ja: "胸",
    alt_ja: "Yosoによる梵字（サンスクリットの種子）の胸のタトゥー（墨一色）" },
  { title: "Crow", place: "Forearm", img: "images/crow.webp",
    alt: "Crow on a branch tattoo by Yoso on the forearm, with pink and purple leaves",
    title_ja: "烏", place_ja: "前腕",
    alt_ja: "Yosoによる枝にとまる烏の前腕のタトゥー。ピンクと紫の葉" }
];
