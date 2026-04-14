import type { MDXComponents } from "mdx/types";

// This file is required to use MDX with the App Router
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
