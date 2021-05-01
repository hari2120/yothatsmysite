import { ADD, EDIT, DELETE, DELETETRACT } from "./types";


const initialState = {
    tract: [
        
        {
            owner:"Luke skywalker",
            subowners:[
                {subowner: "0", npris:0.45, id:0 },
                {subowner: "1", npris: 0.15, id:1 },
                {subowner: "2", npris: 0.15, id:1 },
                {subowner: "3", npris: 0.15, id:1 },
                {subowner: "4", npris: 0.15, id:1 },
                {subowner: "Han solo", npris: 0.15, id:1 },
                {subowner: "Han solo", npris: 0.15, id:1 },
            ],
            mineralInterest:45,
            lease:"tatooine Lease",
            id:1
        },
        {
            owner:"Hari Prashanth",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
                
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        {
            owner:"tharun",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        {
            owner:"Lohith",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        {
            owner:"vishal",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        {
            owner:"rajshekar",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
                {subowner: "3", npris: 0.15, id:1 },
                {subowner: "4", npris: 0.15, id:1 },
                {subowner: "Han solo", npris: 0.15, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        {
            owner:"rahul",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        {
            owner:"Hari Prashanth",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        {
            owner:"Hari Prashanth",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
                {subowner: "3", npris: 0.15, id:1 },
                {subowner: "4", npris: 0.15, id:1 },
                {subowner: "Han solo", npris: 0.15, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        {
            owner:"Hari Prashanth",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        {
            owner:"Hari Prashanth",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        {
            owner:"Hari Prashanth",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        {
            owner:"Hari Prashanth",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        
        {
            owner:"Hari Prashanth",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        
        {
            owner:"Hari Prashanth",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        
        {
            owner:"Hari Prashanth",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        
        {
            owner:"Hari Prashanth",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        
        {
            owner:"Hari Prashanth",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        
        {
            owner:"Hari Prashanth",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        
        {
            owner:"Hari Prashanth",
            subowners:[
                {subowner: "Vishal", npris:11, id:0 },
                {subowner: "Rahul", npris: 0.95, id:1 },
            ],
            mineralInterest:45,
            lease:"Rajshekar",
            id:0
        },
        
]
}



export const  reducer = (state=initialState, action) => {
    switch(action.type) {
      
        case EDIT:
            const newTractState = [...state.tract]
            console.log("",action.index); 

            newTractState.splice(action.index, 1, action.payload)

            // const newTractData =  state.tract.filter((tData, i) => {
            //     console.log("i",i);
            //     if( i == action.index) {
            //         state.tract[i] = action.payload
            //         console.log("state.tract[i] ",state.tract[i] );
            //     }
            //     return state.tract[i]
            // })
            console.log( "edit", newTractState);
            return { tract: newTractState};
        
        case ADD:
            return {
                tract: [action.payload, ...state.tract]
            }
        case DELETE:
            console.log("tractIndex", action.tractIndex);
            console.log("payload", action.payload);
            
            const SubOwner = [...state.tract[action.tractIndex].subowners]
            SubOwner.splice(action.payload,1)
            // console.log(SubOwner);

            const dupeState = state.tract.filter((tData, i) => {
                if(i === action.tractIndex) {
                    state.tract[action.tractIndex].subowners=SubOwner

                }
                return state.tract[i]
            })
            // console.log("SubOwner", SubOwner);
            // console.log("state", dupeState);

            return { tract: dupeState};
            // return state;

        case DELETETRACT:
            const newTract = [...state.tract]
            console.log("payload",action.payload);

            const index = state.tract.findIndex((tractItem, i) => i === action.payload)
            console.log("index",index);
            newTract.splice(index, 1)
            return {...state, tract: newTract}
            // return state
        default: return state
    }
}


