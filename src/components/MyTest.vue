<script lang="tsx">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { GenericComponent, IMyTest } from "../abstracts/MyTest";

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue implements GenericComponent<IMyTest> {
  @Prop({ type: String })
  msg?: string;

  @Emit("change")
  emitChange() {
    return "testevent";
  }

  render() {
    return <button onClick={this.emitChange}>{this.msg}!!!</button>;
  }
}
</script>
