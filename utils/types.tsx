export interface Attribute {
  name: string;
  color: string;
  description: string;
  image: string;
}

export interface Attributes {
  key: string;
  canStack: boolean;
  attributeCount: string;
  attributes: Attribute[];
}

export interface Data {
  key: string;
  attributes: Attributes[];
}
