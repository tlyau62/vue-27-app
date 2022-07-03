<script lang="tsx">
import { Component, Prop, Vue } from "vue-property-decorator";
import type { MyButton as TMyButton } from "../abstracts/components/MyButton";
import { MyButton } from "../abstracts/components/MyButton";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  render() {
    return (
      <div>
        <h4>Hello world</h4>

        <MyButton
          ref="test"
          name={this.msg}
          onClick={() => {
            (this.$refs.test as unknown as TMyButton).printName();
          }}
        />
      </div>
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
