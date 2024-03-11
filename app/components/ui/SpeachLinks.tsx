import { HeroiconsSvgWrapper, SvgPaths } from '../icons';
import { speakerDeckEmbeddings } from '../speacker-deck';

export const SpeachLinks = () => {
  return (
    <>
      {speakerDeckEmbeddings.map((speach) => (
        <div
          key={speach.title}
          className='grid grid-cols-1 gap-4 rounded-lg border border-neutral-700 bg-neutral-800 p-3 md:justify-items-end md:p-4'
        >
          {speach.embedding}
          <section className='grid grid-cols-1 gap-2 text-neutral-200'>
            <a
              href={speach.speakerDeckUrl}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-1 hover:text-white'
            >
              <p className='text-sm md:font-semibold md:text-base'>
                {speach.title}
              </p>
              <HeroiconsSvgWrapper className='hidden h-5 w-5 md:block'>
                {SvgPaths.arrowUpRight}
              </HeroiconsSvgWrapper>
            </a>
            <div className='flex items-center gap-1 text-neutral-300 md:justify-end'>
              <HeroiconsSvgWrapper className='h-4 w-4'>
                {SvgPaths.atSymbol}
              </HeroiconsSvgWrapper>
              <p className='text-xs md:text-sm'>{speach.event}</p>
            </div>
          </section>
        </div>
      ))}
    </>
  );
};
