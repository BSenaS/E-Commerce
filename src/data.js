//CategoryCard imgleri
import ctCard1 from "./assets/ctCard1.jpg";
import ctCard2 from "./assets/ctCard2.jpg";
import ctCard3 from "./assets/ctCard3.jpg";
import ctCard4 from "./assets/ctCard4.jpg";

//BesSellerProductList imgleri
import bsi1 from "./assets/BestSellerList/bsi1.jpg";
import bsi2 from "./assets/BestSellerList/bsi2.jpg";
import bsi3 from "./assets/BestSellerList/bsi3.jpg";
import bsi4 from "./assets/BestSellerList/bsi4.jpg";
import bsi5 from "./assets/BestSellerList/bsi5.jpg";
import bsi6 from "./assets/BestSellerList/bsi6.jpg";
import bsi7 from "./assets/BestSellerList/bsi7.jpg";
import bsi8 from "./assets/BestSellerList/bsi8.jpg";

//FeatureCard Imgleri
import feature1 from "./assets/HomeAssets/featureImg1.jpg";
import feature2 from "./assets/HomeAssets/featureImg2.jpg";
import feature3 from "./assets/HomeAssets/featureImg3.jpg";

export const footerData = {
  brandName: "Bandage",
  copyright: "  Made With Love By Finland All Right Reserved",
  buttonText: "Subscribe",
  inputTitle: "Get In Touch",
  inputSubtext: " Lore imp sum dolor Amit",
  footerSections: [
    {
      title: "Company Info",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Legal",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Features",
      links: [
        "Business Marketing",
        "User Analytic",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      title: "Resources",
      links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
    },
  ],
};

export const categoryData = {
  men: {
    categoryName: "MEN",
    imageUrl: ctCard1,
  },

  women: {
    categoryName: "WOMEN",
    imageUrl: ctCard2,
  },

  accessories: {
    categoryName: "ACCESSORIES",
    imageUrl: ctCard3,
  },

  kids: {
    categoryName: "KIDS",
    imageUrl: ctCard4,
  },
};

//Best Seller Product Pagenin datası, homepage de kullanılacak.
export const bestSellerData = {
  products: [
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: bsi1,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: bsi2,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: bsi3,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: bsi4,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: bsi5,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: bsi6,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: bsi7,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: bsi8,
    },
  ],
};

export const featurePostData = {
  posts: [
    {
      id: "f1",
      title: "Loudest à la Madison #1 (L'integral)",
      date: "22 April 2021",
      commentsCount: "10 comments",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      imgUrl: feature1,
      url: "#",
      google: "Google",
      trending: "Trending",
      new: "New",
    },
    {
      id: "f2",
      title: "Loudest à la Madison #1 (L'integral)",
      date: "22 April 2021",
      commentsCount: "10 comments",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      imgUrl: feature2,
      url: "#",
      google: "Google",
      trending: "Trending",
      new: "New",
    },
    {
      id: "f3",
      title: "Loudest à la Madison #1 (L'integral)",
      date: "22 April 2021",
      commentsCount: "10 comments",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      imgUrl: feature3,
      url: "#",
      google: "Google",
      trending: "Trending",
      new: "New",
    },
  ],
};
