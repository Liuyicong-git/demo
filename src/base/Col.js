export default {
    name: 'LCol',
    computed : {
        gutter(){
            let parent = this.$parent;
            while( parent && parent.$options.componentName!='LRow'){
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0 ;
        }
    },
    render:function(h){
        let style = {}
        style.paddingLeft = this.gutter/2 + 'px'
        style.paddingRight = style.paddingLeft ;
        return h(this.tags , {
            class:[
                'l-col' , 'l-col-'+ this.span
            ],
            style: style
        }
        ,this.$slots.default)
    },
    props:{
        tags: {
            type:String,
            default:'div'
        },
        span :{
            type:Number,
            default:0
        },
        

    }
}