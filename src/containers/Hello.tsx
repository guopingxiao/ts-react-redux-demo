import { connect } from 'react-redux'
import * as actionCreator  from '../actions/index'
import { StoreState } from '../types/index'

import { HelloComponent} from '../components/index'


const mapState = ({ levelState: { name, level } }: StoreState) => ({
  level,
  name
})

const mapDispatch = (dispatch: any) => ({
  onIncrement:() => dispatch(actionCreator.increaseLevel()),
  onDecrement:() => dispatch(actionCreator.decreaseLevel())
})


export default connect(mapState, mapDispatch)(HelloComponent)