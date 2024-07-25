import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
    name:'bill',
    initialState:{
    biliList: [],
    },
    reducers:{
    setBiliList(state, action){
        state.biliList = action.payload
    }
   }
})

const getBillList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:8888/ka')
        dispatch(setBiliList(res.data))
    }
}

export {getBillList}

const {setBiliList} = billStore.actions

const reducer = billStore.reducer

export default reducer