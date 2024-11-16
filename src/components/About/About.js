import React from "react";
import FAQ from "./Faq";
import ClubSections from "./ClubSections";

function AboutEgg( {aboutRef} ) {
	return (
		<div ref={aboutRef} className="pt-20 px-8 w-[1200px] mx-auto text-gray-50">
			<h1 className="text-3xl font-bold mb-6">About us</h1>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4 text-center">Who We Are</h2>
				<p className="mb-4">
					Câu lạc bộ sáng tạo công nghệ EGG là nơi tập hợp những sinh viên đam mê lập trình, sáng tạo, và luôn khao khát chinh phục những thử thách mới. Được thành lập từ năm 2013, EGG đã trở thành mái nhà chung cho nhiều bạn trẻ từ khắp các trường đại học trên địa bàn Hà Nội. Mỗi thành viên đều mang một cá tính riêng, góp phần tạo nên một EGG đầy màu sắc, sáng tạo và tràn đầy năng lượng.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4 text-center">What We Do</h2>
				<ul className="list-disc list-inside space-y-2">
					<li>Tham gia các lớp học Cấu trúc dữ liệu và giải thuật, Lập trình Hướng đối tượng do các senpai dày dặn kinh nghiệm giảng dạy, củng cố điểm số CPA</li>
					<li>Được các mentor hướng dẫn tận tình để cùng tạo nên những project làm đẹp CV.</li>
					<li>Được tham gia các cuộc thi Hackathon, Sáng tạo công nghệ, khởi nghiệp,...</li>
					<li>Được tham gia các hoạt động giao lưu, hướng nghiệp, giới thiệu thực tập, nâng cao các mối quan hệ, mở rộng NETWORK, được tiếp cận các nguồn tài liệu phong phú và vô cùng bổ ích.</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4 text-center">Cơ cấu tổ chức</h2>
				<ClubSections />
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4 text-center">Góc giải ngố</h2>
				<FAQ />
			</section>

		</div>
	);
}

export default AboutEgg;

