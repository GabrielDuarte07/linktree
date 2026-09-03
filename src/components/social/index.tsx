import type { ReactNode } from "react";

type SocialProps = {
	url: string;
	children: ReactNode;
};

export function Social({ children, url }: SocialProps) {
	return (
		<a rel="noopener noreferrer" href={url} target="_blank">
			{children}
		</a>
	);
}
