import React from "react";

import logo from "assets/logo.svg";

import HomeIcon from "@mui/icons-material/Home";
import AboutIcon from "@mui/icons-material/Info";
import ContactIcon from "@mui/icons-material/ContactPage";
import GalleryIcon from "@mui/icons-material/PictureInPictureAltSharp";
import BlogIcon from "@mui/icons-material/Article";

const staticPages = {
  home: {
    id: 0,
    slug: "",
    title: "Home",
    icon: <HomeIcon />,
  },
  about: {
    id: 1,
    slug: "about",
    title: "About",
    icon: <AboutIcon />,
  },
  contact: {
    id: 2,
    slug: "contact",
    title: "Contact",
    icon: <ContactIcon />,
  },
  gallery: {
    id: 3,
    slug: "gallery",
    title: "Gallery",
    icon: <GalleryIcon />,
  },
  blog: {
    id: 4,
    slug: "blog",
    title: "Blog",
    icon: <BlogIcon />,
  },
};

const dynamicPages = {
  account: {
    id: 5,
    slug: "/account",
    title: "Account",
  },
  settings: {
    id: 6,
    slug: "/settings",
    title: "Settings",
  },
  cart: {
    id: 7,
    slug: "/cart",
    title: "Cart",
  },
  checkout: {
    id: 8,
    slug: "/checkout",
    title: "Checkout",
  },
  logout: {
    id: 9,
    slug: "/logout",
    title: "Logout",
  },
};

const pagesMapDraft = [
  {
    slug: ":pages",
    sidebar: false,
    elm: <div />,
  },
  {
    slug: "about",
    title: "About",
    elm: <div />,
  },
  {
    slug: "contact",
    sidebar: false,
    elm: <div />,
  },
];

const appbar = () => {
  const avatar = {
    options: [{ id: dynamicPages["account"].id }, { id: dynamicPages["settings"].id }],
    options2: [{ id: dynamicPages["logout"].id }],
  };
  const links = Object.keys(staticPages).map((k) => k);

  return { avatar, links };
};

const config = {
  pages: staticPages,
  appbar: appbar(),
  logo: logo,
  menus: {
  },
};
export default config;
