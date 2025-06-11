import { ColourfulText } from "@/components/ui/colourful-text";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface GridItemProps
{
    title: string;
}

export const GridItem = ( { title }: GridItemProps ) =>
{
    return (
        <div className="w-60 relative cursor-pointer h-60 rounded-1xl border p-2 md:rounded-3xl md:p-3 flex items-center justify-center">
            <GlowingEffect
                blur={ 1 }
                borderWidth={ 3 }
                spread={ 100 }
                glow={ true }
                disabled={ false }
                proximity={ 64 }
                inactiveZone={ 0.01 }
            />
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
                <ColourfulText text={ title } />
            </h1>
        </div>
    );
};


export const timelineData = [
    {
        title: "Understand the Exam & Syllabus",
        content: (
            <div>
                <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    Begin your journey by familiarizing yourself with the
                    <span className="p-1 bg-[#FFC9F0]">
                        MPSC exam pattern
                    </span>
                    and
                    <span className="p-1 bg-[#FFE68C]">
                        detailed syllabus.
                    </span>
                    Knowing what to expect is the first step to success. Break down the syllabus into manageable sections and set clear goals for each stage
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="https://assets.aceternity.com/templates/startup-1.webp"
                        alt="startup template"
                        width={ 500 }
                        height={ 500 }
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                        src="https://assets.aceternity.com/templates/startup-2.webp"
                        alt="startup template"
                        width={ 500 }
                        height={ 500 }
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                        src="https://assets.aceternity.com/templates/startup-3.webp"
                        alt="startup template"
                        width={ 500 }
                        height={ 500 }
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                        src="https://assets.aceternity.com/templates/startup-4.webp"
                        alt="startup template"
                        width={ 500 }
                        height={ 500 }
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Build a Study Plan & Gather Resources",
        content: (
            <div>
                <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    Create a structured study schedule that fits your daily routine. Collect the best study materials, including textbooks, previous year papers, and online resources. Consistency and the right resources are key to steady progress
                </p>

                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="https://assets.aceternity.com/pro/hero-sections.png"
                        alt="hero template"
                        width={ 500 }
                        height={ 500 }
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                        src="https://assets.aceternity.com/features-section.png"
                        alt="feature template"
                        width={ 500 }
                        height={ 500 }
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                        src="https://assets.aceternity.com/pro/bento-grids.png"
                        alt="bento template"
                        width={ 500 }
                        height={ 500 }
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                        src="https://assets.aceternity.com/cards.png"
                        alt="cards template"
                        width={ 500 }
                        height={ 500 }
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Practice & Revise Regularly",
        content: (
            <div>
                <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    Boost your confidence by solving previous year question papers and taking mock tests. Regular revision helps retain important concepts. Analyze your performance and focus on improving weak areas
                </p>
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        ✅ Solve Previous Year Papers
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        ✅ Take Mock Tests
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        ✅ Analyze Your Performance
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        ✅ Revise Key Concepts Frequently
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        ✅ Use Flashcards & Short Notes
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="https://assets.aceternity.com/pro/hero-sections.png"
                        alt="hero template"
                        width={ 500 }
                        height={ 500 }
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                        src="https://assets.aceternity.com/features-section.png"
                        alt="feature template"
                        width={ 500 }
                        height={ 500 }
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                        src="https://assets.aceternity.com/pro/bento-grids.png"
                        alt="bento template"
                        width={ 500 }
                        height={ 500 }
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                        src="https://assets.aceternity.com/cards.png"
                        alt="cards template"
                        width={ 500 }
                        height={ 500 }
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Stay Motivated & Exam Ready",
        content: (
            <div>
                <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    Keep your motivation high and maintain a healthy study-life balance. Stay updated with current affairs, take care of your well-being, and approach the exam with confidence. Remember, every step brings you closer to your goal
                </p>
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        ✅ Card grid component
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        ✅ Startup template Aceternity
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        ✅ Random file upload lol
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        ✅ Himesh Reshammiya Music CD
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        ✅ Salman Bhai Fan Club registrations open
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="https://assets.aceternity.com/pro/hero-sections.png"
                        alt="hero template"
                        width={ 500 }
                        height={ 500 }
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                        src="https://assets.aceternity.com/features-section.png"
                        alt="feature template"
                        width={ 500 }
                        height={ 500 }
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                        src="https://assets.aceternity.com/pro/bento-grids.png"
                        alt="bento template"
                        width={ 500 }
                        height={ 500 }
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                        src="https://assets.aceternity.com/cards.png"
                        alt="cards template"
                        width={ 500 }
                        height={ 500 }
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                </div>
            </div>
        ),
    },
];