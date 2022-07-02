import { ComponentRenderProxy } from "vue/types/v3-component-proxy";

export type Component<
  P = {},
  M extends {
    [key: string]: Function;
  } = {}
> = new (...args: any[]) => ComponentRenderProxy<P, {}, {}, {}, M>;

export type GenericComponent<T> = (T extends Component<infer P> ? P : {}) &
  (T extends Component<any, infer M> ? M : {});

export type IMyTest = Component<
  {
    msg?: string;
  },
  {
    emitChange: () => any;
  }
>;

export const MyTest: IMyTest & string = "MyTest" as any;
