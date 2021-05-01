import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { BrowserRouter as  Route, Switch, Link } from "react-router-dom";

import { edit } from '../actions'
import Tract from './Tract';

const Edit = () => {
    const tract = useSelector(state => state.tract)
    const dispatch = useDispatch()

    const {index} = useParams()
    const tracts = tract[index]


    const [tractData, setTractData] = useState(tract[index])
    const [owner, setowner] = useState(tractData)
    const [subOwner, setSubOwner] = useState(tractData.subowners)


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
        const OwnerList = tractData
        OwnerList[name] = value;
        setowner({OwnerList})

    }
    const onApplyChanges = (e) => {
        e.preventDefault()
        setowner( {
            owner: owner.owner,
            subowners:subOwner,

            
            mineralInterest:owner.mineralInterest,
            lease:owner.lease,
            id: owner.id
        })
        setTractData(owner)
        


    }
    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(edit(tractData, index))
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
                        value={tracts.owner}
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
                        value={tracts.mineralInterest}
                        name="mineralInterest"
                        onChange={e => onInfochange(e)}/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="lease">Lease</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="lease" 
                        placeholder="Lease Name"
                        value={tracts.lease}
                        name="lease"
                        onChange={e => onInfochange(e)}/>
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
                                    placeholder="subowner"/>
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
                                    placeholder="npri"/>
                            </div>
                       
                        </div>

                    )
                })
            }
            <button 
                type="button" 
                className="btn btn-primary mb-4"
                onClick={AddsubOwner}
            >
                Add a new subowner
            </button>


            <div className="d-flex flex-column mt-4">
               <p><strong>Note: </strong> Click two times or more times on <strong> Apply Changes</strong>, before clicking <strong>Submit....</strong> </p>
               <div className="buttons mb-4">
                    <button type="submit" onClick={onApplyChanges} className="btn btn-primary">Apply changes</button>
                    <button type="submit" onClick={onSubmit} className="btn btn-primary ml-4"><Link to="/" className="btn btn-primary ">Submit</Link></button>
               </div>
              
              </div>
               
          
            
            </form>
            <Switch>
        
                <Route exact path="/" component={Tract} />
            </Switch>
                    
        </div>
    )
}

export default Edit
