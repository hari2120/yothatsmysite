import React from 'react'
import '../App.css';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteSubowner, deleteTract } from '../actions';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';




const Tract = ({tractsData}) => {

    const dispatch = useDispatch()


  
   
 
    return (
        <div className="App">
          <h4 className="m-4">Only on desktop, laptop iPad, or tablet... This site absolutely  is not Responsive</h4>
          <div className="toLeft">
            <Link to="/add" className="btn btn-primary">Add a new Tract</Link>

          </div>
        
        
        <div className="table__head">
          <p className="heading">Owner</p>
          <p className="heading">Mineral Interest</p>
          <p className="heading">NPRI</p>
          <p className="heading">Lease</p>
          <p className="heading">Action</p>
        </div>
        {
          tractsData.map((tract, index) => {
            return(
              <div className="table1" key={index}>

              <div className="first__row">
                  <div className="first owner__name">
                    <p>{tract.owner}</p>
                  </div>
                  <div className="first mineral">
                    <p>{tract.mineralInterest}</p>
                  </div>
                  <div className="first__empty npri"></div>
                  <div className="first npri">
                    <p>{tract.lease}</p>
                  </div>
                  <div>
                   <Link className="btn btn-dark mr-2" to={`edit/${index}`}>Edit</Link>


                  </div>
                  
              </div>
              {tract.subowners.map((subowner, i) => {
                return(
                  <div  key={i}>
                    <div className="column">
              
                      <div className="sub__owner d-flex">
                         <SubdirectoryArrowRightIcon /><p className="first">{subowner.subowner}</p>
                        
                      </div>
                      <div className="empty"></div>
                      <div className="npri">
                        <p className="first" key={i}>{subowner.npris}</p>
                        
                      </div>
                      <div className="empty"></div>
                      <div className="delete">
                        <p key={i}><button className="btn btn-danger" onClick={(e) => dispatch(deleteSubowner(i, index))}>Delete</button></p>
                        
                      </div>
                      
                    </div>
                  </div>
                    )
                  })
                }
              <div className="add__npri my-3">
              <button className="btn btn-danger" key={index} onClick={(e) => dispatch(deleteTract(index))}>Delete</button>

  
              </div>
              
            
            </div>
  
            )
          })
        }
  
       
        
      </div>
    )
}
const mapStateToProps  = (state) => {
  return{
      tractsData: state.tract
  }
}


export default connect(mapStateToProps)(Tract);



