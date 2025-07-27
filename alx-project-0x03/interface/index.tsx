import { ReactNode } from "react";

// Interface for page routing functionality
export interface PageRouteProps {
  pageRoute: string
}

// Interface for Button component props
export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

// Interface for Layout component props
export interface LayoutProps {
  children: ReactNode;
}
