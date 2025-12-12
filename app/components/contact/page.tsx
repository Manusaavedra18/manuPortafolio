"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"


export default function Contact() {
    return (
        <section className="min-h-screen py-15 px-6 w-full">
            <div className="max-w-2xl mx-auto max-sm:max-w-screen">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">Let's Connect</h2>

                <p className="text-lg text-muted-foreground mb-12 text-pretty">
                    Have a project in mind or want to chat? Feel free to reach out. I'd love to hear from you.
                </p>

                <div className="flex flex-col gap-6">
                    <a
                        href="mailto:manusaavedra3122@gmail.com"
                        className="inline-flex items-center gap-3 px-2 py-4 bg-secondary rounded-lg hover:bg-accent hover:text-background transition-colors"
                    >
                        <div className="flex flex-row items-center gap-3 ">
                            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                            <div>
                                <p className="font-semibold ">Email</p>
                                <p className="text-sm ">manusaavedra3122@gmail.com</p>
                            </div>
                        </div>

                    </a>

                    <a
                        href="https://www.linkedin.com/in/manuel-saavedra-253511217"
                        target="_blank"
                        className="inline-flex items-center gap-3 px-2 py-4 bg-secondary rounded-lg hover:bg-accent hover:text-background transition-colors"
                    >
                        <div className="flex flex-row items-center gap-3">
                            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                            <div>
                                <p className="font-semibold">LinkedIn</p>
                                <p className="text-sm ">https://www.linkedin.com/in/manuel-saavedra-253511217/</p>
                            </div>
                        </div>

                    </a>

                    {/* For a future */}
                    {/* <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-2 py-4 bg-secondary rounded-lg hover:bg-accent hover:text-background transition-colors"
                    >
                        <div className="flex flex-row items-center gap-3">
                            <FontAwesomeIcon icon={faInstagram} size="2xl" />
                            <div>
                                <p className="font-semibold">Instagram</p>
                                <p className="text-sm ">@yourhandle</p>
                            </div>
                        </div>
                    </a> */}
                </div>
            </div>
        </section>
    )
}
