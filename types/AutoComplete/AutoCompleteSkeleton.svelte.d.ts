/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface AutoCompleteSkeletonProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * Set to `true` to hide the label text
   * @default false
   */
  hideLabel?: boolean;
}

export default class AutoCompleteSkeleton extends SvelteComponentTyped<
  AutoCompleteSkeletonProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
  },
  {}
> {}
