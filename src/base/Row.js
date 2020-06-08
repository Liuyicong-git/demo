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
    provide(){
        return {
            row:this
        };
    },
    render:function(h){
        return h(this.tags, 
        {
            class:['l-row' ],
            style: this.style
        }
        , this.$slots.default )
    },
    props:{
        gutter:{
            type:Number,
            default:0
        },
        tags: {
            type:String,
            default:'div'
        }
    }
}