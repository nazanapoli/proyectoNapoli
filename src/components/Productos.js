export class Producto {
    constructor(imageUrl, title, formattedPrice,description) {
        this.imageUrl = imageUrl;
        this.title = title.toUpperCase();
        this.formattedPrice = formattedPrice;
        this.description = description;
      }
}
export default Producto;