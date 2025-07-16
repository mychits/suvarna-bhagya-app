import { ImagePaths } from "@/constants/Path";
import { ICardContentImages } from "@/models/ICardImages";

const CardContentImages: ICardContentImages = {
  imagesOne: [
    { id: "#1", image: ImagePaths.GoldCoins },
    { id: "#2", image: ImagePaths.GoldCoinsBagRedPNG },
  ],
  imagesTwo: [
    { id: "#3", image: ImagePaths.JewelleryPNG },
    { id: "#4", image: ImagePaths.GoldBagWithCoinsPNG },
  ],
};
export { CardContentImages };
