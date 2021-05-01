import React, { useState } from 'react'

const AddInput = () => {
    const [inputList, setInputList] = useState([{firstname: "", lastname:""}]);


    const handleChange = (e, index) => {
        const {name, value} = e.target
        console.log(value, index);
        const list = [...inputList]
        list[index][name]= value;
        setInputList(list)
    }
    const handleRemoveClick = (index) => {
        const list = [...inputList]
        list.splice(index, 1)
        setInputList(list)
    }
    const addInput = () => {
        setInputList([...inputList, {firstname: "", lastname:""}])
    }


    return (
        <div className="">
             {inputList.map((x, i) => {
                return(
                <div key={i} className="box">
                    <input 
                    placeholder="first name"
                    type="text"
                    value={x.firstname}
                    name="firstname"
                    onChange={e => handleChange(e, i)}
                    />
                    <input 
                    placeholder="last name"
                    type="text"
                    value={x.lastname}
                    name="lastname"
                    onChange={e => handleChange(e, i)}
                    />
                    <div className="btn-box">
                    {inputList.length !== 1 && <button onClick={e => handleRemoveClick(i)}>Remove</button> }
                    {inputList.length -1 === i && <button onClick={addInput}>Add</button> }
                    </div>
                </div>
                )
            })}
            
        </div>
    )
}

export default AddInput
