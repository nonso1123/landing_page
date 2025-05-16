import React from "react";
import monitorCardImage from "../assets/monitor-card.webp";
import { IoIosArrowRoundForward } from "react-icons/io";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const MonitorSection = () => {
	return (
		<motion.section
			variants={fadeIn("up", 0.2)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="max-w-7xl mx-auto py-16 px-4 md:py-24"
		>
			<div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
				<motion.div variants={fadeIn("right", 0.3)} className="md:w-1/2 w-full">
					<motion.p
						variants={fadeIn("up", 0.4)}
						className="text-emerald-500 font-semibold"
					>
						MONITOR
					</motion.p>
					<motion.h2
						variants={textVariant(0.5)}
						className="text-3xl md:text-4xl font-bold text-neutral-500 mt-4 mb-6 md:w-4/5"
					>
						Introducing best mobile carousels
					</motion.h2>
					<motion.p variants={fadeIn("up", 0.6)} className="text-gray-600 mb-8">
						Before the ship is really back. Round, round, all around the world.
						Round, all around the world. Round, all around the world. Round, all
						around the world.
					</motion.p>
					<motion.a
						variants={fadeIn("up", 0.7)}
						href="#"
						className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
					>
						Learn more about monitoring
						<IoIosArrowRoundForward className="size-8" />
					</motion.a>
				</motion.div>
				<motion.div variants={fadeIn("left", 0.3)} className="md:w-1/2 w-full">
					<motion.div className="p-4" variants={fadeIn("up", 0.4)}>
						<motion.img
							variants={fadeIn("up", 0.5)}
							src={monitorCardImage}
							alt="schedule image"
							className="w-full h-auto"
						/>
					</motion.div>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default MonitorSection;
