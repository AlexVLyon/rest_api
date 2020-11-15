import Poll from '../models/poll.js';

export const createPoll = async (data) => Poll.create(data);

export const updatePoll = async (id, data) =>
  Event.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const listAll = async () => Poll.find();