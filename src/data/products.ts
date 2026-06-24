export type ProductKey = "chapathi" | "pathiri" | "idiyappam" | "coinPorotta" | "attaPorotta" | "maidaPorotta" | "kuboos" | "appam";

export type Product = {
  key: ProductKey;
  name: string;
  category: string;
  price: string;
  short: string;
  description: string;
  accent: string;
  image: {
    src: string;
    srcSet: string;
    alt: string;
    credit: string;
  };
  height: "short" | "medium" | "tall";
};

const localImage = (fileName: string) => `/images/${fileName}`;

export const products: Product[] = [
  {
    key: "chapathi",
    name: "Chapathi",
    category: "Daily Fresh",
    price: "Rs 5/piece | Rs 50 pack",
    short: "Soft, wholesome chapathi cooked fresh every day.",
    description: "A comfort staple prepared with clean handling and dependable consistency for homes and functions.",
    accent: "#D90429",
    image: {
      src: localImage("chapathi.png"),
      srcSet: `${localImage("chapathi.png")} 800w`,
      alt: "Warm chapathis stacked and ready to eat",
      credit: "Local product image",
    },
    height: "medium",
  },
  {
    key: "pathiri",
    name: "Nice Pathiri",
    category: "Malabar Favorite",
    price: "Rs 5/piece | Rs 50 pack",
    short: "Delicate rice pathiri with a tender bite.",
    description: "Light, traditional, and perfect with curries for breakfast, dinner, or event spreads.",
    accent: "#9F0712",
    image: {
      src: localImage("pathiri.png"),
      srcSet: `${localImage("pathiri.png")} 800w`,
      alt: "Soft white pathiri served on a plate",
      credit: "Local product image",
    },
    height: "short",
  },
  {
    key: "idiyappam",
    name: "Noolputtu",
    category: "Steamed Fresh",
    price: "Daily availability",
    short: "Fine idiyappam strands steamed into soft coils.",
    description: "Freshly steamed noolputtu with a clean texture and the familiar Kerala home-food feel.",
    accent: "#D90429",
    image: {
      src: localImage("idiyappam.png"),
      srcSet: `${localImage("idiyappam.png")} 800w`,
      alt: "Idiyappam served with curry",
      credit: "Local product image",
    },
    height: "tall",
  },
  {
    key: "coinPorotta",
    name: "Coin Porotta",
    category: "Layered Porotta",
    price: "Rs 10/piece",
    short: "Small, flaky porottas with a griddle-fresh finish.",
    description: "A compact Kerala porotta for quick plates, kids, snack counters, and event service.",
    accent: "#111111",
    image: {
      src: localImage("coin-porotta.png"),
      srcSet: `${localImage("coin-porotta.png")} 800w`,
      alt: "Small coin porottas with visible spiral layers",
      credit: "Local product image",
    },
    height: "medium",
  },
  {
    key: "attaPorotta",
    name: "Atta Porotta",
    category: "Whole Wheat",
    price: "Rs 12/piece",
    short: "Healthy whole wheat porotta with Kerala layers.",
    description: "Made for customers who want the layered porotta experience with a wholesome atta base.",
    accent: "#D90429",
    image: {
      src: localImage("atta-porotta.png"),
      srcSet: `${localImage("atta-porotta.png")} 800w`,
      alt: "Brown whole wheat paratha-style flatbread",
      credit: "Local product image",
    },
    height: "short",
  },
  {
    key: "maidaPorotta",
    name: "Maida Porotta",
    category: "Classic Kerala",
    price: "Classic pricing",
    short: "Traditional flaky maida porotta, freshly prepared.",
    description: "The familiar Kerala-style porotta with soft layers, cooked for daily and bulk orders.",
    accent: "#111111",
    image: {
      src: localImage("maida-porotta.png"),
      srcSet: `${localImage("maida-porotta.png")} 800w`,
      alt: "Layered Malabar porotta",
      credit: "Local product image",
    },
    height: "medium",
  },
  {
    key: "kuboos",
    name: "Kuboos",
    category: "Pack of 5",
    price: "Rs 6/pack of 5",
    short: "Soft kuboos packs ready for everyday meals.",
    description: "Affordable, fresh, and easy to pair with shawarma fillings, curries, and home dinners.",
    accent: "#D90429",
    image: {
      src: localImage("kuboos.png"),
      srcSet: `${localImage("kuboos.png")} 800w`,
      alt: "Fresh kuboos flatbread pack",
      credit: "Local product image",
    },
    height: "tall",
  },
  {
    key: "appam",
    name: "Appam",
    category: "Kerala Breakfast",
    price: "Rs 8/piece",
    short: "Soft lace-edged appam made fresh for breakfast and dinner.",
    description: "A traditional Kerala appam with a tender center and crisp edge, ready for daily and bulk orders.",
    accent: "#9F0712",
    image: {
      src: localImage("appam.png"),
      srcSet: `${localImage("appam.png")} 800w`,
      alt: "Fresh Kerala appam",
      credit: "Add your local appam image",
    },
    height: "medium",
  },
];
