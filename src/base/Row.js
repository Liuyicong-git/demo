export default {
    name: 'LRow',
    componentName:'LRow',
    computed:{
        style() {
            const ret = {};
      
            if (this.gutter) {
              ret.marginLeft = `-${this.gutter / 2}px`;
              ret.marginRight = ret.marginLeft;
            }
      
            return ret;
          }
    },
    render:function(h){

        return h('div', 
        {
            class:['l-row' ],
            // style: this.style
        }
        , this.$slots.default )
    },
    props:{
        gutter:{
            type:Number,
            default:0
        }
    }
}