// try catch method
// const asynHanlder = (func) => async (req, res, next) => {
//     try {
//         await func(req, res, next);
//   } catch (error) {
//     res.send(error.code || 5000).json({
//       message: error.message || "Internal Server Error",
//       success: false,
//     });
//   }
// };

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(res, req, next)).catch((err) => {
      next(err);
    });
  };
};

export { asyncHandler };
