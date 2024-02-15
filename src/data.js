//CategoryCard imgleri
import ctCard1 from "./assets/ctCard1.jpg";
import ctCard2 from "./assets/ctCard2.jpg";
import ctCard3 from "./assets/ctCard3.jpg";
import ctCard4 from "./assets/ctCard4.jpg";

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
