export const getUser = (req, res) => res.status(200).json({
  message: 'Hello user',
  user: req.user,
});

export const logout = (req, res) => res.status(200).json({
  message: 'Logout Successful',
});
