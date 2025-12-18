import { useCallback } from "react";

/**
 * Custom hook for smooth scrolling to elements by ID
 * Includes accessibility support with optional focus management
 */
export const useSmoothScroll = () => {
  const scrollToId = useCallback((id: string, options?: { focus?: boolean }) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });

      // Optional focus management for accessibility
      if (options?.focus) {
        // Set tabindex if not already focusable
        if (!element.hasAttribute("tabindex")) {
          element.setAttribute("tabindex", "-1");
        }
        // Focus after scroll animation completes
        setTimeout(() => {
          element.focus({ preventScroll: true });
        }, 500);
      }
    } else {
      console.warn(`Element with id "${id}" not found for scrolling.`);
    }
  }, []);

  return scrollToId;
};
