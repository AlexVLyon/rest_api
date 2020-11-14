import Poll from '../models/poll.js';

export const createPoll = async (data) => Poll.create(data);
