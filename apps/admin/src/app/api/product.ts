export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: { label: string};
    category?: string;
    image?: string;
    rating?: number;
}
