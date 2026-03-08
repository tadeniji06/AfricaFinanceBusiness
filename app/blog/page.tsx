import type { Metadata } from "next";
import { BlogClient } from "./BlogClient";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"The latest insights and analysis on African markets from the experts at Africa Finance Business.",
};

export default function Blog() {
	return <BlogClient />;
}
