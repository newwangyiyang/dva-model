export default {
    namespace: 'products',
    state: {},
    reducers: {
        deleteItem(state, {payload: id}) {
            state.list = state.list.filter(v => v.id !== id);
            return {...state};
        },
        addNum(state) {
            state.num ++;
            return {...state};
        }
    },
};