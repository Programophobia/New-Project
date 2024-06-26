import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains.js';

//selectors
export const getFilteredCards = ({cards, searchString}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state) => {return state.columns}

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId)
export const getColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId);
export const getAllLists = (state) => state.lists;
// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload =>({type: 'ADD_CARD', payload})
export const searchString = payload =>({type: 'UPDATE_SEARCHSTRING', payload})
export const addList = payload =>({type: 'ADD_LIST', payload})
export const addCardFav = payload =>({type: 'TOGGLE_CARD_FAVORITE', payload})
export const getFavoriteCards = (state) => state.cards.filter(card => card.isFavorite);

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
    default:
      return state;
      case 'ADD_CARD':
        return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
      
      case 'UPDATE_SEARCHSTRING':
         return { ...state, searchString: action.payload };
         case 'ADD_LIST':
        return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }]};
        case 'TOGGLE_CARD_FAVORITE':
          return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;