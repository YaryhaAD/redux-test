import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeFirstName, changeSecondName } from '../store/actions'

class MainComponent extends React.Component {
  render() {
    console.log(this.props)
    const {firstName, secondName, changeFirstName, changeSecondName } = this.props
    return (
      <div>
        <div>
          <input 
            type="text" 
            value={firstName} 
            placeholder='First Name' 
            onChange={(event) => changeFirstName(event.target.value)} 
          />
        </div>
        <div>
          <input 
            type="text" 
            value={secondName} 
            placeholder='Second Name'
            onChange={(event) => changeSecondName(event.target.value)}
          />
        </div>
        <div>{`${firstName} ${secondName}`}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ //запись данных их state в props MainComponent
  firstName: state.firstName,
  secondName: state.secondName
}) 

const mapDispatchToProps = { //put actions to props
  changeFirstName,
  changeSecondName
}

//ANALOGUE
// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeFirstName: bindActionCreators(changeFirstName, dispatch),
//     changeSecondName: bindActionCreators(changeSecondName, dispatch)
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)