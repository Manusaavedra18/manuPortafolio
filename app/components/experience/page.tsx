"use client"

import experiences from "./experiences.json"

export default function Experience() {

    return (
        <section className="min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-balance">Experience</h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`relative pl-8 ${index !== experiences.length - 1 ? "pb-8 border-l border-border" : ""}`}
                        >
                            <div className="absolute -left-4 top-0 w-6 h-6 rounded-full bg-accent border-4 border-background" />

                            <div className="space-y-2">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                    </div>
                                    <span className="text-sm font-mono text-accent whitespace-nowrap">{exp.period}</span>
                                </div>

                                <p className="text-muted-foreground leading-relaxed mt-3">{exp.description}</p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {exp.skills.map((skill) => (
                                        <span key={skill} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
