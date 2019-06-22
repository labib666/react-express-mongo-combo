export const getUser = (req, res) => res.status(200).json({
  message: 'Hello user',
  user: req.user,
});

export const getUserId = (req, res) => res.status(200).json({
  id: req.user.id,
});
