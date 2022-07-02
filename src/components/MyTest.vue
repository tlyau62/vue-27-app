<script lang="tsx">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { IComponent, IMyTest } from "../abstracts/MyTest";

@Component({
  components: {
    HelloWorld,
  },
})
export default class MyTest extends Vue implements IComponent<IMyTest> {
  @Prop({ type: String })
  msg?: string;

  printMsg(): void {
    throw new Error("Method not implemented.");
  }

  render() {
    return <button>{this.msg}!!!</button>;
  }
}
</script>
