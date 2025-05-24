export interface packagesType {
    name: string;
    good_for: string;
    price: string;
    description: string[];
    Projected_Growth: string[];
}

export interface OurWorksType {
    title: string;
    description: string;
    image: string;
    type: "image" | "video";
    category: "TikTok" | "Instagram" | "Facebook" | "Web" | "Brochure";
    link: string;
}

export interface serviceType {
    id:number,
    name: string,
    banner: string,
    slogan: string,
    icon: React.ReactElement
    description: string
}