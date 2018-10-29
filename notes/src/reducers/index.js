import {
    ACTIVE_NOTE_HANDLER,
    GET_NOTE,
    GET_NOTE_FAILURE,
    GET_NOTE_SUCCESS,
    GET_NOTES,
    GET_NOTES_FAILURE,
    GET_NOTES_SUCCESS,
    ADD_NOTE,
    ADD_NOTE_FAILURE,
    ADD_NOTE_SUCCESS,
    UPDATE_NOTE,
    UPDATE_NOTE_FAILURE,
    UPDATE_NOTE_SUCCESS,
    DELETE_NOTE,
    DELETE_NOTE_FAILURE,
    DELETE_NOTE_SUCCESS,
  } from '../actions'
  
  
  const initialState = {
    notes: [],
    activeNote: {},
    fetchingNote: false,
    fetchingNotes: false,
    addingNote: false,
    updatingNote: false,
    deletingNote: false,
    error: null,
  }
  
  export default (state = initialState, action) => {
    switch(action.type) {
  
      case ACTIVE_NOTE_HANDLER : 
        return {
          ...state,
          activeNote: {
            ...state.activeNote,
            [action.payload.name]: action.payload.value,
          }
        }
  
      case GET_NOTE : return {...state, fetchingNote: true}
      case GET_NOTE_FAILURE : return {...state, fetchingNote: false, error: action.payload}
      case GET_NOTE_SUCCESS : 
        return {
          ...state, 
          fetchingNote: false,
          activeNote: action.payload
        }
  
      case GET_NOTES : return {...state, fetchingNotes: true}
      case GET_NOTES_FAILURE : return {...state, fetchingNotes: false, error: action.payload}
      case GET_NOTES_SUCCESS : 
        return {
          ...state, 
          fetchingNotes: false,
          notes: action.payload
        }
  
      case ADD_NOTE : return {...state, addingNote: true}
      case ADD_NOTE_FAILURE : return {...state, addingNote: false, error: action.payload}
      case ADD_NOTE_SUCCESS : 
        return {
          ...state, 
          addingNote: false,
          notes: action.payload
        }
  
      case UPDATE_NOTE : return {...state, updatingNote: true}
      case UPDATE_NOTE_FAILURE : return {...state, updatingNote: false, error: action.payload}
      case UPDATE_NOTE_SUCCESS : 
        return {
          ...state, 
          updatingNote: false,
          notes: action.payload
        }
  
      case DELETE_NOTE : return {...state, deletingNote: true}
      case DELETE_NOTE_FAILURE : return {...state, deletingNote: false, error: action.payload}
      case DELETE_NOTE_SUCCESS : 
        return {
          ...state, 
          deletingNote: false,
          notes: action.payload
        }
  
      default: return {...state};
    }
  }