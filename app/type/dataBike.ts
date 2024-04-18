export interface CategoryProps {
    _id: string
    name: string
}

export interface DataBike {
  _id: string
  capitalPrice: number; 
  category: CategoryProps; 
  createdAt: string; 
  frameNumber: string;
  name: string; 
  policeNumber: string; 
  price: number;
}

