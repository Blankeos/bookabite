/**
 * Carlo: We can separate this further in the future, for now put all tailwind-variants here.
 * https://www.tailwind-variants.org/
 */

import { tv } from "tailwind-variants";

/**
 * Tailwind Variants for Default Button.
 * This is not final.
 */
export const button = tv({
	variants: {
		size: {
			sm: "px-3 py-1",
			lg: "px-4 py-2"
		},
		color: {
			primary: "bg-orange-500 text-white",
			secondary: "bg-yellow-500 text-white"
		},
		type: {
			rounded: "rounded-full",
			box: "rounded-none"
		}
	},
	defaultVariants: {
		color: "primary",
		size: "lg",
		type: "rounded"
	}
});

/** Fluid container style. */
export const container = tv({
	base: "mx-auto w-full px-9",
	variants: {
		size: {
			base: "max-w-5xl"
		},
		direction: {
			/** refers to flex direction */
			none: "",
			vertical: "flex flex-col",
			horizontal: "flex"
		}
	},
	defaultVariants: {
		size: "base",
		direction: "vertical"
	}
});
