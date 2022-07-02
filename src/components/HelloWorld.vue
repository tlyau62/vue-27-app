<script lang="tsx">
import { defineComponent } from "vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { IComponent, MyTest } from "../abstracts/MyTest";

const Z = defineComponent({
  emits: ["change", "input"],
});

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  render() {
    return (
      <div>
        <h4>Hello world</h4>

        <MyTest
          ref="test"
          msg={this.msg}
          onChange={() => {
            (
              this.$refs.test as unknown as IComponent<typeof MyTest>
            ).printMsg();
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
