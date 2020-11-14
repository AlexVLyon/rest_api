import { pollService } from '../services/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const poll = await pollService.createPoll(req.body);
  res.status(201).json(poll);
});

