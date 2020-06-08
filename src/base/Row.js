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
        let classList =[];
        console.log(this)
        if(this.type =='flex') classList.push('l-row--flex')
        if(this.justify) {
            classList.push ('is-justify-'+ this.justify)
        }
        return h(this.tags, 
        {
            class:['l-row',...classList ],
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
        },
        type: String,
        justify: String,
    }
}