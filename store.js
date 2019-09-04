import { createStore } from 'redux';
import vide from './reducers/video'

const store = createStore(
    vide,
    {}
);

export default store;