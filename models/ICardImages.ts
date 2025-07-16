type ICardContentImage ={
  id:string,
  image:number
}
interface ICardContentImages {
    imagesOne:ICardContentImage[],
    imagesTwo:ICardContentImage[]
  }
  export { ICardContentImage, ICardContentImages };

