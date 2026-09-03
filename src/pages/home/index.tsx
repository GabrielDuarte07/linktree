import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Social } from "@/components/social";

export function Home() {
	return (
		<div className="w-full flex flex-col justify-center items-center py-4">
			<h1 className="md:text-4xl text-3xl font-bold text-white mt-20">
				User XPTO
			</h1>
			<span className="text-gray-50 mb-5 mt-3">Checkout my links 👇</span>

			<main className="flex flex-col w-11/12 max-w-xl text-center">
				<section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
					<a href="#!">
						<p className="text-base md:text-lg">Youtube chanel</p>
					</a>
				</section>

				<footer className="flex justify-center gap-3 my-4">
					<Social url="https://facebook.com">
						<FaFacebook size={35} color="#FFF" />
					</Social>

					<Social url="https://youtube.com">
						<FaYoutube size={35} color="#FFF" />
					</Social>

					<Social url="https://instagram.com">
						<FaInstagram size={35} color="#FFF" />
					</Social>
				</footer>
			</main>
		</div>
	);
}
