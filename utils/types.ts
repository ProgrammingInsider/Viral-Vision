export interface packagesType {
  name: string;
  good_for: string;
  price: string;
  description: string[];
  Projected_Growth: string[];
}

export interface OurWorksType {
    id: string;
    title: string;
    coverImage: string;
    country: string;
    flag: string;
    desc: string[];
    year: string;
    tags: string[];
    status: string;
    redirectLink: string;
}

// export interface serviceType {
//     id:number,
//     name: string,
//     banner: string,
//     slogan: string,
//     icon: React.ReactElement
//     description: string
// }
export interface serviceItemType {
  id: number;
  name: string;
  banner: string;
  slogan: string;
  icon: React.ReactElement;
  description: string;
}

export interface serviceCategoryType {
  category: string;
  services: serviceItemType[];
}

export interface OurWorksType {
  id: string;
  title: string;
  companyLogo: string;
  mainImage: string;
  desc: string[];
  year: string;
  tags: string[];
  furtherImages: string[];
  link: string;
}
