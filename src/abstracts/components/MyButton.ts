import {
  Component,
  ComponentMethods,
  ComponentProps,
  ComponentSymbol,
} from "./common";

/**
 * MyButton
 */
export type MyButtonProps = ComponentProps<{
  name?: string;
}>;

export type MyButtonMethods = ComponentMethods<{
  printName(): void;
  emitClick(): void;
  emitChange(): void;
}>;

export type MyButton = Component<MyButtonProps, MyButtonMethods>;

export const MyButton: ComponentSymbol<MyButtonProps, MyButtonMethods> =
  "MyButton" as any;
