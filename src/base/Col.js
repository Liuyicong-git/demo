export default {
    name: 'LCol',
    componentName:'LCol',
    inject:['row'],
    computed : {
        gutter(){
            /*
                采用$parent 的方式遍历循环寻找父组件  如果后期组件间的嵌套关系发生变化时容易受到影响
                所以尽量采用 provide / inject 的方式
                provide / inject 的方式 在不管层级多深嵌套层级多深都可以方便的找到父级组件
            */
            // let parent = this.$parent;
            // while( parent && parent.$options.componentName!='LRow'){
            //     parent = parent.$parent;
            // }
            // return parent ? parent.gutter : 0 ;
            if(this.row){
                return this.row.gutter ? this.row.gutter : 0;
            }
            return 0;
        }
    },
    render:function(h){
        let classList = [];
        classList.push('l-col-'+ this.span)
        classList.push('l-col-offset-'+ this.offset)
        let style = {}
        style.paddingLeft = this.gutter/2 + 'px'
        style.paddingRight = style.paddingLeft ;
        return h(this.tags , {
            class:[
                'l-col',
                ...classList
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
        offset :{
            type:Number,
            default:0
        }       

    }
}