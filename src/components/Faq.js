import React from 'react';

const faqs = [
	{
		question: "Câu hỏi 1: Em chưa biết code thì có thể tham gia vào CLB không ạ?",
		answer: "Vào vô tư lun em ơi! Có rất nhiều bạn khi mới bắt đầu tham gia vào CLB cũng chưa được học về lập trình, nhưng sau khi hoàn thành khóa training của CLB, các bạn ấy đã bắt đầu thành thạo hơn các kỹ năng lập trình và có kiến thức để tham gia vào các cuộc thi về Công nghệ thông tin."
	},
	{
		question: "Câu hỏi 2: Em mong muốn vào ban Chuyên môn để được training thì cho em hỏi Ban Giáo dục sẽ chỉ là người đào tạo thôi ah, vì em thấy không có ban Chuyên môn ạ.",
		answer: "Không có ban chuyên môn em nhé, Nếu em đăng ký vào ban giáo dục, em sẽ không phải đi đào tạo ngay. Em sẽ được tham gia vào khoá học DSA của gen 8, sau khi học xong thì các em mới chính thức đi đào tạo nhé!"
	},
	{
		question: "Câu hỏi 3: Khi em vào clb thì bao giờ sẽ được training về AI ạ?",
		answer: "Khi em chính thức là trở thành thành viên của CLB, thì chỉ sau tầm 1-2 tuần thôi là các em sẽ được tham gia vào các buổi training của CLB. Đợt training đầu tiên của em sẽ là về DSA. Nếu em chứng minh mình đủ khả năng, em có thể học cùng khoá AI với các bạn gen 7."
	},
	{
		question: "Câu 4: EGG có ý nghĩa là gì?",
		answer: "Theo như các tiền bối đời đầu của CLB truyền đạt lại thì EGG (trứng) thường được xem như biểu tượng của sự khởi đầu, tiềm năng và sự phát triển. Nó thể hiện một thứ gì đó nhỏ bé nhưng chứa đựng nhiều tiềm năng để phát triển thành một điều lớn lao và hoàn chỉnh hơn. Khẩu hiệu của CLB EGG là 'Nourishing the EGG of the future' chỉ việc hỗ trợ, chăm sóc và phát triển các lập trình viên trẻ hoặc các dự án lập trình tiềm năng, giống như cách mà người ta ươm mầm và nuôi dưỡng một quả trứng để nó nở ra những thành tựu to lớn trong tương lai."
	},
	{
		question: "Câu 5: Admin có thể cho em hỏi về một số thành tựu của CLB mình đạt được trong các cuộc thi về Công nghệ có được không ạ?",
		answer: "Rất sẵn lòng lun em ơi! 😎 EGG tụi mình tự hào với kha khá giải thưởng siêu xịn, chẳng hạn như:\n- Vô địch Sáng tạo trẻ - HUST 2024 (mới tinh luôn, vừa đoạt giải gần đây!)\n- Giải Nhất Sinh viên với ý tưởng sáng tạo SCIC 2023 (khoảng cách giữa ý tưởng và hiện thực là... một cái cúp thôi)\n- Huy chương đồng ICPC Châu Á Thái Bình Dương 2024 (toàn khu vực, siêu ngầu nha!)\n- Giải Nhất cá nhân Code Tour 2023 (đỉnh cao luôn, ẵm ngay giải nhất)\n- Giải Nhất Đại số tại Olympic Toán học lần thứ 29, 30 (không chỉ giỏi code mà còn bá đạo Toán học luôn!)\n- Giải Ba Sinh viên Nghiên cứu khoa học - SoICT 2023 (học thuật cũng không thua ai)\n- Giải Ba Coding Inspiration 2023 tại FPT (ý tưởng chất lượng lắm nè)\n- Giải Tư cá nhân Code Tour 2023 (năm đó mình 'ôm' kha khá giải Code Tour luôn)\n- Khuyến khích Sinh viên Nghiên cứu khoa học - SoICT 2023 (không quên những đóng góp khác)\n- Giải nhất Tech Club Championship 2024 (tuyển thủ chiến hết mình)\n- Top 4 CLB tại Tech Club Championship 2023 (mặc dù năm ngoái chỉ dừng ở Top 4 nhưng năm nay thì quán quân nha!)\n- Top 8 TechStart - HUST 2023 (vẫn lọt top nha)\n- Top 8 SoICT Hackathon 2023 (cạnh tranh hết mình với bao ý tưởng mới)\n- Top 10 Khởi nghiệp trẻ - AOF 2023 (đã đến được Top 10 rồi!)"
	}
];

function FAQ() {
	return (
		<div className="faq-container">
			{faqs.map((faq, index) => (
				<div key={index} className="faq-item mb-8">
					<h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
					<p className="text-gray-50 whitespace-pre-line">{faq.answer}</p>
				</div>
			))}
		</div>
	);
}

export default FAQ;
