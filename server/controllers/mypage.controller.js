import mypageService from "../services/mypage.service";

export default {
  getMypage: async (req, res) => {
		const userId = req.body.loginId;
		try {
			const data = await mypageService.getMypage();
			res.json({ message: "ok", data: data });
		} catch (err) {
			res.json({message: "error"});
		}
  },
};
