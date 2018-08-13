import node from "rollup-plugin-node-resolve";
import minify from 'rollup-plugin-minify-es';



export default {
  input: "node_modules/moment/src/moment.js",
  output: {
    name: "moment",
    format: "esm",
    file: "dist/moment.js"
  },
  plugins: [
    node({ jsnext: true }),
    minify()
    ]
};
