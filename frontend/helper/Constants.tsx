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
