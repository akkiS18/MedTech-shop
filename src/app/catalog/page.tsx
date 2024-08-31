import Link from "next/link";
import React from "react";
import Search from "../search/page";

export default function Catalog() {
	return (
		<div className="container px-5 py-36 mx-auto">
			<Search />
			<div className="flex flex-wrap -m-4 mt-12">
				<div className="lg:w-1/4 md:w-1/2 w-full">
					<div className="m-2 shadow p-4 rounded-lg hover:scale-105 transition-transform ease-out duration-200">
						<Link
							href={"/product"}
							className="block relative h-48 rounded overflow-hidden">
							<img
								alt="elektron tijorat"
								className="object-cover object-center w-full h-full block"
								src="https://imedical.uz/wp-content/uploads/2023/07/rectangle-336-min.png"
							/>
						</Link>
						<div className="mt-4">
							<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
								<p>Kategoriya</p>
							</h3>
							<h2 className="text-gray-900 title-font text-lg font-medium">
								<p>Katalizator</p>
							</h2>
							<p className="mt-1">$16.00</p>
						</div>
					</div>
				</div>
				<div className="lg:w-1/4 md:w-1/2 w-full">
					<div className="m-2 shadow p-4 rounded-lg hover:scale-105 transition-transform ease-out duration-200">
						<Link
							href={"/product"}
							className="block relative h-48 rounded overflow-hidden">
							<img
								alt="elektron tijorat"
								className="object-cover object-center w-full h-full block"
								src="https://imedical.uz/wp-content/uploads/2023/07/rectangle-336-min.png"
							/>
						</Link>
						<div className="mt-4">
							<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
								<p>Kategoriya</p>
							</h3>
							<h2 className="text-gray-900 title-font text-lg font-medium">
								<p>Katalizator</p>
							</h2>
							<p className="mt-1">$16.00</p>
						</div>
					</div>
				</div>
				<div className="lg:w-1/4 md:w-1/2 w-full">
					<div className="m-2 shadow p-4 rounded-lg hover:scale-105 transition-transform ease-out duration-200">
						<Link
							href={"/product"}
							className="block relative h-48 rounded overflow-hidden">
							<img
								alt="elektron tijorat"
								className="object-cover object-center w-full h-full block"
								src="https://imedical.uz/wp-content/uploads/2023/07/rectangle-336-min.png"
							/>
						</Link>
						<div className="mt-4">
							<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
								<p>Kategoriya</p>
							</h3>
							<h2 className="text-gray-900 title-font text-lg font-medium">
								<p>Katalizator</p>
							</h2>
							<p className="mt-1">$16.00</p>
						</div>
					</div>
				</div>
				<div className="lg:w-1/4 md:w-1/2 w-full">
					<div className="m-2 shadow p-4 rounded-lg hover:scale-105 transition-transform ease-out duration-200">
						<Link
							href={"/product"}
							className="block relative h-48 rounded overflow-hidden">
							<img
								alt="elektron tijorat"
								className="object-cover object-center w-full h-full block"
								src="https://imedical.uz/wp-content/uploads/2023/07/rectangle-336-min.png"
							/>
						</Link>
						<div className="mt-4">
							<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
								<p>Kategoriya</p>
							</h3>
							<h2 className="text-gray-900 title-font text-lg font-medium">
								<p>Katalizator</p>
							</h2>
							<p className="mt-1">$16.00</p>
						</div>
					</div>
				</div>
				<div className="lg:w-1/4 md:w-1/2 w-full">
					<div className="m-2 shadow p-4 rounded-lg hover:scale-105 transition-transform ease-out duration-200">
						<Link
							href={"/product"}
							className="block relative h-48 rounded overflow-hidden">
							<img
								alt="elektron tijorat"
								className="object-cover object-center w-full h-full block"
								src="https://imedical.uz/wp-content/uploads/2023/07/rectangle-336-min.png"
							/>
						</Link>
						<div className="mt-4">
							<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
								<p>Kategoriya</p>
							</h3>
							<h2 className="text-gray-900 title-font text-lg font-medium">
								<p>Katalizator</p>
							</h2>
							<p className="mt-1">$16.00</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
