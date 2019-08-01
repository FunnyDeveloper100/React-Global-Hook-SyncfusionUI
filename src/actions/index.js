export const setGridData = (store, data) => {
    Array.prototype.push.apply(data, store.state.grid_data)
    store.setState({ grid_data: data });
};