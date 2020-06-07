import Row from './Row'
import Col from './Col'
Row.install = function(Vue){
    Vue.component( Row.name , Row )
}
Col.install = function(Vue){
    Vue.component( Col.name , Col )
}
export default { Row , Col } 