import { MethodOptions } from "vue/types/v3-component-options";
import { VueProxy } from "vue/types/v3-component-proxy";
import { EmitsOptions } from "vue/types/v3-setup-context";

export type ComponentFactory<
  Props = {},
  Methods extends MethodOptions = {},
  Emits extends EmitsOptions = {}
> = VueProxy<Props, {}, {}, {}, Methods, {}, {}, Emits>;

export type IComponent<T> = T extends ComponentFactory<
  infer Props,
  infer Methods,
  any[]
>
  ? Props & Methods
  : never;

export interface IMyTest
  extends ComponentFactory<
    {
      msg?: string;
    },
    {
      printMsg(): void;
    },
    "change"[]
  > {}

export const MyTest: IMyTest & string = "MyTest" as any;
