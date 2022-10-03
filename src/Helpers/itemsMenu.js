export const itemsMenu = [
  { title: "Inicio", href: "/", subMenu: false },
  {
    title: "Productos",
    href: "/productos",
    subMenu: true,
    itemSubMenu: [
      { title: "Mercados",      href: "/category/mercados" },
      { title: "Verduras",      href: "/category/verduras" },
      { title: "Frutas",        href: "/category/frutas" },
    ],
  },
  { title: "Deberias Saberlo", href: "#", subMenu: false },
  { title: "Contacto", href: "#", subMenu: false },
];
