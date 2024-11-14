import React from 'react';

const sections = [
	{
		title: "Ban giáo dục",
		content: [
			"Nếu bạn đam mê lập trình và công nghệ, Ban giáo dục chính là nơi dành cho bạn! Khi tham gia ban này, các bạn sẽ được tham gia vào giảng dạy các thành viên mới trong các lớp học về DSA (Data structure and Algorithms) do chính EGG tổ chức.",
			"Ngoài việc được lĩnh hội về kiến thức trong lĩnh vực công nghệ thông tin từ các anh chị và các bạn khác trong ban, các bạn sẽ được trau dồi thêm các kĩ năng mềm như việc giảng dạy, làm các slide trình chiếu. Ở ban chúng mình, mọi người đều toả ra sức hút khổng thể chối từ, vẻ đẹp từ tri thức😎😎",
			"Ngoài ra, bạn còn có thể đóng góp tư liệu học thuật và nội dung cho các sự kiện, seminar hay cuộc thi mà EGG tổ chức hoặc đồng tổ chức. Đây là cơ hội tuyệt vời để nâng cao kỹ năng chuyên môn và làm việc nhóm trong môi trường công nghệ sáng tạo."
		]
	},
	{
		title: "🌟 Ban truyền thông - đối ngoại",
		content: [
			"Ban truyền thông và đối ngoại của chúng mình không chỉ là 'bộ mặt' của CLB mà còn là cầu nối giữa EGG với thế giới bên ngoài.",
			"Ban truyền thông phụ trách điều hành fanpage của CLB, quản lý nội dung các bài viết, hình ảnh và video. Các bạn sẽ có cơ hội sáng tạo nội dung, xây dựng hình ảnh của CLB và truyền tải thông điệp đến cộng đồng.",
			"Ban đối ngoại đóng vai trò kết nối với các doanh nghiệp, nhà tài trợ, các CLB khác và nhà trường trong những sự kiện do EGG tổ chức. Điều này mang đến cho bạn cơ hội giao lưu với đại diện của các tổ chức, doanh nghiệp trong ngành công nghệ thông tin và học hỏi từ các chuyên gia."
		]
	}
];

function ClubSections() {
	return (
		<div className="club-sections-container">
			{sections.map((section, index) => (
				<section key={index} className="mb-8">
					<h2 className="text-2xl font-bold mb-4">{section.title}</h2>
					{section.content.map((paragraph, idx) => (
						<p key={idx}>{paragraph}</p>
					))}
				</section>
			))}
		</div>
	);
}

export default ClubSections;
