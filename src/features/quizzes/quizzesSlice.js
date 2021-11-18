import { createSlice } from "@reduxjs/toolkit";
import { addQuizzIdToTopicbyId } from "../topics/topicsSlice";
import { v4 } from "uuid";

const initialState = {
  quizzes: {}
};

const quizzes = createSlice({
  initialState,
  name: "quizzes",
  reducers: {
    addQuizz: (state, { payload }) => {
      state.quizzes[payload.id] = { ...payload };
    }
  }
});

export const createQuizz = (quizz) => (dispatch, getState) => {
  //thunk action creator = (param)=>thunk fn (dispatch,getState){...actions}
  dispatch(addQuizz(quizz));
  dispatch(
    addQuizzIdToTopicbyId({ quizzId: quizz.id, topicId: quizz.topicId })
  );
};

export const { addQuizz } = quizzes.actions;
export default quizzes.reducer;

export const selectAllQuizzes = (state) => state.quizzes.quizzes;
