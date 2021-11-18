import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {}
};

const topics = createSlice({
  initialState,
  name: "topics",
  reducers: {
    addTopic: (state, { payload }) => {
      state.topics[payload.id] = { ...payload, quizIds: [] };
    },
    addQuizzIdToTopicbyId: (state, { payload }) => {
      state.topics[payload.topicId].quizIds.push(payload.quizId);
    }
  }
});

export const { addTopic, addQuizzIdToTopicbyId } = topics.actions;
export default topics.reducer;

export const selectAllTopics = (state) => state.topics.topics;
