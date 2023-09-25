import { RiInstagramLine, RiGithubFill, RiLinkedinFill, RiFacebookFill, RiPinterestFill } from "react-icons/ri";
import { motion } from "framer-motion"

const Main = () => {

    const variants = (delay) => ({
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { delay: delay, duration: 0.5 } }
    })
    return (
        <main className="container mx-auto p-10">
            <motion.h3
                className="text-gray-500 text-lg mb-2"

                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={variants(0.2)}
            >
                Portafolio
            </motion.h3>
            <motion.h1
                className="text-pink-500 font-medium text-2xl mb-5"

                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={variants(0.3)}

            >
                Will turner
            </motion.h1>
            <motion.p
                className="text-gray-500 text-lg mb-8"

                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={variants(0.4)}
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. rerum temporibus ullam omnis culpa officiis,usantium ab su sint! Corrupti veniam inventore ducimus libero, llam fugiat officia laboriosam maxime pariatur quia non accusantium tenetur nam illum molestias dolorem nulla dolorum ipsa doloribus similique illo. Praesentium impedit fuga, ipsum velit pariatur tempore. Laborum eaque sit recusandae?
            </motion.p>
            <div className="mb-10">
                <motion.h5
                    className="text-gray-500 text-lg mb-8"

                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    Find me one
                </motion.h5>
                <ul className="flex items-center gap-8 ">
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <a
                            href="#"
                            target="_blank"
                            className="block p-4 bg-gray-200 rounded-full text-pink-500 text-[2rem] border-2 border-transparent hover:border-pink-500 transition-colors duration-300"
                        >
                            <RiInstagramLine title="Instagram" />
                        </a>
                    </motion.li>
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <a
                            href="#"
                            target="_blank"
                            className="block p-4 bg-gray-200 rounded-full text-pink-500 text-[2rem] border-2 border-transparent hover:border-pink-500 transition-colors duration-300"
                        >
                            <RiGithubFill title="Instagram" />
                        </a>
                    </motion.li>
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}

                    >
                        <a
                            href="#"
                            target="_blank"
                            className="block p-4 bg-gray-200 rounded-full text-pink-500 text-[2rem] border-2 border-transparent hover:border-pink-500 transition-colors duration-300"
                        >
                            <RiLinkedinFill title="Instagram" />
                        </a>
                    </motion.li>
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <a
                            href="#"
                            target="_blank"
                            className="block p-4 bg-gray-200 rounded-full text-pink-500 text-[2rem] border-2 border-transparent hover:border-pink-500 transition-colors duration-300"
                        >
                            <RiFacebookFill title="Instagram" />
                        </a>
                    </motion.li>
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <a
                            href="#"
                            target="_blank"
                            className="block p-4 bg-gray-200 rounded-full text-pink-500 text-[2rem] border-2 border-transparent hover:border-pink-500 transition-colors duration-300"
                        >
                            <RiPinterestFill title="Instagram" />
                        </a>
                    </motion.li>
                </ul>
            </div>

            <div className="flex items-center gap-10 mb-10">
                <motion.button
                    className="bg-pink-500 text-white w-full p-5 rounded-full font-medium text-lg shadow-md shadow-pink-300"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    Here me
                </motion.button>
                <motion.button
                    className="  w-full border-2 border-pink-500 p-5 rounded-full font-medium text-lg text-gray-600"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    Portfolio
                </motion.button>
            </div>
            <div className="flex items-center gap-8">
                <motion.img
                    src="https://img.freepik.com/foto-gratis/hermosa-mujer-elegante-sonriendo-mirando-interesado_176420-19460.jpg?w=1380&t=st=1695390921~exp=1695391521~hmac=7fb4435563f428d89652030e83b3b67b5e56551a18d371d9c135754e99f7ff0b" alt=""
                    className="h-56 w-56 object-cover rounded-3xl grayscale transform "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}

                />
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >

                    <motion.img
                        src="https://img.freepik.com/foto-gratis/alegre-mujer-mediana-edad-cabello-rizado_1262-20859.jpg?w=1380&t=st=1695392116~exp=1695392716~hmac=53b4da669dccc40f689acf5a2e412bf3e8b5a25c9a75198a163f5f2b4ee95df9" alt=""
                        className="h-56 w-56 object-cover rounded-3xl grayscale cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    />
                </motion.div>
            </div>
        </main>
    )
}

export default Main