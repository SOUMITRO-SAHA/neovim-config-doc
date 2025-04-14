export interface ISidebarItem {
	label: string;
	slug?: string;
	autogenerate?: {
		directory: string;
	};
	items?: ISidebarItem[];
}

export const sidebar: ISidebarItem[] = [
	{
		label: "Quick Start",
		autogenerate: { directory: "start" },
	},
	{
		label: "Vim",
		autogenerate: { directory: "vim" },
	},
	{
		label: "The Why",
		autogenerate: { directory: "the-why" },
	},
	{
		label: "How to use",
		items: [
			{ label: "How to use", slug: "how-to-use" },
			{
				label: "Plugins",
				autogenerate: { directory: "how-to-use/plugins" },
			},
		],
	},
	{
		label: "Reference",
		autogenerate: { directory: "reference" },
	},
];
