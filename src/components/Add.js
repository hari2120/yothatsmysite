import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { BrowserRouter as  Route, Switch, Link } from "react-router-dom";

import { add, edit } from '../actions'
import Tract from './Tract';

const Add = () => {
    const dispatch = useDispatch()

   

    const [owner, setowner] = useState({})
    const [subOwner, setSubOwner] = useState([ {subowner:"", npris:"", id:"" }])
    const [inputChange, setinputChange] = useState(
        {
            owner:"",
            mineralInterest:"",
            subowners:[{subowner:"", npris:"", id:"" }],
            lease:"",
            id:"" 
        }
    )


    // {
    //     owner:"Luke skywalker",
    //     subowners:[
    //         {subowner: "Leia Organa", npris:0.45 },
    //         {subowner: "Han solo", npris: 0.15 },
    //     ],
    //     mineralInterest:45,
    //     lease:"tatooine Lease"
    //     id:1 
    // },

    const AddsubOwner = () => {
        
        setSubOwner([...subOwner, {subowner:"", npris:"", id:"" }])
    }
    const onChangeHandler = (e, i) => {
        var {name, value} = e.target
        const list = [...subOwner]
        list[i][name] = value;
        list[i].id = i;
        setSubOwner(list)
    }

    const onInfochange = (e) => {
        var {name, value} = e.target;
        const OwnerList = inputChange
        OwnerList[name] = value;
        setinputChange(OwnerList)

    }
    const onApplyChanges = (e) => {
        e.preventDefault()
        setowner( {
            owner: inputChange.owner,
            subowners:subOwner,

            
            mineralInterest:inputChange.mineralInterest,
            lease:inputChange.lease,
            id: inputChange.id
        })
      


    }
    console.log("owner",owner);
    const onSubmit = (e) => {
        e.preventDefault()
        

        dispatch(add(owner))
    }

    return (
        <div className="container">
            <form>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="Owner">Owner Name</label>
                    <input
                        type="Owner" 
                        className="form-control" 
                        id="Owner" 
                        value={owner.owner}
                        name="owner"
                        placeholder="Owner"
                        onChange={e => onInfochange(e)} />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="mineralInterest">mineral Interest</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="mineralInterest" 
                        placeholder="Mineral Interest"
                        value={owner.mineralInterest}
                        name="mineralInterest"
                        onChange={e => onInfochange(e)}
                        required/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="lease">Lease</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="lease" 
                        placeholder="Lease Name"
                        value={owner.lease}
                        name="lease"
                        onChange={e => onInfochange(e)}
                        required/>
                </div>
            </div>
            {
                subOwner.map((sub, i) => {
                    return(
                        <div className="form-row" key={i}> 
                           
                            <div className="form-group col-md-4">
                                <label htmlFor="subowner">Sub Owner {i}</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="subowner"
                                    value={sub.subowner}
                                    name="subowner"
                                    onChange={e => onChangeHandler(e, i)}
                                    placeholder="subowner"
                                    required/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="mineralInterest">NPRI</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="mineralInterest"
                                    value={sub.npris}
                                    name="npris"
                                    onChange={e => onChangeHandler(e, i)}
                                    placeholder="npri"
                                    required/>
                            </div>
                       
                        </div>

                    )
                })
            }
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={AddsubOwner}
            >
                Add a new subowner
            </button>


           
           <div className="d-flex flex-column">
               <p><strong>Note: </strong> Click two times on <strong> Apply Changes</strong></p>
               <div className="buttons">
                    <button type="submit" onClick={onApplyChanges} className="btn btn-primary w-25">Apply changes</button>
                    <button type="submit" onClick={onSubmit} className="btn btn-primary ml-2 w-45"><Link to="/" className="btn btn-primary ">Submit</Link></button>

               </div>
              
           </div>
            
            

            
            </form>
            <Switch>
        
                <Route exact path="/" component={Tract} />
            </Switch>
                    
        </div>
    )
}

export default Add




