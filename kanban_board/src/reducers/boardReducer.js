import { CONSTANTS } from "../action";

const initialState = {
  "board-0": {
    id: "board-0",
    lists: ["list-0"],
    title: "Manage your tasks here !!!",
  },
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST: {
      const { boardID, id } = action.payload;
      const board = state[boardID];
      const newListID = `list-${id}`;
      const newLists = [...board.lists, newListID];
      board.lists = newLists;
      return { ...state, [boardID]: board };
    }

    case CONSTANTS.DRAG_HAPPENED: {
      const { boardID } = action.payload;
      const board = state[boardID];
      const lists = board.lists;
      const {
        droppableIndexEnd,
        droppableIndexStart,

        type,
      } = action.payload;

      // draggin lists around
      if (type === "list") {
        const pulledOutList = lists.splice(droppableIndexStart, 1);
        lists.splice(droppableIndexEnd, 0, ...pulledOutList);
        board.lists = lists;

        return { ...state, [boardID]: board };
      }
      return state;
    }
    case CONSTANTS.DELETE_LIST: {
      const { listid, boardID } = action.payload;
      const board = state[boardID];
      console.log(board);
      const lists = board.lists;
      const newLists = lists.filter((id) => id !== listid);
      board.lists = newLists;
      return { ...state, [boardID]: board };
    }

    case CONSTANTS.ADD_BOARD: {
      const { title, id } = action.payload;
      const newID = `board-${id}`;
      const newBoard = {
        id: newID,
        title,
        lists: [],
      };

      return { ...state, [newID]: newBoard };
    }

    default:
      return state;
  }
};

export default boardsReducer;
