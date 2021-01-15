export interface ShopItemDTS {
  id:number
  name: string;
  imageUrl: string;
  price: number;
}
export interface ShopDTS {
  id: number;
  title: string;
  routeName: string;
  items: ShopItemDTS[];
}
