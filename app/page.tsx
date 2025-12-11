import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faSquareJs, faCss3, faNodeJs } from "@fortawesome/free-brands-svg-icons"


const Home = () => {
    return (
        <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance">Hi, I'm Manu</h1>
                    <p className="text-xl md:text-2xl text-muted-foreground text-balance">
                        Full-Stack Developer crafting beautiful digital experiences
                    </p>
                </div>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                    I specialize in building modern web applications with React, Next.js, and Node.js. Passionate about creating
                    interfaces that are both visually stunning and highly functional.
                </p>

                <div className="flex flex-col items-center gap-5">
                    <div className="flex gap-5 justify-center flex-wrap">
                        <button className="text-base">
                            View My Work
                        </button>
                        <button className="text-base">
                            Get in Touch
                        </button>
                        <button className="text-base">
                            Download Resume
                        </button>
                    </div>
                    <div className="w-50 flex gap-5 ">
                        <FontAwesomeIcon icon={faHtml5} />
                        <FontAwesomeIcon icon={faSquareJs} />
                        <FontAwesomeIcon icon={faCss3} />
                        <FontAwesomeIcon icon={faNodeJs} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home