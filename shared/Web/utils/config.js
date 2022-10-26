import React from "react";

import logo from "assets/logo.svg";

import HomeIcon from "@mui/icons-material/HomeOutlined";
import AboutIcon from "@mui/icons-material/InfoOutlined";
import ContactIcon from "@mui/icons-material/ContactPageOutlined";
import GalleryIcon from "@mui/icons-material/PictureInPictureAltOutlined";
import BlogIcon from "@mui/icons-material/ArticleOutlined";

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

const types = {
  HOME: "HOME",
  PAGE: "PAGE",
  CATEGORY: "CATEGORY",
  GALLERY: "GALLERY",
  PRODUCT: "PRODUCT",
  POST: "POST",
};

let pageCounter = 0;
const page = ({ title, slug, icon }) => {
  pageCounter += 1;
  return {
    id: pageCounter,
    title,
    slug,
    icon,
  };
};
let postCounter = 0;
const post = ({
  title,
  subTitle,
  abstract,
  author,
  categories,
  slug,
  date,
  featureImg,
}) => {
  postCounter += 1;
  return {
    id: postCounter,
    title,
    slug,
    subTitle,
    abstract,
    author,
    categories,
    date,
    featureImg,
  };
};

const category = ({ title, slug, parent }) => ({
  title,
  slug,
  parent,
});

const siteMapDraft = [
  {
    id: 1,
    type: types.HOME,
    ...page({ title: "Home", slug: "", icon: <HomeIcon /> }),
  },
  {
    id: 2,
    type: types.PAGE,
    ...page({ title: "About", slug: "about", icon: <AboutIcon /> }),
  },
  {
    id: 3,
    type: types.PAGE,
    ...page({ title: "Blog", slug: "blog", icon: <BlogIcon /> }),
  },
  {
    id: 4,
    type: types.PAGE,
    ...page({ title: "Contact", slug: "contact", icon: <ContactIcon /> }),
  },
  {
    id: 5,
    type: types.CATEGORY,
    ...page({ title: "Contact", slug: "contact", icon: <ContactIcon /> }),
  },
];

const config = {
  pages: staticPages,
  appbar: {
    links: [{}],
  },
  logo: logo,
  menus: {},
};
export default config;
