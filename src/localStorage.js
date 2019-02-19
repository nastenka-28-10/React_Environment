export const loadState = () => {
    try{
        const seralizedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(seralizedState);
    } catch (errors) {
        return undefined;
    }
};

export const saveState = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (errors) {
        //Ignore write errors
    }
}