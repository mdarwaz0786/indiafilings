// test controller
export const testController = async (req, res) => {
  return res.status(200).json({ success: true, message: "Server is successfully running" });
};