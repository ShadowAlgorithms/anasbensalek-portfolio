import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {

    const programmingLangages = [
        "Python", 
        "C", 
        "Bash", 
        "SQL", 
        "Javascript",
        "GDScript"
    ];

    const tools = [
        "Git", 
        "Docker", 
        "Cisco Packet Tracer", 
        "Blender", 
        "Godot"
    ];

    return (
    <section 
    id="about" 
    className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Wannabe hacker,
                        Part-time reader.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Programming Langages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {programmingLangages.map((pl, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                ">
                                    {pl}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Tools
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {tools.map((pl, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                ">
                                    {pl}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all>">

                        <h3 className="text-xl font-bold mb-4">🏫 Education</h3>

                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Ecole Nationale Supérieure d'Informatique et d'Analyse des Systèmes</strong> 
                                - ENSIAS (2024-2027)
                                <ul className="px-6 py-4">
                                    <li>
                                        <strong>Major:</strong> Cybersecurity, Cloud and Mobile Computing
                                    </li>
                                    <li>
                                        <strong>Relevant Coursework:</strong> Networking, Operating Systems, Databases, ...
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <strong>Classes Préparatoires Ibn Timiya </strong> 
                                (2022-2024)
                                <ul className="px-6 py-4">
                                    <li>
                                        <strong>Major:</strong> Mathematics and Physics
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>

                </div>

            </div>
        </RevealOnScroll>
    </section>
    );

}