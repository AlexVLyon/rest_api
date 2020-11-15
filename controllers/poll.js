import { pollService } from '../services/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const poll = await pollService.createPoll(req.body);
  res.status(201).json(poll);
});

export const update = catchAsyncErrors(async (req, res, next) => {
    let poll = await eventService.getEventById(req.params.id);
    if (!poll) {
      return next(
        new ErrorHandler(` ${req.params.id} not found`, 404)
      );
    }
    poll = await pollService.updatePoll(req.params.id, req.body);
    res.status(200).json(poll);
  });

  export const listAll = catchAsyncErrors(async (req, res, next) => {
    const result = await pollService.listAll();
    res.status(200).json(result);
  });