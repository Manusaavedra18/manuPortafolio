"use client"
import projects from "./projects.json"
import Link from "next/link"

export default function Projects() {


    return (
        <section className="min-h-screen py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-balance">Featured Projects</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:border-accent transition-colors duration-300"
                        >
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="inline-block text-accent hover:underline font-semibold mt-2 group-hover:translate-x-1 transition-transform"
                                >
                                    View Project →
                                </Link>
                            </div>

                            <div className="absolute inset-0 bg-linear-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
