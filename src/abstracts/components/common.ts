import { $Keys } from "utility-types";
import { MethodOptions } from "vue/types/v3-component-options";
import { VueProxy } from "vue/types/v3-component-proxy";

export type ComponentProps<T extends Record<string, any>> = T;

export type ComponentMethods<T extends Record<string, Function>> = T;

export type ComponentEventName<T extends `emit${string}`> =
  T extends `emit${infer Event}` ? Uncapitalize<Event> : never;

/**
 * https://stackoverflow.com/questions/41253310/typescript-retrieve-element-type-information-from-array-type
 * https://stackoverflow.com/questions/53501721/typescript-exclude-property-key-when-starts-with-target-string
 */
export type ComponentEvents<T extends Record<string, Function>> =
  ComponentEventName<$Keys<Pick<T, keyof T & `emit${string}`>>>;

export type Component<Props, Methods> = Props & Methods;

export type ComponentSymbol<
  Props,
  Methods extends MethodOptions = {}
> = VueProxy<
  Props,
  {},
  {},
  {},
  Methods,
  {},
  {},
  Array<ComponentEvents<Methods>>
> &
  string;
