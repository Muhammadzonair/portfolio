import type { SVGProps } from "react";

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2.5a9.5 9.5 0 0 0-3.01 18.51c.48.09.66-.2.66-.46 0-.23-.01-.84-.01-1.65-2.69.58-3.26-1.16-3.26-1.16-.44-1.12-1.07-1.42-1.07-1.42-.88-.6.07-.59.07-.59.97.07 1.48 1 1.48 1 .87 1.48 2.29 1.05 2.85.8.09-.63.34-1.05.62-1.29-2.15-.24-4.41-1.08-4.41-4.82 0-1.06.38-1.94 1-2.62-.1-.24-.44-1.24.09-2.59 0 0 .82-.26 2.68 1a9.4 9.4 0 0 1 4.88 0c1.86-1.26 2.68-1 2.68-1 .53 1.35.2 2.35.1 2.59.62.68 1 1.56 1 2.62 0 3.75-2.27 4.57-4.44 4.81.35.3.66.89.66 1.8 0 1.29-.01 2.33-.01 2.64 0 .26.18.55.67.46A9.5 9.5 0 0 0 12 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.2 9.5V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="7.2" cy="7" r="1.2" fill="currentColor" />
      <path d="M11 17v-4.1c0-1.9 1.1-3.4 3-3.4 1.8 0 2.9 1.2 2.9 3.3V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FigmaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 12a3 3 0 1 1 0-6h3v6h-3Z" fill="currentColor" opacity="0.95" />
      <path d="M12 12a3 3 0 1 0 0 6h3v-6h-3Z" fill="currentColor" opacity="0.78" />
      <path d="M12 6a3 3 0 1 1 0-6h3v6h-3Z" fill="currentColor" opacity="0.65" transform="translate(0 6)" />
      <circle cx="15" cy="6" r="3" fill="currentColor" opacity="0.85" />
      <circle cx="9" cy="18" r="3" fill="currentColor" opacity="0.72" />
    </svg>
  );
}
