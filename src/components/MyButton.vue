<script lang="tsx">
import { MyButton } from "@/abstracts/components/MyButton";
import Vue from "vue";
import Component from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

@Component
export default class MyButtonComponent extends Vue implements MyButton {
  @Prop({ type: String })
  name?: string;

  printName(): void {
    console.log(this.name);
  }

  @Emit("click")
  emitClick(): void {
    this.emitChange();

    return;
  }

  @Emit("change")
  emitChange(): void {
    return;
  }

  render() {
    return <button onClick={this.emitClick}>{this.name}</button>;
  }
}
</script>
