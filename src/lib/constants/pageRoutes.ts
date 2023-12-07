const pageRoutes = {
	home: "/",
	about: "/about"
} as const;

/** TODO: can move this in another file if you want. */
export const navLinks: Array<{
	name: string;
	href: (typeof pageRoutes)[keyof typeof pageRoutes];
}> = [{ name: "About", href: pageRoutes.about }];

export default pageRoutes;
