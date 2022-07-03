import { $Keys } from "utility-types";
import { MethodOptions } from "vue/types/v3-component-options";
import { VueProxy } from "vue/types/v3-component-proxy";

type ComponentProps<T extends Record<string, any>> = T;

type ComponentMethods<T extends Record<string, Function>> = T;

type ComponentEventName<T extends `emit${string}`> =
  T extends `emit${infer Event}` ? Uncapitalize<Event> : never;

/**
 * https://stackoverflow.com/questions/41253310/typescript-retrieve-element-type-information-from-array-type
 * https://stackoverflow.com/questions/53501721/typescript-exclude-property-key-when-starts-with-target-string
 */
type ComponentEvents<T extends Record<string, Function>> = ComponentEventName<
  $Keys<Pick<T, keyof T & `emit${string}`>>
>;

type Component<Props, Methods> = Props & Methods;

type ComponentSymbol<Props, Methods extends MethodOptions = {}> = VueProxy<
  Props,
  {},
  {},
  {},
  Methods,
  {},
  {},
  Array<ComponentEvents<Methods>>
>;

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

export const MyButtonSymbol: ComponentSymbol<MyButtonProps, MyButtonMethods> =
  "MyButton" as any;

export class MyButtonComponent implements MyButton {
  name?: string | undefined;
  printName(): void {
    throw new Error("Method not implemented.");
  }
  emitClick(): void {
    throw new Error("Method not implemented.");
  }
  emitChange(): void {
    throw new Error("Method not implemented.");
  }
}
